import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Building2, MapPin } from 'lucide-react';

import SectionLabel from './SectionLabel';

const JOBS = [
  {
    role: 'Salesforce Consultant / Administrator',
    company: 'Cloud Maven Inc.',
    period: 'Jan 2025 — Present',
    location: 'Newark, NJ',
    tags: [
      'Salesforce Admin',
      'Flow',
      'Apex & LWC',
      'REST APIs',
      'Commercial Lending',
    ],
    bullets: [
      'Supported a Salesforce-based Lending Manager platform across customer onboarding, underwriting, loan servicing, Promise-to-Pay, refinancing, disbursement, and repayment allocation.',
      'Designed record-triggered, screen, scheduled, and autolaunched Flows that streamlined lending workflows and reduced manual processing effort by approximately 25%.',
      'Developed and enhanced Apex, Lightning Web Components, and SOQL-based functionality for commercial lending, loan amortization, payment calculations, and repayment allocation.',
      'Supported eOriginal document vaulting integrations and NACHA/ACH payment workflows using REST APIs, Postman, JSON, Apex, LWC, and Salesforce automation.',
      'Managed security, data quality, reporting, UAT, releases, production support, and stakeholder communication across the Salesforce delivery lifecycle.',
    ],
  },

  {
    role: 'Salesforce Analyst / Senior Salesforce Administrator',
    company: 'Tapestry',
    period: 'Mar 2023 — Dec 2024',
    location: 'Iselin, NJ',
    tags: [
      'Salesforce Admin',
      'Data Migration',
      'Data Governance',
      'Reports & Dashboards',
      'Business Analysis',
    ],
    bullets: [
      'Configured and administered Salesforce for real estate operations across lead, customer, property, activity, reporting, and data-management processes.',
      'Led an end-to-end migration of more than 10,000 records using Data Loader, Excel, and SOQL, including cleansing, transformation, mapping, relationship validation, and reconciliation.',
      'Implemented Matching Rules, Duplicate Rules, validation controls, standardized values, and data-quality reporting, completing the migration with zero reported data loss.',
      'Built operational reports and dashboards, administered security and access, coordinated UAT, and delivered demonstrations and user training.',
    ],
  },

  {
    role: 'Senior Salesforce Administrator',
    company: 'Business Thrust Techsoft Pvt. Ltd.',
    period: 'Jul 2021 — Aug 2022',
    location: 'India',
    tags: [
      'Salesforce Configuration',
      'Flow',
      'Security',
      'Data Quality',
      'UAT',
    ],
    bullets: [
      'Translated business requirements, process flows, data definitions, and reporting needs into scalable Salesforce configuration and workflow improvements.',
      'Built and maintained custom objects, fields, relationships, Flows, validation rules, approval processes, reports, dashboards, and security configurations.',
      'Supported data profiling, cleansing, deduplication, imports, reconciliation, and KPI reporting using Salesforce, SOQL, SQL, and Excel.',
      'Coordinated functional testing, regression testing, UAT, production support, and user guidance, contributing to approximately 30% improvement in delivery efficiency.',
    ],
  },

  {
    role: 'Salesforce Administrator',
    company: 'Anviam Solutions Pvt. Ltd.',
    period: 'Jun 2019 — Jul 2021',
    location: 'India',
    tags: [
      'Salesforce',
      'Apex',
      'Visualforce',
      'SOQL',
      'Agile Delivery',
    ],
    bullets: [
      'Configured and supported Salesforce objects, fields, relationships, record types, layouts, validation rules, approvals, security, reports, dashboards, and automation.',
      'Developed targeted enhancements using Apex, triggers, SOQL, Visualforce, JavaScript, and REST/SOAP services.',
      'Worked with administrators, developers, QA, analysts, and stakeholders to refine requirements and deliver enhancements through Agile sprint cycles.',
      'Troubleshot production issues using debug logs, SOQL, automation analysis, permission reviews, and integration responses while supporting testing and deployments.',
    ],
  },
];

const CODE_SNIPPETS = [
  {
    label: 'lending-automation.apex',
    code: `// Representative lending automation pattern

public with sharing class LoanService {
  public static void processLoan(Id loanId) {
    Loan__c loan = [
      SELECT Id, Status__c
      FROM Loan__c
      WHERE Id = :loanId
      LIMIT 1
    ];

    if (loan.Status__c == 'Submitted') {
      loan.Status__c = 'In Review';
      update loan;
    }
  }
}`,
  },

  {
    label: 'data-quality.soql',
    code: `// Representative data-quality review

SELECT Id, Name, OwnerId,
       LastModifiedDate
FROM Account
WHERE Name != null
ORDER BY LastModifiedDate DESC
LIMIT 200`,
  },

  {
    label: 'access-validation.apex',
    code: `// Representative validation helper

public with sharing class ValidationService {
  public static Boolean isReady(Id recordId) {
    List<Task> tasks = [
      SELECT Id
      FROM Task
      WHERE WhatId = :recordId
      AND Status != 'Completed'
    ];

    return tasks.isEmpty();
  }
}`,
  },

  {
    label: 'salesforce-component.js',
    code: `// Representative Salesforce UI action

import { LightningElement, api } from 'lwc';

export default class RecordAction extends LightningElement {
  @api recordId;

  handleAction() {
    this.dispatchEvent(
      new CustomEvent('recordaction', {
        detail: { recordId: this.recordId }
      })
    );
  }
}`,
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(0);

  const handleJobClick = (index) => {
    setActive(index);
    setExpanded(expanded === index ? -1 : index);
  };

  return (
    <section
      id="experience"
      className="grid grid-cols-1 md:grid-cols-12"
    >
      {/* Left — Technical / Code Side */}
      <div className="md:col-span-5 bg-[#080808] p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[420px] md:min-h-screen">
        <SectionLabel
          number="02"
          title="Experience"
          side="dark"
        />

        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
          Built beyond configuration.
        </h2>

        <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-md">
          Administration, automation, development, data, and integrations —
          working together to solve real business problems.
        </p>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl bg-[#0d0d0d] border border-white/10 overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#111]">
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-[#1877F2]" />

            <span className="ml-3 font-mono text-[10px] md:text-xs text-white/40">
              {CODE_SNIPPETS[active].label}
            </span>
          </div>

          {/* Code */}
          <pre className="p-4 md:p-5 font-mono text-[10px] md:text-xs text-[#E8E8E8] leading-relaxed overflow-x-auto whitespace-pre-wrap">
            <code>
              {CODE_SNIPPETS[active].code}
            </code>
          </pre>
        </motion.div>

        <p className="font-mono text-[10px] md:text-xs text-white/30 mt-4 leading-relaxed">
          Representative implementation patterns reflecting the Salesforce
          administration and development work across my experience.
        </p>
      </div>

      {/* Right — Professional Timeline */}
      <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16">
        <SectionLabel
          number="02"
          title="Experience"
          side="light"
        />

        <h2 className="font-display font-bold text-3xl md:text-4xl text-[#080808] mb-3">
          Salesforce Consultant.
          <br />
          Administrator. Developer.
        </h2>

        <p className="text-sm md:text-base text-[#080808]/60 leading-relaxed mb-10 max-w-3xl">
          Around 7 years of experience delivering Salesforce solutions across
          administration, automation, development, integrations, data
          management, business analysis, testing, and production support.
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-[#080808]/15" />

          {JOBS.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
              }}
              className="relative pl-10 pb-8 last:pb-0"
            >
              {/* Timeline Button */}
              <button
                onClick={() => handleJobClick(i)}
                className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-[#1877F2] bg-[#FAFAFA] flex items-center justify-center hover:bg-[#1877F2] transition-colors group"
                aria-label={`View ${job.company} experience`}
              >
                <div
                  className={`w-2 h-2 rounded-full transition-colors ${
                    active === i
                      ? 'bg-[#1877F2]'
                      : 'bg-transparent'
                  } group-hover:bg-white`}
                />
              </button>

              {/* Experience Card */}
              <div
                className={`rounded-xl p-5 md:p-6 transition-all cursor-pointer ${
                  active === i
                    ? 'bg-white shadow-lg border border-[#1877F2]/20'
                    : 'bg-white/50 border border-transparent hover:bg-white/80'
                }`}
                onClick={() => handleJobClick(i)}
              >
                {/* Date */}
                <span className="font-mono text-xs text-[#1877F2]">
                  {job.period}
                </span>

                {/* Role */}
                <h3 className="font-display font-semibold text-lg md:text-xl text-[#080808] mt-1 leading-tight">
                  {job.role}
                </h3>

                {/* Company / Location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-[#080808]/55">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={13} />
                    {job.company}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {job.location}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#1877F2]/10 text-[#1877F2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expanded Highlights */}
                {expanded === i && (
                  <motion.ul
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: 'auto',
                    }}
                    className="mt-5 space-y-3 overflow-hidden"
                  >
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-[#080808]/65 leading-relaxed flex gap-2.5"
                      >
                        <span className="text-[#1877F2] mt-0.5 shrink-0">
                          ▸
                        </span>

                        <span>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </motion.ul>
                )}

                {/* Collapsed State */}
                {expanded !== i && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-[#1877F2]">
                    <ChevronDown size={13} />
                    View {job.bullets.length} highlights
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}