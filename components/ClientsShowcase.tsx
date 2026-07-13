"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdClose } from "react-icons/md";
import { BsImage } from "react-icons/bs"; // أيقونة افتراضية في حال عدم وجود وسائط
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CLIENTS, type Client } from "@/data/clients";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customValue: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: customValue, ease: "easeOut" },
  }),
};

// دالة مساعدة للتحقق مما إذا كان المسار يعود لفيديو
const isVideo = (url: string) => {
  return url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg");
};

/* ------------------------------------------------------------------ */
/*  مكوّن فرعي: سلايدر الوسائط الداخلي (صور وفيديوهات) لكل عميل        */
/* ------------------------------------------------------------------ */
function InnerImageSlider({
  images,
  alt,
  onOpenModal,
}: {
  images: string[];
  alt: string;
  onOpenModal: (url: string) => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const isEmpty = !images || images.length === 0;

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

  // في حال لم تكن هناك بيانات للصور أو الفيديوهات
  if (isEmpty) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-100 gap-2">
        <BsImage className="w-12 h-12 opacity-50" />
        <span className="text-xs">لا توجد وسائط متاحة</span>
      </div>
    );
  }

  const currentMedia = images[imgIndex];

  return (
    <div 
      className="relative w-full h-full group bg-black cursor-pointer"
      onClick={() => onOpenModal(currentMedia)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={imgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isVideo(currentMedia) ? (
            <video
              src={currentMedia}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={currentMedia}
              alt={`${alt} ${imgIndex + 1}`}
              fill
              className="object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* سهم يمين (التالي داخل نفس الوسائط) */}
      <button
        onClick={nextImage}
        disabled={!hasMultiple}
        aria-label="العنصر التالي"
        className={`absolute top-1/2 -translate-y-1/2 right-2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all
          ${
            hasMultiple
              ? "text-white hover:bg-black/60 cursor-pointer opacity-0 group-hover:opacity-100"
              : "text-white/30 cursor-not-allowed opacity-0"
          }`}
      >
        <MdKeyboardArrowLeft className="w-5 h-5" />
      </button>

      {/* سهم يسار (السابق داخل نفس الوسائط) */}
      <button
        onClick={prevImage}
        disabled={!hasMultiple}
        aria-label="العنصر السابق"
        className={`absolute top-1/2 -translate-y-1/2 left-2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all
          ${
            hasMultiple
              ? "text-white hover:bg-black/60 cursor-pointer opacity-0 group-hover:opacity-100"
              : "text-white/30 cursor-not-allowed opacity-0"
          }`}
      >
        <MdKeyboardArrowRight className="w-5 h-5" />
      </button>

      {/* نقاط تنقل صغيرة داخل الوسائط نفسها */}
      {hasMultiple && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setImgIndex(i);
              }}
              aria-label={`عنصر ${i + 1}`}
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
/* ------------------------------------------------------------------ */
export default function ClientsShowcase() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [modalMedia, setModalMedia] = useState<string | null>(null);

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
      <div className="w-full max-w-6xl mx-auto bg-gray-500/10 backdrop-blur-lg rounded-[40px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
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

              <button
                onClick={next}
                aria-label="العميل التالي"
                className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors shrink-0 z-10"
              >
                <MdKeyboardArrowLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>

              <div className="relative w-[75%] sm:w-[60%] lg:w-[46%] aspect-[4/3] shrink-0 rounded-3xl overflow-hidden bg-white shadow-md">
                <InnerImageSlider 
                  images={client.images} 
                  alt={client.name} 
                  onOpenModal={(url) => setModalMedia(url)}
                />
              </div>

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

      {/* نافذة المودال لعرض الصورة أو الفيديو المكبر */}
      <AnimatePresence>
        {modalMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalMedia(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl"
            >
              <button
                onClick={() => setModalMedia(null)}
                aria-label="إغلاق"
                className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <MdClose className="w-6 h-6" />
              </button>

              {isVideo(modalMedia) ? (
                <video
                  src={modalMedia}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[85vh] object-contain"
                />
              ) : (
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={modalMedia}
                    alt="عرض مكبر"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden"></div>
    </section>
  );
}