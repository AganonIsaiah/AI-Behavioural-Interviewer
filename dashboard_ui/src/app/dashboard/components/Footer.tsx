"use client";
import { X, Upload, Play } from "lucide-react";
import { useState } from "react";
import { usePopup } from "@/hooks/usePopup";

export default function Footer() {
  const timer = "00:00";

  const [startInterview, setStartInterview] = useState<boolean>(true);

  const { confirm } = usePopup();

  const handleStartEnd = async () => {
    if (startInterview) {
      const approved = await confirm({
        title: "Start Interview",
        message:
          "The interview will begin once you press start. The interview will last for ~20 minutes. You can end the interview at any time.",
        confirmText: "Start",
        cancelText: "Cancel",
      });
      if (!approved) return;
    } else {
      const approved = await confirm({
        title: "End Interview",
        message: "Are you sure you want to end the interview?",
        confirmText: "End",
        cancelText: "Cancel",
        type: "danger",
      });
      if (!approved) return;
    }

    setStartInterview((prev) => !prev);
  };

  const handleSendReport = async () => {
    const approved = await confirm({
      title: "Send Interview Report",
      message:
        "The interview report will be sent to your email address. We will notify you once the report is generated.",
      confirmText: "Send",
      cancelText: "Cancel",
    });
    if (!approved) return;
  };

  return (
    <div className="flex justify-between items-center border-t ai-border py-3 px-5 text-sm">
      <div className="flex items-center gap-2">
        <span className="bg-gray-400 w-2 h-2 rounded-full"></span>
        <span className="tabular-nums! font-mono ai-text-gray">{timer}</span>
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={handleStartEnd}
          className="px-2 py-1.5! w-32! whitespace-nowrap! rounded-lg bg-zinc-800 cursor-pointer hover:bg-neutral-800 transition-all duration-200"
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
        <button
          onClick={handleSendReport}
          className="px-2 py-1.5! rounded-lg bg-white text-black flex items-center gap-0.75 cursor-pointer hover:bg-gray-200 duration-200 transition-all"
        >
          <Upload size={14} />
          Send Report
        </button>
      </div>
    </div>
  );
}
