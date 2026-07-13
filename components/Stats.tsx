"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

interface StatItem {
  number: string;
  label: string;
  targetValue: number;
}

const containerVariants: Variants = {
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

const itemVariants: Variants = {
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
    { number: "18+", label: "خبرة عملية", targetValue: 18 },
    { number: "15+", label: "ماكينة على أعلى مستوى", targetValue: 15 },
    { number: "500+", label: "عميل يثقون بنا", targetValue: 500 },
  ];

  const reversedStats = [...statsData].reverse();

  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const rafRef = useRef<number | null>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);

      setCounts(
        statsData.map((stat) =>
          progress >= 1
            ? stat.targetValue
            : Math.floor(stat.targetValue * eased)
        )
      );

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted]);

  return (
    <section className="w-full p-2 py-4 pb-14 md:py-4 flex justify-center relative">
      {/* تم إبعاد السهم للأسفل في الهواتف باستخدام bottom-1 و pb-14 للقسم */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:left-24 md:translate-x-0 z-10">
        <button
          onClick={scrollToAbout}
          className="w-10 h-10 rounded-full border border-[#fefefe] flex items-center justify-center hover:bg-white/5 transition-colors group bg-black/20 backdrop-blur-md"
        >
          <span className="text-[#fefefe] group-hover:text-white transition-colors text-lg">↓</span>
        </button>
      </div>

      {/* الحاوية الخارجية */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        onViewportEnter={() => setHasStarted(true)}
        variants={containerVariants}
        className="w-full mt-8 max-w-6xl backdrop-blur-lg rounded-[24px] md:rounded-[36px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)] will-change-transform"
        dir="rtl"
      >
        <div
          className="flex flex-col md:grid md:grid-cols-4 gap-y-6 md:gap-y-4 gap-x-2 w-full rounded-[18px] md:rounded-[28px] py-6 md:py-4 px-4"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,200,202,0.25) 0%, rgba(230,230,232,0.12) 100%)",
          }}
        >
          {reversedStats.map((stat, index) => {
            const originalIndex = statsData.length - 1 - index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center justify-center relative"
              >
                <h3 className="text-2xl md:text-[34px] font-bold text-white tracking-tight flex items-center justify-center select-none">
                  <span>{counts[originalIndex]}</span>
                  <span className="text-[#b31919] text-xl md:text-[28px] font-bold ml-0.5 transform translate-y-[-1px]">
                    +
                  </span>
                </h3>

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