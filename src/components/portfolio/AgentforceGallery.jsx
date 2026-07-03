import { motion } from 'framer-motion';

const PHOTOS = [
  { url: '/images/Agentforce-World-Tour-2.jpeg', label: 'Agentforce World Tour · NYC', span: 'md:col-span-2 md:row-span-2' },
  { url: '/images/Agentforce-World-Tour-Photo-1.jpeg', label: 'At the Salesforce podium', span: '' },
  { url: '/images/Agentforce-World-Tour-Photo-5.jpeg', label: 'Salesforce Tower, NYC', span: '' },
  { url: '/images/Agentforce-World-Tour-Photo-6.jpeg', label: 'Trailblazer Community', span: 'md:col-span-2' },
  { url: '/images/Agentforce-World-Tour-Photo-3.jpeg', label: 'Astro · The Trailblazer mascot', span: '' },
  { url: '/images/Agentforce-World-Tour-Photo-4.jpeg', label: 'Breakout Session', span: '' },
];

export default function AgentforceGallery() {
  return (
    <section id="music" className="bg-[#080808] py-20 md:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#1877F2]">06</span>
            <div className="h-px w-8 bg-white/20" />
            <span className="font-mono text-xs uppercase tracking-widest text-white/40">Events</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white leading-none">I was there.</h2>
          <p className="text-white/50 mt-3 font-mono text-sm">Agentforce World Tour · New York City</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group relative rounded-xl overflow-hidden ${photo.span}`}
            >
              <img src={photo.url} alt={photo.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-medium">{photo.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}