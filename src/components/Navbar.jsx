"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navlist = [
    { name: "Home", link: "/" },
    { name: "Vote Now", link: "/vote" },
    { name: "Result", link: "/result" },
    { name: "News", link: "/news" },
    { name: "About", link: "/about" },
  ];

  const defaultStyle =
    "text-sm font-medium rounded-xl px-4 py-2 transition duration-200 ease-out inline-block";

  return (
    <header className="bg-white text-gray-700 shadow-sm px-5 py-3 fixed left-0 right-0 top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <div className="bg-gradient-to-r from-[#367bf3] to-[#2a6aed] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-200 hover:scale-105">
            <FaArrowTrendUp />
          </div>
          <div className="leading-tight">
            <h1 className="text-[#367bf3] font-bold text-base md:text-lg">
              Bigg Boss Tamil
            </h1>
            <p className="text-[11px] text-gray-500">Vote & Results</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-2 items-center">
            {navlist.map((item) => {
              const isActive = pathname === item.link;
              return (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`${defaultStyle} ${
                      isActive
                        ? "bg-gradient-to-r from-[#367bf3] to-[#2a6aed] text-white shadow-md"
                        : "hover:bg-blue-50 hover:text-blue-600 text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          {/* optional: show active label on small screens */}
          <span className="text-xs text-gray-600 hidden sm:block mr-2">
            {navlist.find((n) => n.link === pathname)?.name ?? ""}
          </span>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] z-40 transition-transform duration-300 ease-in-out ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4 mt-2 ring-1 ring-black/5">
          <ul className="flex flex-col gap-2">
            {navlist.map((item) => {
              const isActive = pathname === item.link;
              return (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={`${defaultStyle} w-full text-left block ${
                      isActive
                        ? "bg-gradient-to-r from-[#367bf3] to-[#2a6aed] text-white shadow-md"
                        : "hover:bg-blue-50 hover:text-blue-600 text-gray-700"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* optional small footer inside drawer */}
          <div className="mt-3 text-xs text-gray-500 text-center">
            Made by ❤️ — Cerevon Innovations and Solutions
          </div>
        </div>
      </div>

      {/* Overlay when menu open */}
      {open && (
        <button
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        />
      )}
    </header>
  );
};

export default Navbar;
