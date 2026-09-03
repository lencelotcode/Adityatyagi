import { useState } from "react";
import { motion } from "framer-motion";
import WelcomeLoader from "@/components/WelcomeLoader";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Toolkit from "@/components/sections/Toolkit";
import Competencies from "@/components/sections/Competencies";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <WelcomeLoader onLoaded={() => setIsLoaded(true)} />
      <ScrollProgress />

      {/* Page container with smooth curtain reveal & lift animation */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.985 }}
        animate={
          isLoaded
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 32, scale: 0.985 }
        }
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white min-h-screen pt-20"
      >
        <Header />
        <Hero />
        <Toolkit />
        <Competencies />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
