import React from "react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  { label: "خراطة CNC", href: "#" },
  { label: "خراطة تقليدية", href: "#" },
  { label: "تشكيل المعادن", href: "#" },
  { label: "ثقب وتفريز", href: "#" },
  { label: "تصنيع حسب الطلب", href: "#" },
];

const QUICK_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "خدماتنا", href: "/services" },
  { label: "أعمالنا", href: "/works" },
  { label: "تواصل معنا", href: "/contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative  bg-white text-[#181918] pt-16 rounded-tr-[60px] rounded-tl-[60px] md:rounded-tr-[120px] md:rounded-tl-[120px]">
      {/* Top curved glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-40 w-full max-w-5xl rounded-b-[100%] bg-gradient-to-b from-black/5 via-black/[0.01] to-transparent blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 text-center md:text-right">
          
          {/* 1. اللوجو والوصف (أقصى اليمين - يحدد الارتفاع) */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/footer-logo.png"
                alt="مركز الدولية"
                width={210}
                height={210}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#181918]/80 md:text-right">
              مركز الدولية للخراطة وتشغيل المعادن، نقدم حلولاً متكاملة في
              تصنيع وتشغيل المعادن باستخدام أحدث ماكينات CNC والمعدات
              الصناعية المتطورة، مع فريق هندسي يمتلك خبرة واسعة لضمان أعلى
              مستويات الجودة والدقة في كل مشروع.
            </p>
          </div>

          {/* 2. خدماتنا (المنتصف الأول) - 🛠️ تم إضافة md:pt-4 لتنزيل المحتوى بمحاذاة اللوجو */}
          <div className="flex flex-col items-center md:items-start mt-8 md:pt-4">
            <h3 className="mb-4 text-lg font-extrabold text-[#181918]">
              خدماتنا
            </h3>
            <ul className="flex flex-col gap-2">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[#b51719]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. روابط مهمة (المنتصف الثاني) - 🛠️ تم إضافة md:pt-4 */}
          <div className="flex flex-col items-center md:items-start mt-8 md:pt-4">
            <h3 className="mb-4 text-lg font-extrabold text-[#181918]">
              روابط مهمة
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-[#b51719]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. تواصل معنا (أقصى اليسار) - 🛠️ تم إضافة md:pt-4 */}
          <div className="flex flex-col items-center md:items-start mt-8 md:pt-4">
            <h3 className="mb-4 text-lg font-extrabold text-[#181918]">
              تواصل معنا
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-[#181918]/80">
              <li>مدينة المستقبل - الاسماعيلية</li>
              <li dir="ltr" className="md:text-right">
                amr776276@gmail.com
              </li>
              <li dir="ltr" className="md:text-right">
                01225888133
              </li>
              <li dir="ltr" className="md:text-right">
                01033703430
              </li>
            </ul>
          </div>

        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-6 text-center">
          <p className="text-xs ">
            © جميع الحقوق محفوظة لدى مركز الدولية 2026
          </p>
        </div>
      </div>
    </footer>
  );
}