import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-bebas text-5xl sm:text-7xl text-primary-foreground mb-6">
            READY TO START YOUR
            <br />
            TRANSFORMATION?
          </h2>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of clients who've already transformed their lives with Magic Mathis's proven coaching methods.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg font-bold shadow-glow group px-8"
            >
              Begin Your Journey Today
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg font-semibold px-8"
            >
              Schedule Free Consultation
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>No long-term commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Results guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
