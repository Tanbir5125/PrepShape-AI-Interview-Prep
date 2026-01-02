"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import { interviewer } from "@/constants";
import { createFeedback } from "@/lib/actions/general.action";
import CameraView from "@/components/CameraView";
import CameraButton from "@/components/CameraButton";
import { toast } from "sonner";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

const Agent = ({
  userName,
  userId,
  interviewId,
  feedbackId,
  type,
  questions,
}: AgentProps) => {
  const router = useRouter();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [faceCount, setFaceCount] = useState(0);
  const [showViolationWarning, setShowViolationWarning] = useState(false);

  // Refs for violation timers
  const violationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastToastTimeRef = useRef<number>(0);

  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => {
      console.log("speech start");
      setIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      console.log("speech end");
      setIsSpeaking(false);
    };

    const onError = (error: Error) => {
      console.log("Error:", error);
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    const handleGenerateFeedback = async (messages: SavedMessage[]) => {
      console.log("handleGenerateFeedback");

      const { success, feedbackId: id } = await createFeedback({
        interviewId: interviewId!,
        userId: userId!,
        transcript: messages,
        feedbackId,
      });

      if (success && id) {
        router.push(`/interview/${interviewId}/feedback`);
      } else {
        console.log("Error saving feedback");
        router.push("/");
      }
    };

    if (callStatus === CallStatus.FINISHED) {
      if (type === "generate") {
        router.push("/");
      } else {
        handleGenerateFeedback(messages);
      }
    }
  }, [messages, callStatus, feedbackId, interviewId, router, type, userId]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (violationTimerRef.current) {
        clearTimeout(violationTimerRef.current);
      }
    };
  }, []);

  const handleCall = async () => {
    if (!isCameraActive) {
      toast.error("Start your camera first to take the interview");
      return;
    }

    setCallStatus(CallStatus.CONNECTING);

    if (type === "generate") {
      await vapi.start(
        undefined,
        undefined,
        undefined,
        process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!,
        {
          variableValues: {
            username: userName,
            userid: userId,
          },
        }
      );
    } else {
      let formattedQuestions = "";
      if (questions) {
        formattedQuestions = questions
          .map((question) => `- ${question}`)
          .join("\n");
      }

      await vapi.start(interviewer, {
        variableValues: {
          questions: formattedQuestions,
        },
      });
    }
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();

    // Clear any pending timers
    if (violationTimerRef.current) {
      clearTimeout(violationTimerRef.current);
      violationTimerRef.current = null;
    }
  };

  const toggleCamera = () => {
    setIsCameraActive((prev) => !prev);
  };

  const handleFaceCountChange = (count: number) => {
    setFaceCount(count);

    // Only process violations during active call
    if (callStatus !== CallStatus.ACTIVE) {
      return;
    }

    // Check if there's a violation
    const hasViolation = count > 1 || count === 0;

    if (hasViolation) {
      // If no timer is running, start one
      if (!violationTimerRef.current) {
        violationTimerRef.current = setTimeout(() => {
          // Only show toast if enough time has passed since last toast (prevent spam)
          const now = Date.now();
          if (now - lastToastTimeRef.current > 3000) {
            if (count > 1) {
              toast.error(`⚠️ Multiple people detected! (${count} people)`);
              setShowViolationWarning(true);
            } else if (count === 0) {
              toast.warning("⚠️ No face detected in frame");
            }
            lastToastTimeRef.current = now;
          }
        }, 1000);
      }
    } else {
      // Face count is good (exactly 1), clear the timer and warning
      if (violationTimerRef.current) {
        clearTimeout(violationTimerRef.current);
        violationTimerRef.current = null;
      }
      setShowViolationWarning(false);
    }
  };

  return (
    <>
      {showViolationWarning && callStatus === CallStatus.ACTIVE && (
        <div className="w-full mb-4 bg-red-600 text-white px-6 py-4 rounded-lg text-center font-bold text-lg animate-pulse">
          ⚠️ MULTIPLE PEOPLE DETECTED - VIOLATION!
        </div>
      )}

      <div className="call-view">
        {/* AI Interviewer Card */}
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/logo.png"
              alt="profile-image"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        {/* Camera View */}
        <CameraView
          isActive={isCameraActive}
          enableFaceDetection={callStatus === CallStatus.ACTIVE}
          onFaceCountChange={handleFaceCountChange}
        />
      </div>

      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>

          {callStatus === CallStatus.ACTIVE && (
            <div className="mt-4 flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Face Detection:</span>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    faceCount === 1
                      ? "text-green-500"
                      : faceCount > 1
                      ? "text-red-500"
                      : "text-yellow-500"
                  )}
                >
                  {faceCount === 0
                    ? "No face detected"
                    : faceCount === 1
                    ? "✓ 1 person"
                    : `⚠️ ${faceCount} people`}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="w-full flex justify-center gap-4">
        <CameraButton
          isActive={isCameraActive}
          onClick={toggleCamera}
          disabled={callStatus === CallStatus.ACTIVE}
        />

        {callStatus !== "ACTIVE" ? (
          <button
            className={cn(
              "relative btn-call",
              !isCameraActive && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => handleCall()}
          >
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" onClick={() => handleDisconnect()}>
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
