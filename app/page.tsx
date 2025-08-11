import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Fotter";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Gallery />
      <Location />
      <FAQ />
      <Footer />
    </div>
  );
}
