"use client";
import { X, Upload, Play } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const timer = "00:00";

  const [startInterview, setStartInterview] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center border-t border-zinc-700 py-3 px-5 text-sm">
      <div className="flex items-center gap-2">
        <span className="bg-gray-400 w-2 h-2 rounded-full"></span>
        <span className="tabular-nums! font-mono text-gray-400">{timer}</span>
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={() => setStartInterview(!startInterview)}
          className="px-2 py-1.5! w-32! whitespace-nowrap! rounded-lg bg-zinc-800 cursor-pointer hover:bg-neutral-800 duration-200 transition-all"
        >
          {!startInterview ? (
            <span className="flex items-center justify-between px-1">
              <X size={14} />
              End Interview
            </span>
          ) : (
            <span className="flex items-center justify-between px-0.5 gap-0.75">
              <Play size={14} />
              Start Interview
            </span>
          )}
        </button>
        <button className="px-2 py-1.5! rounded-lg bg-white text-black flex items-center gap-0.75 cursor-pointer hover:bg-gray-200 duration-200 transition-all">
          <Upload size={14} />
          Send Report
        </button>
      </div>
    </div>
  );
}
