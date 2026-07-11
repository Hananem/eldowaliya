"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-start overflow-hidden p-6 font-sans sm:p-12"
      dir="rtl"
    >
      {/* Main Container Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
        className="relative flex w-full flex-col items-start overflow-hidden p-6 text-right sm:p-16"
      >
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="mb-4 mt-6 font-extrabold leading-tight tracking-tight text-white sm:mb-5 sm:mt-8"
          style={{ fontSize: "clamp(28px, 7vw, 60px)" }}
        >
          تواصل معنا
        </motion.h2>

        {/* Subtitle / Question */}
        <motion.p
          variants={itemVariants}
          className="mb-5 text-base font-semibold text-gray-100 sm:mb-6 sm:text-2xl"
        >
          هل لديك استفسار أو ترغب في تنفيذ مشروعك؟
        </motion.p>

        {/* Detailed Description */}
        <motion.p
          variants={itemVariants}
          className="mb-6 max-w-3xl text-sm leading-relaxed text-gray-200 sm:mb-8 sm:text-xl"
        >
          فريقنا جاهز للإجابة على جميع استفساراتك وتقديم الحلول المناسبة
          لاحتياجاتك في أعمال الخراطة، والتشغيل، والتصنيع المعدني. تواصل معنا
          اليوم، وسنعمل معك خطوة بخطوة لتحويل فكرتك إلى منتج يُنفذ بأعلى
          معايير الجودة والدقة، مع الالتزام بمواعيد التسليم.
        </motion.p>

        {/* Final Small Note */}
        <motion.p
          variants={itemVariants}
          className="mb-8 text-xs text-gray-300 sm:mb-10 sm:text-base"
        >
          نحن هنا لخدمتك والإجابة على استفساراتك في أسرع وقت.
        </motion.p>

        {/* Action Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="https://wa.me/201225888133"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/90 px-8 py-2.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:gap-3 sm:px-12 sm:py-3 sm:text-lg"
          >
            <span>تـــــحدث مع فـــــريقنا</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}