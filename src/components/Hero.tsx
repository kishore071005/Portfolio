import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-8 md:py-16">
      
      {/* Background glow blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Text Side */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 z-10"
      >
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Open to Opportunities
        </motion.div>

        {/* Name & Title */}
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold gradient-text">
            {personalInfo.headline}
          </h2>
        </div>
        
        <p className="text-slate-500 dark:text-slate-400 text-base max-w-lg leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* Contact info row */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <FiMapPin className="text-indigo-500 shrink-0" />
            {personalInfo.location}
          </div>
          <div className="flex items-center gap-1.5">
            <FiMail className="text-indigo-500 shrink-0" />
            {personalInfo.email}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-indigo-500/20 font-medium text-sm"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-slate-900/20 font-medium text-sm"
          >
            <FiGithub /> GitHub
          </a>
          <a 
            href={personalInfo.resumeUrl} 
            download="Nanda_Kishore_Resume.docx" 
            className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-indigo-500 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5 active:scale-95 font-medium text-sm"
          >
            <FiDownload className="text-indigo-500" /> Resume
          </a>
        </div>
      </motion.div>
      
      {/* Profile Photo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="shrink-0 relative z-10"
      >
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-cyan-400 blur-sm opacity-60 scale-105" />
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-indigo-500/20">
          <img src="/profile.jpeg" alt={personalInfo.name} className="w-full h-full object-cover" />
        </div>
        {/* Floating badge */}
        <motion.div 
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 shadow-xl text-xs font-semibold text-slate-700 dark:text-slate-200"
        >
          🎓 B.Tech CSE
        </motion.div>
      </motion.div>
    </section>
  );
}
