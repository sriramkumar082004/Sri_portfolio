import React from 'react';

const skills = [
  { name: 'Python', level: 'Advanced' },
  { name: 'Django', level: 'Advanced' },
  { name: 'Flask', level: 'Intermediate'},
  { name: 'React.js', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'HTML5 & CSS3', level: 'Advanced' },
  { name: 'Bootstrap', level: 'Advanced' },
  { name: 'REST APIs', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' },
 
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
                key={index} 
                className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full" 
                    style={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
