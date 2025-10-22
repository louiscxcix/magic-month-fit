import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Heart, TrendingUp } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Dumbbell,
      title: "Strength & Muscle",
      description: "Build lean muscle mass and increase strength with progressive overload training programs.",
      features: [
        "Custom workout plans",
        "Progressive tracking",
        "Form check videos",
        "Nutrition guidance"
      ]
    },
    {
      icon: Heart,
      title: "Fat Loss & Conditioning",
      description: "Torch fat while maintaining muscle with strategic training and nutrition protocols.",
      features: [
        "Metabolic training",
        "Cardio programming",
        "Meal planning",
        "Weekly check-ins"
      ]
    },
    {
      icon: TrendingUp,
      title: "Athletic Performance",
      description: "Elevate your athletic abilities with sport-specific training and conditioning.",
      features: [
        "Sport-specific drills",
        "Explosiveness training",
        "Mobility work",
        "Recovery protocols"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl sm:text-6xl text-foreground mb-4">
            CHOOSE YOUR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-accent">PROGRAM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All programs include personalized coaching, progress tracking, and 24/7 support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-accent hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-4">
                  <program.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bebas">{program.title}</CardTitle>
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
