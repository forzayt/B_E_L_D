import { Card } from "@/components/ui/card";
import { Users, Building2, Lightbulb, CheckCircle2 } from "lucide-react";

export const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Who Benefits?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solution serves a wide range of stakeholders across residential, 
              commercial, and industrial sectors.
            </p>
          </div>

          {/* Beneficiaries */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Direct Beneficiaries</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Households and residential users</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Electricians and maintenance professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Industries using power supply systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Electricity board maintenance staff</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-card-foreground mb-4">Indirect Beneficiaries</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">General public living near electric poles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Government agencies for electrical safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Insurance companies reducing claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Emergency response services</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Unique Features */}
          <Card className="p-8 bg-gradient-dark border-primary/20">
            <div className="flex items-start gap-4 mb-4">
              <Lightbulb className="w-12 h-12 text-primary shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  What Makes Us Unique?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unlike traditional systems, BELD not only detects line breaks but also <span className="text-primary font-semibold">automatically switches off the MCB</span> and 
                  sends <span className="text-primary font-semibold">real-time alerts via SMS, call, or WhatsApp</span>. 
                  This combination of automation, IoT alerts, and safety control makes it unique. 
                  Our design is <span className="text-primary font-semibold">affordable</span>, <span className="text-primary font-semibold">simple to install</span>, 
                  and provides <span className="text-primary font-semibold">instant response</span> compared to industrial-grade systems.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
