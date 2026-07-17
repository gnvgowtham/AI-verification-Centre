"use client";

import { useState } from "react";
import { Plus, ShieldCheck } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleVerify = async () => {
    if (!query.trim()) {
      alert("Please enter something to verify.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "text",
          content: query,
        }),
      });

      const data = await response.json();

      console.log("Backend Response:", data);
    } catch (error) {
      console.error("Error connecting to backend:", error);
    }
  };

  return (
    <div className="mt-10 w-full max-w-3xl">
      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-3 backdrop-blur-md transition-all duration-300 hover:border-blue-500">

        <button className="rounded-lg p-2 transition hover:bg-slate-700">
          <Plus size={20} />
        </button>

        <input
          type="text"
          placeholder="Verify information here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent px-4 text-white outline-none placeholder:text-slate-400"
        />

        <button
          onClick={handleVerify}
          className="rounded-xl bg-blue-500 p-3 transition hover:bg-blue-600"
        >
          <ShieldCheck size={20} />
        </button>

      </div>
    </div>
  );
}