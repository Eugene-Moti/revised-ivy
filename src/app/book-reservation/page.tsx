"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";

// Home page navbar/footer code is reused here
export default function BookReservation() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-[#fcfbf7] via-[#f7f6f2] to-[#fcfbf7] min-h-screen flex flex-col">
      {/* Navbar with improved logo/name styling */}
      <nav className="relative z-20 flex items-center justify-between w-full mt-0 px-4 md:px-8 py-3 bg-white/95 rounded-none shadow border-b border-gold/40 font-sans font-thin">
        <div className="flex items-center gap-3">
          <Image src="/designs/Ivy_logo.png" alt="Ivy Logo" width={48} height={48} className="rounded shadow-sm min-w-48" priority />
          <div className="flex flex-col leading-tight">
            <span className="ivy-logo-text">The Ivy Group</span>
            <span className="ivy-logo-subtitle">Premium Real Estate</span>
          </div>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center">
          <ul className="flex flex-1 justify-center items-center gap-6 text-base font-medium">
            <li><Link href="/" className="text-black font-semibold nav-tab relative" aria-label="Home">Home</Link></li>
            <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">Buy</a></li>
            <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">Let</a></li>
            <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">About</a></li>
            <li><a href="/contact" className="text-black/80 hover:text-black nav-tab relative">Contact</a></li>
            <li><a href="/blog" className="text-black/80 hover:text-black nav-tab relative">Blog</a></li>
          </ul>
          <a href="/book-reservation" className="ml-8 bg-gold text-black px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#bfa14a] hover:text-white transition whitespace-nowrap min-w-[170px] text-center">Book a Reservation</a>
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden flex flex-col justify-center items-center ml-auto z-30" onClick={() => setNavOpen(!navOpen)} aria-label="Open Menu">
          <span className={`block w-7 h-1 bg-[#f7f7e7] rounded transition-all duration-300 mb-1 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-[#f7f7e7] rounded transition-all duration-300 mb-1 ${navOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-[#f7f7e7] rounded transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
        <div className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-30 transform transition-transform duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col pt-24 px-6 gap-6 font-sans font-thin`}>
          <ul className="flex flex-col gap-6 text-lg font-semibold">
            <li><Link href="/" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)} aria-label="Home">Home</Link></li>
            <li><a href="#" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Buy</a></li>
            <li><a href="#" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Let</a></li>
            <li><a href="#" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>About</a></li>
            <li><a href="/contact" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Contact</a></li>
            <li><a href="/blog" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Blog</a></li>
          </ul>
          <a href="/book-reservation" className="bg-gold text-black px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#bfa14a] hover:text-white transition whitespace-nowrap min-w-[170px] text-center font-thin" onClick={()=>setNavOpen(false)}>Book a Reservation</a>
        </div>
        <style>{`
          .nav-tab::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px;
            height: 3px;
            background: linear-gradient(90deg, #ff9900 60%, #ffb84d 100%);
            border-radius: 2px;
            opacity: 0;
            transform: scaleX(0);
            transition: opacity 0.2s, transform 0.2s;
          }
          .nav-tab:hover::after, .nav-tab:focus::after {
            opacity: 1;
            transform: scaleX(1);
          }
        `}</style>
      </nav>

      {/* Luxury Reservation Form Section */}
      <main className="flex-1 flex flex-col md:flex-row items-stretch justify-center gap-0 md:gap-8 px-4 py-12 max-w-6xl mx-auto w-full">
        {/* Left Panel: Info/Visuals */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-[#f7f6f2] to-[#fcfbf7] rounded-l-2xl shadow-lg p-10 w-1/2 min-h-[600px] border border-gold/40">
          <div>
            <h2 className="text-4xl font-serif font-extrabold text-[#bfa544] mb-4 leading-tight">Book a Private Viewing</h2>
            <p className="text-lg text-navy mb-8">Experience our luxury properties in person. Schedule a private tour with our expert team and discover your next home.</p>
            <ul className="space-y-4 text-navy/90 text-base">
              <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-gold" /> Westlands, Nairobi</li>
              <li className="flex items-center gap-3"><FaPhoneAlt className="text-gold" /> +254 798 888 866</li>
              <li className="flex items-center gap-3"><FaEnvelope className="text-gold" /> info@theivygroup.co.ke</li>
              <li className="flex items-center gap-3"><FaClock className="text-gold" /> Mon-Sat: 9am - 6pm</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-10">
            <Image src="/designs/IMG-20250710-WA0028.jpg" alt="Luxury Property" width={320} height={220} className="rounded-xl shadow-lg object-cover" />
            <span className="text-xs text-navy/60 mt-2">*Sample property image</span>
          </div>
        </div>
        {/* Right Panel: Form */}
        <div className="flex-1 flex flex-col justify-center bg-white/95 rounded-2xl shadow-xl p-8 border border-gold/40 min-h-[600px]">
          <h2 className="text-3xl font-serif font-bold text-gold mb-6">Reservation Form</h2>
          <form className="space-y-5">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-gray-500 bg-white" />
              <input type="text" placeholder="Last Name" className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-gray-500 bg-white" />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-gray-500 bg-white" />
            <input type="text" placeholder="Phone" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-gray-500 bg-white" />
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-gray-700 bg-white" title="Property Type">
              <option value="">Select Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="villa">Villa</option>
              <option value="other">Other</option>
            </select>
            <input type="date" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-gray-700 bg-white" placeholder="Select a date" aria-label="Reservation date" />
            <textarea placeholder="Additional Requests (optional)" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-gray-500 bg-white" />
            <button type="submit" className="w-full bg-gold text-black py-3 rounded-lg font-semibold text-lg hover:bg-[#bfa14a] hover:text-white transition-all duration-200 shadow-md hover:shadow-lg scale-100 hover:scale-105 flex items-center justify-center gap-2">
              <FaCheckCircle className="text-xl text-green-600" /> Book Reservation
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
