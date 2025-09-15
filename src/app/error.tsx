"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react"; // icon

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="text-center space-y-6 px-6  min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white">
      {/* Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
          <AlertTriangle className="w-10 h-10 text-white animate-pulse" />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold">
        Oops! Something went wrong.
      </h1>
      <p className="text-neutral-400 max-w-md mx-auto">
        {error?.message || "We encountered an unexpected error."}
      </p>

      {/* Actions */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 font-semibold hover:opacity-90 transition"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 rounded-lg border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
