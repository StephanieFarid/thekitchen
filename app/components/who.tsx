import React from 'react';
import Image from 'next/image';
import Chris from '../assets/Chris.png'
import Steph from '../assets/steph.png'
import Moyo from '../assets/moyo.png'
import Ruka from '../assets/Ruka.png'
import Stephanie from '../assets/Stephanie.png'


interface TeamMember {
  id: number;
  name: string;
  role: string;
  blurb: string;
  imageUrl: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: 'Chris',
    role: 'Role',
    blurb: 'Getting things done.',
    imageUrl: Chris, // Replace with your actual paths
  },
  {
    id: 2,
    name: 'Steph',
    role: 'Role',
    blurb: 'Getting things done.',
    imageUrl: Steph,
  },
  {
    id: 3,
    name: 'Moyo',
    role: 'Role',
    blurb: 'Getting things done.',
    imageUrl: Moyo,
  },
  {
    id: 4,
    name: 'Ruka',
    role: 'Role',
    blurb: 'Getting things done.',
    imageUrl: Ruka,
  },
  {
    id: 5,
    name: 'Stephanie',
    role: 'Role',
    blurb: 'Getting things done.',
    imageUrl: Stephanie,
  }
];

export default function SquadPage() {
  return (
    <main className="min-h-screen bg-[#F9F1F1] py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#4A3737] mb-4">
            Meet The Squad
          </h1>
          <div className="h-1 w-24 bg-[#D4A3A3] rounded-full"></div>
        </header>

        {/* Horizontal Layout Container */}
        <div className="flex flex-wrap gap-8 justify-start">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="group flex flex-col w-full sm:w-[225px] bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E8D8D8]"
            >
              {/* Image Container with Home Page Styling */}
              <div className="relative h-[350px] w-full mb-6 overflow-hidden rounded-xl">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h2 className="text-2xl font-serif text-[#4A3737]">
                  Meet {member.name}
                </h2>
                <p className="text-sm font-bold tracking-widest uppercase text-[#D4A3A3]">
                  {member.role}
                </p>
                <p className="text-[#6B5B5B] leading-relaxed text-sm italic">
                  "{member.blurb}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}