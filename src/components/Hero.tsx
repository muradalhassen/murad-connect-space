import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshotImage from "@/assets/Murad_Headshot.JPG?url";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background animate-gradient opacity-50" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Headshot */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img 
                src={headshotImage} 
                alt="Murad Alhassen" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/30 shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Name with gradient */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-gradient">Murad Alhassen</span>
          </h1>
          
          {/* Title */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            Junior studying computer science
          </p>
          
          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Computer Science student at Arizona State University with a passion for building 
            impactful solutions. Currently interning at JP Morgan Chase & Co.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3.75</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">2027</div>
              <div className="text-sm text-muted-foreground">Expected Graduation</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Experience
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <a 
              href="https://github.com/muradalhassen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/murad-alhassen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:murad.alhassen1@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="/Murad_Alhassen_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 group"
            >
              <FileText className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
