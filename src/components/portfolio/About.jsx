import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const SNOW_GUITAR = '/images/Guitarist.jpeg';
const SUIT_PHOTO = '/images/Professional-Photo.jpeg';

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12">
      {/* Left — Artist */}
      <div className="md:col-span-5 bg-[#080808] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="01" title="About" side="dark" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative rounded-2xl overflow-hidden mb-6 max-w-sm">
            <img src={SNOW_GUITAR} alt="Tanish with guitar in Central Park snow" className="w-full h-72 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
          </div>
          <p className="text-white/80 text-base leading-relaxed">
            I build scalable Salesforce solutions by day and play guitar under city lights by night. Originally from India, MS from NYIT, now based in New Jersey — I bring the same precision to Apex triggers as I do to chord progressions.
          </p>
        </motion.div>
      </div>

      {/* Right — Professional */}
      <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="01" title="About" side="light" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#080808] leading-[0.95] mb-6">
            Same person,<br />infinite range.
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img src={SUIT_PHOTO} alt="Tanish in professional attire" className="w-full md:w-56 h-64 object-cover rounded-2xl" loading="lazy" />
            <p className="text-[#080808]/70 text-base leading-relaxed flex-1">
              Salesforce Certified Administrator with 3+ years of experience in CRM configuration, Apex development, and process automation across lending and real estate domains. Skilled in Flows, Validation Rules, Approval Processes, Reports &amp; Dashboards, and Agentforce deployments. Proven track record improving data quality and efficiency through rigorous UAT.
              <br /><br />
              <span className="font-mono text-sm text-[#1877F2]">MS, Computer &amp; Information Sciences — NYIT · GPA 3.63</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}