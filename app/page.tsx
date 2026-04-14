import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Install } from "@/components/Install";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 grid-bg pointer-events-none opacity-40"
        aria-hidden
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,132,255,0.15) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col">
        <Nav />
        <Hero />
        <Features />
        <Install />
        <Footer />
      </div>
    </main>
  );
}
