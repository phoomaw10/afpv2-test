import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProductSection />
      </div>
    </main>
  );
}
