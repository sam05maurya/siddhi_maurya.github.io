import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin,Mail, ChevronDown } from 'lucide-react';
import profileImage from './profile_ai.png.png';


const roles = [
  'Data Analyst',
  'Machine Learning Engineer',
  'Power BI Developer',
  'AI & Data Science Enthusiast',
  'Python Developer',
  'Data Visualization Specialist',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
<div className="absolute inset-0 bg-slate-950">
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

  {/* Analytics Grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-medium mb-4 tracking-wide"
            >
              Welcome to my Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4"
            >
              Siddhi Maurya
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-12 mb-6"
            >
              <span className="text-xl sm:text-2xl md:text-3xl font-medium">
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="animate-pulse text-primary-400">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-dark-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              MSc Data Science & AI Student skilled in Power BI, Python, SQL, Machine Learning, and Data Visualization. Passionate about transforming complex data into actionable business insights and building AI-driven solutions.
            
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
             <motion.a
  href={`${import.meta.env.BASE_URL}Siddhi_Maurya_resume.pdf`}
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
             bg-gradient-to-r from-primary-500 to-accent-500
             text-white font-semibold shadow-lg
             hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
             transition-all duration-300
             backdrop-blur-md border border-white/10"
>
  <Download size={20} />
  Download Resume
</motion.a>
  

              <div className="flex gap-3 justify-center">
                <motion.a
                  href="https://github.com/sam05maurya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-dark-800/80 backdrop-blur border border-dark-700 rounded-xl flex items-center justify-center text-dark-300 hover:text-white hover:border-dark-600 transition-all"
                >
                  <Github size={22} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/siddhi-maurya-s05a04m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-dark-800/80 backdrop-blur border border-dark-700 rounded-xl flex items-center justify-center text-dark-300 hover:text-white hover:border-dark-600 transition-all"
                >
                  <Linkedin size={22} />
                </motion.a>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mauryasam556@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-dark-800/80 backdrop-blur border border-dark-700 rounded-xl flex items-center justify-center text-dark-300 hover:text-white hover:border-dark-600 transition-all"
                >
                 <Mail size={22} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-2xl opacity-15"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Main circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                  <img src={profileImage} alt="Siddhi Maurya" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 md:top-4 md:-right-8 w-16 h-16 md:w-20 md:h-20 bg-dark-800/90 backdrop-blur-xl rounded-xl flex items-center justify-center border border-dark-700 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-2xl md:text-3xl">📊</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 w-16 h-16 md:w-20 md:h-20 bg-dark-800/90 backdrop-blur-xl rounded-xl flex items-center justify-center border border-dark-700 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-2xl md:text-3xl">🤖</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-6 w-14 h-14 bg-dark-800/90 backdrop-blur-xl rounded-xl flex items-center justify-center border border-dark-700 shadow-xl"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
              >
                <span className="text-xl">📈</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-dark-400 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
