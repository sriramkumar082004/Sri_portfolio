import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const contactInfo = [
        { icon: FaEnvelope, title: 'Email', value: 'sriramkumar08@outlook.com', link: 'mailto:sriramkumar08@outlook.com', color: 'text-cyan-400' },
        { icon: FaWhatsapp, title: 'WhatsApp', value: '+91 93606 84091', link: 'https://wa.me/919360684091', color: 'text-green-400' },
        { icon: FaMapMarkerAlt, title: 'Location', value: 'Coimbatore, Tamil Nadu, India', link: null, color: 'text-red-400' },
    ];

    return (
        <section id="contact" className="py-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-10 font-outfit"
                >
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Touch</span>
                </motion.h2>
                
                <div className="flex justify-center">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8 max-w-2xl text-center"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Talk About Your Project</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="glass p-6 rounded-xl flex flex-col items-center gap-4 hover:border-cyan-500/30 transition-colors">
                                    <div className={`p-4 rounded-full bg-slate-900/50 ${item.color} text-2xl`}>
                                        <item.icon />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-2">{item.title}</p>
                                        {item.link ? (
                                            <a href={item.link} className="text-slate-200 hover:text-cyan-400 transition-colors font-medium break-all">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-slate-200 font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

