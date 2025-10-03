"use client";

import React from 'react';

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-2">
      <div className="w-[70%]  mx-auto px-6 space-y-8">

        {/* IMPORTANT DISCLAIMER (yellow) */}
        <section className="rounded-2xl border border-yellow-300 bg-yellow-50  shadow-xl p-8">
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center ring-2 ring-yellow-300">
        {/* warning/info icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-yellow-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
          />
        </svg>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold text-yellow-900">Important Disclaimer</h2>
      <p className="mt-3 text-base text-yellow-800">
        Please read this disclaimer carefully before using our platform:
      </p>

      <ul className="mt-4 space-y-3 text-lg text-yellow-800 list-disc list-inside leading-relaxed">
        <li>
          <strong>This is an unofficial fan website</strong> and is not affiliated with,
          endorsed by, or connected to the official show or production companies.
        </li>
        <li>
          All votes cast on this platform are <strong>unofficial</strong> and do not count
          toward official elimination or results.
        </li>
        <li>
          The voting results displayed here are based solely on polls conducted within our
          platform and are for <strong>entertainment purposes only</strong>.
        </li>
        <li>
          To cast official votes, please visit the official voting platforms as announced
          by the show producers.
        </li>
      </ul>
    </div>
  </div>
</section>


        {/* PRIVACY POLICY (white card with blue accent) */}
        <section className="rounded-2xl border border-blue-200 bg-white shadow-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center ring-1 ring-blue-100">
                {/* lock icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div className="prose-sm max-w-none">
              <h3 className="text-xl font-semibold text-blue-800">Privacy Policy</h3>
              <p className="mt-2 text-lg text-gray-600">We respect your privacy and are committed to protecting your personal information.</p>

              <h4 className="mt-4 text-sm font-medium text-gray-700">Information We Collect</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Voting data and preferences</li>
                <li>Basic analytics to improve user experience</li>
                <li>IP addresses for preventing vote manipulation</li>
              </ul>

              <h4 className="mt-4 text-sm font-medium text-gray-700">How We Use Your Information</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>To count and display voting results</li>
                <li>To prevent fraudulent voting</li>
                <li>To improve our platform and user experience</li>
                <li>For displaying relevant advertisements (Google AdSense compliance)</li>
              </ul>

              <h4 className="mt-4 text-sm font-medium text-gray-700">Third-Party Services</h4>
              <p className="mt-2 text-sm text-gray-600">Our website uses Google AdSense for advertising. Please review Google’s privacy policy for information on how they collect and use data.</p>

              <h4 className="mt-4 text-sm font-medium text-gray-700">Cookies</h4>
              <p className="mt-2 text-sm text-gray-600">We use cookies to enhance your browsing experience, remember your voting preferences, and serve personalized advertisements.</p>

            </div>
          </div>
        </section>

        {/* GET IN TOUCH (centered card) */}
        <section className="rounded-2xl border border-blue-200 bg-white shadow-xl  p-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center ring-1 ring-blue-100">
              {/* mail icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13a2.5 2.5 0 0 0 2.5-2.5v-7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 8.5L12 13 3 8.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">Get in Touch</h3>
            <p className="text-sm text-gray-500">Have questions, suggestions, or feedback? We'd love to hear from you!</p>

            <a href="mailto:hello@example.com" className="mt-3 inline-flex items-center px-4 py-2 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Contact Us
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
