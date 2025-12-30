import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Experience</span>
        </h2>
        <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-slate-700 pl-8 pb-12 space-y-8">
                <div className="relative">
                    <div className="absolute -left-[41px] bg-cyan-500 h-5 w-5 rounded-full border-4 border-slate-900"></div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                        <span className="text-cyan-400 text-sm font-bold tracking-wider uppercase mb-2 block">Internship / Training</span>
                        <h3 className="text-xl font-bold mb-1">Python Developer Trainee</h3>
                        <p className="text-gray-400 text-sm mb-4">Besant Technology, Bangalore</p>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="mr-2 text-cyan-400">•</span>
                                Completed intensive training in Python Full Stack Development.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-cyan-400">•</span>
                                Gained hands-on experience with Django framework and backend logic.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-cyan-400">•</span>
                                Worked on database integration using MySQL.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-cyan-400">•</span>
                                Built responsive frontend interfaces using HTML, CSS, Bootstrap, and React.js.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-cyan-400">•</span>
                                Practiced REST API development and best coding standards.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
