import { motion } from 'framer-motion';

import {
  Award,
  ShieldCheck,
  ExternalLink,
  GitBranch,
  Code2,
  FileSpreadsheet,
  Layers3,
} from 'lucide-react';

const SALESFORCE_CERTS = [
  {
    name: 'Salesforce Certified Platform App Builder',
    code: 'Platform App Builder',
    issuer: 'Salesforce',
    date: 'Aug 2026',
    credentialId: null,
    verifyUrl:
      'https://trailhead.salesforce.com/en/credentials/verification/',
    icon: Layers3,
    description:
      'Validates the ability to design, build, and deploy custom Salesforce applications using declarative tools and platform capabilities.',
    skills: [
      'App Builder',
      'Flow',
      'Data Modeling',
      'Automation',
      'Security',
    ],
  },

  {
    name: 'Salesforce Certified Platform Developer I',
    code: 'PD1',
    issuer: 'Salesforce',
    date: 'Jul 2026',
    credentialId: null,
    verifyUrl:
      'https://trailhead.salesforce.com/en/credentials/verification/',
    icon: Code2,
    description:
      'Validates Salesforce development skills across Apex, data modeling, business logic, testing, automation, and platform development.',
    skills: [
      'Apex',
      'SOQL',
      'Testing',
      'Platform Development',
      'Automation',
    ],
  },

  {
    name: 'Salesforce Certified Platform Administrator',
    code: 'ADM-201',
    issuer: 'Salesforce',
    date: 'Jan 2026',
    credentialId: '7403646',
    verifyUrl:
      'https://trailhead.salesforce.com/en/credentials/verification/',
    icon: ShieldCheck,
    description:
      'Validates Salesforce administration skills across configuration, security, automation, data management, reporting, and user management.',
    skills: [
      'Administration',
      'Security',
      'Flow',
      'Data',
      'Reports',
    ],
  },
];

const SUPPORTING_CERTS = [
  {
    name: 'Microsoft Excel — Beginner to Advanced',
    code: 'Excel Analytics',
    issuer: 'Udemy',
    date: 'Dec 2021',
    credentialId:
      'UC-02d594b5-8da8-444d-b241-e38051a9dc51',
    verifyUrl:
      'https://ude.my/UC-02d594b5-8da8-444d-b241-e38051a9dc51',
    icon: FileSpreadsheet,
    description:
      'Excel training covering formulas, reporting, analysis, and business productivity.',
    skills: [
      'Excel',
      'Reporting',
      'Data Analysis',
    ],
  },

  {
    name: 'The Git & GitHub Bootcamp',
    code: 'Version Control',
    issuer: 'Udemy',
    date: 'Apr 2021',
    credentialId:
      'UC-d85ecc26-6f7c-44c7-b3ef-60e760b7c9da',
    verifyUrl:
      'https://ude.my/UC-d85ecc26-6f7c-44c7-b3ef-60e760b7c9da',
    icon: GitBranch,
    description:
      'Git and GitHub training covering repositories, branching, collaboration, and source control.',
    skills: [
      'Git',
      'GitHub',
      'Version Control',
    ],
  },

  {
    name: 'The Web Developer Bootcamp',
    code: 'Web Development',
    issuer: 'Udemy',
    date: 'Jul 2020',
    credentialId:
      'UC-7d46c3e3-e3ad-4ca6-b460-095dcda767f4',
    verifyUrl:
      'https://ude.my/UC-7d46c3e3-e3ad-4ca6-b460-095dcda767f4',
    icon: Code2,
    description:
      'Web development training covering JavaScript, frontend development, and software engineering fundamentals.',
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
    ],
  },
];

export default function Certifications() {
  return (
    <section
      id="certs"
      className="bg-[#FAFAFA] circuit-bg py-20 md:py-28 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#1877F2]">
              04
            </span>

            <div className="h-px w-8 bg-[#080808]/20" />

            <span className="font-mono text-xs uppercase tracking-widest text-[#080808]/40">
              Certifications
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#080808]">
            3x Salesforce Certified.
          </h2>

          <p className="text-[#080808]/50 mt-3 max-w-2xl mx-auto leading-relaxed">
            Credentials across Salesforce administration, application
            architecture, development, automation, data, and platform delivery.
          </p>
        </motion.div>

        {/* Salesforce Certification Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1877F2]/10 flex items-center justify-center">
            <ShieldCheck
              size={18}
              className="text-[#1877F2]"
            />
          </div>

          <div>
            <p className="font-display font-semibold text-lg text-[#080808]">
              Salesforce Credentials
            </p>

            <p className="font-mono text-[10px] uppercase tracking-widest text-[#080808]/40">
              Administrator · Developer · App Builder
            </p>
          </div>
        </motion.div>

        {/* Main Salesforce Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SALESFORCE_CERTS.map((cert, i) => {
            const Icon = cert.icon;

            return (
              <motion.article
                key={cert.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.08,
                }}
                className="group relative rounded-2xl overflow-hidden p-6 md:p-7 min-h-[410px] flex flex-col"
                style={{
                  background:
                    'linear-gradient(145deg, #001a3a 0%, #003e7a 50%, #00A1E0 120%)',
                }}
              >
                {/* Background Effects */}
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-2xl" />

                <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#1877F2]/30 blur-2xl" />

                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    background:
                      'linear-gradient(110deg, transparent 30%, white 50%, transparent 70%)',
                    backgroundSize: '200% 100%',
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">

                  {/* Icon + Date */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/15 backdrop-blur flex items-center justify-center">
                      <Icon
                        size={26}
                        className="text-white"
                      />
                    </div>

                    <span className="font-mono text-xs text-white/55">
                      {cert.date}
                    </span>
                  </div>

                  {/* Certification Code */}
                  <p className="font-mono text-[10px] text-white/55 uppercase tracking-widest mb-2">
                    Salesforce · {cert.code}
                  </p>

                  {/* Name */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white leading-tight mb-4">
                    {cert.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/65 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/75 text-[10px] font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto pt-6">

                    {cert.credentialId && (
                      <p className="font-mono text-[10px] text-white/40 mb-3">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-[#003e7a] text-xs font-semibold hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={13} />
                      Verify Credential
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Supporting Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mt-14 mb-5"
        >
          <div className="w-9 h-9 rounded-xl bg-[#080808]/5 flex items-center justify-center">
            <Award
              size={18}
              className="text-[#080808]/60"
            />
          </div>

          <div>
            <p className="font-display font-semibold text-lg text-[#080808]">
              Supporting Credentials
            </p>

            <p className="font-mono text-[10px] uppercase tracking-widest text-[#080808]/40">
              Data · Development · Version Control
            </p>
          </div>
        </motion.div>

        {/* Supporting Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SUPPORTING_CERTS.map((cert, i) => {
            const Icon = cert.icon;

            return (
              <motion.article
                key={cert.name}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.07,
                }}
                className="group rounded-2xl p-6 bg-white border border-[#080808]/10 hover:border-[#1877F2]/35 hover:shadow-xl transition-all flex flex-col"
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1877F2]/10 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors">
                    <Icon
                      size={20}
                      className="text-[#1877F2] group-hover:text-white transition-colors"
                    />
                  </div>

                  <span className="font-mono text-[10px] text-[#080808]/35">
                    {cert.date}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display font-semibold text-lg text-[#080808] leading-tight">
                  {cert.name}
                </h3>

                <p className="font-mono text-[10px] text-[#1877F2] mt-1 mb-3">
                  {cert.code}
                </p>

                {/* Description */}
                <p className="text-sm text-[#080808]/55 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#080808]/5 text-[10px] font-mono text-[#080808]/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-auto pt-5">
                  <div className="border-t border-[#080808]/10 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#080808]/55">
                        {cert.issuer}
                      </p>

                      <p className="font-mono text-[9px] text-[#080808]/30 mt-0.5">
                        Credential available
                      </p>
                    </div>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-[#080808]/10 flex items-center justify-center hover:border-[#1877F2] hover:text-[#1877F2] transition-colors"
                      aria-label={`Verify ${cert.name}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}