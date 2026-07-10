import OurClients from "@/components/OurClients";
import ClientsShowcase from "@/components/ClientsShowcase"; // السلايدر الجديد (كارت التفاصيل)

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#111622]">
           <div
        className="pointer-events-none absolute left-[-300px] top-[300px] w-[800px] h-[800px] z-0"
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
      {/* Your existing projects page content */}
      <div className="py-12">
        {/* Other project components or grids here */}
      </div>

      {/* شريط الشعارات */}
      <OurClients />

      {/* سلايدر تفاصيل العملاء */}
      <ClientsShowcase />
    </main>
  );
}