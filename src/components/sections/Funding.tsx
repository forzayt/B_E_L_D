import { Card } from "@/components/ui/card";
import { DollarSign, Calendar, Target } from "lucide-react";

export const Funding = () => {
  const fundingNeeds = [
    {
      item: "Purchase of components",
      stage: "Initial stage – prototype development",
      amount: "₹10,000",
      outcome: "Successful assembly and testing of full circuit prototype"
    },
    {
      item: "Circuit design and wiring",
      stage: "During prototype construction",
      amount: "₹100",
      outcome: "Proper functioning without short circuits"
    },
    {
      item: "Enclosure box & safety setup",
      stage: "After prototype assembly",
      amount: "₹100",
      outcome: "Compact and safe housing for live testing"
    },
    {
      item: "Software development",
      stage: "Mid-stage, for creating website",
      amount: "₹2,500",
      outcome: "Working alert system through SMS and Wi-Fi"
    },
    {
      item: "Testing and calibration",
      stage: "Final testing phase",
      amount: "₹1,000",
      outcome: "Accurate detection and alerting system"
    },
    {
      item: "Maintenance kit & spare parts",
      stage: "Post-prototype deployment",
      amount: "₹3,000",
      outcome: "Reliable long-term operation"
    }
  ];

  const projectPhases = [
    { phase: "Concept & Development", requirement: "Product engineering and testing", fund: "₹41,000 - 50,000" },
    { phase: "Product Development", requirement: "Field testing and feedback", fund: "₹50,000" },
    { phase: "Market Strategy", requirement: "Product launch and distribution", fund: "₹2-3 Lakh" },
    { phase: "Commercialization", requirement: "Monitoring and support", fund: "₹5-10 Lakh" },
    { phase: "Quality & Maintenance", requirement: "New features (AI/IoT)", fund: "₹1-5 Lakh" }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Investment & Support Needed
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic funding requirements for prototype to market deployment.
            </p>
          </div>

          {/* Immediate Funding Needs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              Immediate Funding Requirements
            </h3>
            <div className="grid gap-4">
              {fundingNeeds.map((need, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-background border-border hover:shadow-elegant transition-all duration-300"
                >
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{need.item}</h4>
                      <p className="text-sm text-muted-foreground">{need.stage}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-primary">{need.amount}</span>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-start gap-2">
                        <Target className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{need.outcome}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="p-6 mt-4 bg-gradient-dark border-primary/20">
              <p className="text-xl font-bold text-center text-foreground">
                Total Immediate Investment: <span className="text-primary">₹16,700</span>
              </p>
            </Card>
          </div>

          {/* Project Schedule */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Long-term Project Schedule
            </h3>
            <div className="grid gap-4">
              {projectPhases.map((phase, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-background border-border hover:shadow-elegant transition-all duration-300"
                >
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{phase.phase}</h4>
                      <p className="text-sm text-muted-foreground">{phase.requirement}</p>
                    </div>
                    <div className="md:col-span-2 flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Phase {index + 1}</span>
                      <span className="text-xl font-bold text-primary">{phase.fund}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
