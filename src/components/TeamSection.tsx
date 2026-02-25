import { User } from "lucide-react";

const team = [
  { name: "Amruta Desai", role: "Managing Director, Finance & Strategy" },
  { name: "Mini Khapekar", role: "Managing Director, Operations & Execution" },
  { name: "Pratyusha Ravula", role: "Principal Designer & Founder" },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl text-foreground mb-4">Our Team</h2>
        <p className="text-muted-foreground font-body max-w-xl mx-auto mb-16">
          12+ In-house Designers, Design Managers, Execution Managers & Sales Managers driving innovation.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((t) => (
            <div key={t.name} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mb-4">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-body">{t.name}</h3>
              <p className="text-sm text-muted-foreground font-body mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
