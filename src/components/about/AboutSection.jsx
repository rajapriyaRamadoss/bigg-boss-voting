"use client";
import React from 'react';

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white flex flex-col items-center py-20">
      {/* Header */}
      <div className="max-w-3xl text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-black">About Us</h1>
        <p className="mt-4 text-base md:text-lg text-slate-600">Your trusted platform for Bigg Boss Tamil voting and updates</p>
      </div>

      {/* Card */}
      <div className="w-full max-w-4xl mt-12 px-4">
        <div className="relative bg-white border border-blue-200 rounded-2xl shadow-2xl p-8 md:p-12">

          {/* decorative faint outline (subtle) */}
          <div className="absolute -inset-1 rounded-2xl pointer-events-none" aria-hidden="true"></div>

          <div className="flex items-start gap-6 ">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                {/* Shield icon - simple SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3l7 3v5c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-3z" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 ">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">About This Platform</h2>

              <div className="mt-6 text-slate-600 space-y-4 leading-relaxed text-sm md:text-base">
                <p>
                  Welcome to the ultimate Bigg Boss Tamil voting platform! We are a community-driven website created by passionate fans of the show, for fans of the show.
                </p>

                <p>
                  Our platform allows viewers to engage with the show by casting votes for their favorite contestants, viewing live poll results, and staying updated with the latest news and happenings from inside the Bigg Boss house.
                </p>

                <p>
                  We strive to provide a seamless, user-friendly experience for all Bigg Boss Tamil fans to connect, vote, and share their opinions about the show and its contestants.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* subtle large background circle to mimic the screenshot's soft top gradient */}
      <div className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 w-[900px] h-[360px] rounded-full bg-gradient-to-br from-blue-50 to-transparent blur-3xl opacity-40" />
    </section>
  );
}