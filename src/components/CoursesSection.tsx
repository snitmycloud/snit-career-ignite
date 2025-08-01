import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Cloud, Code, TrendingUp } from "lucide-react";

const courses = [
  {
    icon: Network,
    title: "IT Networking",
    description: "CCNA, TCP/IP, Troubleshooting",
    badge: "Certification Ready",
    color: "bg-primary"
  },
  {
    icon: Cloud,
    title: "Cloud Certifications",
    description: "Microsoft Azure, AWS DevOps",
    badge: "Industry Focused",
    color: "bg-secondary"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Front-end, back-end, full-stack",
    badge: "Hands-on Projects",
    color: "bg-primary"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & AI",
    description: "AI Powered Marketing Programs with real-time projects",
    badge: "Future Ready",
    color: "bg-secondary"
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Courses & Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardHeader className="text-center pb-4">
                <div className={`${course.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="h-8 w-8 text-white" />
                </div>
                <Badge className="mb-2" variant="secondary">{course.badge}</Badge>
                <CardTitle className="text-xl text-foreground">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;