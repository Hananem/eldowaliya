"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
  number: string;
  label: string;
  targetValue: number;
}

// إعدادات حركة الحاوية والعناصر الفرعية
const containerVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Stats() {
  const statsData: StatItem[] = [
    { number: "2000+", label: "وظيفة مكتملة", targetValue: 2000 },
    { number: "10+", label: "خبرة عملية", targetValue: 10 },
    { number: "15+", label: "ماكينة على أعلى مستوى", targetValue: 15 },
    { number: "500+", label: "عميل يثقون بنا", targetValue: 500 },
  ];

  // عكس ترتيب البيانات لتصبح الأماكن معكوسة (اليمين يسار واليسار يمين)
  const reversedStats = [...statsData].reverse();

  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // دفعة تصاعد الأرقام عند تفعيل الـ Scroll
  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    statsData.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.targetValue / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          if (currentStep >= steps) {
            newCounts[index] = stat.targetValue;
            clearInterval(timer);
          } else {
            newCounts[index] = Math.floor(increment * currentStep);
          }
          return newCounts;
        });
      }, intervalTime);
    });
  }, [hasStarted]);

  return (
    <section className="w-full p-2 py-4 flex justify-center relative">
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 z-10">
        <button
          onClick={scrollToAbout}
          className="w-10 h-10 rounded-full border border-[#fefefe] flex items-center justify-center hover:bg-white/5 transition-colors group"
        >
          <span className="text-[#fefefe] group-hover:text-white transition-colors text-lg">↓</span>
        </button>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        onViewportEnter={() => setHasStarted(true)}
        variants={containerVariants}
        className="w-full mt-8 max-w-6xl bg-gray-500/10 backdrop-blur-lg rounded-[24px] md:rounded-[36px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md"
        dir="rtl"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 w-full bg-gray-500/10 backdrop-blur-lg rounded-[18px] md:rounded-[28px] py-3 md:py-4 px-4">
          {reversedStats.map((stat, index) => {
            // حساب الفهرس الحقيقي المرتبط بالعد التنازلي/التصاعدي الأصلي
            const originalIndex = statsData.length - 1 - index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center justify-center relative"
              >
                {/* الرقم المتحرك والتصاعدي */}
                <h3 className="text-2xl md:text-[34px] font-bold text-white tracking-tight flex items-center justify-center select-none">
                  <span>{counts[originalIndex]}</span>
                  <span className="text-[#b31919] text-xl md:text-[28px] font-bold ml-0.5 transform translate-y-[-1px]">
                    +
                  </span>
                </h3>

                {/* النص الوصفي */}
                <p className="text-white/80 text-xs md:text-[13px] font-medium mt-0.5 max-w-[160px] leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}