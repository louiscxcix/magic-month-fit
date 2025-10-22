import { Card, CardContent } from "@/components/ui/card";
import transformationImg from "@/assets/transformation.jpg";

const ClientSuccess = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl sm:text-6xl text-foreground mb-4">
            CLIENT <span className="text-secondary">SUCCESS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformations from real people who trusted the process
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-lg overflow-hidden shadow-elegant animate-fade-in">
              <img 
                src={transformationImg} 
                alt="Client transformation before and after" 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-6 animate-fade-in">
              <Card className="bg-gradient-accent border-0">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="font-bebas text-3xl text-secondary-foreground">
                      INCREDIBLE 6-MONTH TRANSFORMATION
                    </h3>
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <div className="text-center">
                        <div className="font-bebas text-4xl text-secondary-foreground">-45</div>
                        <div className="text-sm text-secondary-foreground/80">lbs Lost</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bebas text-4xl text-secondary-foreground">+15</div>
                        <div className="text-sm text-secondary-foreground/80">lbs Muscle</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bebas text-4xl text-secondary-foreground">100%</div>
                        <div className="text-sm text-secondary-foreground/80">Committed</div>
                      </div>
                    </div>
                    <p className="text-secondary-foreground/90 italic leading-relaxed">
                      "Working with Magic Mathis changed my life. Not just my body, but my entire mindset. 
                      The personalized training and nutrition plan was exactly what I needed. Six months ago, 
                      I couldn't imagine looking like this. Now I feel unstoppable!"
                    </p>
                    <div className="pt-2">
                      <p className="font-semibold text-secondary-foreground">— Client Testimonial</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h4 className="font-bebas text-xl text-foreground mb-3">THE PROGRAM INCLUDED:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      Custom workout plans updated monthly
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      Personalized nutrition and meal plans
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      Weekly check-ins and progress tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      24/7 support and motivation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
