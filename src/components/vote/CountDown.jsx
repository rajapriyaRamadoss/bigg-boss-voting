"use client";  // ✅ Ensures this runs on client side in Next.js

import React, { useEffect, useMemo, useState } from "react";

// Default demo target date (~5 days, 12h, 34m, 33s from now)
const DEFAULT_TARGET = new Date(
  Date.now() +
    5 * 24 * 60 * 60 * 1000 +
    12 * 60 * 60 * 1000 +
    34 * 60 * 1000 +
    33 * 1000
);

function pad(n) {
  return String(n).padStart(2, "0");
}

// Custom countdown hook
function useCountdown(target) {
  const t = useMemo(() => (target ? new Date(target) : DEFAULT_TARGET), [target]);

  const calc = () => {
    const now = new Date();
    let diff = Math.max(0, t.getTime() - now.getTime());

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;

    const seconds = Math.floor(diff / 1000);

    return { days, hours, minutes, seconds, completed: t.getTime() <= Date.now() };
  };

  const [state, setState] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setState(calc), 1000);
    return () => clearInterval(id);
  }, [t]);

  return state;
}

// Card for each time unit
function StatCard({ value, label }) {
  return (
    <div className="w-36 sm:w-44 bg-white rounded-xl shadow-lg p-5 flex flex-col items-center justify-center">
      <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">
        {pad(value)}
      </div>
      <div className="text-sm text-slate-600 mt-1">{label}</div>
    </div>
  );
}

// Main Countdown component
export default function CountDown({ targetDate }) {
  const { days, hours, minutes, seconds, completed } = useCountdown(targetDate);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-blue-100 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-sm font-medium text-blue-600">Voting Open</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Cast Your Vote Now
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Support your favorite Bigg Boss Tamil contestant. Every vote counts!
          </p>
        </div>

        {/* Countdown container */}
        <div className="mt-14 rounded-2xl bg-blue-100/80 border border-blue-200 p-8 md:p-12 shadow-inner">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6a9 9 0 100 18 9 9 0 000-18z" />
              </svg>
              <h2 className="text-xl font-semibold text-slate-800">Voting Ends In</h2>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <StatCard value={days} label="Days" />
              <StatCard value={hours} label="Hours" />
              <StatCard value={minutes} label="Minutes" />
              <StatCard value={seconds} label="Seconds" />
            </div>

            <div className="mt-8">
              {completed ? (
                <div className="text-sm text-red-600 font-medium">Voting has ended.</div>
              ) : (
                <div className="text-sm text-slate-600">Live countdown — updated every second.</div>
              )}
            </div>
          </div>
        </div>

        {/* Advertisement / placeholder */}
        <div className="mt-12 p-6">
          <div className="mx-auto max-w-4xl border-2 border-dashed border-blue-200 rounded-xl py-12 text-center bg-white/60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-8 w-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div className="mt-3 text-sm font-medium text-blue-600">Advertisement Space</div>
            <div className="text-xs text-slate-500 mt-1">Google AdSense</div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-0 top-0 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-60 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-50 blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Screen reader live region */}
      <div className="sr-only" aria-live="polite" role="status">
        {completed
          ? "Voting has ended."
          : `Time remaining: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds.`}
      </div>
    </div>
  );
}
