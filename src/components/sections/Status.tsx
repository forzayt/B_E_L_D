import { Card } from "@/components/ui/card";
import { CheckCircle2, FileText, Award } from "lucide-react";

export const Status = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Project Status
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Current development stage and intellectual property information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Prototype Status */}
            <Card className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Prototype Stage</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The project is currently in the <span className="text-primary font-semibold">Prototype Development Stage</span>. 
                All required components (Arduino Uno, SIM900A, optocoupler module, Wi-Fi-enabled MCB, and power modules) 
                have been <span className="text-primary font-semibold">successfully assembled and tested</span>. 
                The circuit can detect electric line failures, automatically turn off the MCB, and send alert messages 
                through GSM and internet-based systems.
              </p>
            </Card>

            {/* IP Status */}
            <Card className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Intellectual Property</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Patent <span className="text-primary font-semibold">not yet filed</span>, but the project idea is 
                <span className="text-primary font-semibold"> unique and patentable</span> due to its combination of 
                real-time electric line fault detection, automatic circuit cutoff, and multi-platform alert communication system. 
                Plans are in place to document and file for intellectual property protection in the future.
              </p>
            </Card>
          </div>

          {/* Survey Results */}
          <Card className="p-8 mt-8 bg-gradient-dark border-primary/20">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-12 h-12 text-primary shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Stakeholder Survey Findings
                </h3>
                <p className="text-muted-foreground mb-4">
                  We conducted a comprehensive survey among <span className="text-primary font-semibold">50+ people</span>, 
                  including homeowners, KSEB linemen, students, and general public to understand the real-world impact 
                  and validate our solution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Most people face frequent power failures but get no instant alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Electricians confirmed line detection usually takes time and manual checking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Users enthusiastically welcomed SMS and WhatsApp alert features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Stakeholders suggested Wi-Fi-based MCB control for enhanced safety</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
