import { Plus, ShieldCheck } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-10 w-full max-w-3xl">
      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-blue-500">

        <button className="rounded-lg p-2 transition hover:bg-slate-700">
          <Plus size={20} />
        </button>

        <input
          type="text"
          placeholder="Verify information here..."
          className="flex-1 bg-transparent px-4 text-white outline-none placeholder:text-slate-400"
        />

        <button className="rounded-xl bg-blue-500 p-3 transition hover:bg-blue-600">
          <ShieldCheck size={20} />
        </button>

      </div>
    </div>
  );
}