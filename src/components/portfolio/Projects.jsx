import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    name: 'Commercial Lending & Repayment Allocation',
    subtitle: 'Salesforce Lending Automation & Servicing',
    category: 'Salesforce Admin + Development + Business Analysis',
    stack: ['Salesforce', 'Flow', 'Apex', 'LWC', 'SOQL', 'UAT'],
    description:
      'Salesforce solutions supporting commercial and Asset-Based Lending workflows across onboarding, servicing, payments, repayment allocation, refinancing, and operational exception handling.',
    highlights: [
      'Built and enhanced Salesforce Flows, Apex services, Lightning Web Components, validation logic, and reusable functionality for complex lending workflows.',
      'Developed functionality for loan amortization schedules, repayment allocation, payment calculations, adjustments, and servicing processes.',
      'Partnered with lending, operations, support, and technical stakeholders to translate business requirements into scalable Salesforce solutions.',
      'Supported testing, UAT, release validation, production troubleshooting, and post-deployment verification.',
    ],
    impact: '25%',
    impactLabel: 'Manual processing effort reduced',
  },

  {
    name: 'Data Migration, Quality & Governance',
    subtitle: '10K+ Salesforce Record Migration',
    category: 'Data + Salesforce Administration + Governance',
    stack: ['Data Loader', 'ETL', 'SOQL', 'Excel', 'Matching Rules', 'Validation Rules'],
    description:
      'End-to-end Salesforce data migration and governance initiative focused on cleansing, mapping, validating, reconciling, and standardizing business-critical CRM data.',
    highlights: [
      'Migrated and validated more than 10,000 Salesforce records from external data sources using Data Loader, Excel, and SOQL.',
      'Performed profiling, cleansing, transformation, source-to-target mapping, import sequencing, relationship validation, and post-load reconciliation.',
      'Implemented Matching Rules, Duplicate Rules, validation controls, standardized values, and exception reporting to improve long-term data quality.',
      'Worked with business stakeholders to investigate discrepancies, document exceptions, and establish repeatable governance procedures.',
    ],
    impact: '10K+',
    impactLabel: 'Records migrated with zero reported data loss',
  },

  {
    name: 'Agentforce Service Assistant',
    subtitle: 'AI-Powered Salesforce Service Experience',
    category: 'Agentforce + Einstein AI + Salesforce Automation',
    stack: ['Agentforce', 'Einstein AI', 'Prompt Builder', 'Flow', 'Apex', 'LWC'],
    description:
      'AI-assisted Salesforce service solution designed to improve case summarization, routing, response guidance, and overall agent productivity.',
    highlights: [
      'Designed an Agentforce service assistant using Prompt Builder and Einstein AI for case summarization, intelligent routing, and response suggestions.',
      'Built Apex actions, Flows, and Lightning Web Components to support service workflows and guided agent interactions.',
      'Defined grounding context, instructions, guardrails, acceptance criteria, and test scenarios for reliable AI-assisted workflows.',
      'Validated functionality through structured UAT, API testing, error-path testing, and stakeholder demonstrations.',
    ],
    impact: '8 → 5 min',
    impactLabel: 'Average case handling time',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#FAFAFA] py-20 md:py-28 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#1877F2]">05</span>
            <div className="h-px w-8 bg-[#080808]/20" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#080808]/40">
              Projects
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#080808]">
            Built for business impact.
          </h2>

          <p className="mt-4 max-w-3xl text-sm md:text-base text-[#080808]/65 leading-relaxed">
            Selected Salesforce projects across lending automation, data
            migration and governance, AI-assisted service workflows, platform
            administration, development, integrations, testing, and business
            analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl bg-white border border-[#080808]/10 p-7 hover:border-[#1877F2]/40 hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#1877F2]/5 group-hover:bg-[#1877F2]/10 transition-colors" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#1877F2] mb-2">
                      {project.category}
                    </p>

                    <h3 className="font-display font-bold text-2xl text-[#080808] leading-tight">
                      {project.name}
                    </h3>

                    <p className="text-[#1877F2] text-sm font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors shrink-0">
                    <ArrowUpRight
                      size={18}
                      className="text-[#1877F2] group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

                <p className="text-[#080808]/65 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#080808]/5 text-[11px] font-mono text-[#080808]/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="text-sm text-[#080808]/60 leading-relaxed flex gap-2"
                    >
                      <span className="text-[#1877F2] mt-0.5 shrink-0">
                        ▸
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-[#080808]/10">
                  <p className="font-display text-3xl font-bold text-[#080808]">
                    {project.impact}
                  </p>

                  <p className="font-mono text-[11px] text-[#080808]/45 mt-1">
                    {project.impactLabel}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}