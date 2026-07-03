import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Building2, MapPin } from 'lucide-react';
import SectionLabel from './SectionLabel';

const JOBS = [
  {
    role: 'Salesforce Administrator | Salesforce Developer | Software Engineer',
    company: 'Cloud Maven Inc.',
    period: 'Jan 2025 -- Apr 2026',
    location: 'Newark, NJ',
    bullets: [
      'Administered and enhanced Lending Manager, a Salesforce-native loan origination and servicing platform supporting user access, loan intake, credit review, approvals, disbursement, repayment, and production support.',
      'Configured objects, fields, page layouts, record types, validation rules, approval processes, Flows, reports, dashboards, profiles, roles, permission sets, and security controls, reducing manual processing effort by 25%.',
      'Developed Apex classes, triggers, batch jobs, queueable Apex, Lightning Web Components, SOQL logic, REST/SOAP API integrations, and platform-event automation while maintaining 85%+ test coverage.',
      'Managed sandboxes, change sets, release readiness, CI/CD support, UAT, troubleshooting, documentation, and Agentforce-ready automation across Agile sprint planning, demos, and post-production support.',
    ],
  },
  {
    role: 'Salesforce Administrator | Salesforce Developer | Software Engineer',
    company: 'SilverXis Inc.',
    period: 'Aug 2024 -- Jan 2025',
    location: 'New Jersey',
    bullets: [
      'Configured Salesforce workflows, Flows, validation rules, Visualforce pages, page layouts, record types, custom objects, user permissions, and field-level security for real estate and home services operations.',
      'Executed Data Loader migration, field mapping, deduplication, cleansing, import/export validation, and integration testing across 10,000+ records, preserving data integrity with zero data loss.',
      'Built stakeholder reports, dashboards, custom report types, and operational KPI views while supporting requirements gathering, process mapping, training, documentation, adoption, and quality assurance.',
    ],
  },
  {
    role: 'Salesforce Administrator | Salesforce Developer | Software Engineer',
    company: 'Business Thrust Techsoft Pvt. Ltd.',
    period: 'Nov 2021 -- May 2022',
    location: 'India',
    bullets: [
      'Delivered Salesforce CRM configuration and development including custom objects, workflows, Apex-supported automation, Visualforce pages, validation rules, documentation, and testing.',
      'Drove a 30% improvement in delivery efficiency and reduced manual effort through process automation, clean configuration, stakeholder communication, and release-ready documentation.',
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Anviam Solutions Pvt. Ltd.',
    period: 'Jan 2021 -- Aug 2021',
    location: 'India',
    bullets: [
      'Delivered feature development and Agile sprint enhancements on large-scale enterprise applications.',
      'Improved delivery timelines, code quality, technical documentation, stakeholder communication, and structured testing standards.',
    ],
  },
];

const CODE_SNIPPETS = [
  `// Apex Trigger Handler -- Lending Manager
public class LoanTriggerHandler {
  public static void onAfterInsert(
    List<Loan__c> loans
  ) {
    Map<Id, Loan__c> mapLoans = new Map<Id, Loan__c>();
    for (Loan__c l : loans) {
      if (l.Status__c == 'Submitted') {
        mapLoans.put(l.Id, l);
      }
    }
    // Auto-route to approval process
    Approval.process(mapLoans);
  }
}`,
  `// SOQL -- Real-time pipeline metrics
SELECT Id, Name, Amount__c,
  Borrower__r.Name, Status__c
FROM Loan__c
WHERE CreatedDate = THIS_QUARTER
  AND Status__c IN ('Under Review',
    'Approved', 'Disbursed')
ORDER BY Amount__c DESC
LIMIT 200`,
  `// LWC -- Agentforce handoff
import { LightningElement, api } from 'lwc';
import triggerAgent from '@salesforce/apex/
  AgentController.handleCase';

export default class AgentHandoff
  extends LightningElement {
  @api recordId;

  async handleHandoff() {
    await triggerAgent({
      caseId: this.recordId
    });
    this.dispatchEvent(
      new CustomEvent('agentinvoked')
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
              <span className="ml-3 font-mono text-xs text-white/40">tanish@salesforce:~</span>
            </div>
            <pre className="p-4 md:p-5 font-mono text-[10px] md:text-xs text-[#E8E8E8] leading-relaxed overflow-x-auto whitespace-pre-wrap">
              <code>{CODE_SNIPPETS[active]}</code>
            </pre>
          </div>
          <p className="font-mono text-xs text-white/30 mt-4">Live code from {JOBS[active].company}</p>
        </div>

        {/* Right -- Timeline */}
        <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16">
          <SectionLabel number="02" title="Experience" side="light" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#080808] mb-8">Salesforce Certified Administrator. Salesforce Developer.</h2>
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
                  onClick={() => { setActive(i); setExpanded(expanded === i ? -1 : i); }}
                  className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-[#1877F2] bg-[#FAFAFA] flex items-center justify-center hover:bg-[#1877F2] transition-colors group"
                >
                  <div className={`w-2 h-2 rounded-full ${active === i ? 'bg-[#1877F2]' : 'bg-transparent'} group-hover:bg-white transition-colors`} />
                </button>
                <div className={`rounded-xl p-5 transition-all cursor-pointer ${active === i ? 'bg-white shadow-lg border border-[#1877F2]/20' : 'bg-white/50 border border-transparent hover:bg-white/80'}`} onClick={() => { setActive(i); setExpanded(expanded === i ? -1 : i); }}>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-[#1877F2]">{job.period}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-[#080808]">{job.role}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-[#080808]/60">
                    <span className="flex items-center gap-1"><Building2 size={13} /> {job.company}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} /> {job.location}</span>
                  </div>
                  {expanded === i && (
                    <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 space-y-2 overflow-hidden">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-[#080808]/70 leading-relaxed flex gap-2">
                          <span className="text-[#1877F2] mt-1">-</span> {b}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                  {expanded !== i && (
                    <button className="mt-2 flex items-center gap-1 text-xs text-[#1877F2]">
                      <ChevronDown size={12} /> {job.bullets.length} achievements
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