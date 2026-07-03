import { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';

const RESUME_URL = "/files/Tanish_Bansal_Resume.pdf";
const NIGHT_GUITAR = '/images/Agentforce-World-Tour-Photo-1.jpeg';

const TAGLINES = ['Salesforce Developer', 'Guitarist & Singer', 'Salesforce Administrator', 'Trailblazer', 'Business Analyst'];

export default function Hero() {
  const [tagIdx, setTagIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTagIdx((i) => (i + 1) % TAGLINES.length), 2400);
    return () => clearInterval(t);
  }, []);

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 overflow-hidden">
      {/* Left — Artist */}
      <div className="relative md:col-span-5 bg-[#080808] min-h-[50vh] md:min-h-screen flex items-end overflow-hidden">
        <img src={NIGHT_GUITAR} alt="Tanish playing guitar at night" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
        <div className="relative z-10 p-8 md:p-12 pb-20 md:pb-32">
          <p className="font-mono text-xs text-[#F59E0B] tracking-widest uppercase mb-2">The Artist</p>
          <p className="text-white/70 text-sm max-w-xs leading-relaxed">Strumming chords under city lights. Music is where logic meets emotion.</p>
        </div>
      </div>

      {/* Right — Professional */}
      <div className="relative md:col-span-7 bg-[#FAFAFA] circuit-bg min-h-[50vh] md:min-h-screen flex items-start overflow-hidden">
        <div className="relative z-10 p-8 md:p-12 pt-24 md:pt-32 w-full">
          <p className="font-mono text-xs text-[#1877F2] tracking-widest uppercase mb-2">The Engineer</p>
          <p className="text-[#080808]/60 text-sm max-w-sm leading-relaxed">3+ years architecting scalable Salesforce solutions. Apex, LWC, Flows, Agentforce.</p>
        </div>
      </div>

      {/* Centered name — bisected */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-4">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[22vh] bg-[#080808]/45 blur-3xl rounded-full" />
        <h1 className="relative font-display font-bold text-center leading-[0.85] text-[15vw] md:text-[8.5vw] tracking-tighter text-white" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.7)' }}>
          TANISH BANSAL
        </h1>
        <div className="mt-4 md:mt-6 h-7 md:h-9 overflow-hidden flex items-center pointer-events-auto">
          <p key={tagIdx} className="font-mono text-sm md:text-base text-[#1877F2] animate-[float-up_2.4s_ease-out]">
            {TAGLINES[tagIdx]}
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 pointer-events-auto">
          <a href={RESUME_URL} download className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1877F2] text-white text-sm font-medium hover:bg-[#005FB2] transition-all hover:scale-105">
            <Download size={16} /> Download Resume
          </a>
          <button onClick={scrollToAbout} className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#1877F2] text-[#1877F2] text-sm font-medium hover:bg-[#1877F2]/10 transition-all">
            Explore My Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollToAbout} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[#1877F2] animate-bounce hidden md:block">
        <ChevronDown size={28} />
      </button>
    </section>
  );
}