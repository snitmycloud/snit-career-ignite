import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Us</h2>
        <Card className="shadow-lg border-0 bg-gradient-to-br from-accent to-white">
          <CardContent className="p-8">
            <p className="text-lg leading-relaxed text-center text-muted-foreground">
              SNIT is an institute dedicated to helping students launch successful careers through 
              professional training in computer networking, Microsoft Azure, AWS, web development, 
              and digital marketing. We provide certification-level programs with real-time practical 
              labs and 100% placement assistance.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;