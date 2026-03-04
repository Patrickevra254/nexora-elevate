import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesSection from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Technologies from "@/components/sections/Technologies";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <WhyChooseUs />
      <Technologies />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
