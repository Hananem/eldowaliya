"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { motion, AnimatePresence, Variants } from "framer-motion";

// حاوية واحدة تجمع العنوان والنص والشريط في تتابع واحد بدل 3 observers منفصلة
const sectionContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

interface ClientItem {
  id: number;
  name: string;
  image: string;
}

// إصلاح الـ ids المكررة (كانت كلها id: 4)
const CLIENTS: ClientItem[] = [
  { id: 1, name: "MOG", image: "/mog.png" },
  { id: 2, name: "Dr. Greiche Glass", image: "/dr-greiche.png" },
  { id: 3, name: "EGY LED", image: "/egy-led.png" },
  { id: 4, name: "Agrina Tec", image: "/agrina.png" },
  { id: 5, name: "Apex Farma", image: "/apex-farma.png" },
  { id: 6, name: "Farm Frites", image: "/Farm_Frites.png" },
  { id: 7, name: "Negida", image: "/negida.png" },
  { id: 8, name: "CHP", image: "/CHP.png" },
];

const DESKTOP_ITEMS_PER_VIEW = 4;

export default function OurClients() {
  const [page, setPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(DESKTOP_ITEMS_PER_VIEW);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(DESKTOP_ITEMS_PER_VIEW);
      }
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalPages = Math.max(1, Math.ceil(CLIENTS.length / itemsPerView));

  const nextSlide = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // لو تغيّر itemsPerView وبقى page خارج النطاق، رجّعه لصفحة صالحة
  useEffect(() => {
    if (page >= totalPages) setPage(0);
  }, [totalPages, page]);

  const startIndex = page * itemsPerView;
  const visibleClients = CLIENTS.slice(startIndex, startIndex + itemsPerView);

  return (
    <section dir="rtl" className="relative w-full overflow-hidden py-14 sm:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionContainer}
      >
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6">
          <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
            <h2
              className="font-black tracking-wide text-white sm:tracking-wider"
              style={{ fontSize: "clamp(32px, 8vw, 96px)" }}
            >
   عملاؤنا
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-2 max-w-3xl text-sm font-medium leading-relaxed text-gray-300 sm:text-lg md:text-[23px]"
          >
            نفخر بخدمة قاعدة واسعة من العملاء في مختلف القطاعات الصناعية، ونحرض
            على بناء علاقات طويلة الأمد قائمة على الجودة، والاحترافية،
            والالتزام، مما يجعلنا الخيار الموثوق لتنفيذ المشاريع الهندسية
            والتصنيعية.
          </motion.p>
        </div>

        {/* الشريط المقوّس */}
        <motion.div variants={fadeUp} className="relative -mb-4 w-full will-change-transform">
          {/* خلفية الشريط المقعّر (SVG) */}
          <svg
            viewBox="0 0 1600 300"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.4))" }}
          >
            <path
              d="M 0,70 
                 C 400,95 1200,95 1600,70
                 L 1600,230
                 C 1200,205 400,205 0,230
                 Z"
              fill="white"
            />
          </svg>

          {/* المحتوى فوق الشريط */}
          <div className="relative flex items-center justify-between gap-2 px-4 py-12 sm:gap-4 sm:px-10 sm:py-16 md:px-16 md:py-20">
            {/* زر السابق */}
            <button
              onClick={prevSlide}
              aria-label="السابق"
              className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 shadow-md transition-all hover:border-gray-400 hover:bg-gray-100 sm:h-11 sm:w-11"
            >
              <MdKeyboardArrowRight className="h-5 w-5 sm:h-7 sm:w-7" />
            </button>

            {/* حاوية الشعارات */}
            <div className="relative mx-auto w-full max-w-5xl overflow-hidden px-1 sm:px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-wrap items-center justify-around gap-6 sm:gap-8"
                >
                  {visibleClients.map((client) => (
                    <div
                      key={client.id}
                      className="relative h-14 w-28 shrink-0 opacity-85 grayscale transition-all hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-48"
                    >
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 192px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* زر التالي */}
            <button
              onClick={nextSlide}
              aria-label="التالي"
              className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 shadow-md transition-all hover:border-gray-400 hover:bg-gray-100 sm:h-11 sm:w-11"
            >
              <MdKeyboardArrowLeft className="h-5 w-5 sm:h-7 sm:w-7" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}