import { motion } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink, GitBranch, Code2, FileSpreadsheet } from 'lucide-react';

const CERTS = [
  {
    name: 'Salesforce Certified Platform Administrator',
    code: 'ADM-201',
    issuer: 'Salesforce',
    date: 'Jan 2026',
    credentialId: '7403646',
    verifyUrl: 'https://www.salesforce.com/verify/credentials/',
    icon: ShieldCheck,
    featured: true,
    color: '#00A1E0',
  },
  {
    name: 'Git & GitHub Bootcamp',
    code: 'Git Bootcamp',
    issuer: 'Udemy',
    date: 'Apr 2021',
    icon: GitBranch,
    featured: false,
  },
  {
    name: 'Web Developer Bootcamp',
    code: 'Full Stack',
    issuer: 'Udemy',
    date: 'Jul 2020',
    icon: Code2,
    featured: false,
  },
  {
    name: 'Microsoft Excel — Beginner to Advanced',
    code: 'MS Excel',
    issuer: 'Udemy',
    date: 'Dec 2021',
    icon: FileSpreadsheet,
    featured: false,
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="bg-[#FAFAFA] circuit-bg py-20 md:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#1877F2]">04</span>
            <div className="h-px w-8 bg-[#080808]/20" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#080808]/40">Certifications</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#080808]">Hard-coded proof.</h2>
          <p className="text-[#080808]/50 mt-3">Verified credentials. The Salesforce Admin cert is the crown jewel.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Featured Salesforce cert — double width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 relative group rounded-2xl p-8 overflow-hidden cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #001a3a 0%, #003e7a 40%, #00A1E0 100%)' }}
          >
            <div className="absolute inset-0 opacity-20 animate-holographic" style={{ background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)', backgroundSize: '200% 100%' }} />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center">
                    <ShieldCheck size={28} className="text-white" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-white/60 uppercase tracking-wider">Featured · Most Precious</span>
                    <p className="text-white/80 text-sm">{CERTS[0].issuer}</p>
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight mb-2">{CERTS[0].name}</h3>
                <p className="font-mono text-sm text-white/60">Credential ID: {CERTS[0].credentialId} · {CERTS[0].date}</p>
              </div>
              <a href={CERTS[0].verifyUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#003e7a] text-sm font-semibold w-fit hover:scale-105 transition-transform">
                <ExternalLink size={14} /> Verify Credential
              </a>
            </div>
          </motion.div>

          {/* Other certs */}
          {CERTS.slice(1).map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="group rounded-2xl p-6 bg-white border border-[#080808]/10 hover:border-[#1877F2] hover:shadow-xl transition-all cursor-pointer [perspective:1000px]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors">
                    <Icon size={22} className="text-[#1877F2] group-hover:text-white transition-colors" />
                  </div>
                  <Award size={18} className="text-[#080808]/20" />
                </div>
                <h3 className="font-display font-semibold text-lg text-[#080808] leading-tight mb-1">{cert.name}</h3>
                <p className="font-mono text-xs text-[#080808]/40 mb-3">{cert.code}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#080808]/60">{cert.issuer}</span>
                  <span className="font-mono text-xs text-[#1877F2]">{cert.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}