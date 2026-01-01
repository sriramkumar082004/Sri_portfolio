import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sriram K</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Python Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
            Passionate about building scalable web applications using Python, Django, Flask and React.js.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
                href="#projects" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-900 px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            >
                View Work
            </a>
            <a 
                href="#contact" 
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-full font-bold transition-all duration-300"
            >
                Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full bg-slate-800 rounded-full overflow-hidden border-4 border-slate-700 flex items-center justify-center">
                    {/* Placeholder for Profile Image */}
                    <span className="text-6xl">👨‍💻</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
