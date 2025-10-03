"use client";

import Image from "next/image";

export default function ContestantVote() {
  const contestants = [
    { id: 1, name: "Rajesh Kumar", votes: 12450, percent: 12.5, status: "Trending", img: "/avatars/rajesh.jpg" },
    { id: 2, name: "Priya Anand", votes: 11821, percent: 11.8, status: "Trending", img: "/avatars/priya.jpg" },
    { id: 3, name: "Karthik Subramanian", votes: 10340, percent: 10.3, status: "Trending", img: "/avatars/karthik.jpg" },
    { id: 4, name: "Divya Lakshmi", votes: 9875, percent: 9.9, status: "Trending", img: "/avatars/divya.jpg" },
    { id: 5, name: "Vikram Prabhu", votes: 9234, percent: 9.2, status: "Trending", img: "/avatars/vikram.jpg" },
    { id: 6, name: "Anjali Menon", votes: 8721, percent: 8.7, status: "Trending", img: "/avatars/anjali.jpg" },
    { id: 7, name: "Arjun Reddy", votes: 7945, percent: 7.9, status: "Trending", img: "/avatars/arjun.jpg" },
    { id: 8, name: "Meera Nair", votes: 7310, percent: 7.3, status: "Trending", img: "/avatars/meera.jpg" },
    { id: 9, name: "Sanjay Krishnan", votes: 6550, percent: 6.5, status: "Trending", img: "/avatars/sanjay.jpg" },
    { id: 10, name: "Rashmi Sharma", votes: 6000, percent: 6.0, status: "Trending", img: "/avatars/rashmi.jpg" },
    { id: 11, name: "Naveen Kumar", votes: 5200, percent: 5.2, status: "Trending", img: "/avatars/naveen.jpg" },
    { id: 12, name: "Kavya Madhavan", votes: 4750, percent: 4.7, status: "Trending", img: "/avatars/kavya.jpg" },
  ];

  const totalVotes = contestants.reduce((acc, c) => acc + c.votes, 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        {/* Standings */}
        <div className="lg:col-span-3 border-blue-200 border-2 rounded-2xl">
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Current Standings</h2>
              <p className="text-lg font-semibold text-blue-600">
                Total Votes {totalVotes.toLocaleString()}
              </p>
            </div>

            <div className="space-y-6 ">
              {contestants.map((c, idx) => (
                <div
                  key={c.id}
                  className="bg-blue-50 rounded-xl p-5 shadow-sm border border-blue-200 hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4 mb-3 ">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image src={c.img} alt={c.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <span>{c.name}</span>
                        {idx < 3 && (
                          <span className="text-yellow-500">👑</span>
                        )}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {c.votes.toLocaleString()} votes • <span className="text-green-600">↗ {c.status}</span>
                      </p>
                    </div>
                    <div className="ml-auto text-xl font-bold text-blue-600">
                      {c.percent}%
                    </div>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${c.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl h-40 flex items-center justify-center text-blue-600 text-sm font-medium text-center">
            <p>
              <span className="block text-lg">Advertisement Space</span>
              Google AdSense
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                Total Votes: <span className="font-semibold text-blue-600">{totalVotes.toLocaleString()}</span>
              </li>
              <li>
                Active Contestants: <span className="font-semibold text-gray-800">{contestants.length}</span>
              </li>
              <li>
                Leader: <span className="font-semibold text-gray-800">{contestants[0].name}</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl h-40 flex items-center justify-center text-blue-600 text-sm font-medium text-center">
            <p>
              <span className="block text-lg">Advertisement Space</span>
              Google AdSense
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Advertisement */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl h-28 flex items-center justify-center text-blue-600 text-sm font-medium text-center">
          <p>
            <span className="block text-lg">Advertisement Space</span>
            Google AdSense
          </p>
        </div>
      </div>
    </main>
  );
}