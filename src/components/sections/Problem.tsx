import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Zap, Wrench } from "lucide-react";

export const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Undetected Failures",
      description: "Electric line faults often go unnoticed until they cause fires, short circuits, or appliance damage."
    },
    {
      icon: Clock,
      title: "Delayed Detection",
      description: "Failures in rural or outdoor power lines are difficult to detect, leading to longer repair times."
    },
    {
      icon: Zap,
      title: "Safety Risks",
      description: "Users aren't immediately aware if the issue is a line break, transformer failure, or general outage."
    },
    {
      icon: Wrench,
      title: "Manual Inspection",
      description: "Existing systems require manual inspection or depend on unreliable indicators."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Problem We're Solving
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Electric line faults pose serious risks to safety and infrastructure, 
              yet current detection methods are inadequate.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 border-border bg-card"
              >
                <problem.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Main Problem Description */}
          <Card className="p-8 bg-gradient-dark border-primary/20">
            <p className="text-lg text-foreground leading-relaxed">
              This delay in detecting faults can lead to <span className="text-primary font-semibold">safety risks</span>, 
              <span className="text-primary font-semibold"> equipment damage</span>, and 
              <span className="text-primary font-semibold"> longer repair times</span>. 
              There is no automatic way to isolate the faulty line or alert users instantly when a fault occurs. 
              Our solution addresses these critical gaps with intelligent automation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
