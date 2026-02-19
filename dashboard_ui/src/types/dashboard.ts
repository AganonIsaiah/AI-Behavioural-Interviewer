export enum ROUTES {
  LOGIN = "/login",
  DASHBOARD = "/dashboard"
}

export type ConfirmationOptions = {
  title: string;
  message: string;
  confirmText?: string; 
  cancelText?: string;
  type?: "default" | "danger" | "error";
}

export type PopupOptions = {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: "default" | "danger" | "error";
};
