import { motion } from 'framer-motion';
import { Music, Dumbbell, Plane, Camera } from 'lucide-react';
import SectionLabel from './SectionLabel';

const INTERESTS = [
  {
    name: 'Guitar & Singing',
    icon: Music,
    photo: '/images/JJ-Event-Photo.jpeg',
    color: '#F59E0B',
  },
  {
    name: 'Photography',
    icon: Camera,
    photo: '/images/Photography.jpeg',
    color: '#1877F2',
  },
  {
    name: 'Travel',
    icon: Plane,
    photo: '/images/Adventure-Photo.jpeg',
    color: '#F59E0B',
  },
  {
    name: 'Fitness',
    icon: Dumbbell,
    photo: '/images/Gym-Photo.jpeg',
    color: '#1877F2',
  },
];

const INTEREST_TAGS = [
  '🎸 Guitarist',
  '🎤 Singer',
  '📷 Photography',
  '✈️ Travel',
  '💪 Fitness',
  '🧠 Continuous Learning',
];

export default function Interests() {
  return (
    <section id="interests" className="grid grid-cols-1 md:grid-cols-12">
      {/* Left — Photo grid */}
      <div className="md:col-span-5 bg-[#080808] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="07" title="Interests" side="dark" />

        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
          Beyond the keyboard.
        </h2>

        <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
          The creative side that keeps me curious, grounded, and constantly improving.
        </p>

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
                className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-white/10"
              >
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/35 to-transparent" />

                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#080808]/60 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <Icon size={17} style={{ color: item.color }} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-medium">
                    {item.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right — Personal paragraph */}
      <div className="md:col-span-7 bg-[#FAFAFA] circuit-bg p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <SectionLabel number="07" title="Interests" side="light" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#080808] leading-[0.95] mb-6">
            Built with focus.<br />
            Balanced by creativity.
          </h2>

          <p className="text-[#080808]/70 text-lg leading-relaxed max-w-xl">
            Outside of Salesforce and software engineering, I stay connected to
            music, photography, travel, and fitness. These interests keep me
            balanced while sharpening the same qualities I bring into my work:
            patience, discipline, creativity, and attention to detail.
          </p>

          <p className="text-[#080808]/50 text-base leading-relaxed max-w-xl mt-4">
            Music has taught me structure and expression. Fitness has taught me
            consistency and resilience. Photography and travel keep me observant,
            curious, and open to new perspectives — traits that help me solve
            problems better as an engineer and CRM professional.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-2xl">
            <div className="rounded-2xl bg-white border border-[#080808]/10 p-4">
              <p className="font-display text-2xl font-bold text-[#080808]">
                Creative
              </p>
              <p className="text-sm text-[#080808]/50 mt-1">
                Music, singing, and songwriting
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#080808]/10 p-4">
              <p className="font-display text-2xl font-bold text-[#080808]">
                Disciplined
              </p>
              <p className="text-sm text-[#080808]/50 mt-1">
                Fitness, routine, and consistency
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#080808]/10 p-4">
              <p className="font-display text-2xl font-bold text-[#080808]">
                Curious
              </p>
              <p className="text-sm text-[#080808]/50 mt-1">
                Travel, photography, and learning
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {INTEREST_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-white border border-[#080808]/10 text-sm text-[#080808]/70 hover:border-[#1877F2]/40 hover:text-[#1877F2] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}