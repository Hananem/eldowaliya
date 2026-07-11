"use client";
import React from 'react';
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// حاوية واحدة تجمع كل الأقسام (العنوان + النص + الصور) في تتابع واحد
const sectionContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotate: 0 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: -4,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutUs() {
  const scrollToWhyChooseUs = () => {
    const element = document.getElementById("why-choose-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="w-full text-white py-20 px-4 relative">

      {/* سهم الانتقال السفلي */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 z-10">
        <button
          onClick={scrollToWhyChooseUs}
          className="w-10 h-10 rounded-full border border-[#fefefe] flex items-center justify-center hover:bg-white/5 transition-colors group"
        >
          <span className="text-[#fefefe] group-hover:text-white transition-colors text-lg">
            ↓
          </span>
        </button>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionContainer}
        className="max-w-5xl mx-auto flex flex-col items-center"
      >

        {/* النصوص والوصف */}
        <div className="text-center max-w-3xl mb-16" dir="rtl">
          <motion.h2
            variants={titleVariants}
            className="text-7xl md:text-7xl font-black text-white select-none inline-block
                       origin-center tracking-wide will-change-transform
                       drop-shadow-[6px_6px_0px_#2a303c]
                       [-webkit-text-stroke:8px_black] [paint-order:stroke_fill]"
          >
            من نحن؟
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-sm md:text-base md:text-lg leading-relaxed font-medium px-4 mt-6 will-change-transform"
          >
            في مركز الدولية للخراطة وتشغيل المعادن، نقدم حلولاً متكاملة
            في تصنيع وتشغيل المعادن باستخدام أحدث ماكينات CNC
            والمعدات الصناعية المتطورة، مع فريق هندسي يمتلك خبرة واسعة
            لضمان أعلى مستويات الجودة والدقة في كل مشروع.
          </motion.p>
        </div>

        {/* صور متداخلة (Collage) بمقاسات متساوية تمامًا */}
        <div className="relative w-full max-w-4xl aspect-[16/10] mt-4">

          {/* الصورة الأولى - خلفية، أعلى اليسار */}
          <motion.div
            variants={imageVariants}
            className="absolute left-[2%] top-[10%] z-10 h-[55%] w-[56%] bg-zinc-800 rounded-[24px] overflow-hidden shadow-2xl will-change-transform"
          >
            <Image
              src="/factory-1.png"
              alt="Factory image 1"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover"
            />
          </motion.div>

          {/* الصورة الثانية - وسط، أعلى اليمين */}
          <motion.div
            variants={imageVariants}
            className="absolute right-[2%] top-0 z-20 h-[55%] w-[56%] bg-zinc-800 rounded-[24px] overflow-hidden shadow-2xl will-change-transform"
          >
            <Image
              src="/factory-2.png"
              alt="Factory image 2"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover"
            />
          </motion.div>

          {/* الصورة الثالثة - أمام، أسفل المنتصف */}
          <motion.div
            variants={imageVariants}
            className="absolute left-1/2 bottom-0 -translate-x-1/2 z-30 h-[55%] w-[56%] bg-zinc-800 rounded-[24px] overflow-hidden shadow-2xl ring-1 ring-black/20 will-change-transform"
          >
            <Image
              src="/factory-3.png"
              alt="Factory image 3"
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}