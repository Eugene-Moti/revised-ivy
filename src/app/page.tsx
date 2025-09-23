"use client";


import Image from "next/image";
import GallerySection from "./GallerySection";
import { useState, useEffect } from "react";

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
      <section className="relative min-h-screen flex flex-col overflow-hidden">
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
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between w-full mt-0 px-8 py-3 bg-white/90 rounded-none shadow border-b border-gray-200">
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
              <span className="text-2xl font-bold text-[#35521a] leading-6">The Ivy Group</span>
              <span className="text-xs text-gray-600 font-medium">Premium Real Estate</span>
            </div>
          </div>
          <ul className="flex items-center gap-6 text-base font-medium">
            <li><a href="#" className="text-[#35521a] font-semibold">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#35521a]">Buy</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#35521a]">Let</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#35521a]">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-[#35521a]">Contact</a></li>
            <li>
              <a href="#" className="bg-[#35521a] text-white px-5 py-2 rounded-lg shadow font-semibold hover:bg-[#466c25] transition">Reservation</a>
            </li>
            <li><a href="#" className="text-gray-700 hover:text-[#35521a]">Blog</a></li>
          </ul>
        </nav>
        {/* Hero Section */}
        <main className="relative z-20 flex flex-col items-center justify-center w-full flex-1 py-32 min-h-[calc(100vh-80px)]">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center drop-shadow-lg mb-6">
            Welcome to The Ivy Group
          </h1>
          <p className="text-xl md:text-2xl text-white text-center max-w-2xl drop-shadow mb-8">
            Premium real estate solutions across Kileleshwa, Westlands, and Kilimani. Experience luxury living at its finest with our carefully curated apartment collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-[#35521a] text-white px-8 py-3 rounded-lg font-bold text-lg shadow hover:bg-[#466c25] transition">Explore Properties</a>
            <a href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg shadow hover:bg-white hover:text-[#35521a] transition">Book Viewing</a>
          </div>
        </main>
      </section>

      {/* Premium Locations Section */}
      <section className="relative z-10 w-full flex flex-col items-center py-20 bg-white/95">
        <h2 className="text-3xl md:text-4xl font-bold text-[#35521a] text-center mb-2">Our Premium Locations</h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
          Three exceptional developments across Nairobi&apos;s most prestigious neighborhoods
        </p>
        <div className="w-full max-w-6xl flex overflow-x-auto gap-8 px-4 animate-horizontal-scroll">
          {/* Blossoms Ivy Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover-animate-shake">
            <div className="w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/16_KCGV_Blossom Ivy_Play_Area1.png" alt="Blossoms Ivy" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#35521a] mb-1">Blossoms Ivy</h3>
            <div className="text-gray-700 font-medium mb-2">Kileleshwa</div>
            <p className="text-gray-600 mb-6">Elegant apartments in the heart of Kileleshwa, offering tranquil living with urban convenience.</p>
            <a href="#" className="bg-[#35521a] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#466c25] transition">Explore Blossoms</a>
          </div>
          {/* Luckin Ivy Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover-animate-shake">
            <div className="w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/Exterior_04_IA.png" alt="Luckin Ivy" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#35521a] mb-1">Luckin Ivy</h3>
            <div className="text-gray-700 font-medium mb-2">Westlands</div>
            <p className="text-gray-600 mb-6">Contemporary living spaces in vibrant Westlands, perfect for modern professionals and families.</p>
            <a href="#" className="bg-[#35521a] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#466c25] transition">Explore Luckin</a>
          </div>
          {/* Ivy Park Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover-animate-shake">
            <div className="w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/Exterior_07_IA.png" alt="Ivy Park" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-[#35521a] mb-1">Ivy Park</h3>
            <div className="text-gray-700 font-medium mb-2">Kilimani</div>
            <p className="text-gray-600 mb-6">Sophisticated residences in prestigious Kilimani, combining luxury with accessibility.</p>
            <a href="#" className="bg-[#35521a] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#466c25] transition">Explore Ivy Park</a>
          </div>
        </div>
      </section>
      {/* Horizontal scroll animation for Premium Locations */}
      <style>{`
        @keyframes horizontal-scroll {
          0% { transform: translateX(0); }
          20% { transform: translateX(0); }
          40% { transform: translateX(-33%); }
          60% { transform: translateX(-66%); }
          80% { transform: translateX(-33%); }
          100% { transform: translateX(0); }
        }
        .animate-horizontal-scroll {
          animation: horizontal-scroll 18s linear infinite;
        }
      `}</style>

      {/* Apartment Collections Section */}
      <section className="relative w-full flex flex-col items-center py-20 bg-[#f7f7f7] overflow-hidden">
        {/* Apartment Collections Background Image Slider */}
        <ApartmentCollectionsBgSlider />
        <h2 className="text-3xl md:text-4xl font-bold text-[#35521a] text-center mb-2 drop-shadow-lg">Apartment Collections</h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl">
          Choose from our range of meticulously designed living spaces
        </p>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 px-8 xl:px-16">
          {/* 1-Bedroom Apartments */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover-animate-shake">
            <div className="w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/IMG-20250710-WA0028.jpg" alt="1-Bedroom Apartment" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-[#35521a] mb-1">1-Bedroom Apartments</h3>
            <div className="text-[#bfa544] font-bold text-lg mb-2">From KSh 6.5M</div>
            <p className="text-gray-600 mb-4">Modern 1-bedroom units ideal for singles or couples, featuring open-plan living and stylish finishes.</p>
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
              <span>1 Bedroom</span>
              <span>1 Bathroom</span>
              <span>50-80 sqm</span>
            </div>
            <div className="flex gap-3 w-full">
              <button className="bg-[#35521a] text-white px-4 py-2 rounded-lg font-semibold flex-1">View Floor Plan</button>
              <button className="border border-[#35521a] text-[#35521a] px-4 py-2 rounded-lg font-semibold flex-1">Download Brochure</button>
            </div>
          </div>
          {/* 2-Bedroom Apartments */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover-animate-shake">
            <div className="w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/IMG-20250710-WA0044.jpg" alt="2-Bedroom Apartment" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-[#35521a] mb-1">2-Bedroom Apartments</h3>
            <div className="text-[#bfa544] font-bold text-lg mb-2">From KSh 8.5M</div>
            <p className="text-gray-600 mb-4">Spacious 2-bedroom units perfect for small families or professionals. Features include modern kitchen, ensuite bathrooms, and private balconies.</p>
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
              <span>2 Bedrooms</span>
              <span>2 Bathrooms</span>
              <span>85-120 sqm</span>
            </div>
            <div className="flex gap-3 w-full">
              <button className="bg-[#35521a] text-white px-4 py-2 rounded-lg font-semibold flex-1">View Floor Plan</button>
              <button className="border border-[#35521a] text-[#35521a] px-4 py-2 rounded-lg font-semibold flex-1">Download Brochure</button>
            </div>
          </div>
          {/* 3-Bedroom Apartments */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover-animate-shake">
            <div className="w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/IMG-20250710-WA0061.jpg" alt="3-Bedroom Apartment" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-[#35521a] mb-1">3-Bedroom Apartments</h3>
            <div className="text-[#bfa544] font-bold text-lg mb-2">From KSh 12.5M</div>
            <p className="text-gray-600 mb-4">Premium 3-bedroom units with master ensuite, family bathroom, open-plan living, and stunning city views.</p>
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
              <span>3 Bedrooms</span>
              <span>3 Bathrooms</span>
              <span>120-150 sqm</span>
            </div>
            <div className="flex gap-3 w-full">
              <button className="bg-[#35521a] text-white px-4 py-2 rounded-lg font-semibold flex-1">View Floor Plan</button>
              <button className="border border-[#35521a] text-[#35521a] px-4 py-2 rounded-lg font-semibold flex-1">Download Brochure</button>
            </div>
          </div>
          {/* 4-Bedroom Apartments */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start w-[340px] xl:w-[370px] transition-transform duration-300 ease-in-out hover-animate-shake">
            <div className="w-full h-36 mb-4 overflow-hidden rounded-xl">
              <img src="/designs/IMG-20250827-WA0056.jpg" alt="4-Bedroom Apartment" className="object-cover w-full h-full" />
            </div>
            <h3 className="text-xl font-bold text-[#35521a] mb-1">4-Bedroom Apartments</h3>
            <div className="text-[#bfa544] font-bold text-lg mb-2">From KSh 16.5M</div>
            <p className="text-gray-600 mb-4">Expansive 4-bedroom apartments for larger families, featuring luxury finishes, multiple balconies, and ample living space.</p>
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
              <span>4 Bedrooms</span>
              <span>4 Bathrooms</span>
              <span>150-200 sqm</span>
            </div>
            <div className="flex gap-3 w-full">
              <button className="bg-[#35521a] text-white px-4 py-2 rounded-lg font-semibold flex-1">View Floor Plan</button>
              <button className="border border-[#35521a] text-[#35521a] px-4 py-2 rounded-lg font-semibold flex-1">Download Brochure</button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />
    </>
  );
}
