import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const activities = [
  { emoji: '🧩', text: 'Practicing Data Structures and Algorithms to improve problem-solving and analytical skills.' },
  { emoji: '🤖', text: 'Exploring Machine Learning concepts and actively building AI-powered projects to apply algorithms in real-world problem solving.' },
  { emoji: '💻', text: 'Actively learning and applying programming concepts through coding practice and personal projects.' },
  { emoji: '🌐', text: 'Exploring web development technologies and building practical full-stack applications.' },
];

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="space-y-8 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white section-heading">About Me</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Bio card */}
        <div className="lg:col-span-2 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-2xl flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">Who I Am</p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{personalInfo.bio}</p>
          </div>
          <div className="mt-4 pt-4 border-t border-indigo-100 dark:border-indigo-900/50">
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span>📍</span> {personalInfo.location}
            </div>
          </div>
        </div>

        {/* Activity cards */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {activities.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="flex items-start gap-3 p-4 bg-white dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700/50 rounded-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors"
            >
              <span className="text-xl shrink-0">{item.emoji}</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
