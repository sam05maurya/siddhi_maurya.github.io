import { motion } from 'framer-motion';
import { ExternalLink, BarChart3, Film, Home, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Automobile Sales Analysis Dashboard',
    description: 'Interactive Power BI dashboard analyzing historical automobile sales trends and studying recession impacts on vehicle sales with KPI tracking.',
    tech: ['Power BI', 'DAX', 'Data Modeling'],
    image: 'https://images.pexels.com/photos/7689873/pexels-photo-7689873.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
    link: '#',
  },
  {
    title: 'Netflix Data Analysis',
    description: 'Exploratory data analysis on Netflix dataset using Python, analyzing IMDb ratings, content types, languages, and release trends.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    image: 'https://images.pexels.com/photos/5768462/pexels-photo-5768462.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Film,
    color: 'from-red-500 to-pink-500',
    link: '#',
  },
  {
    title: 'Real Estate Dashboard',
    description: 'Power BI dashboard for housing market analysis, examining property prices, locations, and sales trends with interactive filters.',
    tech: ['Power BI', 'Excel', 'Data Visualization'],
    image: 'https://images.pexels.com/photos/323023/pexels-photo-323023.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: Home,
    color: 'from-green-500 to-teal-500',
    link: '#',
  },
  {
    title: 'Data Visualization Projects',
    description: 'Collection of data visualization projects showcasing various charting techniques and storytelling with data.',
    tech: ['Tableau', 'Python', 'Excel'],
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600',
    icon: TrendingUp,
    color: 'from-purple-500 to-indigo-500',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Showcasing my data analytics and visualization work
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-dark-800/50 backdrop-blur-xl rounded-2xl border border-dark-700 overflow-hidden hover:border-dark-600 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                <motion.div
                  className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <project.icon className="text-white" size={24} />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium bg-dark-900/50 text-dark-300 rounded-full border border-dark-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                >
                  View Project <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
