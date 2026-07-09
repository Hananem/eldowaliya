"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdArrowUp } from "react-icons/io";
interface FeatureItem {
  id: number;
  label: string;
  text: string;
  image: string;
}

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    label: "01",
    text: "نعتمد على أحدث تقنيات التصنيع لضمان أعلى مستويات الدقة في جميع الأعمال.",
    image: "/factory-4.png",
  },
  {
    id: 2,
    label: "02",
    text: "فريق من المهندسين والفنيين ذوي الخبرة لتنفيذ جميع الأعمال باحترافية.",
    image: "/factory-3.png",
  },
  {
    id: 3,
    label: "03",
    text: "الالتزام بالمواعيد وتسليم المشاريع في الوقت المحدد دون التأثير على الجودة.",
    image: "/factory-2.png",
  },
  {
    id: 4,
    label: "04",
    text: "مراجعة دقيقة وفحص شامل لكل قطعة قبل التسليم لضمان مطابقتها للمواصفات.",
    image: "/factory-1.png",
  },
];

export default function WhyChooseUs() {
  const [activeId, setActiveId] = useState<number>(1);
  const activeFeature =
    FEATURES.find((f) => f.id === activeId) ?? FEATURES[0];

  return (
    <div className="relative">
        <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 z-10">
  <button className="w-10 h-10 rounded-full border border-[#fefefe] flex items-center justify-center hover:bg-white/5 transition-colors group">
    <span className="text-[#fefefe] group-hover:text-white transition-colors text-lg">
      ↓
    </span>
  </button>
    </div>
          <section
      dir="rtl"
      className="w-full mt-8 mb-22 bg-gradient-to-r
bg-gray-500/10 backdrop-blur-lg  p-4 rounded-[60px]  "
    >
        <div
        className="w-full bg-gray-500/10 backdrop-blur-lg px-6 py-12 md:px-12 md:py-16 rounded-[60px]"
        >
                  {/* Title */}
 <div className="mb-10 flex justify-center md:mb-14">
  <h2 className="flex flex-wrap items-center gap-3 text-2xl font-extrabold md:text-4xl">
    {/* النص الأبيض بحد أسود سميك + ظل صلب */}
    <span
      className="text-white [-webkit-text-stroke:2px_black] [paint-order:stroke_fill]
                 drop-shadow-[3px_3px_0px_#2a303c]"
    >
      لماذا تختار
    </span>

    {/* الصندوق الأحمر بنفس أسلوب الستروك على النص والحدود */}
    <span
      className="bg-gradient-to-b from-[#e12b2b] to-[#a11616] px-4 py-1.5
                
                 text-white [-webkit-text-stroke:2px_black] [paint-order:stroke_fill]
                 shadow-[0_4px_12px_rgba(225,43,43,0.35)]"
    >
      مركز الدولية؟
    </span>
  </h2>
</div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        
        {/* القائمة (على اليمين في الشاشات الكبيرة) */}
<div className="order-2 flex flex-col gap-4 md:order-1 w-[500px]">
  {FEATURES.map((feature) => {
    const isActive = feature.id === activeId;
    return (
      <div
        key={feature.id}
        // 🛠️ التعديل: أزلنا overflow-hidden لكي لا يتم قص انحناء الطرف الأيمن للمستطيل الأحمر
        className={`relative flex items-center justify-between rounded-full border min-h-[50px] py-2 pr-[85px] pl-5 transition-colors duration-300 ${
          isActive
            ? "border-[#b51719]/60 bg-white/[0.04]"
            : "border-white/10 bg-white/[0.02]"
        }`}
      >
        
        {/* 🛠️ شارة الرقم: تم استخدام rounded-full لتصبح مدورة تماماً من الجهتين */}
        {/* تم ضبطها بـ right-1 و top-1/2 مع h-[calc(100%-8px)] لتلتصق بالحافة الداخلية تماماً وتأخذ شكل الكبسولة المتناسق */}
       <span
  className={`absolute right-0 top-0 bottom-0 h-full w-[80px] flex shrink-0 items-center justify-center rounded-[28px] text-[38px] md:text-[44px] font-black leading-none text-white transition-colors duration-300 ${
    isActive
      ? "bg-[#b51719]" 
      : "bg-[#5c0b0c]" 
  }`}
>
  {feature.label}
</span>

        {/* النص الوصفي */}
        <p className="text-right text-xs md:text-sm leading-relaxed text-white/95 flex-1 pl-2">
          {feature.text}
        </p>

        {/* زر السهم في أقصى اليسار */}
      {/* زر السهم في أقصى اليسار */}
<button
  type="button"
  onClick={() => setActiveId(feature.id)}
  aria-label={`عرض صورة العنصر ${feature.label}`}
  aria-pressed={isActive}
  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full  text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#b51719] hover:text-[#b51719] focus:outline-none"
>
 <IoMdArrowUp className="h-4 w-4" style={{ transform: "rotate(-45deg)" }} />
</button>
      </div>
    );
  })}
</div>

        {/* حاوية الصورة (على اليسار في الشاشات الكبيرة) */}
       <div className="relative order-1 mx-auto aspect-[4/3] w-full max-w-[420px] overflow-hidden rounded-2xl md:order-2 shadow-lg">
          <Image
            key={activeFeature.id}
            src={activeFeature.image}
            alt={activeFeature.text}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>

      </div>
        </div>

    </section>
    </div>
  
  );
}