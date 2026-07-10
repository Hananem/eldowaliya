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
  metadataBase: new URL("https://your-domain.com"), // غيّرها لدومينك الفعلي
  title: {
    default: "مركز الدولية للخراطة وتشغيل المعادن | CNC بالإسماعيلية",
    template: "%s | مركز الدولية للخراطة وتشغيل المعادن",
  },
  description:
    "مركز الدولية للخراطة وتشغيل المعادن بمدينة المستقبل - الإسماعيلية. نقدم خدمات خراطة CNC، تشكيل المعادن، القطع بالليزر، اللحام والتشطيب بأعلى معايير الجودة والدقة منذ أكثر من 18 عامًا.",
  keywords: [
    "خراطة معادن",
    "تشغيل معادن",
    "خراطة CNC",
    "مصنع خراطة الإسماعيلية",
    "تصنيع قطع معدنية",
    "قطع ليزر CNC",
    "لحام وتجميع معادن",
    "مركز الدولية",
  ],
  authors: [{ name: "مركز الدولية للخراطة وتشغيل المعادن" }],
  creator: "مركز الدولية للخراطة وتشغيل المعادن",
  openGraph: {
    title: "مركز الدولية للخراطة وتشغيل المعادن",
    description:
      "حلول متكاملة في تصنيع وتشغيل المعادن باستخدام أحدث ماكينات CNC، بخبرة تمتد لـ 18 عامًا.",
    url: "https://your-domain.com",
    siteName: "مركز الدولية للخراطة وتشغيل المعادن",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // صورة مخصصة 1200x630 تقريبًا
        width: 1200,
        height: 630,
        alt: "مركز الدولية للخراطة وتشغيل المعادن",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مركز الدولية للخراطة وتشغيل المعادن",
    description:
      "حلول متكاملة في تصنيع وتشغيل المعادن باستخدام أحدث ماكينات CNC.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
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