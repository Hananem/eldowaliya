"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { motion, AnimatePresence, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customValue: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: customValue, ease: "easeOut" },
  }),
};

const CLIENTS = [
  { id: 1, name: "MOG", image: "/mog.png" },
  { id: 2, name: "Dr. Greiche Glass", image: "/dr-greiche.png" },
  { id: 3, name: "EGY LED", image: "/egy-led.png" },
  { id: 4, name: "Agrina Tec", image: "/agrina.png" },
  { id: 4, name: "Agrina Tec", image: "/apex-farma.png" },
  { id: 4, name: "Agrina Tec", image: "/Farm_Frites.png" },
  { id: 4, name: "Negida", image: "/negida.png" },
  { id: 4, name: "CHP", image: "/CHP.png" },
];

const ITEMS_PER_VIEW = 4;

export default function OurClients() {
  const [page, setPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(ITEMS_PER_VIEW);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(ITEMS_PER_VIEW);
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

  const startIndex = page * itemsPerView;
  const visibleClients = CLIENTS.slice(startIndex, startIndex + itemsPerView);

  return (
    <section dir="rtl" className="w-full py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-wider">
            عملائـــــــنا
          </h2>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.2}
          variants={fadeUp}
          className="text-gray-300 text-sm md:text-[23px] max-w-3xl mx-auto leading-relaxed mb-2 font-medium"
        >
          نفخر بخدمة قاعدة واسعة من العملاء في مختلف القطاعات الصناعية، ونحرض
          على بناء علاقات طويلة الأمد قائمة على الجودة، والاحترافية،
          والالتزام، مما يجعلنا الخيار الموثوق لتنفيذ المشاريع الهندسية
          والتصنيعية.
        </motion.p>
      </div>

      {/* الشريط المقوّس - باستخدام SVG بدل clip-path polygon عشان يصير منحني فعلاً */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.4}
        variants={fadeUp}
        className="relative w-full -mb-4 "
      >
        {/* خلفية الشريط المنحني (SVG) */}
       {/* خلفية الشريط المقعّر (SVG) */}
<svg
  viewBox="0 0 1600 300"
  preserveAspectRatio="none"
  className="absolute inset-0 w-full h-full"
  style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
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
        <div className="relative flex items-center justify-between px-6 md:px-16 py-16 md:py-20">
          {/* زر السابق */}
          <button
            onClick={prevSlide}
            aria-label="السابق"
            className="w-11 h-11 rounded-full border border-gray-300 bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-all shrink-0 z-10 shadow-md"
          >
            <MdKeyboardArrowRight className="w-7 h-7" />
          </button>

          {/* حاوية الشعارات */}
          <div className="relative w-full max-w-5xl mx-auto px-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center justify-around flex-wrap gap-8"
              >
               {visibleClients.map((client) => (
  <div
    key={client.id}
    className="relative h-18 md:h-20 w-36 md:w-48 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
  >
    <Image
      src={client.image}
      alt={client.name}
      fill
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
            className="w-11 h-11 rounded-full border border-gray-300 bg-white text-gray-800 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-all shrink-0 z-10 shadow-md"
          >
            <MdKeyboardArrowLeft className="w-7 h-7" />
          </button>
        </div>
      </motion.div>

      {/* نقاط التنقل 
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index)}
              aria-label={`الصفحة ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === page ? "w-6 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}*/}
    </section>
  );
}