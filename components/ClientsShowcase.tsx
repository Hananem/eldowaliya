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
  images: string[]; // كل عميل ممكن يكون له صورة واحدة أو أكثر
  description: string;
};

const CLIENTS: Client[] = [
  {
    id: 1,
    name: "Dr. Greiche Glass",
    logo: "/dr-greiche-logo.png",
    images: [
      "/dr-greiche-cover-1.jpg",
      "/dr-greiche-cover-2.jpg",
      "/dr-greiche-cover-3.jpg",
    ],
    description:
      "شركة رائدة في صناعة ومعالجة الزجاج، تقدم حلولًا مبتكرة وعالية الجودة لزجاج السيارات والمباني والقطاعات الصناعية وفقًا لأعلى المعايير العالمية.",
  },
  {
    id: 2,
    name: "EGY LED",
    logo: "/egy-led-logo.png",
    images: [
      "/egy-led1.jpeg",
      "/egy-led2.jpeg",
      "/egy-led3.jpeg",
    ],
    description:
      "شركة متخصصة في توفير وتصنيع حلول شاشات LED واللوحات الإعلانية الرقمية، تقدم منتجات عالية الجودة وتقنيات عرض متطورة تناسب الاستخدامات التجارية والإعلانية والفعاليات، مع خدمات تركيب ودعم فني متكاملة.",
  },
  {
    id: 3,
    name: "MOG",
    logo: "/mog-logo.png",
    images: ["/mog-cover-1.jpg", "/mog-cover-2.jpg", "/mog-cover-3.jpg"],
    description:
      "شركة متخصصة في توريد وتجهيز معدات المطابخ التجارية والمطاعم والفنادق، وتقدم حلولًا متكاملة تشمل أحدث المعدات الاحترافية التي تجمع بين الجودة والكفاءة لتلبية احتياجات قطاع الضيافة والخدمات الغذائية.",
  },
  {
    id: 4,
    name: "Agrina Tec",
    logo: "/agrina-logo.png",
    images: [
      "/agrina-cover-1.jpg",
      "/agrina-cover-2.jpg",
      "/agrina-cover-3.jpg",
    ],
    description:
      "شركة متخصصة في التصنيع الغذائي للمنتجات الزراعية، تقدم حلولًا متكاملة في إنتاج وتوزيع المركزات والمجمدات بجودة عالية، مع الالتزام بأعلى معايير الجودة والسلامة والاستدامة لتلبية احتياجات قطاع الأغذية والمشروبات محليًا وعالميًا.",
  },
  {
    id: 5,
    name: "NEGIDA",
    logo: "/negida-logo.png",
    images: [
      "/negida-cover-1.jpg",
      "/negida-cover-2.jpg",
      "/negida-cover-3.jpg",
    ],
    description:
      "نجيدة للمقاولات شركة متخصصة في أعمال المقاولات العامة والإنشاءات، تقدم حلولًا هندسية متكاملة تشمل تنفيذ مشروعات البنية التحتية والطرق والأعمال المدنية، مع الالتزام بأعلى معايير الجودة والسلامة وإنجاز المشاريع بكفاءة وفي الوقت المحدد.",
  },
  {
    id: 6,
    name: "CHP",
    logo: "/chp-logo-removebg-preview.png",
    images: [
      "/chp1.jpeg",
      "/chp2.jpeg",
      "/chp3.jpeg",
      "/chp4.jpeg",
      "/chp5.jpeg",
    ],
    description:
    "شركة القناة للموانئ والمشروعات الكبرى (CHP)، إحدى شركات هيئة قناة السويس، تأسست عام 1965 وتُعد من الكيانات الرائدة في مجال أعمال التكريك والإنشاءات البحرية والموانئ والأعمال المدنية، وتقدم حلولًا هندسية متكاملة تشمل تنفيذ مشروعات البنية التحتية البحرية والموانئ، مع الالتزام بأعلى معايير الجودة والسلامة وإنجاز المشاريع بكفاءة وفي الوقت المحدد."
  },
];

/* ------------------------------------------------------------------ */
/*  مكوّن فرعي: سلايدر الصور الداخلي لكل عميل (مع أسهم يمين/يسار)     */
/*  ملاحظة: تم حذف التمرير التلقائي - التنقل الآن يدويًا فقط عبر       */
/*  الأسهم أو النقاط                                                    */
/* ------------------------------------------------------------------ */
function InnerImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = images.length > 1;

  // إعادة الضبط لما يتغيّر العميل (تصفير السلايدر الداخلي)
  useEffect(() => {
    setImgIndex(0);
  }, [images]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMultiple) return;
    setImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMultiple) return;
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.div
          key={imgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[imgIndex]}
            alt={`${alt} ${imgIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* سهم يمين (التالي داخل نفس الصورة) */}
      <button
        onClick={nextImage}
        disabled={!hasMultiple}
        aria-label="الصورة التالية"
        className={`absolute top-1/2 -translate-y-1/2 right-2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all
          ${
            hasMultiple
              ? "text-white hover:bg-black/60 cursor-pointer opacity-0 group-hover:opacity-100"
              : "text-white/30 cursor-not-allowed opacity-0"
          }`}
      >
        <MdKeyboardArrowLeft className="w-5 h-5" />
      </button>

      {/* سهم يسار (السابق داخل نفس الصورة) */}
      <button
        onClick={prevImage}
        disabled={!hasMultiple}
        aria-label="الصورة السابقة"
        className={`absolute top-1/2 -translate-y-1/2 left-2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all
          ${
            hasMultiple
              ? "text-white hover:bg-black/60 cursor-pointer opacity-0 group-hover:opacity-100"
              : "text-white/30 cursor-not-allowed opacity-0"
          }`}
      >
        <MdKeyboardArrowRight className="w-5 h-5" />
      </button>

      {/* نقاط تنقل صغيرة داخل الصورة نفسها */}
      {hasMultiple && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setImgIndex(i);
              }}
              aria-label={`صورة ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === imgIndex ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  المكوّن الرئيسي                                                    */
/*  ملاحظة: تم حذف التمرير التلقائي بين العملاء - التنقل الآن يدويًا   */
/*  فقط عبر زرّي التالي/السابق                                         */
/* ------------------------------------------------------------------ */
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
    <section dir="rtl" className="w-full py-20 px-4 md:px-8 flex justify-center">
      {/* الطبقة الخارجية الأولى مع الـ padding والظل */}
      <div className="w-full max-w-6xl mx-auto bg-gray-500/10 backdrop-blur-lg rounded-[40px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        {/* الطبقة الداخلية الثانية بنفس الخلفية والـ padding */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative w-full bg-gray-500/10 backdrop-blur-lg rounded-[32px] overflow-hidden"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={client.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 px-6 md:px-12 py-10 md:py-14 text-center lg:text-right"
            >
              {/* النص + الشعار - أول عنصر بالـ DOM => يظهر أقصى اليمين */}
              <div className="flex-1 min-w-0">
               <div className="relative h-14 md:h-20 w-40 md:w-56 mx-auto mb-6 flex items-center justify-center">
  <Image
    src={client.logo}
    alt={client.name}
    fill
    className="object-contain object-center"
  />
</div>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-medium">
                  {client.description}
                </p>
              </div>

              {/* زر التالي (للسلايدر الرئيسي - التنقل بين العملاء) */}
              <button
                onClick={next}
                aria-label="العميل التالي"
                className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors shrink-0 z-10"
              >
                <MdKeyboardArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>

              {/* الصورة/الكارت الأبيض - سلايدر صور داخلي مستقل */}
              <div 
              className="relative w-[75%] sm:w-[60%] lg:w-[46%] aspect-[4/3] shrink-0 rounded-3xl overflow-hidden bg-white shadow-md"
              >
  <InnerImageSlider images={client.images} alt={client.name} />
</div>

              {/* زر السابق (للسلايدر الرئيسي - التنقل بين العملاء) */}
              <button
                onClick={prev}
                aria-label="العميل السابق"
                className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors shrink-0 z-10"
              >
                <MdKeyboardArrowRight className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* نقاط تنقل بين العملاء أنفسهم */}
      <div className="hidden">{/* placeholder لو حبيت تضيف dots للعملاء لاحقاً */}</div>
    </section>
  );
}