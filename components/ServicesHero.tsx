"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (customValue: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: customValue, ease: "easeOut" },
  }),
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function ServicesHero() {
  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-36 pb-16">
      <section className="relative w-full max-w-[95%] md:max-w-[92%] lg:max-w-[1240px] mx-auto bg-gray-500/10 backdrop-blur-lg rounded-[40px] my-12 py-10 md:py-0 md:h-[580px] md:flex md:items-center">
        {/* السهم في الجزء اليسار العلوي */}
        <div className="absolute -top-14 md:-top-24 left-6 md:left-10 z-30">
          <button
            onClick={scrollToFooter}
            className="w-10 h-10 rounded-full border border-[#fefefe] flex items-center justify-center hover:bg-white/5 transition-colors group"
          >
            <span className="text-[#fefefe] group-hover:text-white transition-colors text-lg">
              ↓
            </span>
          </button>
        </div>

        <div
          dir="rtl"
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 md:h-full flex flex-col-reverse md:flex-row items-center md:items-end justify-between"
        >
          {/* الصورة - مخفية في الشاشات الصغيرة */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="hidden md:flex relative w-full md:w-[53%] h-[500px] md:h-[760px] -mt-36 md:-mt-48 mb-0 shrink-0 rounded-[35px] overflow-hidden z-25 items-end md:-mr-16"
          >
            <Image
              src="/worker.png"
              alt="عامل صناعي"
              fill
              priority
              className="object-cover object-top scale-x-[-1]"
            />
          </motion.div>

          {/* النص - في المنتصف عمودياً في الشاشة الكبيرة */}
          <div className="w-full md:w-[45%] md:h-full flex flex-col justify-center text-center md:text-right py-4 md:py-0">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15]"
            >
              نحوّل فكرتك إلى
              <br />
              منتج بجودة عالية.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={fadeUp}
              className="text-gray-300 text-base sm:text-lg md:text-[22px] leading-relaxed font-medium my-4 md:my-6"
            >
              من التصميم الهندسي وحتى التصنيع والتشطيب النهائي، نقدم حلول
              تصنيع معدنية متكاملة بأعلى معايير الدقة.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.7}
              variants={fadeUp}
              className="flex justify-center md:justify-start"
            >
              <Link
                href="/contact"
                className="inline-block bg-[#b31919] hover:bg-[#9a1414] transition-colors text-white font-bold text-sm md:text-base px-10.5 py-2.5 rounded-full shadow-lg border border-white tracking-wider"
              >
                تواصـــــــل مـــــــعنا
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}