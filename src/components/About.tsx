import { Award, Target, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Every program is tailored to your unique goals, fitness level, and lifestyle."
    },
    {
      icon: Zap,
      title: "Proven Results",
      description: "Transform your body with science-backed training methods and nutrition guidance."
    },
    {
      icon: Award,
      title: "Expert Coaching",
      description: "10+ years of experience helping clients achieve their dream physiques."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="font-bebas text-5xl sm:text-6xl text-foreground mb-6">
              MEET
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-accent">MAGIC MATHIS</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm not just a fitness coach – I'm your partner in transformation. With over a decade of experience in strength training, nutrition, and mindset coaching, I've helped hundreds of clients break through their limits and achieve results they never thought possible.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines cutting-edge training techniques with sustainable lifestyle changes, ensuring you don't just reach your goals – you maintain them for life.
            </p>

            {/* Features Grid */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border text-center hover:shadow-glow transition-shadow">
              <div className="font-bebas text-5xl text-primary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Clients Transformed</div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border text-center hover:shadow-glow transition-shadow">
              <div className="font-bebas text-5xl text-secondary mb-2">10+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border text-center hover:shadow-glow transition-shadow">
              <div className="font-bebas text-5xl text-accent mb-2">98%</div>
              <div className="text-muted-foreground font-medium">Success Rate</div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-card border border-border text-center hover:shadow-glow transition-shadow">
              <div className="font-bebas text-5xl text-primary mb-2">24/7</div>
              <div className="text-muted-foreground font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
