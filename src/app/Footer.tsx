"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c1c1c] text-white/80 pt-16 pb-8 px-4 font-sans font-thin">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        {/* Brand & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/designs/Ivy_logo.png" alt="Ivy Group Logo" width={36} height={36} className="rounded" />
            <span className="text-2xl font-serif text-white">The Ivy Group</span>
          </div>
          <div className="text-sm leading-relaxed">The Ivy Group Kenya is a premier real estate and property development company based in Nairobi. We specialize in creating modern, elegant, and investment-worthy developments that redefine upscale living in the city.</div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><a href="#" className="hover:text-gold transition-colors">Buy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Let</a></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe for the latest market insights and property alerts.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 text-white px-3 py-2 rounded-l-md text-sm w-full focus:outline-none focus:ring-2 focus:ring-gold" />
            <button type="submit" className="bg-gold text-black px-4 py-2 rounded-r-md font-semibold text-sm hover:bg-[#c8b05a] transition-colors">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-white/60 text-sm gap-4">
        <div>© {new Date().getFullYear()} The Ivy Group. All rights reserved.</div>
        <div className="flex gap-5 text-lg">
          <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors"><FaTwitter /></a>
          <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gold transition-colors"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}