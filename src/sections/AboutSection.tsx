import { motion } from 'framer-motion';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiNestjs, SiGraphql, SiGit, SiTailwindcss, SiJest, SiCypress, SiPostgresql } from 'react-icons/si';

const techStackData = [
  { name: 'JavaScript', icon: <SiJavascript size={24} />, description: 'Strong fundamental knowledge.' },
  { name: 'TypeScript', icon: <SiTypescript size={24} />, description: 'Type-safe scalable development.' },
  { name: 'React', icon: <SiReact size={24} />, description: 'Component-driven UI creation.' },
  { name: 'Next.js', icon: <SiNextdotjs size={24} />, description: 'React framework for production.' },
  { name: 'Node.js', icon: <SiNodedotjs size={24} />, description: 'Fast server-side JS runtime.' },
  { name: 'NestJS', icon: <SiNestjs size={24} />, description: 'Progressive Node.js framework.' },
  { name: 'GraphQL', icon: <SiGraphql size={24} />, description: 'Flexible data querying layer.' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={24} />, description: 'Advanced open source database.' },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={24} />, description: 'Utility-first CSS framework.' },
  { name: 'Jest', icon: <SiJest size={24} />, description: 'Delightful JavaScript Testing.' },
  { name: 'Cypress', icon: <SiCypress size={24} />, description: 'Fast, reliable E2E testing.' },
  { name: 'Git', icon: <SiGit size={24} />, description: 'Distributed version control.' },
];


export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Engineering <span className="text-(--text-muted)">&amp;</span> Architecture
        </h2>
        <p className="text-(--text-muted) text-lg max-w-2xl mx-auto">
          Software Engineer with 5+ years of experience specialized in building high-performance web systems and scalable digital infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-(--text-muted)/20">
          {[
            { title: "Chemical Engineering Roots.", text: 'Master of Engineering from University of Lagos (2019), bringing analytical precision from physical systems into software architecture.' },
            { title: 'Full-Stack Architecture.', text: 'Passionate about React, Next.js, and Node.js, engineering solutions where performance meets intuitive design.' },
            { title: 'Technical Leadership.', text: 'Over 2 years leading engineering teams, managing SaaS life cycles, and implementing core architectural patterns.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative group"
            >
              <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-sm border-2 border-(--text-muted)/50 group-hover:border-(--color-accent-current) group-hover:bg-(--color-accent-current)/20 transition-all bg-(--bg-primary)"></div>
              <h3 className="font-bold text-(--text-primary) mb-1">{item.title}</h3>
              <p className="text-(--text-muted)">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end relative h-80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-64 h-80 rounded-2xl overflow-hidden bg-linear-to-tr from-(--bg-secondary) to-(--bg-primary) relative border border-(--text-muted)/20 shadow-2xl"
          >
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-(--bg-primary) to-transparent z-10 pointer-events-none"></div>
            <img src="/headshot.jpg" alt="Kenneth Olukotun" className="w-full h-full object-cover relative z-0 transition-transform duration-700 hover:scale-105" />
          </motion.div>
        </div>
      </div>

      {/* Tech stack grid */}
      <div className="mt-32 border-t border-(--text-muted)/10 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {techStackData.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group space-y-3 p-4 hover:bg-(--bg-secondary) rounded-xl transition-colors border border-transparent hover:border-(--text-muted)/10"
            >
              <div className="w-12 h-auto py-3 bg-(--bg-secondary) rounded-xl flex items-center justify-center text-(--text-primary) shadow-sm border border-(--text-muted)/20 transition-all duration-300 group-hover:scale-110 group-hover:text-(--color-accent-current) group-hover:border-(--color-accent-current)/50">
                {tech.icon}
              </div>
              <h4 className="font-bold">{tech.name}</h4>
              <p className="text-sm text-(--text-muted)">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
