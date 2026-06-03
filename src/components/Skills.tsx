import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import OrbitingSkills from './ui/orbiting-skills';

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="space-y-6 scroll-mt-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b pb-2 dark:border-slate-800">
        Technical Skills
      </h2>
      
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Orbiting Visual */}
        <div className="flex-1 w-full flex justify-center lg:justify-start overflow-hidden">
          <OrbitingSkills />
        </div>

        {/* Right Side: Detailed Skills List */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skillsData.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col gap-1 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-800/30"
            >
              <h3 className="font-bold text-slate-900 dark:text-white">{category.category}:</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {category.skills.join(', ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
