"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function AboutPage() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <main className="bg-[#f9f9f6]">
      {/* Navbar (from home page) */}
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
            <li><Link href="/" className="text-black/80 hover:text-black nav-tab relative">Home</Link></li>
            <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">Buy</a></li>
            <li><a href="#" className="text-black/80 hover:text-black nav-tab relative">Let</a></li>
            <li><Link href="/about" className="text-black font-semibold nav-tab relative" aria-label="About">About</Link></li>
            <li><Link href="/contact" className="text-black/80 hover:text-black nav-tab relative">Contact</Link></li>
            <li><Link href="/blog" className="text-black/80 hover:text-black nav-tab relative">Blog</Link></li>
          </ul>
          <a href="/book-reservation" className="ml-8 bg-gold text-black px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#bfa14a] hover:text-white transition whitespace-nowrap min-w-[170px] text-center">Book a Reservation</a>
        </div>
        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setNavOpen(false)}></div>
        <div className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-30 transform transition-transform duration-300 ${navOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col pt-24 px-6 gap-6 font-sans font-thin`}>
          <ul className="flex flex-col gap-6 text-lg font-semibold">
            <li><Link href="/" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Home</Link></li>
            <li><a href="#" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Buy</a></li>
            <li><a href="#" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Let</a></li>
            <li><Link href="/about" className="text-black nav-tab font-semibold" onClick={()=>setNavOpen(false)}>About</Link></li>
            <li><Link href="/contact" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Contact</Link></li>
            <li><Link href="/blog" className="text-black nav-tab font-thin" onClick={()=>setNavOpen(false)}>Blog</Link></li>
          </ul>
          <a href="/book-reservation" className="bg-gold text-black px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#bfa14a] hover:text-white transition whitespace-nowrap min-w-[170px] text-center font-thin" onClick={()=>setNavOpen(false)}>Book a Reservation</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#29532a] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold drop-shadow-lg">About The Ivy Group</h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            Redefining luxury living through elegant designs, premium locations, and exceptional craftsmanship. We are Kenya&apos;s premier real estate developers committed to creating homes that inspire.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 animate-fade-in-up">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-[#1d2b1a]">Our Story</h2>
            <p className="text-gray-700 mb-4">
              The Ivy Group stands as Kenya&apos;s premier real estate and property development company, specializing in luxury residences and modern lifestyle spaces. Our commitment to excellence has established us as leaders in delivering high-quality projects that seamlessly blend elegance, comfort, and long-term value.
            </p>
            <p className="text-gray-700 mb-6">
              From exclusive apartments in prime Nairobi locations to tailored real estate solutions, we have built our reputation on professionalism, integrity, and unwavering customer satisfaction.
            </p>
            <div className="flex gap-8 mt-6">
              <div>
                <div className="text-2xl font-bold text-[#29532a]">50+</div>
                <div className="text-gray-500 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#29532a]">1000+</div>
                <div className="text-gray-500 text-sm">Happy Families</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#29532a]">15+</div>
                <div className="text-gray-500 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/designs/IMG-20250709-WA0080.jpg"
              alt="Ivy Group Project"
              width={480}
              height={340}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
            <div className="absolute bottom-4 left-4 bg-[#e5c94a] text-[#1d2b1a] px-4 py-2 rounded-lg font-semibold shadow-md text-sm">
              Award Winning<br />Real Estate Developer
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section className="py-16 px-4 bg-[#f9f9f6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#1d2b1a]">Our Flagship Projects</h2>
          <p className="text-center text-gray-600 mb-10">
            Iconic developments across Nairobi&apos;s most prestigious locations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <Image src="/designs/IMG-20250709-WA0079.jpg" alt="Blossom Ivy" width={400} height={220} className="rounded-lg mb-4 object-cover w-full h-44" />
              <h3 className="font-bold text-lg mb-1">Blossom Ivy</h3>
              <div className="text-[#29532a] font-semibold mb-2">Kileleshwa</div>
              <p className="text-gray-600 text-sm">
                1, 2 &amp; 3 bedroom luxury apartments featuring modern amenities and elegant finishes
              </p>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <Image src="/designs/IMG-20250709-WA0081.jpg" alt="Luckin Ivy" width={400} height={220} className="rounded-lg mb-4 object-cover w-full h-44" />
              <h3 className="font-bold text-lg mb-1">Luckin Ivy</h3>
              <div className="text-[#29532a] font-semibold mb-2">Kilimani</div>
              <p className="text-gray-600 text-sm">
                Premium 2 &amp; 3 bedroom homes with lifestyle amenities in the heart of Kilimani
              </p>
            </div>
            {/* Project Card 3 */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <Image src="/designs/IMG-20250709-WA0082.jpg" alt="Ivy Park" width={400} height={220} className="rounded-lg mb-4 object-cover w-full h-44" />
              <h3 className="font-bold text-lg mb-1">Ivy Park</h3>
              <div className="text-[#29532a] font-semibold mb-2">Westlands</div>
              <p className="text-gray-600 text-sm">
                Sophisticated 3 &amp; 4 bedroom residences offering luxury living in prime Westlands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose The Ivy Group */}
      <section className="py-16 px-4 bg-[#29532a] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Why Choose The Ivy Group</h2>
          <p className="text-center mb-10 text-lg">
            Your trusted partner in luxury real estate
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <span className="bg-white/20 rounded-full p-3 text-2xl">📍</span>
              </div>
              <div className="font-bold mb-1">Prime Locations</div>
              <div className="text-sm">Strategic locations in Nairobi&apos;s most sought-after neighborhoods</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <span className="bg-white/20 rounded-full p-3 text-2xl">🏗️</span>
              </div>
              <div className="font-bold mb-1">Quality Construction</div>
              <div className="text-sm">Superior materials and craftsmanship in every project</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <span className="bg-white/20 rounded-full p-3 text-2xl">💡</span>
              </div>
              <div className="font-bold mb-1">Smart Investment</div>
              <div className="text-sm">Properties designed for long-term value appreciation</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <span className="bg-white/20 rounded-full p-3 text-2xl">🤝</span>
              </div>
              <div className="font-bold mb-1">Exceptional Service</div>
              <div className="text-sm">Dedicated support from inquiry to move-in and beyond</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-[#e9ede9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#1d2b1a]">Our Mission &amp; Vision</h2>
          <p className="text-center text-gray-600 mb-10">
            Driven by excellence and guided by integrity, we shape the future of luxury living in Kenya
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <span className="bg-[#29532a] text-white rounded-full p-4 mb-4 text-2xl">🎯</span>
              <h3 className="font-bold text-lg mb-2">Our Mission</h3>
              <p className="text-gray-600 text-center">
                To deliver exceptional real estate solutions that exceed expectations through innovative design, superior craftsmanship, and personalized service. We are committed to creating homes that not only provide comfort and luxury but also serve as sound investments for our clients&apos; future.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
              <span className="bg-[#e5c94a] text-[#1d2b1a] rounded-full p-4 mb-4 text-2xl">👁️</span>
              <h3 className="font-bold text-lg mb-2">Our Vision</h3>
              <p className="text-gray-600 text-center">
                To be Kenya&apos;s most trusted and innovative real estate developer, setting new standards for luxury living while contributing to sustainable urban development. We envision communities where elegance meets functionality, creating lasting value for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#1d2b1a]">Our Core Values</h2>
          <p className="text-center text-gray-600 mb-10">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <span className="bg-[#29532a] text-white rounded-full p-4 text-2xl">🏅</span>
              </div>
              <div className="font-bold mb-1">Excellence</div>
              <div className="text-sm text-gray-600">
                We pursue perfection in every detail, from design conception to final delivery, ensuring our projects meet the highest standards.
              </div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <span className="bg-[#e5c94a] text-[#1d2b1a] rounded-full p-4 text-2xl">🤝</span>
              </div>
              <div className="font-bold mb-1">Integrity</div>
              <div className="text-sm text-gray-600">
                Transparency and honesty form the foundation of our relationships with clients, partners, and communities.
              </div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <span className="bg-[#29532a] text-white rounded-full p-4 text-2xl">💡</span>
              </div>
              <div className="font-bold mb-1">Innovation</div>
              <div className="text-sm text-gray-600">
                We embrace cutting-edge design and technology to create modern living spaces that anticipate future needs.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section (from home page) */}
      <footer className="w-full bg-[#151c27] text-white pt-12 pb-4 px-4 border-t border-[#35521a]/30 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 pb-6 border-b border-white/10 animate-fade-in">
          {/* Brand & Description */}
          <div className="flex-1 min-w-[220px] flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-lg">
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
              <li><Link href="/" className="hover:text-[#bfa544]">Home</Link></li>
              <li><a href="#" className="hover:text-[#bfa544]">Buy</a></li>
              <li><a href="#" className="hover:text-[#bfa544]">Let</a></li>
              <li><Link href="/about" className="hover:text-[#bfa544]">About</Link></li>
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
              <a href="#" aria-label="Facebook" className="hover:text-[#bfa544]"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="hover:text-[#bfa544]"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="hover:text-[#bfa544]"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#bfa544]"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400 text-sm">
          <div>© {new Date().getFullYear()} The Ivy Group. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}