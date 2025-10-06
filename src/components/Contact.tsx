import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "murad.alhassen1@gmail.com",
      href: "mailto:murad.alhassen1@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "480-492-1157",
      href: "tel:480-492-1157",
      color: "text-secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/murad-alhassen",
      href: "https://linkedin.com/in/murad-alhassen",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/muradalhassen",
      href: "https://github.com/muradalhassen",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations. 
            Feel free to reach out through any of the channels below!
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <a 
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4"
                >
                  <div className={`w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{method.label}</div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'mailto:murad.alhassen1@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
