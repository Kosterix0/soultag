"use client";

export default function GlobalError() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-6">
      <h2>Something went wrong</h2>
      <button>Try again</button>
    </div>
  );
}
