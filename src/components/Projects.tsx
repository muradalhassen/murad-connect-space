import { Brain, Car } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Premier League Match Predictor",
    type: "Personal Project",
    date: "09/2024",
    icon: Brain,
    description: "Built a Machine Learning model in Python using Pandas to predict future Premier League match outcomes, utilizing data scrapping for historical match data collection and preprocessing. Leading to a 70% success rate in predicting match winners.",
    technologies: ["Python", "Pandas", "Machine Learning", "Data Scraping"]
  },
  {
    title: "Project Spyn",
    type: "Class Project",
    date: "08/2023",
    icon: Car,
    description: "Developed an autonomous car within a team that has the capabilities to obey traffic light controls and pickup/drop off passengers through light and motion sensors. Developed code within MATLAB to be programmed onto the car using an Arduino board.",
    technologies: ["MATLAB", "Arduino", "Embedded Systems", "Sensors"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {project.date}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-secondary font-semibold">{project.type}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
