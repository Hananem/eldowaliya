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
  return (
    <div className="pt-36 pb-16">
      <section className="relative w-full max-w-[95%] md:max-w-[92%] lg:max-w-[1240px] mx-auto min-h-[520px] md:h-[580px] overflow-visible bg-gray-500/10 backdrop-blur-lg rounded-[40px] my-12">
        <div
          dir="rtl"
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col-reverse md:flex-row items-end justify-between"
        >
          {/* الصورة - إزاحة لليمين، وطول كبير وبروز علوي */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="relative w-full md:w-[53%] h-[500px] md:h-[760px] -mt-36 md:-mt-48 mb-0 shrink-0 rounded-[35px] overflow-hidden  z-25 flex items-end md:-mr-16"
          >
            <Image
              src="/worker.png"
              alt="عامل صناعي"
              fill
              priority
              className="object-cover object-top scale-x-[-1]"
            />
          </motion.div>

          {/* النص - في المنتصف العمودي تماماً */}
          <div className="w-full md:w-[45%] h-full flex flex-col justify-center py-6 pl-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="text-4xl md:text-6xl font-black text-white leading-[1.15]"
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
              className="text-gray-300 text-base md:text-lg leading-relaxed font-medium my-6"
            >
              من التصميم الهندسي وحتى التصنيع والتشطيب النهائي، نقدم حلول
              تصنيع معدنية متكاملة بأعلى معايير الدقة.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.7}
              variants={fadeUp}
            >
              <Link
                href="/contact"
                className="inline-block bg-[#b31919] hover:bg-[#9a1414] transition-colors text-white font-bold text-base md:text-lg px-9 py-4 rounded-full shadow-lg"
              >
                تواصل معنا
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}