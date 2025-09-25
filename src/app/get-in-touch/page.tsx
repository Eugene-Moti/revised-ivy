import React from 'react';

export default function GetInTouch() {
  return (
    <div className="min-h-screen bg-[#39591c] flex flex-col items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
          <div className="flex items-center mb-4">
            <span className="text-3xl text-[#e5c75e] mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e5c75e" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0v.243a2.25 2.25 0 00.659 1.591l7.591 7.591a2.25 2.25 0 003.182 0l7.591-7.591A2.25 2.25 0 0021.75 6.993V6.75" /></svg>
            </span>
            <div>
              <div className="font-bold">Phone</div>
              <div>+254 700 000 000</div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-3xl text-[#e5c75e] mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e5c75e" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75" /><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L12 12.75l-5.25-6" /></svg>
            </span>
            <div>
              <div className="font-bold">Email</div>
              <div>blossomivymarketing@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-3xl text-[#e5c75e] mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e5c75e" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z" /></svg>
            </span>
            <div>
              <div className="font-bold">Head Office</div>
              <div>Westlands, Nairobi, Kenya</div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-[#39591c] mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c]" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c]" />
            <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c]" />
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39591c]" />
            <button type="submit" className="w-full bg-[#39591c] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#2e4717] transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
