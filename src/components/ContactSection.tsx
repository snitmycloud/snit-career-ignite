import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Globe, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Locations",
    content: "Kukatpally, Dilsukh Nagar, Ameerpet campuses",
    subtitle: "Hyderabad"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 96400 05999",
    subtitle: "Call us anytime"
  },
  {
    icon: Globe,
    title: "Website",
    content: "snitsolutions.in",
    subtitle: "Visit our website"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@snitsolutions.in",
    subtitle: "Send us a message"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0">
              <CardHeader className="pb-4">
                <div className="bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-primary mb-1">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-hero border-0">
          <CardContent className="p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your IT Career?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of successful graduates who have transformed their careers with SNIT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule a Call
              </Button>
              <Button variant="secondary" size="lg">
                Download Brochure
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;