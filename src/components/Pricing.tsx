import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      price: "20",
      currency: "€",
      description: "Perfect for getting started on your fitness journey",
      features: [
        "Custom workout plan",
        "Basic nutrition guide",
        "Monthly progress reviews",
        "Email support",
        "Training video library"
      ],
      popular: false
    },
    {
      name: "Elite",
      price: "40",
      currency: "€",
      description: "Most popular choice for serious transformations",
      features: [
        "Fully personalized program",
        "Custom meal plans",
        "Weekly video check-ins",
        "24/7 chat support",
        "Form analysis & feedback",
        "Supplement guidance",
        "Priority scheduling"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "60",
      currency: "€",
      description: "Ultimate transformation experience",
      features: [
        "Everything in Elite",
        "Bi-weekly 1-on-1 video calls",
        "Daily accountability",
        "Advanced tracking & analytics",
        "Recovery & mobility programs",
        "VIP community access",
        "Quarterly goal setting sessions"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl sm:text-6xl text-foreground mb-4">
            MONTHLY
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-accent">PRICING</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible monthly plans with no long-term commitment. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 animate-scale-in ${
                plan.popular 
                  ? 'border-accent shadow-glow scale-105' 
                  : 'border-border hover:border-accent hover:shadow-card'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent text-secondary-foreground px-6 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-3xl font-bebas mb-2">{plan.name}</CardTitle>
                <CardDescription className="mb-4">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bebas text-foreground">{plan.currency}{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full text-lg font-bold ${
                    plan.popular 
                      ? 'bg-gradient-accent hover:opacity-90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          All plans are billed monthly and can be cancelled at any time. No hidden fees or long-term contracts.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
