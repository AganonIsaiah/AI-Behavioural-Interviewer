"use client"

import Header from "./Header";
import Camera from "./Camera";
import Transcript from "./Transcript";
import Footer from "./Footer";
import SidebarPopup from "./SidebarPopup";

import { UIContextProvider } from "@/context/UIContext";

export default function Dashboard() {
  return (
    <UIContextProvider>
      <Header />
      <div className="flex-1 flex">
        <Camera />
        <Transcript />
        <SidebarPopup />
      </div>
      <Footer />
    </UIContextProvider>
  );
}
