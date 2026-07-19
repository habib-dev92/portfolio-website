import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Portfolio />
      <Certificates />
      <Blog />
      <Contact />
      <Footer />
      <Chatbot />
      <BackToTop />
    </>
  );
}
