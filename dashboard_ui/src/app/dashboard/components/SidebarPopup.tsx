"use client";

import { useContext } from "react";
import { LogOut, SquarePen, X } from "lucide-react";
import { UIContext } from "@/context/UIContext";

export default function SidebarPopup() {
  const context = useContext(UIContext);
  if (!context)
    throw new Error("SidebarPopup must be used inside UIContextProvider");

  const { isSidebarOpen, toggleSidebar } = context;

  return (
    <>
      <div
        onClick={toggleSidebar}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 border-l border-zinc-800 bg-[#0a0a0a] text-white p-6 transition-transform duration-300 ease-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-5">
          <h3>Settings</h3>
          <button
            onClick={toggleSidebar}
            className="mt-1 p-2 rounded-md hover:bg-zinc-800 transition cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mb-8">
          <p className="text-sm text-zinc-400">Signed in as</p>
          <p className="mt-1 font-medium">username@email.com</p>
        </div>

        <div className="flex flex-col gap-4.5">
          <button className="login-enter-btn h-9">
            Update Resume
            <SquarePen size={15} className="ml-1" />
          </button>

          <button className="login-enter-btn h-9 bg-red-600! text-white! hover:bg-red-700! hover:text-gray-200!">
            Logout
            <LogOut size={14.5} className="ml-1" />
          </button>
        </div>
      </div>
    </>
  );
}
