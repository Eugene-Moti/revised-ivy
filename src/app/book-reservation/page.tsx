"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { FaBed, FaBath, FaCar, FaRulerCombined, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function BookReservation() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-[#f7f7e7] via-[#e9ede9] to-[#f7f7e7] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between w-full mt-0 px-4 md:px-8 py-3 bg-[#133322] rounded-none shadow border-b border-[#35521a]/40">
        <div className="flex items-center gap-3">
          <Image
            src="/designs/Ivy_logo.png"
            alt="Ivy Logo"
            width={48}
            height={48}
            className="rounded"
            priority
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#f7f7e7] leading-6">The Ivy Group</span>
            <span className="text-xs text-[#f7f7e7]/80 font-medium">Premium Real Estate</span>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden flex flex-col justify-center items-center ml-auto z-30" onClick={() => setNavOpen(!navOpen)} aria-label="Open Menu">
          <span className={`block w-7 h-1 bg-[#f7f7e7] rounded transition-all duration-300 mb-1 ${navOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-[#f7f7e7] rounded transition-all duration-300 mb-1 ${navOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-[#f7f7e7] rounded transition-all duration-300 ${navOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center">
          <ul className="flex flex-1 justify-center items-center gap-6 text-base font-medium">
            <li><a href="/" className="text-[#f7f7e7] font-semibold nav-tab relative">Home</a></li>
            <li><a href="#" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">Buy</a></li>
            <li><a href="#" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">Let</a></li>
            <li><a href="#" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">About</a></li>
            <li><a href="/contact" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">Contact</a></li>
            <li><a href="/book-reservation" className="ml-8 bg-[#35521a] text-[#f7f7e7] px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#466c25] transition whitespace-nowrap min-w-[170px] text-center">Book a Reservation</a></li>
          </ul>
        </div>
        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
        <div className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#133322] shadow-lg z-30 transform transition-transform duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col pt-24 px-6 gap-6`}> 
          <ul className="flex flex-col gap-6 text-lg font-semibold">
            <li><a href="/" className="text-[#f7f7e7] nav-tab" onClick={()=>setNavOpen(false)}>Home</a></li>
            <li><a href="#" className="text-[#f7f7e7]/80 nav-tab" onClick={()=>setNavOpen(false)}>Buy</a></li>
            <li><a href="#" className="text-[#f7f7e7]/80 nav-tab" onClick={()=>setNavOpen(false)}>Let</a></li>
            <li><a href="#" className="text-[#f7f7e7]/80 nav-tab" onClick={()=>setNavOpen(false)}>About</a></li>
            <li><a href="/contact" className="text-[#f7f7e7]/80 nav-tab" onClick={()=>setNavOpen(false)}>Contact</a></li>
            <li><a href="/book-reservation" className="mt-8 bg-[#35521a] text-[#f7f7e7] px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#466c25] transition whitespace-nowrap min-w-[170px] text-center" onClick={()=>setNavOpen(false)}>Book a Reservation</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 py-10 px-2 md:px-0">
        {/* Property Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex-1 min-w-[350px] max-w-2xl">
          <div className="rounded-xl overflow-hidden mb-4">
            <Image src="/designs/luxury-villa.jpg" alt="Luxury Modern Villa" width={800} height={400} className="object-cover w-full h-64" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#2e4717] text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-[#133322]">Luxury Modern Villa</h2>
            <div className="text-2xl font-bold text-[#2e4717]">$2,850,000</div>
          </div>
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <FaMapMarkerAlt className="text-[#bfa544]" />
            <span>Beverly Hills, Los Angeles, CA</span>
          </div>
          <div className="flex gap-8 mb-4">
            <div className="flex flex-col items-center text-[#2e4717]">
              <FaBed className="text-xl mb-1" />
              <span className="text-sm">4 Bedrooms</span>
            </div>
            <div className="flex flex-col items-center text-[#2e4717]">
              <FaBath className="text-xl mb-1" />
              <span className="text-sm">3 Bathrooms</span>
            </div>
            <div className="flex flex-col items-center text-[#2e4717]">
              <FaCar className="text-xl mb-1" />
              <span className="text-sm">2 Garage</span>
            </div>
            <div className="flex flex-col items-center text-[#2e4717]">
              <FaRulerCombined className="text-xl mb-1" />
              <span className="text-sm">3,200 sq ft</span>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-[#133322] mb-1">Description</div>
            <div className="text-gray-700 text-sm">This stunning modern villa offers the perfect blend of luxury and comfort. Featuring an open-concept design with floor-to-ceiling windows, gourmet kitchen with premium appliances, and spacious outdoor entertaining areas. Located in the prestigious Beverly Hills neighborhood with easy access to shopping, dining, and entertainment.</div>
          </div>
          <div>
            <div className="font-bold text-[#133322] mb-1">Amenities</div>
            <div className="flex flex-wrap gap-4 text-[#2e4717] text-sm">
              <span className="flex items-center gap-1"><FaBath /> Swimming Pool</span>
              <span className="flex items-center gap-1"><FaRulerCombined /> Home Gym</span>
              <span className="flex items-center gap-1"><FaCar /> Security System</span>
              <span className="flex items-center gap-1"><FaMapMarkerAlt /> Garden</span>
            </div>
          </div>
        </div>
        {/* Reservation Form & Agent */}
        <div className="flex flex-col gap-6 w-full md:w-[350px]">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-[#133322] mb-4">Schedule a Viewing</h3>
            <div className="text-gray-500 text-sm mb-4">Book your private tour today</div>
            <form className="space-y-3">
              <div className="flex gap-2">
                <input type="text" placeholder="First Name" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4717] placeholder:text-gray-500 bg-white" />
                <input type="text" placeholder="Last Name" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4717] placeholder:text-gray-500 bg-white" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4717] placeholder:text-gray-500 bg-white" />
              <input type="text" placeholder="Phone Number" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4717] placeholder:text-gray-500 bg-white" />
              <div className="flex gap-2">
                <input type="date" className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4717] bg-white text-gray-700" />
                <select className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4717] bg-white text-gray-700">
                  <option>Preferred Time</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                </select>
              </div>
              <textarea placeholder="Any specific areas you’d like to focus on?" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e4717] placeholder:text-gray-500 bg-white" />
              <button type="submit" className="w-full bg-[#2e4717] text-white py-2 rounded-lg font-semibold text-lg hover:bg-[#133322] transition-all duration-200 shadow-md hover:shadow-lg scale-100 hover:scale-105">Book Viewing</button>
            </form>
          </div>
          {/* Agent Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
              <Image src="/designs/agent-avatar.jpg" alt="Agent" width={56} height={56} className="object-cover w-full h-full" />
            </div>
            <div>
              <div className="font-bold text-[#133322]">Sarah Johnson</div>
              <div className="text-gray-500 text-sm">Senior Real Estate Agent</div>
              <div className="flex gap-2 mt-2">
                <a href="tel:+254798888866" className="bg-[#e9ede9] text-[#2e4717] px-3 py-1 rounded-lg font-semibold text-sm hover:bg-[#d6c07a] transition">Call</a>
                <a href="mailto:blossomivymarketing@gmail.com" className="bg-[#e9ede9] text-[#2e4717] px-3 py-1 rounded-lg font-semibold text-sm hover:bg-[#d6c07a] transition">Email</a>
              </div>
            </div>
          </div>
          {/* Neighborhood Insights */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h4 className="font-bold text-[#133322] mb-4">Neighborhood Insights</h4>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between"><span>Walk Score</span><span className="font-bold text-[#2e4717]">85/100</span></div>
              <div className="flex justify-between"><span>School Rating</span><span className="font-bold text-[#2e4717]">9.2/10</span></div>
              <div className="flex justify-between"><span>Crime Rate</span><span className="font-bold text-green-600">Low</span></div>
              <div className="flex justify-between"><span>Market Trend</span><span className="font-bold text-green-600">+5.2%</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#151c27] text-white pt-12 pb-4 px-4 border-t border-[#35521a]/30 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 pb-6 border-b border-white/10 animate-fade-in">
          {/* Brand & Description */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#151c27] p-2 rounded-lg">
                <Image src="/designs/Ivy_logo.png" alt="Ivy Group Logo" width={28} height={28} className="rounded" />
              </span>
              <span className="text-xl font-bold">The Ivy Group</span>
            </div>
            <div className="text-gray-300 text-base leading-snug">Premium real estate solutions across Nairobi&apos;s most prestigious neighborhoods.</div>
          </div>
          {/* Quick Links */}
          <div className="flex-1 min-w-[160px]">
            <div className="font-bold mb-3">Quick Links</div>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[#bfa544]">Home</a></li>
              <li><a href="#" className="hover:text-[#bfa544]">Buy</a></li>
              <li><a href="#" className="hover:text-[#bfa544]">Let</a></li>
              <li><a href="#" className="hover:text-[#bfa544]">About</a></li>
            </ul>
          </div>
          {/* Our Locations */}
          <div className="flex-1 min-w-[180px]">
            <div className="font-bold mb-3">Our Locations</div>
            <ul className="space-y-2 text-gray-300">
              <li>Blossoms Ivy - Kileleshwa</li>
              <li>Luckinn Ivy - Westlands</li>
              <li>Ivy Park - Kilimani</li>
            </ul>
          </div>
          {/* Social Links */}
          <div className="flex-1 min-w-[160px]">
            <div className="font-bold mb-3">Follow Us</div>
            <div className="flex gap-4 text-2xl">
              <a href="#" aria-label="Facebook" className="hover:text-[#bfa544]"><i className="fab fa-facebook-f"></i> <span className="sr-only">Facebook</span></a>
              <a href="#" aria-label="Twitter" className="hover:text-[#bfa544]"><i className="fab fa-twitter"></i> <span className="sr-only">Twitter</span></a>
              <a href="#" aria-label="Instagram" className="hover:text-[#bfa544]"><i className="fab fa-instagram"></i> <span className="sr-only">Instagram</span></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#bfa544]"><i className="fab fa-linkedin-in"></i> <span className="sr-only">LinkedIn</span></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
          <div>© {new Date().getFullYear()} The Ivy Group. All rights reserved.</div>
        </div>
      </footer>
      {/* WhatsApp Floating Button with Tooltip */}
      <div className="fixed bottom-8 right-8 flex items-center z-50 group">
        <div className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 mr-3 bg-[#25D366] text-white font-semibold px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-base pointer-events-none select-none">
          WhatsApp Us !
        </div>
        <a href="https://wa.me/254798888866" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] rounded-full p-4 shadow-lg hover:scale-110 transition group" aria-label="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="32" height="32"><path d="M20.52 3.48A12 12 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.7 0-3.36-.33-4.92-.98l-.35-.15-3.67.96.98-3.58-.18-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.03 2.9A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
        </a>
      </div>
    </div>
  );
}
