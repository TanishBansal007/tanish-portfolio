import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const RESUME_URL = "/files/Tanish_Bansal_Salesforce_Engineer.docx";

const LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Certs', id: 'certs' },
  { label: 'Projects', id: 'projects' },
  { label: 'Events', id: 'music' },
  { label: 'Interests', id: 'interests' },
  { label: 'Contact', id: 'contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between py-2.5 rounded-full bg-black/50 backdrop-blur-xl border border-white/10">
        <button onClick={() => scrollTo('hero')} className="font-display font-bold text-lg tracking-tight text-white">
          TB<span className="text-[#1877F2]">.</span>
        </button>
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm text-white/70 hover:text-[#1877F2] transition-colors">
              {l.label}
            </button>
          ))}
          <a href={RESUME_URL} download className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1877F2] text-white text-sm font-medium hover:bg-[#005FB2] transition-colors">
            <Download size={14} /> Resume
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <div className="space-y-1.5">
            <div className={`w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-4 space-y-1">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left px-3 py-2.5 text-white/80 hover:text-[#1877F2] rounded-lg hover:bg-white/5">
              {l.label}
            </button>
          ))}
          <a href={RESUME_URL} download className="flex items-center gap-2 px-3 py-2.5 mt-2 rounded-lg bg-[#1877F2] text-white text-sm font-medium">
            <Download size={14} /> Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}