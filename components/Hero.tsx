"use client";

import React from 'react';
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// إعدادات الحركة مع التحديد الصحيح لنوع Variants لمنع أخطاء Typescript
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (customValue: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: customValue, ease: "easeOut" },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="w-full min-h-screen pt-12 pb-16 flex flex-col items-center justify-between bg-white rounded-bl-[60px] rounded-br-[60px] md:rounded-bl-[120px] md:rounded-br-[120px] z-10 relative">
        
        <div className="text-center max-w-3xl px-4 z-30 select-none flex flex-col items-center mt-20" dir="rtl">
          <div className="relative inline-block pt-10 pb-4 px-14 z-30">
            
            {/* الصورة العلوية اليمنى */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.1}
              variants={fadeUp}
              className="absolute top-3 right-0 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-10"
            >
              <Image 
                src="/hero1.png" 
                alt="Hero decorative arc top"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* العناوين الرئيسية */}
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.2}
              variants={fadeUp}
              className="relative text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-3 leading-tight z-30"
            >
              دقة في التصنيع
            </motion.h1>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.35}
              variants={fadeUp}
              className="relative text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-2 leading-tight z-30"
            >
              تميّز في الأداء
            </motion.h2>

            {/* الصورة السفلية اليسرى */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.3}
              variants={fadeUp}
              className="absolute bottom-0 left-0 w-16 h-16 md:w-20 md:h-20 pointer-events-none z-10"
            >
              <Image 
                src="/hero2.png" 
                alt="Hero decorative arc bottom"
                fill
                className="object-contain"
              />
            </motion.div>

          </div>

          {/* النص الوصفي */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0.5}
            variants={fadeUp}
            className="relative text-[#181918] text-base md:text-[19px] leading-relaxed font-medium max-w-[550px] mx-auto mt-4 z-30"
          >
            متخصصون في الخراطة وتشغيل المعادن <br /> وتصنيع القطع الدقيقة بجودة عالية
            <br />
            لتلبية متطلبات المشاريع الصناعية المختلفة.
          </motion.p>
        </div>

        {/* قسم الماكينة وسنوات الخبرة */}
        <div className="w-full max-w-7xl mx-auto px-4 -mt-10 md:-mt-10 relative grid grid-cols-1 md:grid-cols-6 gap-2 items-center">
          
          {/* خبرة بالعربية */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.2}
            variants={fadeUp}
            className="flex flex-col items-center md:items-start md:col-span-1 text-center md:text-left order-2 md:order-1 z-20 md:pt-16"
            dir="rtl"
          >
            <div className="flex space-x-1 mb-1 text-[#b31919]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
            <span className="text-3xl font-black text-[#1a1a1a]">18 سنة</span>
            <span className="text-[17px] font-bold text-gray-500 -mt-1">خبرة</span>
          </motion.div>

          {/* الصورة في المنتصف */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleIn}
            className="md:col-span-4 flex justify-center order-1 md:order-2 relative h-96 md:h-[600px] w-full transform md:scale-125 z-10"
          >
            <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_50px_35px_rgba(255,255,255,1)] rounded-xl"></div>
            
            <Image 
              src="/hero.png" 
              alt="Industrial Machine" 
              fill 
              priority 
              className="object-contain" 
            />
          </motion.div>

          {/* خبرة بالإنجليزية */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.2}
            variants={fadeUp}
            className="flex flex-col items-center md:items-end md:col-span-1 text-center md:text-right order-3 z-20 md:pt-16"
          >
            <div className="flex space-x-1 mb-1 text-[#b31919]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl">★</span>
              ))}
            </div>
            <span className="text-3xl font-black text-[#1a1a1a] tracking-tight">18 YEARS</span>
            <span className="text-[17px] font-bold text-gray-500 tracking-widest uppercase -mt-1">EXPERIENCE</span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}