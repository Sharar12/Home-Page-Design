// src/app/Home/page.tsx
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import SearchBar from "./Components/SearchBar";
import Collections from "./Components/Collections";
import FeaturedVehicles from "./Components/FeaturedVehicles";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      {/* Overlay Search Bar */}
      <div className="relative z-30 -mt-16 md:-mt-20">
        <SearchBar />
      </div>
      <Collections />

      <FeaturedVehicles />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}