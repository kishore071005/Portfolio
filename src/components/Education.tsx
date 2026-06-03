import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { FiMapPin } from 'react-icons/fi';

const icons = ['🎓', '📘', '🏫'];

export default function Education() {
  return (
    <motion.section 
      id="education" 
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white section-heading">Education</h2>
      </div>

      <div className="relative pl-6 space-y-0">
        {/* Vertical timeline line */}
        <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-400 to-transparent rounded-full" />

        {educationData.map((edu, idx) => (
          <motion.div 
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className={`relative flex gap-5 ${idx < educationData.length - 1 ? 'pb-10' : ''}`}
          >
            {/* Timeline dot */}
            <div className="absolute -left-6 mt-1 w-5 h-5 rounded-full bg-white dark:bg-[#0a0f1e] border-2 border-indigo-500 flex items-center justify-center text-xs z-10">
              {icons[idx]}
            </div>

            {/* Card */}
            <div className="flex-1 bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-500/5 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">{edu.institution}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-0.5">{edu.qualification}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 px-2.5 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2 text-slate-500 dark:text-slate-400 text-xs">
                <FiMapPin className="shrink-0" />
                {edu.location}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
