import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Instagram } from 'lucide-react';

const guestArtists = [
  { name: 'ophelia.tattoo', style: 'Blackwork', dates: '2.3. – 12.3.', image: '/images/guests/ophelia.tattoo.webp', instagram: 'https://instagram.com/ophelia.tattoo' },
  { name: 'shavelkina', style: 'Neo Traditional', dates: '2.3. – 8.3.', image: '/images/guests/shavelkina-1.webp', instagram: 'https://instagram.com/shavelkina' },
  { name: 'mannytatt', style: 'Fineline', dates: '2.3. – 8.3.', image: '/images/guests/mannytatt.webp', instagram: 'https://instagram.com/mannytatt' },
  { name: 'ruby.tattooist', style: 'Illustrativ', dates: '5.3. – 8.3.', image: '/images/guests/ruby__lights.webp', instagram: 'https://instagram.com/ruby.tattooist' },
  { name: 'osmanergin_', style: 'Fineline', dates: '6.3. – 9.3.', image: '/images/guests/osmanergin_.webp', instagram: 'https://instagram.com/osmanergin_' },
  { name: 'gizemgunertattoo', style: 'Floral', dates: '6.3. – 8.3.', image: '/images/guests/gizemgunertatto.webp', instagram: 'https://instagram.com/gizemgunertattoo' },
  { name: 'canerimozen', style: 'Blackwork', dates: '6.3. – 8.3.', image: '/images/guests/canerimozen.webp', instagram: 'https://instagram.com/canerimozen' },
  { name: 'annamaria.tattoo', style: 'Illustrativ', dates: '9.3. – 15.3.', image: '/images/guests/annamaria.tattoo.webp', instagram: 'https://instagram.com/annamaria.tattoo' },
  { name: 'talala_tattoo', style: 'Realismus', dates: '9.3. – 15.3.', image: '/images/guests/talala_tattoo.webp', instagram: 'https://instagram.com/talala_tattoo' },
  { name: 'vlada.s.tattoo', style: 'Floral', dates: '9.3. – 15.3.', image: '/images/guests/vlada.s.tattoo.webp', instagram: 'https://instagram.com/vlada.s.tattoo' },
];

const styles = ['Alle', ...new Set(guestArtists.map(a => a.style))];

export default function GuestArtists() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStyle, setActiveStyle] = useState('Alle');

  const filtered = activeStyle === 'Alle' ? guestArtists : guestArtists.filter(a => a.style === activeStyle);

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.guest-header', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <div ref={containerRef} className="bg-[#F7F6F4] min-h-screen font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">

        {/* Header */}
        <div className="guest-header grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 md:mb-32">
          <div>
            <p className="text-[11px] tracking-archive uppercase text-charcoal/60 mb-6">
              Internationale Künstler in Wien
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans tracking-[0.15em] uppercase text-charcoal leading-none">
              Guest Artists
            </h1>
          </div>
          <div className="flex items-end">
            <p className="font-serif italic text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-md">
              Innovation lebt vom Austausch. Regelmäßig begrüßen wir internationale Gastkünstler, die neue Perspektiven und Techniken in unser Studio bringen.
            </p>
          </div>
        </div>

        {/* Atmospheric photo */}
        <div className="mb-24 md:mb-32 overflow-hidden">
          <img src="/images/studio/JollySchwarz-4173.webp" alt="True Canvas Studio" className="w-full aspect-[21/9] object-cover grayscale" loading="lazy" />
        </div>

        {/* Filter + Month */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 border-b border-charcoal/10 pb-6">
          <p className="text-[11px] tracking-archive uppercase text-charcoal/60 shrink-0">
            März 2026
          </p>
          <div className="flex flex-wrap gap-3">
            {styles.map(s => (
              <button
                key={s}
                onClick={() => setActiveStyle(s)}
                className={`text-[11px] tracking-journal uppercase transition-all duration-300 pb-1 ${
                  activeStyle === s ? 'text-charcoal border-b border-charcoal' : 'text-charcoal/60 hover:text-charcoal'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
          {filtered.map((artist, i) => (
            <a key={i} href={artist.instagram} target="_blank" rel="noopener noreferrer" className="group">
              <div className="overflow-hidden mb-3">
                <img src={artist.image} alt={artist.name} className="w-full aspect-square object-cover transition-all duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[13px] font-sans text-charcoal/90 tracking-wide">@{artist.name}</p>
                  <p className="text-[11px] text-charcoal/60 mt-0.5">{artist.dates}</p>
                </div>
                <Instagram className="w-3.5 h-3.5 text-charcoal/60 group-hover:text-charcoal transition-colors mt-0.5 shrink-0" />
              </div>
              <p className="text-[11px] text-charcoal/60 mt-1 tracking-wide">{artist.style}</p>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-20 font-serif italic text-charcoal/60">Keine Guest Artists in diesem Stil gefunden.</p>
        )}

        {/* Bottom photos */}
        <div className="mt-32 md:mt-40 grid grid-cols-3 gap-4 md:gap-6">
          <div className="overflow-hidden"><img src="/images/studio/JollySchwarz-4003.webp" alt="Studio" className="w-full aspect-[4/5] object-cover grayscale" loading="lazy" /></div>
          <div className="overflow-hidden mt-12"><img src="/images/studio/JollySchwarz-4146.webp" alt="Studio" className="w-full aspect-[4/5] object-cover grayscale" loading="lazy" /></div>
          <div className="overflow-hidden"><img src="/images/studio/JollySchwarz-4268.webp" alt="Studio" className="w-full aspect-[4/5] object-cover grayscale" loading="lazy" /></div>
        </div>

        {/* Apply CTA */}
        <div className="mt-32 md:mt-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center border-t border-charcoal/10 pt-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans tracking-[0.12em] uppercase text-charcoal mb-4">Dein Guestspot in Wien</h2>
            <p className="font-serif text-charcoal/70 text-base leading-relaxed max-w-lg">
              Du möchtest als Artist bei True Canvas arbeiten? Wir bieten dir einen voll ausgestatteten Arbeitsplatz in einem modernen, hellen Studio im Herzen Wiens.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <a href="https://form.jotform.com/210883790627060" target="_blank" rel="noopener noreferrer"
              className="inline-block px-12 py-4 border border-charcoal/15 text-[11px] tracking-archive uppercase text-charcoal hover:bg-charcoal hover:text-paper transition-all duration-500">
              Jetzt bewerben
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
