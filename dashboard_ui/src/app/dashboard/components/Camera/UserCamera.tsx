"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export default function UserCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      setStream(mediaStream);
    } catch (err: any) {
      console.error("Error accessing camera:", err);
      setError("Unable to access camera");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const toggleCamera = () => {
    if (visible) {
      stopCamera();
    } else {
      startCamera();
    }
    setVisible((v) => !v);
  };

  return (
    <div className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden flex items-center justify-center">
      {error && <p className="text-red-500 text-center">{error}</p>}

      {visible && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      )}

      {!visible && <span className="pb-2">Share your camera</span>}
      <button
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer px-3 py-2 bg-stone-800 text-white rounded-lg flex items-center justify-center hover:bg-stone-700 transition-all"
        onClick={toggleCamera}
        title={visible ? "Hide Camera" : "Show Camera"}
      >
        {visible ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </div>
  );
}
