"use client";
import Link from "next/link";
import React, { useState } from 'react';
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function ContactPage() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-[#fcfbf7] via-[#f7f6f2] to-[#fcfbf7] min-h-screen flex flex-col">
      {/* Navbar */}
  <nav className="relative z-20 flex items-center justify-between w-full mt-0 px-4 md:px-8 py-3 bg-white/95 rounded-none shadow border-b border-gold/40 font-sans font-thin">
  <div className="flex items-center gap-3">
          <Image
            src="/designs/Ivy_logo.png"
            alt="Ivy Logo"
            width={48}
            height={48}
            className=""
            priority />
          <div className="flex flex-col leading-tight">
            <span className="ivy-logo-text">The Ivy Group</span>
            <span className="ivy-logo-subtitle">Premium Real Estate</span>
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
            <li>
              <Link href="/" className="text-black font-semibold nav-tab relative" aria-label="Home">Home</Link>
            </li>
            <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">Buy</a></li>
            <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">Let</a></li>
            <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">About</a></li>
            <li><a href="/contact" className="text-black/80 hover:text-black nav-tab relative">Contact</a></li>
            <li><a href="/blog" className="text-black/80 hover:text-black nav-tab relative">Blog</a></li>
          </ul>
          <a href="#" className="ml-8 bg-[#35521a] text-[#f7f7e7] px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#466c25] transition whitespace-nowrap min-w-[170px] text-center">Book a Reservation</a>
        </div>
        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>
  <div className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-30 transform transition-transform duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col pt-24 px-6 gap-6 font-sans font-thin`}>
          <ul className="flex flex-col gap-6 text-lg font-semibold">
            <li>
              <Link href="/" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)} aria-label="Home">Home</Link>
            </li>
            <li><a href="#" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Buy</a></li>
            <li><a href="#" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Let</a></li>
            <li><a href="#" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>About</a></li>
            <li><a href="/contact" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Contact</a></li>
            <li><a href="/blog" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Blog</a></li>
          </ul>
          <a href="#" className="mt-8 bg-gold text-white px-7 py-2 rounded-lg shadow font-semibold hover:bg-blue transition whitespace-nowrap min-w-[170px] text-center font-thin">Book a Reservation</a>
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

      {/* Top Section - For Inquiries */}
  <div className="relative w-full min-h-[350px] flex flex-col items-center justify-center bg-white font-sans font-thin bg-[url('/designs/contact-us-scaled-1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#133322]/80" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full py-16">
          <h1 className="text-5xl md:text-6xl font-thin text-gold mb-4 tracking-widest text-center drop-shadow-lg">FOR INQUIRIES</h1>
          <div className="flex items-center justify-center w-full mb-4">
            <div className="h-0.5 w-32 bg-gold mr-2" />
            <span className="text-gold text-2xl">★</span>
            <div className="h-0.5 w-32 bg-gold ml-2" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-navy text-lg font-thin tracking-widest mb-6 drop-shadow-lg">
            <span>+254 798 888 866</span>
            <span className="hidden md:inline">|</span>
            <span>+254 799 008 564</span>
            <span className="hidden md:inline">|</span>
            <span>info@theivygroup.co.ke</span>
          </div>
          <a href="https://wa.me/254798888866" target="_blank" rel="noopener noreferrer" className="bg-blue text-white font-thin px-8 py-3 rounded-full shadow-lg hover:bg-gold transition-all text-lg flex items-center gap-2 drop-shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24"><path fill="#25D366" d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.62 1.46 5.17L2 22l4.93-1.43A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18c-1.61 0-3.18-.39-4.57-1.13l-.33-.18-2.93.85.84-2.86-.21-.34A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8Zm4.29-5.71c-.23-.11-1.36-.67-1.57-.75-.21-.08-.36-.11-.51.11-.15.22-.59.75-.72.9-.13.15-.27.17-.5.06-.23-.11-.97-.36-1.85-1.13-.68-.6-1.13-1.34-1.26-1.56-.13-.22-.01-.35.1-.46.1-.1.23-.27.34-.41.11-.14.15-.24.23-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.23-.7-1.68-.19-.45-.38-.39-.53-.4-.14-.01-.3-.01-.46-.01-.16 0-.42.06-.64.29-.22.23-.84.84-.82 2.04.02 1.2.87 2.36 1 2.52.13.16 1.72 2.6 4.18 3.54.59.25 1.04.4 1.39.51.58.19 1.12.16 1.54.1.47-.07 1.41-.57 1.62-1.13.2-.56.2-1.03.14-1.13-.06-.1-.21-.16-.45-.28Z"/></svg>
            CHAT ON WHATSAPP
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 py-12 px-4">
        {/* Message Form */}
        <div className="bg-white/90 rounded-xl shadow-lg p-8 border border-gold">
          <h2 className="text-xl font-thin mb-6 text-gold drop-shadow-lg">Send us a message</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white" />
              <input type="text" placeholder="Last Name" className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white" />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white" />
            <input type="text" placeholder="Phone" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white" />
            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] text-gray-700 bg-white" title="Inquiry Type">
              <option>General Inquiry</option>
              <option>Sales</option>
              <option>Support</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white" />
            <button type="submit" className="w-full bg-[#39591c] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#2e4717] transition-all duration-200 shadow-md hover:shadow-lg scale-100 hover:scale-105">Send Message</button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-white/90 rounded-xl shadow-lg p-8 border border-[#e5d7a3]">
            <h2 className="text-xl font-extrabold mb-6 text-[#39591c] tracking-wide flex items-center gap-2">
              <FaMapMarkerAlt className="text-2xl text-[#bfa544]" /> Contact Information
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-[#bfa544] mt-1" />
                <div>
                  <div className="font-bold text-[#39591c] text-base">Address</div>
                  <div className="text-gray-700 text-sm">Gatundu Road, Kileleshwa, Nairobi</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl text-[#bfa544] mt-1" />
                <div>
                  <div className="font-bold text-[#39591c] text-base">Phone</div>
                  <div className="text-gray-700 text-sm">+254 798 888 866</div>
                  <div className="text-gray-700 text-sm">+254 799 008 564</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-[#bfa544] mt-1" />
                <div>
                  <div className="font-bold text-[#39591c] text-base">Email</div>
                  <div className="text-gray-700 text-sm">info@theivygroup.co.ke</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaClock className="text-2xl text-[#bfa544] mt-1" />
                <div>
                  <div className="font-bold text-[#39591c] text-base">Business Hours</div>
                  <div className="text-gray-700 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div className="text-gray-700 text-sm">Saturday: 10:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/90 rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-[#e5d7a3]">
            <h2 className="text-xl font-bold mb-2 text-gray-900">Follow Us</h2>
            <div className="flex gap-4 text-xl">
              <a href="#" className="text-[#39591c] hover:text-[#2e4717]" title="Twitter"><FaTwitter /></a>
              <a href="#" className="text-[#39591c] hover:text-[#2e4717]" title="Facebook"><FaFacebookF /></a>
              <a href="#" className="text-[#39591c] hover:text-[#2e4717]" title="Instagram"><FaInstagram /></a>
              <a href="#" className="text-[#39591c] hover:text-[#2e4717]" title="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="bg-[#39591c] rounded-xl shadow-lg p-6 text-white flex flex-col gap-4">
            <div className="font-bold text-lg">Need immediate assistance?</div>
            <div>Our support team is available 24/7 to help you with any urgent matters.</div>
            <a href="tel:+254798888866" className="inline-block bg-white text-[#39591c] font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition w-max">Call Now</a>
          </div>
        </div>
      </div>

      {/* Visit Our Office Section */}
      <div className="max-w-6xl w-full mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-[#133322] mb-2 text-center">Visit Our Office</h2>
        <p className="text-gray-700 text-center mb-8">We&apos;re located in the heart of Nairobi</p>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8271820880486!2d36.78276647496567!3d-1.27713609871072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170056423b43%3A0xac4d412392285ae0!2sBLOSSOM%20IVY%20RESIDENCE!5e0!3m2!1sen!2ske!4v1758788884873!5m2!1sen!2ske"
            width="100%"
            height="350"
            className="border-0 rounded-2xl min-h-[300px] max-w-[900px] w-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Blossom Ivy Residence Map"
          />
        </div>
      </div>

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
