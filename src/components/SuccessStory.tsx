import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Users, Target } from "lucide-react";

const SuccessStory = () => {
  const achievements = [
    {
      icon: Award,
      number: "10+",
      label: "Years of Experience"
    },
    {
      icon: Users,
      number: "500+",
      label: "Lives Transformed"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Client Success Rate"
    },
    {
      icon: Target,
      number: "100%",
      label: "Dedication"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl sm:text-6xl text-foreground mb-4">
            MY <span className="text-secondary">SUCCESS STORY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From struggling with my own fitness journey to transforming hundreds of lives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="font-bebas text-3xl text-foreground">THE BEGINNING</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey started 10 years ago when I was overweight, unmotivated, and lost. 
                I knew I needed to make a change, but I didn't know where to start. Through trial, 
                error, and relentless dedication, I discovered what truly works.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bebas text-3xl text-foreground">THE TRANSFORMATION</h3>
              <p className="text-muted-foreground leading-relaxed">
                I didn't just transform my body—I transformed my entire life. I became a certified 
                personal trainer, nutrition specialist, and mental performance coach. I've competed 
                in multiple fitness competitions and won regional bodybuilding championships.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bebas text-3xl text-foreground">THE MISSION</h3>
              <p className="text-muted-foreground leading-relaxed">
                Now, my mission is simple: to help others achieve what I once thought was impossible. 
                Every client I work with gets the benefit of my decade of experience, mistakes, and 
                victories. Your transformation is my transformation.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <achievement.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
                      <div className="font-bebas text-4xl text-secondary mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-accent border-0">
              <CardContent className="p-8">
                <h3 className="font-bebas text-2xl text-secondary-foreground mb-4">
                  CERTIFIED & QUALIFIED
                </h3>
                <ul className="space-y-3 text-secondary-foreground/90">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-foreground"></div>
                    NASM Certified Personal Trainer
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-foreground"></div>
                    Precision Nutrition Level 2 Certified
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-foreground"></div>
                    Sports Performance Specialist
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-foreground"></div>
                    Mental Performance Coach
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
