import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#111622] overflow-hidden">
      {/* Background Radial Glow - تم تعديل الأماكن لتظهر بداخل الشاشة */}
      <div
        className="pointer-events-none absolute left-[-100px] top-[200px] w-[800px] h-[800px] z-0"
        style={{
          background: `
            radial-gradient(
              circle,
              rgba(181,23,25,0.25) 0%,
              rgba(181,23,25,0.15) 35%,
              rgba(181,23,25,0.05) 70%,
              transparent 100%
            )
          `,
          filter: "blur(140px)",
        }}
      />

      {/* Content wrapper with higher z-index to stay above the glow */}
      <div className="relative z-10">
        <ContactSection />
      </div>
    </main>
  );
}