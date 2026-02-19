"use client";

import {
  createContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

import PopupModal from "@/shared/Popup";
import { PopupOptions } from "@/types/dashboard";

type PopupContextType = {
  confirm: (options: PopupOptions) => Promise<boolean>;
  alert: (options: PopupOptions) => Promise<void>;
};

export const PopupContext = createContext<PopupContextType | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<PopupOptions | null>(null);
  const [resolver, setResolver] =
    useState<((value: boolean) => void) | null>(null);

  const close = useCallback(
    (result: boolean) => {
      if (resolver) {
        resolver(result);
      }
      setOptions(null);
      setResolver(null);
    },
    [resolver]
  );

  const confirm = (options: PopupOptions): Promise<boolean> => {
    setOptions(options);
    return new Promise((resolve) => {
      setResolver(() => resolve);
    });
  };

  const alert = async (options: PopupOptions): Promise<void> => {
    await confirm({
      ...options,
      cancelText: "",
      confirmText: options.confirmText ?? "OK",
    });
  };

  return (
    <PopupContext.Provider value={{ confirm, alert }}>
      {children}

      {options && (
        <PopupModal
          options={options}
          onConfirm={() => close(true)}
          onCancel={() => close(false)}
        />
      )}
    </PopupContext.Provider>
  );
}
