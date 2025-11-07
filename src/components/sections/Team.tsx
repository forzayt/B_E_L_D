import { Card } from "@/components/ui/card";
import { User, Mail, MapPin } from "lucide-react";
import abhishaiImage from "../../images/Abhishai John Philip.png";
import alainImage from "../../images/Alain Mathew Prince.png";
import donImage from "../../images/Don Joseph.png";

export const Team = () => {
  const team = [
    { name: "Abhishai John Philip", role: "Team Leader", image: abhishaiImage },
    { name: "Alain Mathew Prince", role: "Team Member", image: alainImage },
    { name: "Don Joseph", role: "Team Member", image: donImage }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated innovators from GHSS Maloth Kasba working to make electrical safety accessible.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-card border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-33 h-33 mx-auto mb-4 rounded-full overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium">
                  {member.role}
                </p>
              </Card>
            ))}
          </div>

          {/* Project Details */}
          {/* <Card className="p-8 bg-gradient-dark border-primary/20">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Project Information
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>GHSS Maloth Kasba, Kasaragod</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>Theme: Data Science and Future Technology</span>
                </div>
              </div>
            </div>
          </Card> */}
        </div>
      </div>
    </section>
  );
};
