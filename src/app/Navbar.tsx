"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="relative z-20 flex items-center justify-between w-full mt-0 px-4 md:px-8 py-3 bg-[#fcfbf7]/95 backdrop-blur-sm rounded-none shadow border-b border-gold/40 font-sans font-thin">
      <div className="flex items-center gap-3">
        <Image
          src="/designs/Ivy_logo.png"
          alt="Ivy Logo"
          width={48}
          height={48}
          className=""
          priority
        />
        <div className="flex flex-col leading-tight">
          <span className="ivy-logo-text">The Ivy Group</span>
          <span className="ivy-logo-subtitle">Premium Real Estate</span>
        </div>
      </div>
      {/* Hamburger for mobile */}
      <button className="md:hidden flex flex-col justify-center items-center ml-auto z-30" onClick={() => setNavOpen(!navOpen)} aria-label="Open Menu">
        <span className={`block w-7 h-0.5 bg-gray-800 rounded transition-all duration-300 mb-1.5 ${navOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-7 h-0.5 bg-gray-800 rounded transition-all duration-300 mb-1.5 ${navOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-7 h-0.5 bg-gray-800 rounded transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>
      {/* Desktop Nav */}
      <div className="hidden md:flex flex-1 items-center">
        <ul className="flex flex-1 justify-center items-center gap-6 text-base font-medium">
          <li>
            <Link href="/" className="text-black font-semibold nav-tab relative" aria-label="Home">Home</Link>
          </li>
          <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">Buy</a></li>
          <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">Let</a></li>
          <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">About</a></li>
          <li><a href="/contact" className="text-black/80 hover:text-black nav-tab relative">Contact</a></li>
          <li><a href="/blog" className="text-black/80 hover:text-black nav-tab relative">Blog</a></li>
        </ul>
        <a href="/book-reservation" className="ml-8 bg-gold text-black px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#bfa14a] hover:text-white transition whitespace-nowrap min-w-[170px] text-center">Book a Reservation</a>
      </div>
    </nav>
  );
}