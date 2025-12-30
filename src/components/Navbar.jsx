import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Portfolio
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#hero" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Home</a>
                            <a href="#skills" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Skills</a>
                            <a href="#experience" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Experience</a>
                            <a href="#projects" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Projects</a>
                            <a href="#contact" className="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contact</a>
                            <a 
                                href="/Sriram_Resume.pdf" 
                                download 
                                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#hero" className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#skills" className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Skills</a>
                        <a href="#experience" className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Experience</a>
                        <a href="#projects" className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                        <a href="#contact" className="hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                        <a 
                            href="/Sriram_Resume.pdf" 
                            download 
                            className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 block px-3 py-2 rounded-md text-base font-bold mt-4 text-center"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
