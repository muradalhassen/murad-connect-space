import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const courses = [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Intro to Programming Languages",
    "Digital Design Fundamentals"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Education</span>
          </h2>
          
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 group">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors group-hover:scale-110 duration-300">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      B.S. Computer Science
                    </h3>
                    <p className="text-lg text-primary font-semibold">Minor in Project Management</p>
                    <p className="text-muted-foreground">Arizona State University, Tempe, AZ</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">3.75 GPA</div>
                    <div className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit md:ml-auto mt-1">
                      Expected 05/2027
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-secondary" />
                    <h4 className="text-lg font-semibold text-foreground">Relevant Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-colors duration-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
