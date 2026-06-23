import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Certificates from "@/components/Certificates";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
      </div>
      <About />
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
      </div>
      <Services />
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
      </div>
      <Certificates />
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
      </div>
      <Portfolio />
      <div className="relative z-10 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
          <div className="w-12 sm:w-24 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>
      </div>
      <Contact />
      <Footer />
      <Chatbot />
    </>
  );
}
