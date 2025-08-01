const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <img 
            src="/lovable-uploads/9bad1812-3a32-4dd9-a16e-81dfceea8192.png" 
            alt="SNIT Training Institute Logo" 
            className="h-8 w-8 mr-3"
          />
          <span className="font-semibold">SNIT Training Institute</span>
        </div>
        <p className="text-primary-foreground/80">
          &copy; 2025 SNIT Training Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;