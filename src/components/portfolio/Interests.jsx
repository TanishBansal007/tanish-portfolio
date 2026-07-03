import { motion } from 'framer-motion';
import { Music, Dumbbell, Plane, Camera } from 'lucide-react';
import SectionLabel from './SectionLabel';

const INTERESTS = [
  { name: 'Guitar & Singing', icon: Music, photo: '/images/JJ-Event-Photo.jpeg', color: '#F59E0B' },
  { name: 'Photography', icon: Camera, photo: '/images/Photography.jpeg', color: '#1877F2' },
  { name: 'Travel', icon: Plane, photo: '/images/Adventure-Photo.jpeg', color: '#F59E0B' },
  { name: 'Fitness', icon: Dumbbell, photo: '/images/Gym-Photo.jpeg', color: '#1877F2' },
];

export default function Interests() {
  return (
    <section id="interests" className="grid grid-cols-1 md:grid-cols-12">
      {/* Left — Photo grid */}
      <div className="md:col-span-5 bg-[#080808] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="07" title="Interests" side="dark" />
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Beyond the keyboard.</h2>
        <div className="grid grid-cols-2 gap-3">
          {INTERESTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-xl overflow-hidden aspect-[4/5]"
              >
                <img src={item.photo} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <Icon size={18} className="text-white mb-1" style={{ color: item.color }} />
                  <p className="text-white text-sm font-medium">{item.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right — Personal paragraph */}
      <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="07" title="Interests" side="light" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#080808] leading-[0.95] mb-6">
            Life's too short<br />to be one-dimensional.
          </h2>
          <p className="text-[#080808]/70 text-lg leading-relaxed max-w-lg">
            When I'm not pushing code, I'm strumming chords, capturing city skylines through my lens, exploring new places, or lifting in the gym.
          </p>
          <p className="text-[#080808]/50 text-base leading-relaxed max-w-lg mt-4">
            The same discipline that drives me to write clean Apex at 2 AM is what gets me to the gym at 6 AM. Music taught me structure; fitness taught me resilience. Both make me a better engineer.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {['🎸 Guitarist', '🎤 Singer', '📷 Photography', '✈️ Travel', '💪 Fitness'].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white border border-[#080808]/10 text-sm text-[#080808]/70">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}