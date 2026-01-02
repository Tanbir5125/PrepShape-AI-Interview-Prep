"use client";

import { useEffect, useRef } from "react";
import { useFaceDetection } from "@/hooks/useFaceDetection";

interface CameraViewProps {
  isActive: boolean;
  enableFaceDetection?: boolean;
  onFaceCountChange?: (count: number) => void;
}

const CameraView = ({
  isActive,
  enableFaceDetection = false,
  onFaceCountChange,
}: CameraViewProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const { canvasRef, faceCount } = useFaceDetection({
    videoRef,
    isActive: isActive && enableFaceDetection,
    onFaceCountChange,
  });

  useEffect(() => {
    const startCamera = async () => {
      if (isActive && videoRef.current) {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: {
              width: { ideal: 640 },
              height: { ideal: 480 },
              facingMode: "user",
            },
            audio: false,
          });
          streamRef.current = stream;
          videoRef.current.srcObject = stream;

          // Setup canvas dimensions after video is loaded
          videoRef.current.onloadedmetadata = () => {
            if (videoRef.current && canvasRef.current) {
              canvasRef.current.width = videoRef.current.videoWidth;
              canvasRef.current.height = videoRef.current.videoHeight;
            }
          };
        } catch (error) {
          console.error("Error accessing camera:", error);
        }
      }
    };

    const stopCamera = () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };

    if (isActive) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isActive, canvasRef]);

  if (!isActive) {
    return null;
  }

  return (
    <div className="card-border">
      <div className="card-content !p-0 overflow-hidden relative">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover scale-x-[-1]"
        />
        {enableFaceDetection && (
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          />
        )}
      </div>
    </div>
  );
};

export default CameraView;
