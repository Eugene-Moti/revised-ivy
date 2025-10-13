"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

// Home page navbar/footer code is reused here
export default function BookReservation() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-[#fcfbf7] via-[#f7f6f2] to-[#fcfbf7] min-h-screen flex flex-col">
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
