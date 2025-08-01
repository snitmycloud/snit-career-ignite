import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Briefcase } from "lucide-react";

const stats = [
  { icon: Users, label: "Students Trained", value: "500+" },
  { icon: Award, label: "Certifications", value: "95%" },
  { icon: Briefcase, label: "Placement Rate", value: "100%" }
];

const PlacementSection = () => {
  return (
    <section id="placement" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Placement & Career Support</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
          <CardContent className="p-8 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              We partner with multiple agencies and firms to help you secure jobs in cloud, networking, 
              digital marketing and IT roles. Our training includes real-time projects and mentorship 
              from industry experts.
            </p>
            <Button variant="hero">Get Placement Support</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlacementSection;