"use client";


import Image from "next/image";
import GallerySection from "./GallerySection";
import { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";

const apartmentBgImages = [
  "/designs/IMG-20250710-WA0028.jpg",
  "/designs/IMG-20250710-WA0044.jpg",
  "/designs/IMG-20250710-WA0061.jpg",
  "/designs/IMG-20250827-WA0056.jpg",
];

function ApartmentCollectionsBgSlider() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex">
      {apartmentBgImages.map((img) => (
        <img
          key={img}
          src={img}
          alt="Apartment Background"
          className="object-cover flex-1 h-full w-1/4 opacity-80 transition-all duration-700"
        />
      ))}
      {/* Darker overlay for better readability */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}

export default function Home() {
  const videoUrl = "/designs/video_bg.mp4";
  return (
    <>
      {/* Landing Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#133322]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between w-full mt-0 px-8 py-3 bg-[#133322] rounded-none shadow border-b border-[#35521a]/40">
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
          <div className="flex flex-1 items-center">
            <ul className="flex flex-1 justify-center items-center gap-6 text-base font-medium">
              <li><a href="#" className="text-[#f7f7e7] font-semibold nav-tab relative">Home</a></li>
              <li><a href="#" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">Buy</a></li>
              <li><a href="#" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">Let</a></li>
              <li><a href="#" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">About</a></li>
              <li><a href="#" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">Contact</a></li>
              <li><a href="#" className="text-[#f7f7e7]/80 hover:text-[#f7f7e7] nav-tab relative">Blog</a></li>
            </ul>
            <a href="#" className="ml-8 bg-[#35521a] text-[#f7f7e7] px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#466c25] transition whitespace-nowrap min-w-[170px] text-center">Book a Reservation</a>
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
        {/* Hero Section */}
  <main className="relative z-20 flex flex-col items-center justify-center w-full flex-1 pt-1 md:pt-2 pb-10 min-h-[calc(100vh-80px)]">
          <div className="flex flex-col items-center w-full max-w-2xl rounded-xl px-6 py-6 mt-0 shadow-lg absolute left-1/2 -translate-x-1/2 top-2 md:top-6">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#2d2d2d] text-center drop-shadow-2xl mb-4 font-serif whitespace-nowrap" style={{ fontFamily: 'Merriweather, Times New Roman, Times, serif' }}>
              Welcome to The Ivy Group
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-[#35521a] text-white px-8 py-3 rounded-lg font-bold text-lg shadow hover:bg-[#466c25] transition">Explore Properties</a>
              <a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg shadow hover:bg-white hover:text-[#35521a] transition">Book Viewing</a>
            </div>
          </div>
        </main>
      </section>

      {/* Premium Locations Section */}
  <section className="relative z-10 w-full flex flex-col items-center py-20 bg-white/95">
  <h2 className="text-3xl md:text-4xl font-bold text-[#35521a] text-center mb-2">Our Premium Locations</h2>
  <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
          Three exceptional developments across Nairobi&apos;s most prestigious neighborhoods
        </p>
        <div className="w-full max-w-6xl flex gap-8 px-4 justify-center">
          {/* Blossoms Ivy Card */}
          <div className="relative group bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden">
            {/* Hover background image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0" style={{backgroundImage: 'url(/designs/Blossom Ivy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
            <div className="relative z-10 w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/16_KCGV_Blossom Ivy_Play_Area1.png" alt="Blossoms Ivy" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#35521a] mb-1 relative z-10">Blossoms Ivy</h3>
            <div className="text-gray-700 font-medium mb-2 relative z-10">Kileleshwa</div>
            <p className="text-gray-600 mb-6 relative z-10">Elegant apartments in the heart of Kileleshwa, offering tranquil living with urban convenience.</p>
            <a href="#" className="bg-[#35521a] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#466c25] transition relative z-10">Explore Blossoms</a>
          </div>
          {/* Luckinn Ivy Card */}
          <div className="relative group bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden">
            {/* Hover background image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0" style={{backgroundImage: 'url(/designs/Luckinn Ivy.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
            <div className="relative z-10 w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/Exterior_04_IA.png" alt="Luckinn Ivy" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#35521a] mb-1 relative z-10">Luckinn Ivy</h3>
            <div className="text-gray-700 font-medium mb-2 relative z-10">Westlands</div>
            <p className="text-gray-600 mb-6 relative z-10">Contemporary living spaces in vibrant Westlands, perfect for modern professionals and families.</p>
            <a href="#" className="bg-[#35521a] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#466c25] transition relative z-10">Explore Luckin</a>
          </div>
          {/* Ivy Park Card */}
          <div className="relative group bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden">
            {/* Hover background image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-0" style={{backgroundImage: 'url(/designs/Ivy Park.png)', backgroundSize: 'cover', backgroundPosition: 'center'}} />
            <div className="relative z-10 w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/Exterior_07_IA.png" alt="Ivy Park" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#35521a] mb-1 relative z-10">Ivy Park</h3>
            <div className="text-gray-700 font-medium mb-2 relative z-10">Kilimani</div>
            <p className="text-gray-600 mb-6 relative z-10">Sophisticated residences in prestigious Kilimani, combining luxury with accessibility.</p>
            <a href="#" className="bg-[#35521a] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#466c25] transition relative z-10">Explore Ivy Park</a>
          </div>
        </div>
      </section>

      {/* Apartment Collections Section */}
  <section className="w-full flex flex-col items-center py-20 bg-[#fcfbf7]">
  <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 text-center mb-2 tracking-wide">Apartment Collections</h2>
  {/* Apartment Collections: soft cream background */}
    <div className="flex items-center justify-center w-full mb-8">
      <div className="h-0.5 w-32 bg-[#e5d7a3] mr-2" />
      <span className="text-[#e5d7a3] text-2xl">★</span>
      <div className="h-0.5 w-32 bg-[#e5d7a3] ml-2" />
    </div>
    <p className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto">Choose from our range of meticulously designed living spaces</p>
    <div className="w-full max-w-7xl flex flex-row flex-wrap gap-8 px-0 justify-start">
      {/* 1-Bedroom */}
      <div className="relative rounded-xl overflow-hidden shadow-xl w-[270px] h-[270px] flex items-center justify-center group">
        <Image src="/designs/IMG-20250709-WA0082.jpg" alt="1 Bedroom" fill className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300 flex flex-col items-center justify-center">
          <span className="text-white text-lg font-semibold tracking-wide mb-6">1 BEDROOM</span>
          <button className="bg-[#e5d7a3] text-[#222] font-bold px-7 py-2 rounded-full shadow hover:bg-[#d6c07a] transition text-base">EXPLORE</button>
        </div>
      </div>
      {/* 2-Bedroom */}
      <div className="relative rounded-xl overflow-hidden shadow-xl w-[270px] h-[270px] flex items-center justify-center group">
        <Image src="/designs/IMG-20250709-WA0083.jpg" alt="2 Bedroom" fill className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300 flex flex-col items-center justify-center">
          <span className="text-white text-lg font-semibold tracking-wide mb-6">2 BEDROOM</span>
          <button className="bg-[#e5d7a3] text-[#222] font-bold px-7 py-2 rounded-full shadow hover:bg-[#d6c07a] transition text-base">EXPLORE</button>
        </div>
      </div>
      {/* 3-Bedroom */}
      <div className="relative rounded-xl overflow-hidden shadow-xl w-[270px] h-[270px] flex items-center justify-center group">
        <Image src="/designs/IMG-20250709-WA0084.jpg" alt="3 Bedroom" fill className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300 flex flex-col items-center justify-center">
          <span className="text-white text-lg font-semibold tracking-wide mb-6">3 BEDROOM</span>
          <button className="bg-[#e5d7a3] text-[#222] font-bold px-7 py-2 rounded-full shadow hover:bg-[#d6c07a] transition text-base">EXPLORE</button>
        </div>
      </div>
      {/* 4-Bedroom */}
      <div className="relative rounded-xl overflow-hidden shadow-xl w-[270px] h-[270px] flex items-center justify-center group">
        <Image src="/designs/IMG-20250709-WA0085.jpg" alt="4 Bedroom" fill className="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-300 flex flex-col items-center justify-center">
          <span className="text-white text-lg font-semibold tracking-wide mb-6">4 BEDROOM</span>
          <button className="bg-[#e5d7a3] text-[#222] font-bold px-7 py-2 rounded-full shadow hover:bg-[#d6c07a] transition text-base">EXPLORE</button>
        </div>
      </div>
    </div>
  </section>

      {/* Gallery Section */}
  {/* Gallery Section - Modern Card Style */}
  <section className="w-full flex flex-col items-center py-20 bg-[#f7f7fa]">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 text-center mb-2 tracking-wide">Gallery</h2>
        <div className="flex items-center justify-center w-full mb-8">
          <div className="h-0.5 w-32 bg-[#e5d7a3] mr-2" />
          <span className="text-[#e5d7a3] text-2xl">★</span>
          <div className="h-0.5 w-32 bg-[#e5d7a3] ml-2" />
        </div>
        <p className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto">Explore our stunning apartment renders and completed projects</p>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Gallery Images - Use the same images as before */}
          <GalleryCard img="/designs/IMG-20250709-WA0079.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0080.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0081.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0082.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0083.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0084.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0085.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0086.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0087.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0088.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0089.jpg" />
          <GalleryCard img="/designs/IMG-20250709-WA0090.jpg" />
        </div>
      </section>

      {/* Get In Touch Section - Modern Card Style */}
  {/* Get In Touch Section: light sage background */}
  <section className="w-full py-24 flex flex-col items-center justify-center bg-[#f6f9f6]">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 text-center mb-2 tracking-wide">Get in touch</h2>
        <div className="flex items-center justify-center w-full mb-8">
          <div className="h-0.5 w-32 bg-[#e5d7a3] mr-2" />
          <span className="text-[#e5d7a3] text-2xl">★</span>
          <div className="h-0.5 w-32 bg-[#e5d7a3] ml-2" />
        </div>
        <p className="text-lg text-gray-500 text-center mb-16 max-w-2xl mx-auto">Subscribe to our newsletters to be the first to hear the latest news about what is happening in the real estate market.</p>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-12">
          {/* Email Card */}
          <div className="bg-[#faf9f5] rounded-2xl shadow-xl p-8 flex flex-col items-start transition hover:shadow-2xl">
            <span className="text-4xl mb-4 text-[#d6c07a]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#d6c07a" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.591 7.591a2.25 2.25 0 01-3.182 0L2.909 8.584A2.25 2.25 0 012.25 6.993V6.75" /></svg>
            </span>
            <div className="text-xl font-serif font-semibold text-gray-900 mb-2">SEND US AN EMAIL</div>
            <div className="text-gray-600 mb-2">Email Via:</div>
            <div className="text-base font-medium text-gray-700 mb-4">info@theivygroup.co.ke</div>
            <div className="h-1 w-16 bg-[#e5d7a3] mb-2" />
            <a href="mailto:info@theivygroup.co.ke" className="text-[#d6c07a] font-bold mt-2 hover:underline">Get in touch</a>
          </div>
          {/* Call Card */}
          <div className="bg-[#faf9f5] rounded-2xl shadow-xl p-8 flex flex-col items-start transition hover:shadow-2xl">
            <span className="text-4xl mb-4 text-[#d6c07a]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#d6c07a" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0v.243a2.25 2.25 0 00.659 1.591l7.591 7.591a2.25 2.25 0 003.182 0l7.591-7.591A2.25 2.25 0 0021.75 6.993V6.75" /></svg>
            </span>
            <div className="text-xl font-serif font-semibold text-gray-900 mb-2">CALL US</div>
            <div className="text-gray-600 mb-2">Call our sales representative via</div>
            <div className="text-base font-medium text-gray-700 mb-4">+254 700 000 000</div>
            <div className="h-1 w-16 bg-[#e5d7a3] mb-2" />
            <a href="tel:+254700000000" className="text-[#d6c07a] font-bold mt-2 hover:underline">Get in touch</a>
          </div>
          {/* Visit Card */}
          <div className="bg-[#faf9f5] rounded-2xl shadow-xl p-8 flex flex-col items-start transition hover:shadow-2xl">
            <span className="text-4xl mb-4 text-[#d6c07a]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#d6c07a" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z" /></svg>
            </span>
            <div className="text-xl font-serif font-semibold text-gray-900 mb-2">VISIT OUR OFFICES</div>
            <div className="text-gray-600 mb-2">Westlands, Nairobi, Kenya</div>
            <div className="h-1 w-16 bg-[#e5d7a3] mb-2" />
            <a href="#" className="text-[#d6c07a] font-bold mt-2 hover:underline">Visit Us</a>
          </div>
        </div>
        <div className="w-full flex justify-center mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8271820880486!2d36.78276647496567!3d-1.27713609871072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f170056423b43%3A0xac4d412392285ae0!2sBLOSSOM%20IVY%20RESIDENCE!5e0!3m2!1sen!2ske!4v1758788884873!5m2!1sen!2ske"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '1rem', minHeight: '300px', maxWidth: '900px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Blossom Ivy Residence Map"
          />
        </div>
      </section>
      {/* Footer Section */}
      <footer className="w-full bg-[#151c27] text-white pt-12 pb-4 px-4 border-t border-[#35521a]/30 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 pb-6 border-b border-white/10">
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
          {/* WhatsApp Floating Button with Tooltip */}
          <div className="fixed bottom-8 right-8 flex items-center z-50 group">
            <div className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 mr-3 bg-[#25D366] text-white font-semibold px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-base pointer-events-none select-none">
              WhatsApp Us !
            </div>
            <a href="#" className="bg-[#25D366] rounded-full p-4 shadow-lg hover:scale-110 transition group" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="32" height="32"><path d="M20.52 3.48A12 12 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.7 0-3.36-.33-4.92-.98l-.35-.15-3.67.96.98-3.58-.18-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.03 2.9A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
