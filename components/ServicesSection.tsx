"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  FaDraftingCompass,
  FaBolt,
  FaHammer,
  FaRobot,
  FaCogs,
  FaSprayCan,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

interface ServiceItem {
  id: number;
  title: string;
  text: string;
  image: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "التصميم الهندسي وإعداد الرسومات الفنية",
    text: "تحويل الفكرة إلى رسومات وتصاميم تنفيذية دقيقة.",
    image: "/service1.jpg",
    icon: <FaDraftingCompass className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "القطع بالليزر CNC",
    text: "تنفيذ أعمال القطع بدقة عالية لمختلف المعادن والخامات.",
    image: "/service2.jpg",
    icon: <FaBolt className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "الثني باستخدام ماكينات CNC",
    text: "تشكيل وثني المعادن وفقًا للمواصفات الهندسية المطلوبة.",
    image: "/service3.jpg",
    icon: <FaHammer className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "أعمال اللحام والتجميع",
    text: "تجميع جميع المكونات وتنفيذ جميع أنواع اللحام باحترافية لضمان أعلى جودة.",
    image: "/service4.jpg",
    icon: <FaRobot className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "التشطيب والمعالجة السطحية",
    text: "صقل وتشطيب المنتجات للوصول إلى أفضل جودة ومظهر نهائي.",
    image: "/service5.jpg",
    icon: <FaCogs className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "الدهان والحماية",
    text: "تنفيذ أعمال الدهان النهائي باستخدام أنظمة طلاء عالية الجودة ومقاومة للعوامل المختلفة.",
    image: "/service6.jpg",
    icon: <FaSprayCan className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "خراطة وفريزة CNC",
    text: "تنفيذ أعمال الخراطة والفريزة بدقة عالية لتصنيع وتشغيل مختلف القطع المعدنية.",
    image: "/service7.jpg",
    icon: <FaTools className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "الدرفلة",
    text: "تنفيذ أعمال الدرفلة باحترافية لتشكيل المعادن بالمقاسات والسماكات المطلوبة.",
    image: "/service8.jpg",
    icon: <FaLayerGroup className="w-6 h-6" />,
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
      className="w-full py-20 px-4 relative mt-8"
    >
      <div className="max-w-6xl mx-auto bg-gray-500/10 backdrop-blur-lg rounded-[40px] p-6 md:p-12">
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
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-xl flex flex-col"
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

              {/* المحتوى النصي + الأيقونة المتداخلة */}
              <div className="relative flex flex-col items-center text-center px-6 pb-6 pt-10 flex-1">
                {/* دائرة الأيقونة المتداخلة بين الصورة والنص */}
                <div className="absolute -top-8 w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-[#b31919] ring-4 ring-white">
                  {service.icon}
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-[#1a1a1a] mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}