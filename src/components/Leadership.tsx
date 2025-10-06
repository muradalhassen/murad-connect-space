import { Users, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const leadershipRoles = [
  {
    title: "Founder and President",
    organization: "ColorStack at ASU",
    location: "Tempe, AZ",
    period: "08/2024 – Current",
    icon: Users,
    highlights: [
      "Developed a safe place and sense of community for over 70+ Black and Latinx students pursuing CS, projected to double in membership size over the next year.",
      "Planned and held CS-focused technical meetings led by companies such as American Express, Meta, Amazon, Google, and many others."
    ]
  },
  {
    title: "Region VI Vice Chairperson",
    organization: "National Society of Black Engineers",
    location: "West Coast Region",
    period: "05/2025 – Current",
    icon: TrendingUp,
    highlights: [
      "Supporting the Regional Chairperson in overseeing university chapters across the West Coast and driving strategic initiatives to strengthen student engagement and chapter development.",
      "Co-leading the planning and execution of the Fall Regional Conference, a premier recruiting event where 30+ top companies connect directly with diverse engineering talent for internship and full-time opportunities."
    ]
  },
  {
    title: "Vice President",
    organization: "National Society of Black Engineers",
    location: "Tempe, AZ",
    period: "05/2024 – 05/2025",
    icon: Award,
    highlights: [
      "Led a dynamic annual fair, raising an impressive $42,000 in funds and securing participation from 10 leading companies, while also orchestrating a 20-student delegation for a pivotal regional conference.",
      "Amplified user engagement by 30% through proactive updates and alerts, while fostering collaboration with multiple industry leaders to invite guest speakers and actively engaging members through regular meeting presentations."
    ]
  },
  {
    title: "Pinterest Engage Scholar",
    organization: "Pinterest",
    location: "Remote",
    period: "11/2024 – Current",
    icon: Award,
    highlights: [
      "Selected as one of 31 scholars for Pinterest Development Program, aimed at advancing underrepresented talent in tech through technical training, interview prep, mentorship, and professional development."
    ]
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Leadership & Impact</span>
          </h2>
          
          <div className="space-y-6">
            {leadershipRoles.map((role, index) => (
              <Card 
                key={index}
                className="p-6 md:p-8 bg-card border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/20 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                      <role.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-lg text-secondary font-semibold">{role.organization}</p>
                        <p className="text-sm text-muted-foreground">{role.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        {role.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {role.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-secondary mt-1.5">•</span>
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

export default Leadership;
