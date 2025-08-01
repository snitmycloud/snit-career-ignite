import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import PlacementSection from "@/components/PlacementSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutSection />
      <CoursesSection />
      <PlacementSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
