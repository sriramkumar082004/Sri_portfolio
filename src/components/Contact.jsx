import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // Using environment variables for configuration
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Check if environment variables are set and not default placeholders
        if (!serviceId || !templateId || !publicKey || 
            serviceId === 'your_service_id' || serviceId === 'your_actual_service_id_here' || serviceId === 'service_xxxxx' || serviceId === 'paste_your_service_id_here' ||
            templateId === 'your_template_id' || templateId === 'your_actual_template_id_here' || templateId === 'template_xxxxx' || templateId === 'paste_your_template_id_here' ||
            publicKey === 'your_public_key' || publicKey === 'your_actual_public_key_here' || publicKey === 'user_xxxxx' || publicKey === 'paste_your_public_key_here') {
            
            // MOCK MODE: Simulate success for user testing without real keys
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
                console.log(result.text);
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
            })
            .finally(() => {
                setLoading(false);
                // Clear success message after 5 seconds
                setTimeout(() => {
                   if(status.type === 'success') setStatus({ type: '', message: '' });
                }, 5000);
            });
    };

    return (
        <section id="contact" className="py-20 bg-slate-800/50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Get In <span className="text-cyan-400">Touch</span>
                </h2>
                
                <div className="mb-12 text-center space-y-4">
                    <div className="flex justify-center items-center gap-2 text-gray-300">
                        <FaEnvelope className="text-cyan-500 text-xl" />
                        <span className="font-bold text-cyan-400">Email:</span>
                        <a href="mailto:sriramkumar08@outlook.com" className="hover:text-cyan-400 transition-colors">
                            sriramkumar08@outlook.com
                        </a>
                    </div>
                    
                    <div className="flex justify-center items-center gap-2 text-gray-300">
                         <FaWhatsapp className="text-green-500 text-xl" />
                         <span className="font-bold text-cyan-400">WhatsApp:</span> 
                         <a href="https://wa.me/919360684091" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                            +91 93606 84091
                         </a>
                    </div>
                    <p className="text-gray-300">
                        <span className="font-bold text-cyan-400">Location:</span> Coimbatore, Tamil Nadu, India
                    </p>
                </div>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input type="text" name="user_name" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input type="email" name="user_email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea name="message" required rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 text-white transition-colors" placeholder="Your message..."></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-slate-900 font-bold py-3 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {status.message && (
                        <div className={`text-center p-3 rounded-lg ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                            {status.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;

