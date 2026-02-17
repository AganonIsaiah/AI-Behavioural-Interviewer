"use client"

import { useContext } from "react";
import { Menu } from "lucide-react";
import { UIContext } from "@/context/UIContext";

export default function Header() {
  const context = useContext(UIContext);
  if (!context) throw new Error("Header must be used inside UIContextProvider");
  const { toggleSidebar } = context;

  return (
    <div className="flex items-center justify-between border-b ai-border py-2 px-4">
      <h3>AI Behavioural Interviewer</h3>
      <button className="cursor-pointer"
      onClick={toggleSidebar}
      >
        <Menu size={20} />
      </button>
    </div>
  );
}
