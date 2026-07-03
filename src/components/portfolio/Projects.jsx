import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

const PROJECTS = [
  {
    name: 'Lending Manager',
    subtitle: 'Loan Origination & Servicing Platform',
    stack: ['Apex', 'LWC', 'Salesforce Flows', 'REST APIs', 'SOQL'],
    description: 'A Salesforce-native loan origination and servicing platform supporting the full loan lifecycle — from credit application intake through disbursement and repayment scheduling.',
    highlights: [
      'Architected eOriginal document vaulting integration and repayment allocation automation using Apex triggers, batch jobs, and REST APIs.',
      'Built LWC with trigger handler architecture and governor limit compliance, reducing manual processing effort by 25%.',
      'Managed SFDX-based deployments and change set promotion across sandbox and production; maintained 85%+ code coverage.',
    ],
    code: `trigger LoanTrigger on Loan__c (
  after insert, after update
) {
  LoanTriggerHandler.handle(
    Trigger.new, Trigger.oldMap
  );
}`,
  },
  {
    name: 'Agentforce Service Assistant',
    subtitle: 'AI-Powered Case Resolution',
    stack: ['Agentforce', 'Einstein AI', 'Prompt Builder', 'Flows', 'Apex', 'LWC'],
    description: 'An AI-driven service assistant that automates case handoff workflows and provides real-time agent support using Salesforce Agentforce and Einstein AI.',
    highlights: [
      'Built Apex actions and LWC components for agent handoff workflows, integrating platform events to trigger real-time updates on open cases.',
      'Leveraged Prompt Builder and Copilot Actions to generate contextual responses and reduce average case resolution time.',
      'Validated end-to-end system integration through structured API design and testing protocols.',
    ],
    code: `// Agentforce — Apex Action
@InvocableMethod
public static void handoffToAgent(
  List<Id> caseIds
) {
  AgentService.invoke(
    caseIds, 'ServiceAssistant'
  );
}`,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FAFAFA] py-20 md:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#1877F2]">05</span>
            <div className="h-px w-8 bg-[#080808]/20" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#080808]/40">Projects</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#080808]">Built. Deployed. Proven.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                    <h3 className="font-display font-bold text-2xl text-[#080808]">{p.name}</h3>
                    <p className="text-[#1877F2] text-sm font-medium">{p.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center group-hover:bg-[#1877F2] transition-colors">
                    <ArrowUpRight size={18} className="text-[#1877F2] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-[#080808]/70 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-[#080808]/5 text-xs font-mono text-[#080808]/60">{s}</span>
                  ))}
                </div>
                <ul className="space-y-2 mb-5">
                  {p.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-[#080808]/60 leading-relaxed flex gap-2">
                      <span className="text-[#1877F2] mt-0.5">▸</span> {h}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-[#080808] p-4 overflow-x-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 size={12} className="text-[#1877F2]" />
                    <span className="font-mono text-[10px] text-white/40">snippet.apex</span>
                  </div>
                  <pre className="font-mono text-[10px] md:text-xs text-[#E8E8E8] leading-relaxed whitespace-pre"><code>{p.code}</code></pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}