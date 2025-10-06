import { Code2, Layers, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "JavaScript", "Python", "TypeScript", "C++", "MATLAB"]
  },
  {
    title: "Front-End",
    icon: Layers,
    skills: ["React.JS", "HTML", "CSS", "Material UI", "Next.js"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "API", "Pandas", "Machine Learning", "Agile", "Scrum", "Trello", "Spring Boot", "FastAPI", "Mapbox", "OpenAI"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                      >
                        {skill}
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

export default Skills;
