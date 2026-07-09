"use client";

import React, { useState, useCallback, useEffect } from "react";
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

type Client = {
  id: number;
  name: string;
  logo: string;
  image: string;
  description: string;
};

const CLIENTS: Client[] = [
  {
    id: 1,
    name: "Dr. Greiche Glass",
    logo: "/logos/dr-greiche-logo.png",
    image: "/logos/dr-greiche-cover.jpg",
    description:
      "شركة رائدة في صناعة ومعالجة الزجاج، تقدم حلولًا مبتكرة وعالية الجودة لزجاج السيارات والمباني والقطاعات الصناعية وفقًا لأعلى المعايير العالمية.",
  },
  {
    id: 2,
    name: "EGY LED",
    logo: "/logos/egy-led-logo.png",
    image: "/logos/egy-led-cover.jpg",
    description:
      "شركة متخصصة في توفير وتصنيع حلول شاشات LED واللوحات الإعلانية الرقمية، تقدم منتجات عالية الجودة وتقنيات عرض متطورة تناسب الاستخدامات التجارية والإعلانية والفعاليات، مع خدمات تركيب ودعم فني متكاملة.",
  },
  {
    id: 3,
    name: "MOG",
    logo: "/logos/mog-logo.png",
    image: "/logos/mog-cover.jpg",
    description:
      "شركة متخصصة في توريد وتجهيز معدات المطابخ التجارية والمطاعم والفنادق، وتقدم حلولًا متكاملة تشمل أحدث المعدات الاحترافية التي تجمع بين الجودة والكفاءة لتلبية احتياجات قطاع الضيافة والخدمات الغذائية.",
  },
  {
    id: 4,
    name: "Agrina Tec",
    logo: "/logos/agrina-logo.png",
    image: "/logos/agrina-cover.jpg",
    description:
      "شركة متخصصة في التصنيع الغذائي للمنتجات الزراعية، تقدم حلولًا متكاملة في إنتاج وتوزيع المركزات والمجمدات بجودة عالية، مع الالتزام بأعلى معايير الجودة والسلامة والاستدامة لتلبية احتياجات قطاع الأغذية والمشروبات محليًا وعالميًا.",
  },
  {
    id: 5,
    name: "NEGIDA",
    logo: "/logos/negida-logo.png",
    image: "/logos/negida-cover.jpg",
    description:
      "نجيدة للمقاولات شركة متخصصة في أعمال المقاولات العامة والإنشاءات، تقدم حلولًا هندسية متكاملة تشمل تنفيذ مشروعات البنية التحتية والطرق والأعمال المدنية، مع الالتزام بأعلى معايير الجودة والسلامة وإنجاز المشاريع بكفاءة وفي الوقت المحدد.",
  },
];

export default function ClientsShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % CLIENTS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + CLIENTS.length) % CLIENTS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const client = CLIENTS[index];

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  return (
    <section dir="rtl" className="w-full py-20 px-4 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="relative max-w-6xl mx-auto rounded-[32px] bg-gradient-to-br from-[#2a2d3a] to-[#12141c] border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={client.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex items-center gap-6 md:gap-10 px-6 md:px-12 py-10 md:py-14"
          >
            {/* النص + الشعار - أول عنصر بالـ DOM => يظهر أقصى اليمين */}
            <div className="flex-1 min-w-0">
              <div className="relative h-14 md:h-20 w-40 md:w-56 mb-6">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain object-right"
                />
              </div>
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-medium">
                {client.description}
              </p>
            </div>

            {/* زر التالي - يظهر بين الصورة والنص */}
            <button
              onClick={next}
              aria-label="التالي"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors shrink-0 z-10"
            >
              <MdKeyboardArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            {/* الصورة/الكارت الأبيض */}
            <div className="relative w-[45%] md:w-[38%] aspect-[4/3] shrink-0 rounded-3xl overflow-hidden bg-white">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-cover"
              />
            </div>

            {/* زر السابق - أقصى اليسار */}
            <button
              onClick={prev}
              aria-label="السابق"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors shrink-0 z-10"
            >
              <MdKeyboardArrowRight className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* نقاط التنقل */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {CLIENTS.map((c, i) => (
          <button
            key={c.id}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            aria-label={c.name}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}