// import React, { useState } from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F9F1F1] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-[#E8D8D8]">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="text-[#D4A3A3] font-bold tracking-[0.2em] uppercase text-xs">
            Let's Cook Up Something Great
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#4A3737] mt-2 mb-4">
            Join the Collective
          </h1>
          <p className="text-[#6B5B5B] italic">
            Submit your details and tell us what you're looking for.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-[#4A3737] font-serif mb-2 ml-1">Your Name</label>
              <input 
                type="text" 
                placeholder="Jane Doe"
                className="bg-[#FDFBFB] border border-[#E8D8D8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A3A3] transition-all"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#4A3737] font-serif mb-2 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="jane@example.com"
                className="bg-[#FDFBFB] border border-[#E8D8D8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A3A3] transition-all"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-[#4A3737] font-serif mb-2 ml-1">Phone Number</label>
            <input 
              type="tel" 
              placeholder="(555) 000-0000"
              className="bg-[#FDFBFB] border border-[#E8D8D8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A3A3] transition-all w-full"
            />
          </div>

          {/* The Blurb (Quick Blurb) */}
          <div className="flex flex-col">
            <label className="text-[#4A3737] font-serif mb-2 ml-1">What are you looking for?</label>
            <textarea 
              rows={4}
              placeholder="Tell us about your goals, your stack, or your favorite recipe..."
              className="bg-[#FDFBFB] border border-[#E8D8D8] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A3A3] transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button (Styled like your homepage button) */}
          <div className="pt-4">
            <button 
              type="submit"
              className="w-full md:w-auto bg-[#4A3737] text-white font-serif px-10 py-4 rounded-full text-lg hover:bg-[#322525] transition-colors shadow-lg hover:shadow-xl active:scale-95 duration-200"
            >
              Submit Your Recipe
            </button>
          </div>
        </form>

        {/* Subtle Footer Note */}
        <p className="mt-8 text-center text-xs text-[#A19191] uppercase tracking-widest">
          Established 2026 • The Kitchen Collective
        </p>
      </div>
    </main>
  );
}