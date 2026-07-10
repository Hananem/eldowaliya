"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ServiceItem {
  id: number;
  title: string;
  text: string;
  image: string;
  icon: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "التصميم الهندسي وإعداد الرسومات الفنية",
    text: "تحويل الفكرة إلى رسومات وتصاميم تنفيذية دقيقة.",
    image: "/services8.jpg",
    icon: "/icon1.png",
  },
  {
    id: 2,
    title: "القطع بالليزر CNC",
    text: "تنفيذ أعمال القطع بدقة عالية لمختلف المعادن والخامات.",
    image: "/service3.jpg",
    icon: "/icon5.png",
  },
  {
    id: 3,
    title: "الثني باستخدام ماكينات CNC",
    text: "تشكيل وثني المعادن وفقًا للمواصفات الهندسية المطلوبة.",
    image: "/services12.png",
    icon: "/icon3.png",
  },
  {
    id: 4,
    title: "أعمال اللحام والتجميع",
    text: "تجميع جميع المكونات وتنفيذ جميع أنواع اللحام باحترافية لضمان أعلى جودة.",
    image: "/service5.jpg",
    icon: "/icon4.png",
  },
  {
    id: 5,
    title: "التشطيب والمعالجة السطحية",
    text: "صقل وتشطيب المنتجات للوصول إلى أفضل جودة ومظهر نهائي.",
    image: "/services10.jpg",
    icon: "/icon7.png",
  },
  {
    id: 6,
    title: "الدهان والحماية",
    text: "تنفيذ أعمال الدهان النهائي باستخدام أنظمة طلاء عالية الجودة ومقاومة للعوامل المختلفة.",
    image: "/service1.jpg",
    icon: "/icon2.png",
  },
  {
    id: 7,
    title: "خراطة وفريزة CNC",
    text: "تنفيذ أعمال الخراطة والفريزة بدقة عالية لتصنيع وتشغيل مختلف القطع المعدنية.",
    image: "/service2.jpg",
    icon: "/icon8.png",
  },
  {
    id: 8,
    title: "الدرفلة",
    text: "تنفيذ أعمال الدرفلة باحترافية لتشكيل المعادن بالمقاسات والسماكات المطلوبة.",
    image: "/service4.jpg",
    icon: "/icon1.png",
  },
];

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
      staggerChildren: 0.1,
      delayChildren: 0.15,
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
      className="w-full py-20 px-4 relative mt-8 flex justify-center"
    >
      {/* الطبقة الخارجية الأولى مع الـ padding والظل */}
      <div className="w-full max-w-6xl mx-auto bg-gray-500/10 backdrop-blur-lg rounded-[40px] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
        {/* الطبقة الداخلية الثانية بنفس الخلفية والـ padding */}
        <div className="bg-gray-500/10 backdrop-blur-lg rounded-[32px] p-6 md:p-10 w-full">
          {/* رأس القسم */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={headerVariants}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              خدماتنا
            </h2>
            <p className="text-gray-300 text-[22px] leading-relaxed font-medium max-w-3xl mx-auto">
              نقدم حلول تصنيع متكاملة تبدأ من التصميم والرسم الهندسي، مرورًا
              بالقطع بالليزر، والثني، واللحام والتجميع، والتشطيب، وصولًا إلى
              الدهان وتسليم المنتج النهائي بأعلى معايير الجودة.
            </p>
          </motion.div>

          {/* شبكة البطاقات مع استخدام Flex ومتوسطات الصف الأخير لآخر بطاقتين */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={gridContainer}
            dir="ltr"
            className="flex flex-wrap justify-center gap-6"
          >
            {SERVICES.map((service, index) => {
              const isLastTwo = index >= SERVICES.length - 2;
              return (
                <motion.div
                  key={service.id}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`bg-white rounded-[24px] overflow-hidden shadow-xl flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                    isLastTwo && SERVICES.length % 3 === 2 ? "lg:mx-0" : ""
                  }`}
                  dir="rtl"
                >
                  {/* صورة الخدمة */}
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* المحتوى النصي + الأيقونة المصورة بلون #b51719 */}
                  <div className="relative flex flex-col items-center text-center px-6 pb-6 pt-10 flex-1">
                    {/* دائرة الأيقونة المصورة المتداخلة مع الفلتر المطابق لـ #b51719 */}
                    <div className="absolute -top-8 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center p-3.5 ring-4 ring-white overflow-hidden">
                      <div className="relative w-full h-full">
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

                    <h3 className="text-lg md:text-xl font-extrabold text-[#1a1a1a] mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}