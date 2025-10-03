"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// Modal Contact Form (copied from home page for consistency, can be refactored to a component)
function ContactFormModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in-fast" onClick={onClose}>
      <div
        className="bg-gradient-to-br from-[#f7faf7] to-[#e9ede9] rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 relative animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-[#39591c] text-2xl font-bold transition"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold text-[#39591c] mb-6 text-center">Get In Touch</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white/90" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white/90" />
          <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white/90" />
          <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c] placeholder:text-gray-500 bg-white/90" />
          <button type="submit" className="w-full bg-[#39591c] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#2e4717] transition-all duration-200 shadow-md hover:shadow-lg scale-100 hover:scale-105">Send Message</button>
        </form>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    id: 1,
    image: "/designs/IMG-20250710-WA0028.jpg",
    category: ["Featured", "Market Analysis"],
    date: "December 15, 2023",
    title: "Luxury Real Estate Market Outlook 2024: Investment Opportunities in Prime Locations",
    summary:
      "Our comprehensive analysis reveals emerging trends in luxury property markets, highlighting key investment opportunities and market dynamics that savvy investors should consider.",
    author: {
      name: "Sarah Mitchell",
      role: "Senior Market Analyst",
      avatar: "/designs/IMG-20250710-WA0044.jpg",
    },
    featured: true,
  },
  {
    id: 2,
    image: "/designs/IMG-20250710-WA0044.jpg",
    category: ["Investment Tips"],
    date: "Dec 12, 2023",
    title: "5 Key Factors When Investing in Luxury Condominiums",
    summary:
      "Discover the essential considerations for making profitable investments in premium condominium properties.",
    author: {
      name: "Michael Chen",
      role: "Market Analyst",
      avatar: "/designs/IMG-20250710-WA0061.jpg",
    },
  },
  {
    id: 3,
    image: "/designs/IMG-20250710-WA0061.jpg",
    category: ["Property Guides"],
    date: "Dec 10, 2023",
    title: "First-Time Luxury Home Buyer's Complete Guide",
    summary:
      "Navigate the luxury real estate market with confidence using our comprehensive buyer's guide.",
    author: {
      name: "Emma Rodriguez",
      role: "Property Consultant",
      avatar: "/designs/IMG-20250827-WA0056.jpg",
    },
  },
  {
    id: 4,
    image: "/designs/IMG-20250827-WA0056.jpg",
    category: ["Luxury Lifestyle"],
    date: "Dec 8, 2023",
    title: "The Art of Luxury Living: Penthouse Design Trends",
    summary:
      "Explore the latest design trends shaping luxury penthouse living in metropolitan areas.",
    author: {
      name: "David Park",
      role: "Lifestyle Editor",
      avatar: "/designs/IMG-20250710-WA0028.jpg",
    },
  },
  {
    id: 5,
    image: "/designs/IMG-20250710-WA0028.jpg",
    category: ["Legal & Finance"],
    date: "Dec 5, 2023",
    title: "Understanding Luxury Property Tax Implications",
    summary:
      "Navigate the complex tax landscape of luxury real estate investments with expert insights.",
    author: {
      name: "Robert Johnson",
      role: "Tax Specialist",
      avatar: "/designs/IMG-20250710-WA0044.jpg",
    },
  },
  {
    id: 6,
    image: "/designs/IMG-20250710-WA0044.jpg",
    category: ["Market Analysis"],
    date: "Dec 3, 2023",
    title: "Smart Homes: The Future of Luxury Real Estate",
    summary:
      "How smart home technology is revolutionizing luxury property values and buyer preferences.",
    author: {
      name: "Lisa Thompson",
      role: "Tech Analyst",
      avatar: "/designs/IMG-20250710-WA0061.jpg",
    },
  },
  {
    id: 7,
    image: "/designs/IMG-20250710-WA0061.jpg",
    category: ["Investment Tips"],
    date: "Dec 1, 2023",
    title: "Waterfront Properties: Investment Potential Analysis",
    summary:
      "Evaluating the long-term investment potential of premium waterfront real estate properties.",
    author: {
      name: "Alex Morgan",
      role: "Senior Analyst",
      avatar: "/designs/IMG-20250827-WA0056.jpg",
    },
  },
];

const categories = [
  "All Posts",
  "Market Analysis",
  "Investment Tips",
  "Property Guides",
  "Luxury Lifestyle",
  "Legal & Finance",
];

export default function BlogPage() {
  const [selected, setSelected] = useState("All Posts");
  const [navOpen, setNavOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  return (
    <div className="bg-gradient-to-b from-[#fcfbf7] via-[#f7f6f2] to-[#fcfbf7] min-h-screen">
      {/* Main Blog Content */}
      <>
      {/* Navbar (copied from home page) */}
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
          <a href="/book-reservation" className="ml-8 bg-gold text-black px-7 py-2 rounded-lg shadow font-semibold hover:bg-[#bfa14a] hover:text-white transition whitespace-nowrap min-w-[170px] text-center">Book a Reservation</a>
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
      {/* Hero/Intro Section */}
      <section className="w-full bg-gradient-to-br from-[#fcfbf7] to-[#f7f6f2] border-b border-[#f2f1ec] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold text-[#232e47] mb-4 leading-tight animate-fade-in-up">Real Estate Insights & Market Intelligence</h1>
          <p className="text-lg text-[#6b7280] mb-6 animate-fade-in-up delay-100">Stay informed with expert analysis, market trends, and luxury property insights from The Ivy Group&apos;s premium real estate specialists.</p>
          <div className="flex gap-6 text-[#bfa14a] text-base mb-2 animate-fade-in-up delay-200">
            <span className="flex items-center gap-2"><span className="inline-block w-5 h-5">📅</span> Updated Weekly</span>
            <span className="flex items-center gap-2"><span className="inline-block w-5 h-5">👑</span> Expert Contributors</span>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in-up">
          <div className="flex gap-2 mb-2">
            <span className="bg-[#e5d7a3] text-[#232e47] text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
            <span className="bg-[#f7f6f2] text-[#bfa14a] text-xs font-semibold px-3 py-1 rounded-full">Market Analysis</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#232e47] mb-2 leading-snug">Luxury Real Estate Market Outlook 2024: Investment Opportunities in Prime Locations</h2>
          <p className="text-[#6b7280] mb-4">Our comprehensive analysis reveals emerging trends in luxury property markets, highlighting key investment opportunities and market dynamics that savvy investors should consider.</p>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/designs/IMG-20250710-WA0044.jpg" alt="Sarah Mitchell" width={40} height={40} className="rounded-full" />
            <div>
              <div className="font-semibold text-[#232e47] text-sm">Sarah Mitchell</div>
              <div className="text-xs text-[#6b7280]">Senior Market Analyst</div>
            </div>
            <span className="text-xs text-[#6b7280] ml-4">December 15, 2023</span>
          </div>
          <button className="bg-[#232323] text-white px-6 py-2 rounded shadow hover:bg-[#bfa14a] hover:text-[#232e47] transition-all duration-200 animate-fade-in-up">Read Full Article</button>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in-up delay-100">
          <Image src="/designs/IMG-20250710-WA0028.jpg" alt="Featured Property" width={600} height={350} className="object-cover w-full h-full" />
        </div>
      </section>

      {/* Category Chips */}
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-3 mb-10 animate-fade-in-up delay-200">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-150 ${selected === cat ? "bg-[#e5d7a3] text-[#232e47] border-[#e5d7a3] shadow" : "bg-white text-[#6b7280] border-[#e5d7a3] hover:bg-[#f7f6f2]"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {blogPosts
          .filter((post) => selected === "All Posts" || post.category.includes(selected))
          .map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
            >
              <div className="relative w-full h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-2 flex-wrap">
                  {post.category.map((cat) => (
                    <span key={cat} className="bg-[#f7f6f2] text-[#bfa14a] text-xs font-semibold px-3 py-1 rounded-full">{cat}</span>
                  ))}
                  <span className="text-xs text-[#6b7280] ml-auto">{post.date}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#232e47] mb-1 leading-snug">{post.title}</h3>
                <p className="text-[#6b7280] mb-4 flex-1">{post.summary}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image src={post.author.avatar} alt={post.author.name} width={32} height={32} className="rounded-full" />
                  <div>
                    <div className="font-semibold text-[#232e47] text-sm">{post.author.name}</div>
                    <div className="text-xs text-[#6b7280]">{post.author.role}</div>
                  </div>
                </div>
                <button className="mt-4 bg-[#232323] text-white px-5 py-2 rounded shadow hover:bg-[#bfa14a] hover:text-[#232e47] transition-all duration-200">Read Full Article</button>
              </div>
            </div>
          ))}
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-[#232323] py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Stay Ahead of the Market</h2>
        <p className="text-white/80 mb-6">Subscribe to our weekly newsletter for exclusive market insights, property alerts, and investment opportunities.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email address" className="px-5 py-3 rounded-lg border border-[#e5d7a3] bg-white/90 text-[#232e47] flex-1 focus:outline-none focus:ring-2 focus:ring-gold" />
          <button type="submit" className="bg-[#e5d7a3] text-[#232e47] font-semibold px-8 py-3 rounded-lg shadow hover:bg-[#bfa14a] transition-all duration-200">Subscribe</button>
        </form>
        <div className="text-white/60 text-xs mt-3">No spam. Unsubscribe at any time.</div>
      </section>

      {/* Footer */}
      {/* Footer Section (copied from home page) */}
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
      {/* WhatsApp Floating Button with Tooltip */}
      <div className="fixed bottom-8 right-8 flex items-center z-50 group">
        <div className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 mr-3 bg-[#25D366] text-white font-semibold px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-base pointer-events-none select-none">
          WhatsApp Us !
        </div>
        <a href="https://wa.me/254798888866" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] rounded-full p-4 shadow-lg hover:scale-110 transition group" aria-label="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="32" height="32"><path d="M20.52 3.48A12 12 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.7 0-3.36-.33-4.92-.98l-.35-.15-3.67.96.98-3.58-.18-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.03 2.9A9.94 9.94 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
        </a>
      </div>
      <ContactFormModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      </>
    </div>
  );
}
