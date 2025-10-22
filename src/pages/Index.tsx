import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import NutritionPlan from "@/components/NutritionPlan";
import SuccessStory from "@/components/SuccessStory";
import ClientSuccess from "@/components/ClientSuccess";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <NutritionPlan />
      <SuccessStory />
      <ClientSuccess />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
