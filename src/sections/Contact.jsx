import { useState, useRef } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <div className="mb-16 md:mb-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 space-y-8"
        >
          <div className="glass p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">Contact Info</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">
    Email
  </p>
                
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=pragyak5101@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
>
  pragyak5101@gmail.com
</a>
</div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">Location</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">Prayagraj, India</p>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-2/3"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="glass p-8 rounded-2xl shadow-soft space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                  placeholder="Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                  placeholder="Email address"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea 
                name="message"
                required 
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 md:py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg dark:hover:shadow-primary-900/20"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl flex items-center gap-3 border border-green-200 dark:border-green-800/50">
                <CheckCircle size={20} />
                <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl flex items-center gap-3 border border-red-200 dark:border-red-800/50">
                <AlertCircle size={20} />
                <p className="text-sm font-medium">Something went wrong. Please try again later.</p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
