import { motion } from 'framer-motion';
import {
  ExternalLink,
  BarChart3,
  Home,
  TrendingUp,
  Coffee
} from 'lucide-react';
import realEstateImg from '../assets/Real_estate.png';
import fraudImg from '../assets/Fraud.png';
import managerImg from '../assets/Manager_sales.png';
import coffeeImg from '../assets/Real_estate.png';

const projects = [
  {
    title: 'Real Estate Sales Dashboard',
    description:
      'Interactive Power BI dashboard analyzing property sales, revenue trends, regional performance, and key real estate KPIs with dynamic filtering.',
    tech: ['Power BI', 'DAX', 'Excel'],
    image: realEstateImg,
    icon: Home,
    color: 'from-green-500 to-teal-500',
    link: 'https://github.com/sam05maurya/Real_Estate_Sales_Dashboard',
  },
  {
    title: 'Fraud Detection Prediction with ML',
    description:
      'Machine learning project for identifying fraudulent transactions using predictive modeling, feature engineering, and classification algorithms.',
    tech: ['Python', 'Machine Learning', 'Scikit-Learn'],
    image: fraudImg,
    icon: BarChart3,
    color: 'from-red-500 to-pink-500',
    link: 'https://github.com/sam05maurya/Fraud_Detection_Prediction_with_ML',
  },
  {
    title: 'Manager Sales Analysis Dashboard',
    description:
      'Sales performance dashboard providing insights into revenue, profit, product performance, and manager-wise sales trends.',
    tech: ['Power BI', 'Excel', 'Data Analytics'],
    image: managerImg,
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    link: 'https://github.com/sam05maurya/Manager_Sales_Analysis_Dashboard',
  },
  {
    title: 'Coffee Shop Sales Dashboard',
    description:
      'Business intelligence dashboard analyzing coffee shop sales, customer purchasing behavior, product demand, and revenue growth.',
    tech: ['Power BI', 'SQL', 'Data Visualization'],
    image: coffeeImg,
    icon: Coffee,
    color: 'from-amber-500 to-orange-500',
    link: 'https://github.com/sam05maurya/Coffee_Shop_Sales_Dashboard',
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
  target="_blank"
  rel="noopener noreferrer"
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
