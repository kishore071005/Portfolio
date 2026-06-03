import { motion } from 'framer-motion';
import { certificationsData } from '../data/portfolioData';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const orgColors: Record<string, string> = {
  'Scalar Academy': 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800',
  'Cisco Networking Academy': 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800',
  'Infosys Springboard': 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800',
};

export default function Certifications() {
  return (
    <motion.section 
      id="certifications" 
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white section-heading">Certifications</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificationsData.map((cert, idx) => {
          const colorClass = orgColors[cert.organization] || 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800';
          const CardContent = (
            <div className="flex flex-col h-full gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                <FiAward className="text-white w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug mb-2">{cert.name}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${colorClass}`}>
                  {cert.organization}
                </span>
              </div>
              {cert.certUrl && (
                <div className="flex items-center gap-1 text-xs text-indigo-500 dark:text-indigo-400 font-medium">
                  View Certificate <FiExternalLink className="w-3 h-3" />
                </div>
              )}
            </div>
          );

          const cardClass = "group flex h-full p-5 rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/20 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all";

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="h-full"
            >
              {cert.certUrl ? (
                <a href={cert.certUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
                  {CardContent}
                </a>
              ) : (
                <div className={cardClass}>{CardContent}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
