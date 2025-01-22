import FAQ from "@/components/Landing/FAQ";
import Features from "@/components/Landing/Features";
import { FloatingNav } from "@/components/Landing/FloatingNav";
import Hero from "@/components/Landing/Hero";
import Pricing from "@/components/Landing/Pricing";
import { Testimonials } from "@/components/Landing/Testimonials";
import {
  IconBrandTabler,
  IconCoin,
  IconHome,
  IconMessages,
  IconNotes,
} from "@tabler/icons-react";

const HomePage = () => {
  const navItems = [
    { name: "Statify", link: "/", icon: <IconHome /> },
    { name: "Features", link: "#features", icon: <IconBrandTabler /> },
    { name: "Testimonials", link: "#testimonials", icon: <IconNotes /> },
    //{ name: "Doc", link: "https://dev.to/akashjana" },
    { name: "Pricing", link: "#pricing", icon: <IconCoin /> },
    { name: "FAQ", link: "#faq", icon: <IconMessages /> },
  ];
  return (
    <main className="relative flex flex-col justify-center items-center mx-auto sm:px-10 px-5">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
};

export default HomePage;
