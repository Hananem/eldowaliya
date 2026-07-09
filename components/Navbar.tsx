"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi"; // استيراد أيقونات القائمة والإغلاق

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 pt-6 z-50">
      <div className="bg-[#b31919] rounded-full px-6 py-3 flex items-center justify-between shadow-lg relative">
        
        {/* الجانب الأيسر: روابط (تظهر في الشاشات الكبيرة فقط) */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="#about" 
            className="text-white border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="#services" 
            className="text-white border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Services
          </Link>
        </div>

        {/* زر القائمة للجوال (يظهر في الشاشات الصغيرة فقط) */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-1 text-2xl"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* المنتصف: اللوجو */}
        <div className="flex items-center justify-center">
          <Link href="/" className="relative block h-8 w-20 md:h-10 md:w-24">
            <Image 
              src="/White Logo.png"
              alt="M2S Logo" 
              fill                   
              priority               
              className="object-contain" 
            />
          </Link>
        </div>

        {/* الجانب الأيمن: روابط (تظهر في الشاشات الكبيرة فقط) */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="#projects" 
            className="text-white border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className="text-white border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Contact US
          </Link>
        </div>

        {/* عنصر وهمي للموازنة في الجوال */}
        <div className="flex md:hidden w-6" />

      </div>

      {/* القائمة المنسدلة الخاصة بالهواتف المحمولة */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#b31919]/95 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-3 shadow-xl border border-white/15 text-center">
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-white py-2 border-b border-white/10 text-sm font-medium"
          >
            About Us
          </Link>
          <Link 
            href="#services" 
            onClick={() => setIsOpen(false)}
            className="text-white py-2 border-b border-white/10 text-sm font-medium"
          >
            Services
          </Link>
          <Link 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="text-white py-2 border-b border-white/10 text-sm font-medium"
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-white py-2 text-sm font-medium"
          >
            Contact US
          </Link>
        </div>
      )}
    </nav>
  );
}