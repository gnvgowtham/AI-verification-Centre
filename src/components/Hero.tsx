import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

      <h1 className="text-7xl font-bold tracking-tight text-white">
        Veracity
      </h1>

      <p className="mt-5 text-xl text-slate-300">
        Verify Before You Trust
      </p>

      <p className="mt-3 max-w-2xl text-slate-400">
        AI-powered verification for news, images, videos,
        audio and online claims using trusted evidence.
      </p>

      <SearchBar />

    </section>
  );
}