import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        
        <div className="mb-12 text-center space-y-4">
            <p className="text-gray-300">
                <span className="font-bold text-cyan-400">Email:</span> sriramkumar08@outlook.com
            </p>
            <p className="text-gray-300">
                <span className="font-bold text-cyan-400">Phone:</span> +91 93606 84091
            </p>
            <p className="text-gray-300">
                <span className="font-bold text-cyan-400">Location:</span> Coimbatore, Tamil Nadu, India
            </p>
        </div>

        <form className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors" placeholder="Your Name" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors" placeholder="your@email.com" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors" placeholder="Your message..."></textarea>
            </div>
            <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-900 font-bold py-3 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
                Send Message
            </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
