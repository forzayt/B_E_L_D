import { Card } from "@/components/ui/card";
import { Cpu, Smartphone, Shield, Wifi } from "lucide-react";

export const Solution = () => {
  const features = [
    {
      icon: Cpu,
      title: "Smart Detection",
      description: "Optocoupler-based sensing with Arduino Uno detects broken or faulty electric lines in real-time."
    },
    {
      icon: Shield,
      title: "Automatic Safety",
      description: "Instantly switches off MCB to prevent electrical hazards and protect appliances."
    },
    {
      icon: Smartphone,
      title: "Multi-Channel Alerts",
      description: "Sends alerts via SMS, call, or WhatsApp using GSM module for immediate notification."
    },
    {
      icon: Wifi,
      title: "IoT Integration",
      description: "Wi-Fi-enabled MCB control allows remote monitoring and management of power systems."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An intelligent system combining sensors, Arduino, and smart communication 
              to ensure rapid response and maximum safety.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 bg-background border-border"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Detailed Description */}
          <Card className="p-8 bg-gradient-dark border-primary/20">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              How It Works
            </h3>
            <p className="text-lg text-white leading-relaxed text-center max-w-4xl mx-auto">
              The system continuously monitors electric lines using an optocoupler sensor. 
              When a fault or break is detected, it immediately triggers the Wi-Fi-enabled MCB to cut off power supply, 
              preventing potential hazards. Simultaneously, it sends notifications through the GSM module, 
              ensuring users and technicians are alerted instantly via their preferred communication channel.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
