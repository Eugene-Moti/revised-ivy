"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function AboutPage() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <main className="bg-[#f9f9f6] flex flex-col">
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
    </main>
  );
}