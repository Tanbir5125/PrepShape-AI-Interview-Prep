import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewsById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Feedback = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewsById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id,
  });

  const plagiarismScore = feedback?.plagiarismScore;
  const hasViolation = feedback?.hasViolation || false;

  return (
    <section className="section-feedback">
      <div className="flex flex-row justify-center">
        <h1 className="text-4xl font-semibold">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h1>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="flex flex-row gap-5">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" width={22} height={22} alt="star" />
            <p>
              Overall Impression:{" "}
              <span className="text-primary-200 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <p>
              Plagiarism :{" "}
              <span
                className={`font-bold ${
                  plagiarismScore === undefined
                    ? "text-gray-400"
                    : plagiarismScore > 60
                    ? "text-red-500"
                    : plagiarismScore > 30
                    ? "text-yellow-500"
                    : "text-green-500"
                }`}
              >
                {feedback?.plagiarismScore}%
              </span>
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2">
            <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
            <p>
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* NEW: Violation Warning Banner */}
      {hasViolation && (
        <div className="w-full bg-red-600 text-white px-6 py-4 rounded-lg flex items-center gap-3">
          <div className="flex-1">
            <p className="font-bold text-lg">⚠️ VIOLATION DETECTED</p>
            <p className="text-sm mt-1">
              Multiple people were detected during this interview session. This
              is considered a violation of interview integrity guidelines.
            </p>
          </div>
        </div>
      )}

      <hr />

      <p>{feedback?.finalAssessment}</p>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-4">
        <h2>Breakdown of the Interview:</h2>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3>Strengths</h3>
        <ul>
          {feedback?.strengths?.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Areas for Improvement</h3>
        <ul>
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      {/* NEW: Additional note for violations */}
      {hasViolation && (
        <div className="bg-yellow-900/30 border border-yellow-600 text-yellow-200 px-6 py-4 rounded-lg">
          <p className="font-semibold mb-2">📝 Note for Reviewers:</p>
          <p className="text-sm">
            This interview session had integrity violations. The candidate can
            retake the interview to clear this violation record. A clean retake
            will automatically remove this violation flag from their feedback.
          </p>
        </div>
      )}

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              {hasViolation
                ? "Retake Interview (Clear Violation)"
                : "Retake Interview"}
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
