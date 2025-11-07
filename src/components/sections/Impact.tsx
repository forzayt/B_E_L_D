import { Card } from "@/components/ui/card";
import { TrendingUp, Heart, CheckCircle2 } from "lucide-react";

export const Impact = () => {
  const businessImpacts = [
    "Reduces maintenance costs and power losses",
    "Increases system reliability and efficiency",
    "Creates new market opportunity in smart safety devices",
    "Generates revenue through sales and maintenance services"
  ];

  const socialImpacts = [
    "Prevents electrical accidents and fire hazards",
    "Protects appliances and ensures user safety",
    "Provides early warning through instant alerts",
    "Enhances electrical safety in communities",
    "Reduces human risk during power line failures",
    "Promotes energy safety awareness",
    "Useful for rural and urban power management"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Project <span className="bg-gradient-primary bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating value for businesses while making communities safer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Impact */}
            <Card className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Business Impact</h3>
              </div>
              <ul className="space-y-3">
                {businessImpacts.map((impact, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{impact}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Social Impact */}
            <Card className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Social Impact</h3>
              </div>
              <ul className="space-y-3">
                {socialImpacts.map((impact, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{impact}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Revenue Model */}
          <Card className="p-8 mt-8 bg-gradient-dark border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Revenue Model
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              The system can be commercialized as a <span className="text-primary font-semibold">low-cost smart safety device</span> for 
              homes and industries. Income generation through <span className="text-primary font-semibold">product sales</span>, 
              <span className="text-primary font-semibold"> maintenance services</span>, and 
              <span className="text-primary font-semibold"> customization packages</span>. 
              It can also be offered as part of smart home installations or energy safety solutions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
