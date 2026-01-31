import React from 'react'

const navigation = [
  { name: 'Our Mission', href: '/why' },
  { name: 'The Squad', href: '/who' },
  { name: 'What We Do', href: '/what' },
  { name: 'Join Us', href: '/contact' },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <a href='/'>
      <h1 className="text-2xl font-serif font-bold tracking-tight">The Kitchen Collective</h1>
      </a>
      <div className="space-x-8 font-medium text-sm tracking-wide">
        {navigation.map((item) => (
          <a key={item.name} href={item.href} className="hover:text-[#8D6E63] transition-colors duration-200">
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
