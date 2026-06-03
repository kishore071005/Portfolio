import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

const contacts = [
  { icon: FiMail, label: 'Email', value: 'kishore071005@gmail.com', href: `mailto:kishore071005@gmail.com` },
  { icon: FiPhone, label: 'Phone', value: '+91 8143272410', href: `tel:+918143272410` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'nandakishore2410', href: personalInfo.linkedin },
  { icon: FiGithub, label: 'GitHub', value: 'kishore071005', href: personalInfo.github },
];

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="space-y-8 scroll-mt-24 pb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white section-heading">Contact</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-800/20 border border-slate-200 dark:border-slate-700/50 rounded-2xl hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center shrink-0">
              <item.icon className="text-indigo-600 dark:text-indigo-400 w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.label}</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
