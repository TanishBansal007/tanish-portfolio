import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Building2, MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel';

const JOBS = [
  {
    role: 'Salesforce Administrator | Salesforce Developer | Revenue Systems Analyst | Software Engineer',
    company: 'Cloud Maven Inc.',
    period: 'Jan 2025 -- Apr 2026',
    location: 'Newark, NJ',
    tags: [
      'Salesforce Admin',
      'Apex',
      'LWC',
      'Flow',
      'Reports & Dashboards',
      'UAT',
      'Revenue Operations',
    ],
    bullets: [
      'Supported and enhanced a Salesforce-native lending and revenue operations platform, working across Salesforce administration, development, CRM configuration, reporting, automation, integrations, and production support.',
      'Configured objects, fields, page layouts, record types, validation rules, approval processes, Flows, profiles, permission sets, reports, dashboards, and access controls to improve process efficiency and data governance.',
      'Developed and supported Apex classes, triggers, queueable jobs, Lightning Web Components, SOQL logic, REST/SOAP integrations, and platform-event automation while maintaining strong test coverage and release quality.',
      'Built dashboards and reporting views for pipeline visibility, operational KPIs, data quality, user adoption, loan workflow tracking, and executive-level insights.',
      'Led UAT cycles, release validation, defect tracking, documentation, and post-production support across Agile sprint releases.',
      'Supported business analysis activities including requirements gathering, user stories, process mapping, test cases, acceptance criteria, and stakeholder communication.',
      'Improved manual processing efficiency by 25% through Salesforce automation, workflow optimization, and cleaner CRM processes.',
    ],
  },
  {
    role: 'Salesforce Administrator | Salesforce Developer | CRM/Sales Operations Analyst | Software Engineer',
    company: 'SilverXis Inc.',
    period: 'Aug 2024 -- Jan 2025',
    location: 'New Jersey',
    tags: [
      'Salesforce CRM',
      'Data Loader',
      'Data Migration',
      'CRM Analytics',
      'Sales Operations',
      'Reports',
      'User Support',
    ],
    bullets: [
      'Supported Salesforce CRM configuration, reporting, data quality, and business process improvements for real estate and home services operations.',
      'Configured Salesforce workflows, Flows, validation rules, Visualforce pages, page layouts, record types, custom objects, permissions, and field-level security to improve system usability and business process consistency.',
      'Executed Data Loader migration, field mapping, deduplication, cleansing, import/export validation, and integration testing across 10,000+ records with zero data loss.',
      'Built reports, dashboards, custom report views, and operational KPI tracking for pipeline visibility, user activity, task completion, data quality, and business performance.',
      'Supported requirements gathering, process documentation, QA validation, user support, issue resolution, and adoption improvements.',
      'Collaborated with technical and business teams to troubleshoot Salesforce issues, validate configuration changes, and support release readiness.',
    ],
  },
  {
    role: 'Salesforce Administrator | Salesforce Developer | Software Engineer',
    company: 'Business Thrust Techsoft Pvt. Ltd.',
    period: 'Nov 2021 -- May 2022',
    location: 'India',
    tags: [
      'Salesforce Configuration',
      'Visualforce',
      'Apex',
      'Validation Rules',
      'CRM',
      'Documentation',
      'UAT',
    ],
    bullets: [
      'Delivered Salesforce CRM configuration and development support across business process automation, reporting, testing, and documentation.',
      'Configured custom objects, fields, record types, page layouts, workflows, validation rules, Visualforce pages, reports, and dashboards.',
      'Supported Apex-assisted automation, CRM customization, testing, documentation, and troubleshooting for internal and client-facing Salesforce use cases.',
      'Partnered with business and technical teams to translate requirements into Salesforce configuration and process improvements.',
      'Created documentation, supported UAT, validated business rules, and improved delivery consistency across releases.',
      'Contributed to a 30% improvement in delivery efficiency through better configuration practices, documentation, and testing support.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Anviam Solutions Pvt. Ltd.',
    period: 'Jan 2021 -- Aug 2021',
    location: 'India',
    tags: [
      'JavaScript',
      'HTML',
      'CSS',
      'SQL',
      'Debugging',
      'Agile',
      'Documentation',
    ],
    bullets: [
      'Contributed to development and enhancement of enterprise web applications, supporting frontend, backend, database, debugging, and Agile delivery activities.',
      'Developed and enhanced application features using HTML, CSS, JavaScript, and backend/database logic.',
      'Assisted with debugging, performance improvements, database queries, and technical documentation.',
      'Collaborated with cross-functional teams on requirements understanding, testing, issue resolution, and sprint delivery.',
      'Improved code quality, maintainability, and documentation while gaining hands-on experience across the software development lifecycle.',
    ],
  },
];

const CODE_SNIPPETS = [
  `// Apex -- Queueable automation pattern
public class LoanWorkflowQueueable implements Queueable {
  private Id loanId;

  public LoanWorkflowQueueable(Id loanId) {
    this.loanId = loanId;
  }

  public void execute(QueueableContext context) {
    Loan__c loan = [
      SELECT Id, Status__c, OwnerId
      FROM Loan__c
      WHERE Id = :loanId
      LIMIT 1
    ];

    if (loan.Status__c == 'Submitted') {
      loan.Status__c = 'Under Review';
      update loan;
    }
  }
}`,
  `// SOQL -- CRM reporting and pipeline visibility
SELECT Id, Name, Stage__c, Amount__c,
  Owner.Name, CreatedDate
FROM Opportunity__c
WHERE CreatedDate = THIS_QUARTER
  AND Stage__c IN ('New', 'In Review', 'Closed Won')
ORDER BY Amount__c DESC
LIMIT 200`,
  `// Apex -- Requirement validation helper
public with sharing class RequirementService {
  public static Boolean hasRequiredDocs(Id recordId) {
    List<Document__c> docs = [
      SELECT Id
      FROM Document__c
      WHERE Parent_Record__c = :recordId
      AND Status__c = 'Received'
    ];

    return !docs.isEmpty();
  }
}`,
  `// LWC -- User action handler
import { LightningElement, api } from 'lwc';
import runAutomation from '@salesforce/apex/AutomationController.runAutomation';

export default class WorkflowActionPanel extends LightningElement {
  @api recordId;

  async handleRunAutomation() {
    await runAutomation({ recordId: this.recordId });

    this.dispatchEvent(
      new CustomEvent('success', {
        detail: 'Automation completed successfully'
      })
    );
  }
}`,
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="grid grid-cols-1 md:grid-cols-12">
      {/* Left -- Code terminal */}
      <div className="md:col-span-5 bg-[#080808] p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[400px] md:min-h-screen">
        <SectionLabel number="02" title="Experience" side="dark" />

        <div className="rounded-xl bg-[#0d0d0d] border border-white/10 overflow-hidden shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#111]">
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-[#1877F2]" />
            <span className="ml-3 font-mono text-xs text-white/40">
              tanish@salesforce:~
            </span>
          </div>

          <pre className="p-4 md:p-5 font-mono text-[10px] md:text-xs text-[#E8E8E8] leading-relaxed overflow-x-auto whitespace-pre-wrap">
            <code>{CODE_SNIPPETS[active]}</code>
          </pre>
        </div>

        <p className="font-mono text-xs text-white/30 mt-4">
          Representative Salesforce snippet inspired by my work across CRM automation,
          reporting, integrations, and platform support.
        </p>
      </div>

      {/* Right -- Timeline */}
      <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16">
        <SectionLabel number="02" title="Experience" side="light" />

        <h2 className="font-display font-bold text-3xl md:text-4xl text-[#080808] mb-3">
          Salesforce Certified Administrator. Developer. CRM Systems Professional.
        </h2>

        <p className="text-sm md:text-base text-[#080808]/65 leading-relaxed mb-8 max-w-3xl">
          3+ years of experience across Salesforce Administration, Salesforce Development,
          CRM configuration, business analysis, reporting, automation, UAT, data quality,
          and sales/revenue operations support.
        </p>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-[#080808]/15" />

          {JOBS.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pl-10 pb-8 last:pb-0"
            >
              <button
                onClick={() => {
                  setActive(i);
                  setExpanded(expanded === i ? -1 : i);
                }}
                className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-[#1877F2] bg-[#FAFAFA] flex items-center justify-center hover:bg-[#1877F2] transition-colors group"
                aria-label={`View ${job.company} experience`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    active === i ? 'bg-[#1877F2]' : 'bg-transparent'
                  } group-hover:bg-white transition-colors`}
                />
              </button>

              <div
                className={`rounded-xl p-5 transition-all cursor-pointer ${
                  active === i
                    ? 'bg-white shadow-lg border border-[#1877F2]/20'
                    : 'bg-white/50 border border-transparent hover:bg-white/80'
                }`}
                onClick={() => {
                  setActive(i);
                  setExpanded(expanded === i ? -1 : i);
                }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-[#1877F2]">
                    {job.period}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-lg text-[#080808]">
                  {job.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-[#080808]/60">
                  <span className="flex items-center gap-1">
                    <Building2 size={13} /> {job.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {job.location}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[11px] font-mono px-2 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {expanded === i && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 space-y-2 overflow-hidden"
                  >
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm text-[#080808]/70 leading-relaxed flex gap-2"
                      >
                        <span className="text-[#1877F2] mt-1">-</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}

                {expanded !== i && (
                  <button className="mt-4 flex items-center gap-1 text-xs text-[#1877F2]">
                    <ChevronDown size={12} /> {job.bullets.length} highlights
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}