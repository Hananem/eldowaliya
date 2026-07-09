import Services from "@/components/ServicesSection";
import ServicesHero from "@/components/ServicesHero";
export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#111622]">
           <div
        className="pointer-events-none absolute left-[-650px] top-[420px] w-[1700px] h-[1500px] z-1"
        style={{
          background: `
            radial-gradient(
              ellipse at left center,
              rgba(181,23,25,0.28) 0%,
              rgba(181,23,25,0.22) 12%,
              rgba(181,23,25,0.17) 24%,
              rgba(181,23,25,0.12) 38%,
              rgba(181,23,25,0.08) 54%,
              rgba(181,23,25,0.05) 70%,
              rgba(181,23,25,0.025) 86%,
              transparent 100%
            )
          `,
          filter: "blur(160px)",
        }}
      />
      {/* الهالة اليمنى */}
      <div
        className="pointer-events-none absolute -right-[650px] top-[1500px] w-[1700px] h-[1500px] z-5"
        style={{
          background: `
            radial-gradient(
              ellipse at right center,
              rgba(181,23,25,0.20) 0%,
              rgba(181,23,25,0.15) 18%,
              rgba(181,23,25,0.10) 38%,
              rgba(181,23,25,0.06) 58%,
              rgba(181,23,25,0.03) 78%,
              transparent 100%
            )
          `,
          filter: "blur(160px)",
        }}
      />
      <Services />
      <ServicesHero />
    </main>
  );
}