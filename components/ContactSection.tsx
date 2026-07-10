import Link from "next/link";

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="relative flex items-center justify-start p-6 sm:p-12 overflow-hidden font-sans" 
      dir="rtl"
    >
      {/* Main Container Card */}
      <div className="relative w-full p-8 sm:p-16 flex flex-col items-start text-right overflow-hidden">
        
        {/* Title */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
          تواصل معنا
        </h2>

        {/* Subtitle / Question */}
        <p className="text-gray-100 text-lg sm:text-2xl font-semibold mb-6">
          هل لديك استفسار أو ترغب في تنفيذ مشروعك؟
        </p>

        {/* Detailed Description */}
        <p className="text-gray-200 text-base sm:text-xl leading-relaxed max-w-3xl mb-8">
          فريقنا جاهز للإجابة على جميع استفساراتك وتقديم الحلول المناسبة لاحتياجاتك في أعمال الخراطة، والتشغيل، والتصنيع المعدني. تواصل معنا اليوم، وسنعمل معك خطوة بخطوة لتحويل فكرتك إلى منتج يُنفذ بأعلى معايير الجودة والدقة، مع الالتزام بمواعيد التسليم.
        </p>

        {/* Final Small Note */}
        <p className="text-gray-300 text-sm sm:text-base mb-10">
          نحن هنا لخدمتك والإجابة على استفساراتك في أسرع وقت.
        </p>

        {/* Action Button with Extended Kashida on both حرف التاء and حرف الفاء */}
        <Link
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-12 py-5 border-2 border-white/90 hover:border-white text-white font-semibold rounded-full transition-all hover:bg-white/10 text-lg"
        >
          <span>تـــــحدث مع فـــــريقنا</span>
        </Link>

      </div>
    </section>
  );
}