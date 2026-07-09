import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const expoArabic = localFont({
  src: [
    {
      path: "../public/fonts/ExpoArabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ExpoArabic-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ExpoArabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ExpoArabic-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ExpoArabic-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-expo",
});

const cairoArabic = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "مركز الدولية للخراطة وتشغيل المعادن",
  description: "حلول متكاملة في تصنيع وتشغيل المعادن باستخدام أحدث ماكينات CNC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      // 🛠️ تم إضافة expoArabic.variable هنا لكي يتعرف عليه ملف الـ CSS والـ Tailwind
      className={`${expoArabic.variable} ${cairoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#111622] font-sans">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}