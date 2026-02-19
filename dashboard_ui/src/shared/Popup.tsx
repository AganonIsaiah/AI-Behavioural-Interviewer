import { PopupOptions } from "@/types/dashboard";

export default function PopupModal({
  options,
  onConfirm,
  onCancel,
}: {
  options: PopupOptions;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const {
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    type = "default",
  } = options;

  const confirmStyle =
    type === "danger"
      ? "bg-red-600 hover:bg-red-700"
      : type === "error"
        ? "bg-yellow-600 hover:bg-yellow-700"
        : "bg-blue-600 hover:bg-blue-700";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center rounded-xl transition-all duration-300">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={cancelText ? onCancel : undefined}
      />

      <div className="relative bg-zinc-900 text-white rounded-lg shadow-xl w-[90%] max-w-md p-6">
        <h2>{title}</h2>
        <p className="mt-2 text-sm text-zinc-300 mb-6">{message}</p>

        <div className="flex justify-end gap-4">
          {cancelText && (
            <button
              onClick={onCancel}
              className="text-sm w-20 font-medium px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-600 cursor-pointer"
            >
              {cancelText}
            </button>
          )}

          <button
            onClick={onConfirm}
            className={`text-sm w-20 font-medium px-4 py-2 rounded text-white cursor-pointer ${confirmStyle}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
