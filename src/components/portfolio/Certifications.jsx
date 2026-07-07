import { motion } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  ExternalLink,
  GitBranch,
  Code2,
  FileSpreadsheet,
} from 'lucide-react';

const CERTS = [
  {
    name: 'Salesforce Certified Platform Administrator',
    code: 'ADM-201',
    issuer: 'Salesforce',
    date: 'Jan 2026',
    credentialId: '7403646',
    verifyUrl: 'https://trailhead.salesforce.com/en/credentials/verification/',
    icon: ShieldCheck,
    featured: true,
    color: '#00A1E0',
    description:
      'Verified Salesforce credential covering platform configuration, user management, security, automation, data management, reports, dashboards, and CRM administration.',
    skills: ['Salesforce Admin', 'CRM', 'Security', 'Automation', 'Reports'],
  },
  {
    name: 'Microsoft Excel — Beginner to Advanced',
    code: 'Excel Analytics',
    issuer: 'Udemy',
    date: 'Dec 2021',
    credentialId: 'UC-02d594b5-8da8-444d-b241-e38051a9dc51',
    verifyUrl: 'https://ude.my/UC-02d594b5-8da8-444d-b241-e38051a9dc51',
    icon: FileSpreadsheet,
    featured: false,
    description:
      'Completed Excel training focused on spreadsheets, formulas, reporting, data analysis, and business productivity.',
    skills: ['Excel', 'Reporting', 'Data Analysis', 'Dashboards'],
  },
  {
    name: 'The Git & GitHub Bootcamp',
    code: 'Version Control',
    issuer: 'Udemy',
    date: 'Apr 2021',
    credentialId: 'UC-d85ecc26-6f7c-44c7-b3ef-60e760b7c9da',
    verifyUrl: 'https://ude.my/UC-d85ecc26-6f7c-44c7-b3ef-60e760b7c9da',
    icon: GitBranch,
    featured: false,
    description:
      'Completed Git and GitHub training covering repositories, commits, branching, collaboration workflows, and source code management.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
  },
  {
    name: 'The Web Developer Bootcamp',
    code: 'Full Stack Development',
    issuer: 'Udemy',
    date: 'Jul 2020',
    credentialId: 'UC-7d46c3e3-e3ad-4ca6-b460-095dcda767f4',
    verifyUrl: 'https://ude.my/UC-7d46c3e3-e3ad-4ca6-b460-095dcda767f4',
    icon: Code2,
    featured: false,
    description:
      'Completed a 47-hour web development bootcamp covering frontend, backend, JavaScript, application development, and software engineering fundamentals.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Web Development', 'Full Stack'],
  },
];

export default function Certifications() {
  const featuredCert = CERTS.find((cert) => cert.featured);
  const otherCerts = CERTS.filter((cert) => !cert.featured);

  return (
    <section
      id="certs"
      className="bg-[#FAFAFA] circuit-bg py-20 md:py-28 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#1877F2]">04</span>
            <div className="h-px w-8 bg-[#080808]/20" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#080808]/40">
              Certifications
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#080808]">
            Credentials that back the build.
          </h2>

          <p className="text-[#080808]/50 mt-3 max-w-2xl mx-auto leading-relaxed">
            Verified Salesforce certification and supporting technical credentials
            across CRM administration, reporting, data analysis, version control,
            and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Featured Salesforce certification */}
          {featuredCert && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 relative group rounded-2xl p-8 overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, #001a3a 0%, #003e7a 42%, #00A1E0 100%)',
              }}
            >
              <div
                className="absolute inset-0 opacity-20 animate-holographic"
                style={{
                  background:
                    'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                  backgroundSize: '200% 100%',
                }}
              />

              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#1877F2]/30 blur-2xl" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center border border-white/20">
                      <ShieldCheck size={28} className="text-white" />
                    </div>

                    <div>
                      <span className="font-mono text-xs text-white/60 uppercase tracking-wider">
                        Featured Credential
                      </span>
                      <p className="text-white/80 text-sm">
                        {featuredCert.issuer} · {featuredCert.date}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight mb-3">
                    {featuredCert.name}
                  </h3>

                  <p className="font-mono text-sm text-white/65 mb-4">
                    Credential ID: {featuredCert.credentialId}
                  </p>

                  <p className="text-white/75 text-sm leading-relaxed max-w-xl">
                    {featuredCert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {featuredCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-white/15 border border-white/15 text-white/85 text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={featuredCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#003e7a] text-sm font-semibold w-fit hover:scale-105 transition-transform"
                >
                  <ExternalLink size={14} /> Verify Credential
                </a>
              </div>
            </motion.div>
          )}

          {/* Supporting certifications */}
          {otherCerts.map((cert, i) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="group rounded-2xl p-6 bg-white border border-[#080808]/10 hover:border-[#1877F2]/40 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors">
                    <Icon
                      size={22}
                      className="text-[#1877F2] group-hover:text-white transition-colors"
                    />
                  </div>

                  <Award size={18} className="text-[#080808]/20" />
                </div>

                <h3 className="font-display font-semibold text-lg text-[#080808] leading-tight mb-1">
                  {cert.name}
                </h3>

                <p className="font-mono text-xs text-[#080808]/40 mb-3">
                  {cert.code}
                </p>

                <p className="text-sm text-[#080808]/60 leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#080808]/5 text-[11px] font-mono text-[#080808]/55"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm border-t border-[#080808]/10 pt-4">
                  <div>
                    <span className="block text-[#080808]/60">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs text-[#1877F2]">
                      {cert.date}
                    </span>
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-[#080808]/10 flex items-center justify-center hover:border-[#1877F2] hover:text-[#1877F2] transition-colors"
                      aria-label={`Verify ${cert.name}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}