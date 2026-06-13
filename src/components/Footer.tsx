import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Siddhi Maurya
            </h3>
            <p className="text-dark-400 text-sm mt-2">Data Analyst | Power BI Developer</p>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/siddhimaurya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:border-dark-600 transition-all"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/siddhimaurya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:border-dark-600 transition-all"
            >
              <Linkedin size={18} />
            </motion.a>
          </motion.div>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-px bg-dark-800 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-500"
        >
          <p>&copy; {new Date().getFullYear()} Siddhi Maurya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="text-red-500" size={14} fill="currentColor" /> using React & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
