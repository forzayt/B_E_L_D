import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Zap } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions or want to learn more? Reach out to us!
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-dark border-primary/20">
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:abhishaijohn1@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      abhishaijohn1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Vallikadavu (PO), Malom<br />
                      Kasaragod, Kerala
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-border">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                  <span className="text-lg font-bold text-foreground">
                    Interested in collaboration or investment?
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:abhishaijohn1@gmail.com'}
                  >
                    Contact Team Leader
                  </Button>
                </div>
              </div>

              {/* Thank You Note */}
              <div className="text-center pt-6">
                <p className="text-2xl font-bold text-foreground mb-2">
                  Thank You
                </p>
                <p className="text-muted-foreground">
                  for your time and attention
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
