import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { Projects } from "@/components/Projects";
import { ClientWork } from "@/components/ClientWork";
import { StartupVision } from "@/components/StartupVision";
import { Community } from "@/components/Community";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090a0f] text-slate-100 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Philosophy />
        <Projects />
        <ClientWork />
        <StartupVision />
        <Community />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
