import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      result: "Lost 35 lbs in 4 months",
      quote: "Magic Mathis completely transformed my relationship with fitness. His personalized approach made all the difference.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      result: "Gained 20 lbs of muscle",
      quote: "I've worked with multiple coaches, but Magic's attention to detail and support is unmatched. Best investment I've made.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      result: "Achieved dream physique",
      quote: "The monthly program kept me accountable and motivated. Magic's guidance helped me push past every plateau.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bebas text-5xl sm:text-6xl text-foreground mb-4">
            SUCCESS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-accent">STORIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real people who transformed their lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-secondary font-medium">{testimonial.result}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
