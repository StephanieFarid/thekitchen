import React from 'react'
import Image from '@/node_modules/next/image'
import logo from '../app/assets/kitchenMainPhoto.png'

export default function Hero() {
  return (
    // Background: Light Pink (custom hex closer to blush)
    <div className="min-h-screen bg-[#FDF2F4] text-[#4A3B32]">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-serif font-bold tracking-tight">The Kitchen</h1>
        <div className="space-x-8 font-medium text-sm tracking-wide">
          {['Our Mission', 'The Squad', 'What We Do', 'Join Us'].map((item) => (
            <a key={item} href="#" className="hover:text-[#8D6E63] transition-colors duration-200">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Col: Text */}
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-[#ead4d8] rounded-full text-xs font-bold uppercase tracking-widest">
            Established 2026
          </span>
          <h2 className="text-6xl font-serif leading-tight">
            Where women <span className="italic text-[#d48c9e]">belong</span>.
          </h2>
          <p className="text-lg opacity-80 leading-relaxed max-w-md">
            We’re cooking up careers, not just dinner. A community for women in tech to collaborate, code, and conquer.
          </p>
          <div className="pt-4">
            <button className="px-8 py-3 bg-[#4A3B32] text-[#FDF2F4] rounded-full font-semibold hover:bg-[#6D564A] transition-all shadow-lg hover:shadow-xl">
              Get the Recipe for Success
            </button>
          </div>
        </div>

        {/* Right Col: Image */}
        <div className="relative aspect-[4/5] w-full">
           {/* You can use Next/Image here with your vintage photo */}
           <div className="w-full h-full bg-neutral-300 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={logo} 
                alt="Women working on laptops in a vintage kitchen" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>

      </main>
    </div>
  );
}