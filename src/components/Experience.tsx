import { Briefcase, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "JP Morgan Chase & Co.",
    period: "06/2025 – 08/2025",
    type: "work",
    description: [
      "Led full-stack development of a modernized internal communication tool, leveraging Spring Boot, Java, and React to improve accessibility and efficiency.",
      "Engineered scalable API integrations and intuitive front-end interfaces to streamline employee connectivity.",
      "Operated within an Agile framework, contributing to iterative development through daily standups and cross-functional collaboration."
    ]
  },
  {
    title: "Data For Good Hackathon Winner",
    company: "JP Morgan Chase & Co.",
    period: "04/2025",
    type: "achievement",
    description: [
      "Led development of a full-stack data visualization platform during J.P. Morgan's Data for Good Hackathon, winning 1st place out of all competing teams.",
      "Designed and implemented AI-powered insights tools (Insight.AI chatbot, persona builder) to support data-driven outreach strategies for The Concilio, a Dallas-based nonprofit.",
      "Collaborated with a cross-functional team to deliver real-time dashboards and interactive community maps using Next.js, FastAPI, Mapbox, and OpenAI APIs within a 24-hour sprint."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      {exp.type === "work" ? (
                        <Briefcase className="w-6 h-6 text-primary" />
                      ) : (
                        <Trophy className="w-6 h-6 text-secondary" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
