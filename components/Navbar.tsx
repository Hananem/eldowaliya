"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact US" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 pt-6 z-50">
      <div className="bg-[#b31919] rounded-full px-6 py-3 flex items-center justify-between shadow-lg relative">
        
        {/* الجانب الأيسر: روابط (تظهر في الشاشات الكبيرة فقط) */}
        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.slice(0, 2).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-white rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
                  isActive
                    ? "bg-white/20 border-white"
                    : "border-white/30 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
          {NAV_LINKS.slice(2, 4).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href}
                className={`text-white rounded-full px-4 py-1.5 text-sm font-medium transition-colors border ${
                  isActive
                    ? "bg-white/20 border-white"
                    : "border-white/30 hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* عنصر وهمي للموازنة في الجوال */}
        <div className="flex md:hidden w-6" />
      </div>

      {/* القائمة المنسدلة الخاصة بالهواتف المحمولة */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#b31919]/95 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-3 shadow-xl border border-white/15 text-center">
          {NAV_LINKS.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-sm font-medium ${
                  index !== NAV_LINKS.length - 1 ? "border-b border-white/10" : ""
                } ${isActive ? "text-white font-bold" : "text-white/90"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}