import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SignupDialog from "@/components/SignupDialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-primary-foreground mb-6 leading-none">
            TRANSFORM YOUR
            <br />
            <span className="text-secondary">BODY & MIND</span>
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 font-medium">
            Join Magic Mathis's elite coaching program and unlock your full potential with personalized monthly training plans designed for real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => setDialogOpen(true)}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold shadow-glow group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              onClick={scrollToPricing}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold shadow-glow group"
            >
              View Programs
            </Button>
          </div>
        </div>
      </div>

      <SignupDialog open={dialogOpen} onOpenChange={setDialogOpen} />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
