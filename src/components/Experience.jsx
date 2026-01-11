import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Python Developer Trainee',
        company: 'Besant Technology, Bangalore',
        period: 'Internship',
        description: [
            'Completed intensive training in Python Full Stack Development.',
            'Gained hands-on experience with Django framework and backend logic.',
            'Worked on database integration using MySQL.',
            'Built responsive frontend interfaces using HTML, CSS, Bootstrap, Flask and React.js.',
            'Practiced REST API development and best coding standards.'
        ]
    }
];

const Experience = () => {
  return (
    <section id="experience" className="py-10 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-10 font-outfit"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0"></div>

            {experiences.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-cyan-400 rounded-full z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'}`}>
                        <div className="glass p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group">
                            <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2 block">{exp.period}</span>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                            <p className="text-slate-400 text-sm mb-4">{exp.company}</p>
                            <ul className={`space-y-2 text-slate-300 text-sm ${index % 2 === 0 ? '' : 'md:flex md:flex-col md:items-end'}`}>
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        <span className={index % 2 !== 0 ? 'md:text-right' : ''}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    {/* Empty Space for the other side */}
                    <div className="hidden md:block w-5/12"></div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
