import { motion } from 'framer-motion';
import { Code, Database, BarChart2, Brain, LineChart, PieChart, FileSpreadsheet, GitBranch, Layers, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'Data Analytics',
    icon: BarChart2,
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Power BI', icon: PieChart },
      { name: 'Tableau', icon: LineChart },
      { name: 'Excel', icon: FileSpreadsheet },
    ],
  },
  {
    category: 'Programming',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'Python', icon: Code },
      { name: 'SQL', icon: Database },
      { name: 'Pandas', icon: Layers },
    ],
  },
  {
    category: 'AI & ML',
    icon: Brain,
    color: 'from-green-500 to-teal-500',
    items: [
      { name: 'Machine Learning', icon: Brain },
      { name: 'Data Modeling', icon: Cpu },
      { name: 'Statistics', icon: BarChart2 },
    ],
  },
  {
    category: 'Tools',
    icon: GitBranch,
    color: 'from-orange-500 to-red-500',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: GitBranch },
      { name: 'VS Code', icon: Code },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-dark-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to transform data into insights
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-800/50 backdrop-blur-xl rounded-2xl border border-dark-700 overflow-hidden hover:border-dark-600 transition-all group"
            >
              {/* Header */}
              <div className={`p-4 bg-gradient-to-r ${skill.color} bg-opacity-10`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-white font-display font-bold">{skill.category}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-4 space-y-3">
                {skill.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-dark-900/50 border border-dark-700 hover:border-dark-600 transition-all"
                  >
                    <item.icon className="text-dark-400 group-hover:text-white transition-colors" size={18} />
                    <span className="text-dark-300 group-hover:text-white transition-colors font-medium">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {[
            { name: 'Power BI', percent: 90, color: 'from-yellow-500 to-orange-500' },
            { name: 'Python', percent: 85, color: 'from-blue-500 to-cyan-500' },
            { name: 'SQL', percent: 88, color: 'from-green-500 to-teal-500' },
            { name: 'Tableau', percent: 82, color: 'from-purple-500 to-pink-500' },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-dark-400">{skill.percent}%</span>
              </div>
              <div className="h-3 bg-dark-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
