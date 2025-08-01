import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-hero text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <img 
            src="/lovable-uploads/9bad1812-3a32-4dd9-a16e-81dfceea8192.png" 
            alt="SNIT Training Institute Logo" 
            className="h-20 w-20 mr-4"
          />
          <div>
            <h1 className="text-5xl font-bold mb-2">SNIT Training Institute</h1>
            <p className="text-xl opacity-90">Hyderabad</p>
          </div>
        </div>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Your career starts here — IT Networking, Cloud & Digital Marketing training in Hyderabad
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            Start Your Journey
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            View Courses
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;