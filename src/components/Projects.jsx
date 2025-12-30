import React from 'react';

const projects = [
  {
    title: 'Django Web Application',
    description: 'Developed a Django-based web application with MVC architecture, user authentication, form validation, and role-based access. Integrated MySQL database using Django ORM and built CRUD functionality with admin panel support.',
    tags: ['Django', 'Python', 'MySQL','MVC'],
    link: '#'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a responsive portfolio website implementing clean UI using HTML, CSS, Bootstrap, and React.js. Showcased skills, projects, and contact details.',
    tags: ['React.js', 'Bootstrap', 'HTML', 'CSS'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
               {/* Placeholder Image */}
              <div className="h-48 bg-slate-700 flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                 <span className="text-4xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-900 text-cyan-400 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                    href={project.link} 
                    className="inline-block text-sm font-bold text-white border-b border-cyan-400 pb-1 hover:text-cyan-400 transition-colors"
                >
                    View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
