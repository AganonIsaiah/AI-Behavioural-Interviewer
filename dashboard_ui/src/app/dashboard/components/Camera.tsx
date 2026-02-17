export default function Camera() {
  return (
    <div className="flex flex-col h-full w-full! border-r border-zinc-700">
      <div className="flex items-center gap-2 text-sm border-b border-zinc-700 w-full! py-2 px-4 h-10! ">
        <p className="font-semibold ">You</p>
        <span className="font-mono rounded-md px-2 py-1 text-xs! ai-text-blue ai-bg-blue">
          CANDIDATE
        </span>
      </div>

      <div className="flex-1 relative">

        <div className="w-full h-full bg-white">

        </div>

        <div className="absolute bottom-4 right-4 bg-stone-800 h-50 w-100 rounded-lg! shadow-lg border border-zinc-700">

        </div>
      </div>
    </div>
  );
}
