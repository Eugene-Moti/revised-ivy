"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BuyPage() {
  const properties = [
    {
      name: "Blossom Ivy",
      description: "A luxurious residential complex offering modern living spaces with premium amenities.",
      image: "/designs/Blossom Ivy.jpg",
      rooms: [
        { type: "2 Bedrooms", price: "Starting from $500,000" },
        { type: "3 Bedrooms", price: "Starting from $700,000" },
        { type: "4 Bedrooms", price: "Starting from $900,000" },
        { type: "Penthouse", price: "Starting from $1,200,000" }
      ]
    },
    {
      name: "Luckinn Ivy",
      description: "Elegant apartments designed for comfort and style, featuring state-of-the-art facilities.",
      image: "/designs/Luckinn Ivy.jpg",
      rooms: [
        { type: "2 Bedrooms", price: "Starting from $450,000" },
        { type: "3 Bedrooms", price: "Starting from $650,000" },
        { type: "4 Bedrooms", price: "Starting from $850,000" },
        { type: "Penthouse", price: "Starting from $1,100,000" }
      ]
    },
    {
      name: "Ivy Park",
      description: "Spacious homes in a serene park setting, perfect for families seeking tranquility.",
      image: "/designs/Ivy Park.png",
      rooms: [
        { type: "2 Bedrooms", price: "Starting from $400,000" },
        { type: "3 Bedrooms", price: "Starting from $600,000" },
        { type: "4 Bedrooms", price: "Starting from $800,000" },
        { type: "Penthouse", price: "Starting from $1,000,000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf7]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#fcfbf7] to-[#f5f3e8] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated SVG House Icon */}
          <div className="mb-8">
            <svg
              width="300"
              height="225"
              viewBox="0 0 200 150"
              className="mx-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* House outline path */}
              <path
                d="M50 100 L50 130 L150 130 L150 100 L100 50 Z M70 130 L70 110 L90 110 L90 130 Z M110 130 L110 110 L130 110 L130 130 Z"
                fill="none"
                stroke="#bfa14a"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="house-draw"
                style={{
                  strokeDasharray: '400',
                  strokeDashoffset: '400',
                  animation: 'drawHouse 3s ease-in-out infinite',
                }}
              />
              {/* Roof */}
              <path
                d="M100 50 L50 100 L150 100 Z"
                fill="none"
                stroke="#bfa14a"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="roof-draw"
                style={{
                  strokeDasharray: '150',
                  strokeDashoffset: '150',
                  animation: 'drawRoof 3s ease-in-out 0.5s infinite',
                }}
              />
            </svg>
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-gray-800 mb-4">
            BUY YOUR DREAM HOME
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exceptional properties from our premium collection. Choose from a variety of room types and find the perfect home for you.
          </p>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-center text-gray-800 mb-12">
            Our Properties
          </h2>

          <div className="space-y-16">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Image
                      src={property.image}
                      alt={property.name}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <h3 className="text-2xl font-bold font-serif text-gray-800 mb-4">
                      {property.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {property.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      {property.rooms.map((room, roomIndex) => (
                        <div key={roomIndex} className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="font-semibold text-gray-800">{room.type}</span>
                          <span className="text-gray-600">{room.price}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/get-in-touch"
                      className="inline-block bg-[#bfa14a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a68a3f] transition-colors"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#bfa14a] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our team today to learn more about our properties and start your journey to homeownership.
          </p>
          <Link
            href="/get-in-touch"
            className="inline-block bg-white text-[#bfa14a] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes drawHouse {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes drawRoof {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
