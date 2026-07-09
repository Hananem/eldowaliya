import React from 'react';
export default function AboutUs() {
  return (
    <section className="w-full   text-white py-20 px-4  relative">
      
      {/* سهم الانتقال العلوي الدائري */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 z-10">
        <button className="w-10 h-10 rounded-full border border-[#fefefe] flex items-center justify-center hover:bg-white/5 transition-colors group">
          <span className="text-[#fefefe] group-hover:text-white transition-colors text-lg">↓</span>
        </button>
      </div>
      {/* سهم الانتقال السفلي */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 z-10">
  <button className="w-10 h-10 rounded-full border border-[#fefefe] flex items-center justify-center hover:bg-white/5 transition-colors group">
    <span className="text-[#fefefe] group-hover:text-white transition-colors text-lg">
      ↓
    </span>
  </button>
</div>
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* النصوص والوصف */}
        <div className="text-center max-w-3xl mb-16" dir="rtl">
<h2
  className="text-7xl md:text-7xl font-black text-white select-none inline-block
             transform -rotate-4 origin-center tracking-wide
             drop-shadow-[6px_6px_0px_#2a303c]
             [-webkit-text-stroke:8px_black] [paint-order:stroke_fill]" 
>
  من نحن؟
</h2>
          <p className="text-gray-300 text-sm md:text-base md:text-lg leading-relaxed font-medium px-4 mt-6">
            في مركز الدولية للخراطة وتشغيل المعادن، نقدم حلولاً متكاملة 
            في تصنيع وتشغيل المعادن باستخدام أحدث ماكينات CNC 
            والمعدات الصناعية المتطورة، مع فريق هندسي يمتلك خبرة واسعة 
            لضمان أعلى مستويات الجودة والدقة في كل مشروع.
          </p>
        </div>

        {/* صور متداخلة (Collage) بمقاسات متساوية تمامًا */}
        <div className="relative w-full max-w-4xl aspect-[16/10] mt-4">

          {/* الصورة الأولى - خلفية، أعلى اليسار */}
          <div className="absolute left-[2%] top-[10%] z-10 h-[55%] w-[56%] bg-zinc-800 rounded-[24px] overflow-hidden  shadow-2xl">
            <div className="absolute inset-0 bg-[url('/factory-1.png')] bg-cover bg-center" />
          </div>

          {/* الصورة الثانية - وسط، أعلى اليمين (نفس مقاس الصورة الأولى) */}
          <div className="absolute right-[2%] top-0 z-20 h-[55%] w-[56%] bg-zinc-800 rounded-[24px] overflow-hidden  shadow-2xl">
            <div className="absolute inset-0 bg-[url('/factory-2.png')] bg-cover bg-center" />
          </div>

          {/* الصورة الثالثة - أمام، أسفل المنتصف (نفس مقاس الصورتين) */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-30 h-[55%] w-[56%] bg-zinc-800 rounded-[24px] overflow-hidden  shadow-2xl ring-1 ring-black/20">
            <div className="absolute inset-0 bg-[url('/factory-3.png')] bg-cover bg-center" />
          </div>
        </div>
      </div>
    </section>
  );
}