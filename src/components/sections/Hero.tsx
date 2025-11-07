import { Button } from "@/components/ui/button";
import { Zap, Shield, Bell } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Broken Electric Line
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Detector
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Intelligent IoT device that detects electric line failures, automatically switches off power, 
            and sends instant alerts to prevent electrical hazards.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-primary" />
              <span>Automatic Safety</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Bell className="w-5 h-5 text-primary" />
              <span>Instant Alerts</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Zap className="w-5 h-5 text-primary" />
              <span>Real-time Detection</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>

          {/* Project Details */}
          <div className="pt-8 text-sm text-white/70">
            <p>Theme: Data Science and Future Technology</p>
            <p>Institution: GHSS Maloth Kasba, Kasaragod</p>
          </div>
        </div>
      </div>
    </section>
  );
};
