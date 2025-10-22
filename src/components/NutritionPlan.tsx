import { Card, CardContent } from "@/components/ui/card";
import { Apple, Utensils, Coffee, Moon } from "lucide-react";

const NutritionPlan = () => {
  const mealPlans = [
    {
      icon: Coffee,
      title: "Breakfast",
      time: "7:00 AM",
      description: "High-protein meals to kickstart your metabolism",
      examples: "Oatmeal, eggs, Greek yogurt, fruits"
    },
    {
      icon: Apple,
      title: "Mid-Morning Snack",
      time: "10:00 AM",
      description: "Nutrient-dense snacks to maintain energy",
      examples: "Protein shake, nuts, apple with almond butter"
    },
    {
      icon: Utensils,
      title: "Lunch",
      time: "1:00 PM",
      description: "Balanced meals with lean protein and complex carbs",
      examples: "Grilled chicken, brown rice, vegetables, salad"
    },
    {
      icon: Moon,
      title: "Dinner",
      time: "7:00 PM",
      description: "Light, protein-focused meals for recovery",
      examples: "Salmon, quinoa, steamed vegetables"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl sm:text-6xl text-foreground mb-4">
            NUTRITION <span className="text-secondary">PLAN</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fuel your body with personalized meal plans designed to complement your training and maximize results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mealPlans.map((meal, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <meal.icon className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-bebas text-2xl text-foreground">{meal.title}</h3>
                      <span className="text-sm text-secondary font-semibold">{meal.time}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{meal.description}</p>
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-secondary">Includes:</span> {meal.examples}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto bg-gradient-accent border-0">
            <CardContent className="p-8">
              <h3 className="font-bebas text-3xl text-secondary-foreground mb-3">
                PERSONALIZED TO YOUR GOALS
              </h3>
              <p className="text-secondary-foreground/90 text-lg">
                Every nutrition plan is customized based on your body type, fitness goals, dietary restrictions, 
                and training intensity. You'll receive weekly meal prep guides and grocery lists.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NutritionPlan;
