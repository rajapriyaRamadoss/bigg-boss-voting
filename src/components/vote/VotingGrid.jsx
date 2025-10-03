"use client";

import React, { useMemo, useState } from "react";

const DEFAULT_CANDIDATES = [
  { id: 1, name: "Rajesh Kumar", votes: 12450, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Priya Anand", votes: 11821, image: "https://images.unsplash.com/photo-1545996124-90f4b3e2f8d0?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Karthik Subramanian", votes: 10340, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Divya Lakshmi", votes: 9870, image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Vikram Prabhu", votes: 9210, image: "https://images.unsplash.com/photo-1541534401786-5f4d4d5d2a6b?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Anjali Menon", votes: 8560, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Arjun Reddy", votes: 7280, image: "https://images.unsplash.com/photo-1544005310-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Meera Nair", votes: 7320, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "Sanjay Krishnan", votes: 6540, image: "https://images.unsplash.com/photo-1545996124-32f8b0e6b2ec?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Roshni Sharma", votes: 5280, image: "https://images.unsplash.com/photo-1544005313-163b3ea5a3f3?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "Naveen Kumar", votes: 5211, image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Kavya Madhavan", votes: 4670, image: "https://images.unsplash.com/photo-1545996124-7fcd7c5c0a8b?q=80&w=800&auto=format&fit=crop" }
];

function formatNumber(n) {
  return n.toLocaleString();
}

function chunkArray(array, chunkSize) {
  const res = [];
  for (let i = 0; i < array.length; i += chunkSize) res.push(array.slice(i, i + chunkSize));
  return res;
}

export default function VotingGrid({ candidates: candidatesProp } = {}) {
  const initial = useMemo(
    () => (candidatesProp && candidatesProp.length ? candidatesProp : DEFAULT_CANDIDATES),
    [candidatesProp]
  );

  const [candidates, setCandidates] = useState(() =>
    initial.map((c) => ({ ...c, hasVoted: false }))
  );

  function handleVote(id) {
    setCandidates((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        if (c.hasVoted) return c;
        return { ...c, votes: c.votes + 1, hasVoted: true };
      })
    );
  }

  const rows = chunkArray(candidates, 4);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-blue-100 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-sm font-medium text-blue-600">Voting Open</span>
          </div>

          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-slate-900">Cast Your Vote Now</h1>
          <p className="mt-2 text-slate-600">Support your favourite contestant — every vote matters.</p>
        </header>

        <div className="space-y-10">
          {rows.map((row, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {row.map((cand) => (
                  <div
                    key={cand.id}
                    className="group bg-white rounded-xl border border-blue-100 shadow-sm p-6 flex flex-col items-center text-center 
                    transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400"
                  >
                    {/* Profile Image */}
                    <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-white ring-offset-2 ring-offset-blue-50 shadow-md 
                    transition-all duration-300 group-hover:ring-blue-400 group-hover:ring-offset-4">
                      <img
                        src={cand.image}
                        alt={cand.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold text-slate-900">{cand.name}</h3>
                    <div className="mt-1 text-xs text-slate-500">{formatNumber(cand.votes)} votes</div>

                    <button
                      onClick={() => handleVote(cand.id)}
                      disabled={cand.hasVoted}
                      className={`mt-5 w-full py-2 rounded-md font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center gap-2 transition disabled:opacity-60 ${
                        cand.hasVoted
                          ? "bg-slate-200 text-slate-600"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${cand.hasVoted ? "text-slate-500" : "text-white"}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                      {cand.hasVoted ? "Voted" : "Vote Now"}
                    </button>
                  </div>
                ))}
              </div>

              {/* Advertisement Box - Wider */}
              <div className="mt-8">
                <div className="mx-auto max-w-6xl border-2 border-dashed border-blue-200 rounded-xl py-10 text-center bg-white/70 transition-all hover:border-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div className="mt-3 text-base font-medium text-blue-600">Advertisement Space</div>
                  <div className="text-sm text-slate-500 mt-1">Google AdSense</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
