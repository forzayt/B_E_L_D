import { Card } from "@/components/ui/card";
import { Cpu, Radio, Gauge, Zap, Wifi, Bell } from "lucide-react";

export const TechnicalSpecs = () => {
  const specs = [
    {
      icon: Cpu,
      label: "Controller",
      value: "Arduino Uno"
    },
    {
      icon: Radio,
      label: "Communication",
      value: "GSM (SIM900A) / Wi-Fi MCB"
    },
    {
      icon: Gauge,
      label: "Sensor",
      value: "PC817 Optocoupler Module"
    },
    {
      icon: Zap,
      label: "Power Regulation",
      value: "LM2596 Buck Converter (12V to 5V)"
    },
    {
      icon: Wifi,
      label: "Automatic Control",
      value: "Relay / Wi-Fi MCB"
    },
    {
      icon: Bell,
      label: "Alert System",
      value: "SMS, WhatsApp, or Call"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with reliable, industry-standard components for optimal performance and safety.
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <Card 
                key={index}
                className="p-6 bg-background border-border hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0">
                    <spec.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      {spec.label}
                    </h3>
                    <p className="text-lg font-bold text-foreground">
                      {spec.value}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          {/* <Card className="p-8 mt-12 bg-gradient-dark border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Technical Approach
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Our project uses an <span className="text-primary font-semibold">optocoupler-based sensing mechanism</span> integrated 
              with a microcontroller and GSM/Wi-Fi modules to detect broken or failed electric lines. 
              The design ensures <span className="text-primary font-semibold">low cost</span>, 
              <span className="text-primary font-semibold"> high efficiency</span>, and 
              <span className="text-primary font-semibold"> adaptability</span> for both homes and industries.
            </p>
          </Card> */}
        </div>
      </div>
    </section>
  );
};
