import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const isMockMode = !serviceId || serviceId.includes('your_') || !publicKey || publicKey.includes('your_');

        if (isMockMode) {
            console.warn('Mock Mode: Simulating success because valid keys are missing.');
            setTimeout(() => {
                setStatus({ type: 'success', message: 'Message sent successfully! (Mock Mode)' });
                setLoading(false);
                e.target.reset();
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            }, 1000);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                e.target.reset();
            }, (error) => {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
            })
            .finally(() => {
                setLoading(false);
                setTimeout(() => {
                   if(status.type === 'success') setStatus({ type: '', message: '' });
                }, 5000);
            });
    };

    const contactInfo = [
        { icon: FaEnvelope, title: 'Email', value: 'sriramkumar08@outlook.com', link: 'mailto:sriramkumar08@outlook.com', color: 'text-cyan-400' },
        { icon: FaWhatsapp, title: 'WhatsApp', value: '+91 93606 84091', link: 'https://wa.me/919360684091', color: 'text-green-400' },
        { icon: FaMapMarkerAlt, title: 'Location', value: 'Coimbatore, Tamil Nadu, India', link: null, color: 'text-red-400' },
    ];

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 font-outfit"
                >
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Touch</span>
                </motion.h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Talk About Your Project</h3>
                        <p className="text-slate-400 mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="glass p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/30 transition-colors">
                                    <div className={`p-3 rounded-full bg-slate-900/50 ${item.color}`}>
                                        <item.icon className="text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.title}</p>
                                        {item.link ? (
                                            <a href={item.link} className="text-slate-200 hover:text-cyan-400 transition-colors font-medium">
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

                    {/* Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-white/10"
                    >
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input type="text" name="user_name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input type="email" name="user_email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea name="message" required rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-white transition-all" placeholder="Your message..."></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {status.message && (
                                <div className={`text-center p-3 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

