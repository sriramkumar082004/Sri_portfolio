import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'CRUD Application',
    subtitle: 'FastAPI & React.js',
    description: 'Developed RESTful APIs using FastAPI for CRUD operations. Implemented API integration with React.js frontend, secure API communication, and PostgreSQL database schemas.',
    tags: ['FastAPI', 'React.js', 'PostgreSQL', 'Swagger'],
    link: '#',
    color: 'from-cyan-500 to-blue-500',
    size: 'col-span-1 md:col-span-2'
  },
  {
    title: 'Electric Vehicle Population Data Analysis',
    subtitle: 'RAG-Based AI Project',
    description: 'Built a RAG system using Redis, FAISS, and Phi-3 LLM via Ollama. Implemented semantic search for EV data queries with reduced hallucination through context-limited responses.',
    tags: ['RAG', 'Redis', 'FAISS', 'Ollama', 'Phi-3'],
    link: '#',
    color: 'from-violet-500 to-purple-500',
    size: 'col-span-1 md:col-span-1'
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'React.js & Tailwind',
    description: 'Designed and developed a responsive personal portfolio website focused on clean UI design, responsiveness, and usability.',
    tags: ['React.js', 'HTML5', 'CSS3', 'Tailwind'],
    link: '#',
    color: 'from-emerald-400 to-cyan-500',
    size: 'col-span-1 md:col-span-3'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-10 font-outfit"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
                key={index} 
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-sm ${project.size}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
            >
               {/* Hover Gradient Overlay */}
               <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
               
               <div className="relative p-8 h-full flex flex-col justify-between z-10">
                 <div>
                    <div className="flex gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                             <span key={idx} className="text-xs font-mono px-2 py-1 rounded-full bg-slate-800/50 border border-white/10 text-slate-300 group-hover:bg-white/20 group-hover:text-white transition-colors">
                                {tag}
                             </span>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-sm font-medium text-cyan-400 mb-4 group-hover:text-white/90">{project.subtitle}</p>
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-white/80">{project.description}</p>
                 </div>
                 
                 <div className="mt-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                        href={project.link} 
                        className="inline-flex items-center gap-2 text-white font-bold"
                    >
                        View Project 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                 </div>
               </div>
               
               {/* Decorative Circle */}
               <div className={`hidden md:block absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-tl ${project.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
