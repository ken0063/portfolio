import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { supabase, type Project } from '../lib/supabase';



export function PortfolioSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('is_visible', true)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching projects:', error);
        } else if (data) {
          setProjects(data as Project[]);
        }
      } catch (e) {
        console.error('Catch error:', e);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Featured <span className="text-(--text-muted)">Projects</span>
        </h2>
        <p className="text-(--text-muted) text-lg max-w-3xl mx-auto leading-relaxed">
          A showcase of my technical expertise in building scalable, performance-driven solutions. As a Software Engineer, I focus on bridging the gap between complex backend orchestration and seamless frontend experiences.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-(--color-accent-current) border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-(--bg-secondary) rounded-2xl border border-(--text-muted)/20">
          <p className="text-(--text-muted) text-lg mb-4">No projects have been published yet.</p>
          <p className="text-sm text-(--text-muted)/70">Please configure your Supabase backend to display projects here.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-(--bg-secondary) border border-(--text-muted)/20 hover:border-(--color-accent-current)/50 transition-colors shadow-lg"
            >
              {/* Project Image */}
              <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Project Info */}
              <div className="p-8 relative z-20 -mt-10 bg-(--bg-secondary) m-4 rounded-xl border border-(--text-muted)/10 shadow-xl group-hover:shadow-[0_0_20px_rgba(0,168,204,0.1)] transition-shadow">
                <h3 className="text-2xl font-bold mb-3 capitalize">{project.title}</h3>
                <p className="text-(--text-muted) mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech_stack?.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-(--bg-primary) text-(--color-accent-current) border border-(--color-accent-current)/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-(--text-primary) text-(--bg-primary) font-bold hover:opacity-90 transition-opacity text-sm"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg border border-(--text-muted) text-(--text-muted) hover:text-(--text-primary) hover:border-(--text-primary) transition-all"
                      aria-label="View Source"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
