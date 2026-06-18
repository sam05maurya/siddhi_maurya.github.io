import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react'; 
import { Calendar, Building2, MapPin, BarChart3, Presentation, Users, Lightbulb,ChevronDown } from 'lucide-react';

const experiences = [
  {
    title: 'Implementation Data Analyst Intern',
    company: 'Convergence IT Services - uKnowva HRMS',
    location: 'On-Site',
    period: 'Apr 2026 - Present',
    description: 'Supporting end-to-end implementation of the uKnowva HRMS platform by configuring solutions, managing client requirements, and ensuring successful system deployment.',
    highlights: [
      { icon: BarChart3, text: 'Gathered and analyzed client requirements for HRMS implementation.' },
      { icon: Presentation, text: 'Configured modules and supported system testing and deployment.' },
      { icon: Users, text: 'Worked with SQL queries for data validation and troubleshooting.' },
      { icon: Lightbulb, text: 'Assisted in API integrations and JSON-based data configurations.' },
    ],
  },
  {
  title: 'Power BI Expert Intern',
  company: 'Microsoft Elevate',
  location: 'Remote',
  period: 'Feb 2026 - Mar 2026',
  description: 'Developed data visualization solutions and dashboards to transform raw data into actionable business insights.',
  highlights: [
    { icon: BarChart3, text: 'Built interactive Power BI dashboards.' },
    { icon: Lightbulb, text: 'Performed data cleaning and transformation.' },
    { icon: Presentation, text: 'Created KPIs and analytical reports.' },
    { icon: Users, text: 'Presented insights through data storytelling.' },
  ],
},
{
  title: 'Data Analyst Intern',
  company: 'Yadgreen India',
  location: 'Remote',
  period: 'Aug 2025 - Jan 2026',
  description: 'Worked on a Smart City Traffic Management project using analytics, forecasting, and visualization techniques.',
  highlights: [
    { icon: BarChart3, text: 'Cleaned and transformed traffic datasets.' },
    { icon: Building2, text: 'Designed a star schema data model.' },
    { icon: Presentation, text: 'Built interactive Power BI dashboards.' },
    { icon: Lightbulb, text: 'Applied forecasting for trend analysis.' },
  ],
},
];

export default function Experience() {
  const [openCard, setOpenCard] = useState(null);


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

        <div className="relative max-w-6xl mx-auto">

  {/* Center Timeline Line */}
<div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 -translate-x-1/2" />
  {experiences.map((exp, index) => (
    <motion.div
      key={exp.company}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative flex mb-12 ${
        index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
      } justify-start`}
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-20"
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-dark-900 shadow-lg shadow-primary-500/50" />
      </motion.div>

      {/* Connector Line */}
      <div
        className={`hidden md:block absolute top-12 h-[2px] bg-gradient-to-r from-primary-500 to-accent-500 ${
          index % 2 === 0
            ? 'left-1/2 w-16'
            : 'right-1/2 w-16'
        }`}
      />

      {/* Card */}
      <div className="w-full md:w-[42%]">
        <div className="bg-dark-800/50 backdrop-blur-xl rounded-2xl border border-dark-700 overflow-hidden hover:border-dark-600 transition-all">

          <div
  onClick={() =>
    setOpenCard(openCard === index ? null : index)
  }
  className="p-6 border-b border-dark-700 bg-gradient-to-r from-primary-500/10 to-accent-500/10 cursor-pointer hover:bg-primary-500/5 transition-all"
>
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

              <div className="flex items-center gap-3 flex-shrink-0">
  <div className="flex flex-col md:items-end gap-1 text-dark-400 text-sm whitespace-nowrap">
    <div className="flex items-center gap-2 whitespace-nowrap">
      <Calendar size={14} />
      {exp.period}
    </div>

    <div className="flex items-center gap-2">
      <MapPin size={14} />
      {exp.location}
    </div>
    <p className="text-xs text-primary-400">
  {openCard === index ? 'Hide Details' : 'View Details'}
</p>
  </div>

  <ChevronDown
    size={20}
    className={`transition-transform duration-300 ${
      openCard === index ? 'rotate-180' : ''
    }`}
  />
</div>
            </div>
          </div>

          <AnimatePresence>
  {openCard === index && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="p-6">
        <p className="text-dark-300 mb-6">
          {exp.description}
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {exp.highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl bg-dark-900/50 border border-dark-700"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0">
                <h.icon className="text-primary-400" size={16} />
              </div>

              <p className="text-dark-300 text-sm">
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

        </div>
      </div>
    </motion.div>
  ))}
       </div>
      </div>
    </section>
  );
}
