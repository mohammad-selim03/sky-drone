import DroneHero from "@/components/DroneHero";
import HeroSection from "@/components/Home/HeroSection";
import ProductGrid from "@/components/ProductCard";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <main>
      <ThemeToggle />
      <DroneHero />
      <HeroSection />
      <ProductGrid />
    </main>
  );
}
