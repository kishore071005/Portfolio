import { personalInfo } from '../data/portfolioData';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md">NK</span>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">{personalInfo.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{personalInfo.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition-colors">
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition-colors">
              <FiGithub className="w-4 h-4" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg transition-colors">
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Nanda Kishore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
