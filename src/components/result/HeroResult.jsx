"use client";



import Image from 'next/image'

export default function HeroResult() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Top badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center bg-green-100 border border-green-200 text-green-700 px-3 py-1 rounded-full text-sm font-medium gap-2">
            {/* small chart icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 11V3m4 8V7m4 12V5M3 21h18" />
            </svg>
            <span>Updated Live</span>
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
          Bigg Boss Tamil Unofficial Results
        </h1>

        <p className="mt-4 text-gray-500 text-base md:text-lg">Updated weekly based on public voting polls</p>

        

        {/* Advertisement container */}
        <div className="mt-12">
          <div className="w-full border-2 border-dashed border-blue-200 rounded-2xl py-4 px-6 flex items-center justify-center">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 11l4-4 4 4m0 6h-8" />
              </svg>
              <h3 className="mt-4 font-semibold text-blue-600">Advertisement Space</h3>
              <a href="#" className="block mt-1 text-sm text-blue-500 underline">Google AdSense</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12">
          <div className="bg-yellow-100 border border-yellow-400 rounded-2xl p-6 text-left flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-yellow-200 border border-yellow-200 flex items-center justify-center text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4m0 4h.01" />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-lg font-semibold text-yellow-800">Important Disclaimer</h4>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                These are unofficial results based on public voting polls conducted on this platform. These numbers do not represent the official voting results of the Bigg Boss Tamil show and are for entertainment purposes only.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
