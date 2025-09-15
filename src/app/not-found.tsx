"use client";

import { useRouter } from "next/navigation";
import { Compass } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-950 text-white px-6">
      <div className="text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
            <Compass className="w-12 h-12 text-white animate-spin-slow" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-neutral-400 max-w-md mx-auto">
          Looks like the page you’re looking for doesn’t exist or has been
          moved.
        </p>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 font-semibold hover:opacity-90 transition"
          >
            Go Home
          </button>
          <button
            onClick={() => router.back()}
            className="px-6 py-3 rounded-lg border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
