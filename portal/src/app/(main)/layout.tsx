import Footer from "@/views/Footer";
import Navbar from "@/views/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
