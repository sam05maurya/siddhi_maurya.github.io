import { motion } from 'framer-motion';
import { GraduationCap, Target, Sparkles, BarChart3 } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'TY BSc CS Student',
    description: 'Computer Science with Data Science specialization',
  },
  {
    icon: Target,
    title: 'Analytical Mindset',
    description: 'Strong problem-solving and analytical thinking skills',
  },
  {
    icon: BarChart3,
    title: 'Dashboard Expert',
    description: 'Creating interactive Power BI and Tableau dashboards',
  },
  {
    icon: Sparkles,
    title: 'Business Insights',
    description: 'Transforming data into actionable business intelligence',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Data Analytics"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-dark-800/90 backdrop-blur-xl rounded-xl p-4 border border-dark-700 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">TY BSc CS</p>
                  <p className="text-dark-400 text-sm">Data Science</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              Passionate about{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                data-driven insights
              </span>
            </h3>

            <p className="text-dark-300 text-lg leading-relaxed mb-6">
              I'm a Third Year BSc Computer Science student with a specialization in Data Science
              and Analytics. My passion lies in exploring data through visualization, business
              intelligence, and machine learning to drive informed decision-making.
            </p>

            <p className="text-dark-300 text-lg leading-relaxed mb-8">
              Skilled in Power BI, Tableau, Python, SQL, Excel, and Machine Learning. I have
              developed strong analytical skills through hands-on projects and internships,
              focusing on creating impactful dashboards and extracting meaningful insights from
              complex datasets.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-dark-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-dark-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
