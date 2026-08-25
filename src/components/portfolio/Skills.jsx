import { motion } from 'framer-motion';

import SectionLabel from './SectionLabel';

const MUSIC_SKILLS = [
  { name: 'Guitar', level: 95 },
  { name: 'Singing', level: 85 },
  { name: 'Stage Performance', level: 88 },
  { name: 'Songwriting', level: 75 },
];

const TECH_SKILLS = [
  {
    category: 'Salesforce Core',
    items: [
      'Sales Cloud',
      'Service Cloud',
      'User & Access Management',
      'Profiles & Permission Sets',
      'OWD & Sharing Rules',
      'Record Types & Page Layouts',
      'Reports & Dashboards',
    ],
  },

  {
    category: 'Automation & Development',
    items: [
      'Flow Builder',
      'Validation Rules',
      'Approval Processes',
      'Apex',
      'Lightning Web Components',
      'SOQL',
      'Visualforce',
    ],
  },

  {
    category: 'Data & Integrations',
    items: [
      'Data Migration',
      'Data Loader',
      'ETL',
      'Data Quality & Governance',
      'REST/SOAP APIs',
      'Postman',
      'JSON',
    ],
  },

  {
    category: 'Business Analysis & Delivery',
    items: [
      'Requirements Gathering',
      'Process Mapping',
      'User Stories',
      'Stakeholder Communication',
      'UAT & Regression Testing',
      'Release Management',
      'Production Support',
    ],
  },

  {
    category: 'AI & Domain Expertise',
    items: [
      'Agentforce',
      'Einstein AI',
      'Prompt Builder',
      'Commercial Lending',
      'Asset-Based Lending',
      'Loan Servicing',
      'ACH/NACHA Payments',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="grid grid-cols-1 md:grid-cols-12">
      {/* Left — Music / Creative Side */}
      <div className="md:col-span-5 bg-[#080808] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="03" title="Skills" side="dark" />

        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-2">
          Creative Range
        </h2>

        <p className="text-white/50 text-sm mb-8">
          The rhythm behind the builder.
        </p>

        <div className="space-y-6">
          {MUSIC_SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">
                  {skill.name}
                </span>

                <span className="font-mono text-xs text-[#F59E0B]">
                  {skill.level}%
                </span>
              </div>

              <div className="flex items-end gap-1 h-8">
                {Array.from({ length: 24 }).map((_, j) => {
                  const active = (j / 24) * 100 < skill.level;

                  return (
                    <div
                      key={j}
                      className={`flex-1 rounded-sm origin-bottom ${
                        active ? 'bg-[#F59E0B]' : 'bg-white/10'
                      }`}
                      style={{
                        height: active
                          ? `${30 + Math.sin(j * 0.8) * 40 + 30}%`
                          : '20%',
                        animation: active
                          ? `freq-bar ${
                              1 + (j % 5) * 0.2
                            }s ease-in-out ${j * 0.05}s infinite`
                          : 'none',
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-white/45 text-sm leading-relaxed mt-8 max-w-sm">
          Music keeps the creative side active. That same mindset carries into
          how I approach Salesforce — understanding patterns, simplifying
          complexity, and building solutions that feel intuitive for the people
          using them.
        </p>
      </div>

      {/* Right — Salesforce Skills */}
      <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16">
        <SectionLabel number="03" title="Skills" side="light" />

        <h2 className="font-display font-bold text-3xl md:text-4xl text-[#080808] mb-2">
          Salesforce Delivery Toolkit
        </h2>

        <p className="text-[#080808]/50 text-sm mb-8 max-w-2xl leading-relaxed">
          Core capabilities across Salesforce administration, automation,
          development, data, integrations, business analysis, and AI.
        </p>

        <div className="space-y-7">
          {TECH_SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#1877F2] mb-3">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.05 + j * 0.02,
                    }}
                    data-cursor="hover"
                    className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all hover:scale-105 ${
                      group.category === 'AI & Domain Expertise'
                        ? 'bg-[#1877F2]/10 text-[#005FB2] border-[#1877F2]/25 hover:bg-[#1877F2]/15'
                        : 'bg-white text-[#080808] border-[#080808]/10 hover:border-[#1877F2] hover:text-[#1877F2]'
                    }`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}