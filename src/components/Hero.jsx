import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-outfit">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 drop-shadow-sm">Sriram K</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 font-light">
              Python Full Stack Developer building <span className="text-slate-200 font-normal">scalable</span> & <span className="text-slate-200 font-normal">premium</span> web experiences.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
                href="#projects" 
                className="group relative px-8 py-3 rounded-full font-bold text-white overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
            <a 
                href="#contact" 
                className="px-8 py-3 rounded-full font-bold text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
            >
                Contact Me
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <motion.div 
            className="relative w-72 h-72 md:w-[500px] md:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Circles Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            
            {/* Glass Container for Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass flex items-center justify-center border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Placeholder - In real usage, put an actual image here */}
                 <span className="text-8xl md:text-9xl filter drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] animate-bounce-slow">👨‍💻</span>
            </div>

            {/* Floating Cards (Decorative) */}
            <motion.div 
              className="absolute -top-6 -left-6 glass p-4 rounded-xl border border-white/10 hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
              </div>
              <div className="mt-2 text-xs font-mono text-cyan-300">
                &lt;Code /&gt;
              </div>
            </motion.div>

            <motion.div 
              className="absolute -bottom-8 -right-8 glass p-4 rounded-xl border border-white/10 hidden md:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
               <span className="text-sm font-bold text-white">Python & React</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
