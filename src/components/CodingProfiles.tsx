import { motion } from 'framer-motion';
import { codingProfiles } from '../data/portfolioData';

export default function CodingProfiles() {
  return (
    <motion.section 
      id="coding-profiles" 
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white section-heading">Competitive Programming</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {codingProfiles.map((profile, idx) => (
          <motion.a 
            key={idx}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{profile.name}</h3>
              <span className="text-xs text-slate-400">↗</span>
            </div>
            <div>
              <p className="text-2xl font-extrabold gradient-text">{profile.solvedCount}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{profile.rankOrRating}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
