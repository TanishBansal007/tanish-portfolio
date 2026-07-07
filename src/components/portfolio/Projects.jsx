import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

const PROJECTS = [
  {
    name: 'Lending Manager',
    subtitle: 'Salesforce-Native Loan Origination & Servicing Platform',
    category: 'Salesforce Admin + Developer + Integrations',
    stack: ['Apex', 'LWC', 'Salesforce Flows', 'REST APIs', 'SOQL', 'UAT'],
    description:
      'A Salesforce-native lending platform supporting the loan lifecycle from credit application intake through approval routing, document workflows, disbursement, servicing, and repayment scheduling.',
    highlights: [
      'Configured Salesforce objects, fields, record types, page layouts, validation rules, approval processes, Flows, profiles, permission sets, reports, and dashboards.',
      'Developed Apex classes, trigger-handler patterns, queueable jobs, Lightning Web Components, SOQL logic, REST/SOAP API integrations, and platform-event automation.',
      'Supported document workflow automation, repayment allocation logic, production troubleshooting, and release validation across sandbox and production environments.',
      'Partnered with business users, QA, and development teams on requirements, user stories, UAT scenarios, defect tracking, and release readiness.',
      'Improved manual processing efficiency by 25% through cleaner Salesforce automation, better workflow design, and scalable CRM configuration.',
    ],
    codeLabel: 'trigger-handler.apex',
    code: `trigger LoanTrigger on Loan__c (
  after insert, after update
) {
  LoanTriggerHandler.handle(
    Trigger.new,
    Trigger.oldMap
  );
}

public with sharing class LoanTriggerHandler {
  public static void handle(
    List<Loan__c> newLoans,
    Map<Id, Loan__c> oldMap
  ) {
    // Representative pattern:
    // validate status changes,
    // route approvals,
    // and trigger async processing.
  }
}`,
  },
  {
    name: 'CRM & Revenue Operations Dashboard',
    subtitle: 'Salesforce Reporting, Data Quality & Pipeline Visibility',
    category: 'Sales Operations + RevOps + Business Analysis',
    stack: ['Salesforce Reports', 'Dashboards', 'Data Loader', 'SQL', 'Excel', 'UAT'],
    description:
      'A reporting and CRM operations project focused on improving pipeline visibility, reporting hygiene, data quality, adoption tracking, and leadership-ready operational insights.',
    highlights: [
      'Built Salesforce reports and dashboards to track pipeline activity, operational KPIs, user activity, task completion, data quality, and process bottlenecks.',
      'Created data audit views to identify missing fields, duplicate records, ownership gaps, incomplete records, and reporting inconsistencies.',
      'Supported data migration, field mapping, deduplication, segmentation, and Data Loader validation across 10,000+ records with zero data loss.',
      'Translated stakeholder reporting needs into functional requirements, dashboard logic, report filters, QA checks, and reusable documentation.',
      'Helped improve CRM reporting hygiene, operational visibility, and stakeholder confidence in Salesforce data.',
    ],
    codeLabel: 'pipeline-report.soql',
    code: `// Representative SOQL for CRM visibility
SELECT Id, Name, Stage__c, Amount__c,
  Owner.Name, CreatedDate, LastModifiedDate
FROM Opportunity__c
WHERE CreatedDate = THIS_QUARTER
  AND Stage__c IN (
    'New',
    'In Review',
    'Closed Won'
  )
ORDER BY Amount__c DESC
LIMIT 200`,
  },
  {
    name: 'Agentforce Service Assistant',
    subtitle: 'AI-Powered Salesforce Support Workflow',
    category: 'Agentforce + AI + Salesforce Automation',
    stack: ['Agentforce', 'Einstein AI', 'Prompt Builder', 'Flows', 'Apex', 'LWC'],
    description:
      'An AI-assisted Salesforce service workflow designed to support case summarization, intelligent routing, next-best actions, and agent handoff experiences.',
    highlights: [
      'Designed an Agentforce-powered assistant concept using Prompt Builder and Einstein AI to support case summaries, routing suggestions, and contextual response recommendations.',
      'Built Apex actions and LWC handoff components to support agent workflows, real-time updates, and guided user actions.',
      'Used Salesforce automation patterns to connect Flows, Apex, platform events, and UI components into a practical support experience.',
      'Validated access control, responsible AI considerations, test cases, UAT scenarios, and release-readiness steps.',
      'Positioned the project around real-world Salesforce service productivity, user adoption, and support efficiency.',
    ],
    codeLabel: 'agent-action.apex',
    code: `// Representative Agentforce Apex action
public with sharing class AgentActionService {
  @InvocableMethod(
    label='Generate Case Guidance'
  )
  public static List<String> generateGuidance(
    List<Id> caseIds
  ) {
    List<String> responses = new List<String>();

    for (Id caseId : caseIds) {
      responses.add(
        'Case reviewed. Suggested next action prepared.'
      );
    }

    return responses;
  }
}`,
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
            Built. Automated. Analyzed.
          </h2>

          <p className="mt-4 max-w-3xl text-sm md:text-base text-[#080808]/65 leading-relaxed">
            Selected Salesforce and CRM projects across platform administration,
            Apex/LWC development, business analysis, reporting, automation,
            UAT, data quality, and revenue operations support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white/70 backdrop-blur-xl border border-[#080808]/10 p-7 hover:border-[#1877F2]/40 hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#1877F2]/5 group-hover:bg-[#1877F2]/10 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#1877F2] mb-2">
                      {p.category}
                    </p>

                    <h3 className="font-display font-bold text-2xl text-[#080808] leading-tight">
                      {p.name}
                    </h3>

                    <p className="text-[#1877F2] text-sm font-medium mt-1">
                      {p.subtitle}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors shrink-0">
                    <ArrowUpRight
                      size={18}
                      className="text-[#1877F2] group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

                <p className="text-[#080808]/70 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md bg-[#080808]/5 text-xs font-mono text-[#080808]/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-5">
                  {p.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm text-[#080808]/60 leading-relaxed flex gap-2"
                    >
                      <span className="text-[#1877F2] mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-lg bg-[#080808] p-4 overflow-x-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 size={12} className="text-[#1877F2]" />
                    <span className="font-mono text-[10px] text-white/40">
                      {p.codeLabel}
                    </span>
                  </div>

                  <pre className="font-mono text-[10px] md:text-xs text-[#E8E8E8] leading-relaxed whitespace-pre">
                    <code>{p.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}