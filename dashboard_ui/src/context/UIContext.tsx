"use client"
import { useState, createContext, ReactNode } from "react";

type UIContextType = {
  isSidebarOpen: boolean; 
  toggleSidebar: () => void;
}

export const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIContextProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  const toggleSidebar = () => setIsSidebarOpen(p => !p);

  return (
    <UIContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </UIContext.Provider>
  );
}