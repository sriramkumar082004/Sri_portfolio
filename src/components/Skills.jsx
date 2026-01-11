import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiFlask, SiJavascript, SiMysql, SiPostgresql, SiPostman, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'Python', category: 'Backend', icon: FaPython, color: 'text-yellow-400' },
  { name: 'Django', category: 'Backend', icon: SiDjango, color: 'text-green-600' },
  { name: 'Flask', category: 'Backend', icon: SiFlask, color: 'text-slate-200' },
  { name: 'PostgreSQL', category: 'Database', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'MySQL', category: 'Database', icon: SiMysql, color: 'text-blue-500' },
  { name: 'React.js', category: 'Frontend', icon: FaReact, color: 'text-cyan-400' },
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'HTML5', category: 'Frontend', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', category: 'Frontend', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Bootstrap', category: 'Frontend', icon: FaBootstrap, color: 'text-purple-600' },
  { name: 'Tailwind', category: 'Frontend', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'REST APIs', category: 'Backend', icon: FaDatabase, color: 'text-green-400' },
  { name: 'Postman', category: 'Tools', icon: SiPostman, color: 'text-orange-500' },
  { name: 'Git', category: 'Tools', icon: FaGitAlt, color: 'text-red-500' },
];

const categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = skills.filter(skill => 
    activeCategory === 'All' ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-950 -z-20"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Stack</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                A curated list of technologies I use to build scalable and premium web applications.
            </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                        activeCategory === category 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105' 
                        : 'bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500/50'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        {/* Swipe Indicator for Mobile */}
        <div className="md:hidden text-center mb-4 text-cyan-400/60 text-xs animate-pulse font-mono flex items-center justify-center gap-2">
           <span>&larr; Swipe to explore &rarr;</span>
        </div>

        {/* Skills Grid / Carousel */}
        <motion.div 
            layout
            className="flex overflow-x-auto pb-8 gap-4 md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-6 md:overflow-visible snap-x snap-mandatory px-4 md:px-0"
        >
            <AnimatePresence mode='popLayout'>
                {filteredSkills.map((skill) => (
                    <motion.div
                        layout
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="group relative min-w-[140px] md:min-w-0 snap-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative glass p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 h-full">
                            <div className={`text-4xl md:text-5xl ${skill.color} drop-shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                <skill.icon />
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
