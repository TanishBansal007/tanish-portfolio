import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const SNOW_GUITAR = '/images/Guitarist.jpeg';
const SUIT_PHOTO = '/images/Professional-Photo.jpeg';

const CORE_STRENGTHS = [
  'Salesforce Administration',
  'Apex & LWC',
  'Flow Automation',
  'CRM Reporting',
  'Business Analysis',
  'Sales/Revenue Operations',
];

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12">
      {/* Left — Personal Brand */}
      <div className="md:col-span-5 bg-[#080808] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="01" title="About" side="dark" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-2xl overflow-hidden mb-6 max-w-sm">
            <img
              src={SNOW_GUITAR}
              alt="Tanish with guitar in Central Park snow"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
          </div>

          <p className="text-white/80 text-base leading-relaxed">
            I build scalable CRM systems by day and play guitar under city lights by night.
            Originally from India, with an MS from NYIT and now based in New Jersey, I bring
            the same discipline to Salesforce automation, Apex logic, and business workflows
            that I bring to learning a new melody — structured, focused, and always improving.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 max-w-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-display text-2xl font-bold text-white">3+</p>
              <p className="font-mono text-xs text-white/50 mt-1">Years Experience</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-display text-2xl font-bold text-white">ADM-201</p>
              <p className="font-mono text-xs text-white/50 mt-1">Salesforce Certified</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-display text-2xl font-bold text-white">25%</p>
              <p className="font-mono text-xs text-white/50 mt-1">Manual Effort Reduced</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-display text-2xl font-bold text-white">10K+</p>
              <p className="font-mono text-xs text-white/50 mt-1">Records Migrated</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right — Professional Positioning */}
      <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="01" title="About" side="light" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#080808] leading-[0.95] mb-6">
            Salesforce builder.<br />
            CRM problem solver.
          </h2>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={SUIT_PHOTO}
              alt="Tanish in professional attire"
              className="w-full md:w-56 h-64 object-cover rounded-2xl"
              loading="lazy"
            />

            <div className="flex-1">
              <p className="text-[#080808]/70 text-base leading-relaxed">
                Salesforce Certified Administrator with 3+ years of experience across
                Salesforce Administration, Salesforce Development, CRM systems, business
                analysis, sales operations, and revenue operations. I help teams improve
                automation, reporting, data quality, user adoption, and end-to-end CRM processes.
                <br /><br />
                My background combines hands-on Salesforce configuration with technical
                development and business-facing delivery. I have worked with Flows, validation
                rules, approval processes, record types, page layouts, profiles, permission sets,
                reports, dashboards, Apex, Lightning Web Components, SOQL, REST/SOAP APIs,
                Data Loader, UAT, documentation, and release support.
                <br /><br />
                At Cloud Maven, I supported a Salesforce-native lending platform covering the
                full lifecycle from credit application intake through approval, disbursement,
                repayment, and servicing workflows. I enjoy translating business needs into
                scalable Salesforce solutions that are practical, clean, and easy for users to adopt.
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {CORE_STRENGTHS.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="font-mono text-sm text-[#1877F2] mt-5">
                MS, Computer &amp; Information Sciences — NYIT · GPA 3.63
              </p>

              <p className="text-[#080808]/55 text-sm leading-relaxed mt-4">
                Open to Salesforce Administrator, Salesforce Business Analyst, Salesforce
                Developer, Salesforce Engineer, CRM Analyst, Sales Operations Analyst, and
                Revenue Operations Analyst/Specialist roles.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}