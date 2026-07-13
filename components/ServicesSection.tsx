"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { SERVICES } from "@/data/services";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const gridContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      dir="rtl"
      className="relative mt-16 flex w-full justify-center px-4 py-14 sm:py-20"
    >
      {/* الطبقة الخارجية - إطار فاتح شفاف (الحدود) + blur واحد بس هنا */}
      <div
        className="mx-auto w-full max-w-6xl rounded-[28px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-lg will-change-transform sm:rounded-[40px]"
        style={{
          background: "rgba(210, 210, 212, 0.1)",
        }}
      >
        {/* الطبقة الداخلية - نفس تدرّج الرمادي الفاتح، بدون backdrop-blur مكرر */}
        <div
          className="w-full rounded-[22px] p-5 sm:rounded-[32px] sm:p-8 md:p-10"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,200,202,0.25) 0%, rgba(230,230,232,0.12) 100%)",
          }}
        >
          {/* رأس القسم */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
            className="mb-10 px-2 text-center sm:mb-12"
          >
            <h2
              className="mb-4 font-black text-white sm:mb-6"
               style={{ fontSize: "clamp(32px, 8vw, 96px)" }}
            >
              خدماتنا
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed font-medium text-gray-300 sm:text-lg md:text-[22px]">
              نقدم حلول تصنيع متكاملة تبدأ من التصميم والرسم الهندسي، مرورًا
              بالقطع بالليزر، والثني، واللحام والتجميع، والتشطيب، وصولًا إلى
              الدهان وتسليم المنتج النهائي بأعلى معايير الجودة.
            </p>
          </motion.div>

          {/* شبكة البطاقات */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridContainer}
            dir="ltr"
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex w-full flex-col overflow-hidden rounded-[20px] bg-white shadow-xl will-change-transform sm:w-[calc(50%-12px)] sm:rounded-[24px] lg:w-[calc(33.333%-16px)]"
                dir="rtl"
              >
                {/* صورة الخدمة */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* المحتوى النصي + الأيقونة */}
                <div className="relative flex flex-1 flex-col items-center px-5 pb-5 pt-9 text-center sm:px-6 sm:pb-6 sm:pt-10">
                  {/* دائرة الأيقونة المتداخلة */}
                  <div className="absolute -top-7 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white p-3 shadow-lg ring-4 ring-white sm:-top-8 sm:h-16 sm:w-16 sm:p-3.5">
                    <div className="relative h-full w-full">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        fill
                        className="object-contain"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(14%) sepia(98%) saturate(3600%) hue-rotate(350deg) brightness(70%) contrast(115%)",
                        }}
                      />
                    </div>
                  </div>

                  <h3 className="mb-2 text-base font-extrabold leading-snug text-[#1a1a1a] sm:text-lg md:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {service.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}