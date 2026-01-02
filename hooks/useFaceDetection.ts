import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

interface UseFaceDetectionProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isActive: boolean;
  onFaceCountChange?: (count: number) => void;
}

export const useFaceDetection = ({
  videoRef,
  isActive,
  onFaceCountChange,
}: UseFaceDetectionProps) => {
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [faceCount, setFaceCount] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- Load models ---------------- */
  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = "/models";
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        setModelsLoaded(true);
        console.log("✅ Face-api models loaded");
      } catch (err) {
        console.error("❌ Failed to load face-api models", err);
      }
    };

    loadModels();
  }, []);

  /* ---------------- Face detection loop ---------------- */
  useEffect(() => {
    const detectFaces = async () => {
      if (
        !isActive ||
        !modelsLoaded ||
        !videoRef.current ||
        !canvasRef.current ||
        videoRef.current.readyState !== 4
      ) {
        return;
      }

      const video = videoRef.current;

      try {
        const detections = await faceapi.detectAllFaces(
          video,
          new faceapi.TinyFaceDetectorOptions({
            inputSize: 416,
            scoreThreshold: 0.5,
          })
        );

        const count = detections.length;
        setFaceCount(count);
        onFaceCountChange?.(count);

      } catch (err) {
        console.error("❌ Face detection error", err);
      }
    };

    if (isActive && modelsLoaded) {
      detectionIntervalRef.current = setInterval(detectFaces, 20);
    }

    return () => {
      if (detectionIntervalRef.current) {
        clearInterval(detectionIntervalRef.current);
        detectionIntervalRef.current = null;
      }
    };
  }, [isActive, modelsLoaded, videoRef, onFaceCountChange]);

  return {
    modelsLoaded,
    faceCount,
    canvasRef,
  };
};
