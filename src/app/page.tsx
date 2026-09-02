import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rides from "@/components/Rides";
import Stalls from "@/components/Stalls";
import Offers from "@/components/Offers";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import VisitInfo from "@/components/VisitInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Rides />
        <Stalls />
        <Offers />
        <Gallery />
        <Testimonials />
        <FAQ />
        <VisitInfo />
      </main>
      <Footer />
    </div>
  );
}
