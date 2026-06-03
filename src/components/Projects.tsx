import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white section-heading">Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {projectsData.map((project, idx) => {
          const CardInner = (
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-indigo-500 dark:text-indigo-400 font-medium mt-0.5">{project.tagline}</p>
                </div>
                {project.liveUrl && (
                  <span className="shrink-0 ml-3 text-xs bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full font-semibold">
                    Live ↗
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-0.5 rounded-md text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );

          const cardClass = "group block h-full p-5 rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/20 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-500/5 transition-all hover:-translate-y-1";

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {CardInner}
                </a>
              ) : (
                <div className={cardClass}>{CardInner}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
