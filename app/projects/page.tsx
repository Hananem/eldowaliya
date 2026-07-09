import OurClients from "@/components/OurClients";
import ClientsShowcase from "@/components/ClientsShowcase"; // السلايدر الجديد (كارت التفاصيل)

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#111622]">
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