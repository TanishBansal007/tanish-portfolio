import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, MapPin } from 'lucide-react';

const RESUME_URL = '/files/TanishBansal_Resume.pdf';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#080808] py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#1877F2] to-transparent" />
      <div className="mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#1877F2]">08</span>
            <div className="h-px w-8 bg-white/20" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">Contact</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-8xl text-white leading-none mb-6">
            LET'S<br /><span className="text-[#1877F2]">CONNECT</span>
          </h2>
          <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
            Open to Salesforce Developer, Administrator, and Business Analyst roles. Let's build something that matters.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center gap-4">
          <a href="mailto:tanishbansal1967@gmail.com" className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all max-w-md w-full">
            <Mail size={20} className="text-[#1877F2]" />
            <span className="text-white text-sm md:text-base">tanishbansal1967@gmail.com</span>
          </a>
          <div className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 max-w-md w-full">
            <MapPin size={20} className="text-[#1877F2]" />
            <span className="text-white text-sm md:text-base">Jersey City, New Jersey</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a href={RESUME_URL} download className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1877F2] text-white font-medium hover:bg-[#005FB2] transition-all hover:scale-105">
              <Download size={18} /> Download Resume
            </a>
            <a href="https://www.linkedin.com/in/tanish-bansal-461a6b178" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:border-[#1877F2] hover:text-[#1877F2] transition-all">
              <Linkedin size={18} /> View on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-white/30 text-sm font-mono">Tanish Bansal · All rights reserved · Built with passion ⚡</p>
      </div>
    </section>
  );
}