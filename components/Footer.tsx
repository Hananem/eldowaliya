"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const SERVICES = [
  { label: "خراطة CNC", href: "#" },
  { label: "خراطة تقليدية", href: "#" },
  { label: "تشكيل المعادن", href: "#" },
  { label: "ثقب وتفريز", href: "#" },
  { label: "تصنيع حسب الطلب", href: "#" },
];

const QUICK_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/services" },
  { label: "أعمالنا", href: "/projects" },
  { label: "تواصل معنا", href: "/contact" },
];

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
      className="relative bg-white text-[#181918] pt-12 sm:pt-16 rounded-tr-[37px] rounded-tl-[36px] sm:rounded-tr-[60px] sm:rounded-tl-[60px] md:rounded-tr-[120px] md:rounded-tl-[120px] will-change-transform"
    >
      {/* Top curved glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-16 sm:-top-24 mx-auto h-28 sm:h-40 w-full max-w-5xl rounded-b-[100%] bg-gradient-to-b from-black/5 via-black/[0.01] to-transparent blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-4 text-center md:text-right">

          {/* 1. اللوجو والوصف */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center md:items-start sm:col-span-2 md:col-span-1 will-change-transform"
          >
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/footer.png"
                alt="مركز الدولية"
                width={210}
                height={210}
                className="h-auto w-[150px] object-contain sm:w-[180px] md:w-[210px]"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#181918]/80 md:max-w-none md:text-right">
              مركز الدولية للخراطة وتشغيل المعادن، نقدم حلولاً متكاملة في
              تصنيع وتشغيل المعادن باستخدام أحدث ماكينات CNC والمعدات
              الصناعية المتطورة، مع فريق هندسي يمتلك خبرة واسعة لضمان أعلى
              مستويات الجودة والدقة في كل مشروع.
            </p>
          </motion.div>

          {/* 2. خدماتنا */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-center md:items-start md:mt-0 md:pt-16 will-change-transform"
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-extrabold text-[#181918]">
              خدماتنا
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[#b51719]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. روابط مهمة */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex flex-col items-center md:items-start md:mt-0 md:pt-16 will-change-transform"
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-extrabold text-[#181918]">
              روابط مهمة
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[#b51719]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. تواصل معنا */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-center md:items-start md:mt-0 md:pt-16 will-change-transform"
          >
            <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-extrabold text-[#181918]">
              تواصل معنا
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-[#181918]/80">
              <li>مدينة المستقبل - الاسماعيلية</li>
              <li dir="ltr" className="md:text-right">
                amr776276@gmail.com
              </li>
              <li dir="ltr" className="md:text-right">
                01225888133
              </li>
              <li dir="ltr" className="md:text-right">
                01033703430
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Divider + copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-12 border-t border-[#181918]/10 pt-5 sm:pt-6 text-center will-change-transform"
        >
          <p dir="ltr" className="text-center text-sm sm:text-base">
            © <span dir="rtl">جميع الحقوق محفوظة لدى مركز الدولية 2026</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}