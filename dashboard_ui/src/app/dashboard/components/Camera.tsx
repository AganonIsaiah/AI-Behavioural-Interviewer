export default function Camera() {
  return (
    <div className="flex flex-col h-full w-3/4 border-r border-zinc-700">
      <div className="flex items-center gap-2 text-sm border-b border-zinc-700 w-full! p-2 h-10! ">
        <p className="font-semibold">You</p>
        <span className="font-mono bg-stone-800 rounded-md px-2 py-1 text-xs! text-gray-400">
          CANDIDATE
        </span>
      </div>

      <div className="flex-1 relative">


        <div className="absolute bottom-4 right-4 bg-stone-800 h-50 w-100 rounded-lg!">

        </div>
      </div>
    </div>
  );
}
