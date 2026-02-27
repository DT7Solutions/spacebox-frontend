import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import projectCommercial from "@/assets/project-commercial.jpg";
import projectReception from "@/assets/project-reception.jpg";
import projectMeeting from "@/assets/project-meeting.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import projectBedroom from "@/assets/project-bedroom.jpg";
import projectWorkspace from "@/assets/project-workspace.jpg";
import c1Lobby from "@/assets/projects/c1-lobby.jpg";
import c2Reception from "@/assets/projects/c2-reception.jpg";

const projects = [
  { img: projectCommercial, title: "Modern Office Hub", category: "Commercial" },
  { img: projectReception, title: "Luxury Reception", category: "Commercial" },
  { img: projectResidential, title: "Contemporary Living", category: "Residential" },
  { img: projectMeeting, title: "Executive Boardroom", category: "Office" },
  { img: projectBedroom, title: "Serene Bedroom Suite", category: "Residential" },
  { img: projectWorkspace, title: "Creative Workspace", category: "Commercial" },
  { img: c1Lobby, title: "Grand Lobby", category: "Hospitality" },
  { img: c2Reception, title: "Corporate Welcome", category: "Commercial" },
];

const PROJECT_HEIGHT = 420; // px per project visible area
const GAP = 24;

const OurWorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Total scroll height = enough to scroll through all projects
  const totalScrollHeight = (projects.length) * (PROJECT_HEIGHT + GAP);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Translate the project list upward as user scrolls
  const maxTranslate = (projects.length - 1) * (PROJECT_HEIGHT + GAP);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${totalScrollHeight + 100}px` }}
    >
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center pt-24 lg:pt-0">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 items-center">
            {/* Left: Sticky text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className=""
            >
              <p className="text-secondary text-sm uppercase tracking-[0.3em] mb-4 font-body">
                Our Work
              </p>
              <h2 className="text-4xl md:text-5xl text-foreground leading-tight">
                Spaces We 
                <br />
                Designed 
              </h2>
              <p className="mt-6 text-muted-foreground font-body max-w-sm leading-relaxed">
                Explore our completed projects in the form of Residential, Commercial, and Office Interior Designers in Telangana.
              </p>

              <a
                href="/projects"
                className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold uppercase tracking-wider text-sm hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.97] hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-xl"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </a>

              {/* Progress dots */}
              <div className="mt-10 flex gap-2">
                {projects.map((_, i) => (
                  <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} total={projects.length} />
                ))}
              </div>
            </motion.div>

            {/* Right: Scrolling projects */}
            <div className="relative h-[50vh] sm:h-[60vh] lg:h-[calc(100vh-120px)] overflow-hidden">
              <motion.div
                style={{ y: translateY }}
                className="flex flex-col"
                transition={{ type: "tween", ease: "linear" }}
              >
                {projects.map((p, i) => (
                  <div
                    key={p.title}
                    className="group relative overflow-hidden rounded-sm"
                    style={{
                      height: `${PROJECT_HEIGHT}px`,
                      marginBottom: i < projects.length - 1 ? `${GAP}px` : 0,
                    }}
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                      loading="lazy"
                      style={{ aspectRatio: "1920/800" }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-end">
                      <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs text-secondary uppercase tracking-widest font-body">
                          {p.category}
                        </p>
                        <h3 className="text-lg text-background mt-1">{p.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Small progress dot component
function ProgressDot({
  index,
  scrollYProgress,
  total,
}: {
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, start + 0.01, end - 0.01, end], [0.25, 1, 1, 0.25]);
  const scale = useTransform(scrollYProgress, [start, start + 0.01, end - 0.01, end], [1, 1.4, 1.4, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-2 h-2 rounded-full bg-secondary"
    />
  );
}

export default OurWorkSection;
