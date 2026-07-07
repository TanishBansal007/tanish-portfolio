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
    category: 'Salesforce Administration',
    items: [
      'Salesforce CRM',
      'Flows',
      'Validation Rules',
      'Approval Processes',
      'Record Types',
      'Profiles & Permission Sets',
      'Field-Level Security',
      'Page Layouts',
      'Reports & Dashboards',
      'Data Loader',
      'Sandbox Management',
      'Change Sets',
      'User Management',
      'CRM Configuration',
    ],
  },
  {
    category: 'Salesforce Development',
    items: [
      'Apex Classes',
      'Apex Triggers',
      'Batch Apex',
      'Queueable Apex',
      'Lightning Web Components',
      'Visualforce',
      'SOQL',
      'SOSL',
      'REST/SOAP APIs',
      'Platform Events',
      'Trigger Handler Pattern',
      'Governor Limits',
      'JSON',
      'Asynchronous Apex',
    ],
  },
  {
    category: 'Business Systems & Analysis',
    items: [
      'Requirements Gathering',
      'User Stories',
      'Process Mapping',
      'Functional Requirements',
      'Acceptance Criteria',
      'UAT Planning',
      'Test Cases',
      'Defect Tracking',
      'Release Validation',
      'Documentation',
      'Stakeholder Communication',
      'Cross-functional Collaboration',
    ],
  },
  {
    category: 'Sales & Revenue Operations',
    items: [
      'Sales Operations',
      'Revenue Operations',
      'Pipeline Reporting',
      'KPI Dashboards',
      'Reporting Hygiene',
      'Data Quality',
      'Data Audits',
      'CRM Analytics',
      'User Adoption Tracking',
      'Lead-to-Cash',
      'CPQ Exposure',
      'Order Management Exposure',
      'Commissions Support',
      'Segmentation',
    ],
  },
  {
    category: 'Data, Integration & Deployment',
    items: [
      'SQL',
      'PostgreSQL',
      'Data Migration',
      'Field Mapping',
      'Data Cleansing',
      'REST APIs',
      'Postman',
      'SFDX',
      'Salesforce CLI',
      'Metadata API',
      'CI/CD Support',
      'Git',
      'VS Code',
      'Jira',
      'Agile/Scrum',
    ],
  },
  {
    category: 'AI, Agentforce & Productivity',
    items: [
      'Agentforce',
      'Einstein AI',
      'Prompt Builder',
      'AI-assisted Development',
      'Copilot Actions',
      'AI Use Cases',
      'MS Copilot',
      'Automation Design',
    ],
  },
  {
    category: 'Programming & Web',
    items: [
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'HTML',
      'CSS',
      'Java',
      'Object-Oriented Programming',
      'Debugging',
      'Technical Documentation',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="grid grid-cols-1 md:grid-cols-12">
      {/* Left — Music skills as frequency bars */}
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
                <span className="text-white font-medium">{skill.name}</span>
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
                          ? `freq-bar ${1 + (j % 5) * 0.2}s ease-in-out ${
                              j * 0.05
                            }s infinite`
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
          Creativity helps me approach technical problems differently — whether
          I am designing a Salesforce Flow, debugging Apex logic, building a
          dashboard, or translating business needs into clean CRM solutions.
        </p>
      </div>

      {/* Right — Tech skills */}
      <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16">
        <SectionLabel number="03" title="Skills" side="light" />

        <h2 className="font-display font-bold text-3xl md:text-4xl text-[#080808] mb-2">
          Salesforce, CRM & Operations Toolkit
        </h2>

        <p className="text-[#080808]/50 text-sm mb-8 max-w-3xl">
          A blend of Salesforce administration, development, business analysis,
          reporting, automation, data quality, integrations, and sales/revenue
          operations skills.
        </p>

        <div className="space-y-6">
          {TECH_SKILLS.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#1877F2] mb-3">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + j * 0.03 }}
                    data-cursor="hover"
                    className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all hover:scale-105 min-h-[44px] flex items-center ${
                      group.category === 'AI, Agentforce & Productivity'
                        ? 'bg-[#1877F2]/10 text-[#005FB2] border-[#1877F2]/30 hover:bg-[#1877F2]/20'
                        : group.category === 'Sales & Revenue Operations'
                        ? 'bg-[#F59E0B]/10 text-[#8A5200] border-[#F59E0B]/30 hover:bg-[#F59E0B]/20'
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