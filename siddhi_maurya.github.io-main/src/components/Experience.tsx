import { motion } from 'framer-motion';
import { Calendar, Building2, MapPin, BarChart3, Presentation, Users, Lightbulb } from 'lucide-react';

const experiences = [
  {
    title: 'Implementation Data Analyst Intern',
    company: 'Microsoft',
    location: 'Virtual',
    period: '2024',
    description: 'Worked on real-world data analytics and AI-focused implementation projects.',
    highlights: [
      { icon: BarChart3, text: 'Developed interactive dashboards using Power BI' },
      { icon: Presentation, text: 'Applied data analysis techniques for business insights' },
      { icon: Users, text: 'Collaborated on project-based learning activities' },
      { icon: Lightbulb, text: 'Gained practical experience in business intelligence' },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-dark-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            My professional journey in data analytics
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500" />

              <div className="relative pl-8 md:pl-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-0 md:left-8 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-dark-900"
                />

                <div className="bg-dark-800/50 backdrop-blur-xl rounded-2xl border border-dark-700 overflow-hidden hover:border-dark-600 transition-all">
                  <div className="p-6 border-b border-dark-700 bg-gradient-to-r from-primary-500/10 to-accent-500/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-2">
                          <Building2 size={16} />
                          {exp.company}
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 text-dark-400 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-dark-300 mb-6">{exp.description}</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {exp.highlights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-dark-900/50 border border-dark-700"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                            <h.icon className="text-primary-400" size={16} />
                          </div>
                          <p className="text-dark-300 text-sm">{h.text}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
