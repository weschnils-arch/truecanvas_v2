import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const styles = [
  { name: 'Blackwork', artist: '@ophelia.tattoo', image: '/images/guests/ophelia.tattoo.webp' },
  { name: 'Illustrativ', artist: '@annamaria.tattoo', image: '/images/guests/annamaria.tattoo.webp' },
  { name: 'Fineline', artist: '@mannytatt', image: '/images/guests/mannytatt.webp' },
  { name: 'Floral', artist: '@vlada.s.tattoo', image: '/images/guests/vlada.s.tattoo.webp' },
  { name: 'Realismus', artist: '@talala_tattoo', image: '/images/guests/talala_tattoo.webp' },
  { name: 'Neo Traditional', artist: '@shavelkina', image: '/images/guests/shavelkina-1.webp' },
];

export function StylesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.styles-heading', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      gsap.from('.style-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.style-card',
          start: 'top 88%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="styles-heading flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <p className="text-[11px] tracking-archive uppercase text-charcoal/70 mb-6">
              Vielfalt in Perfektion
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-archive uppercase text-charcoal">
              Stile & Künstler
            </h2>
          </div>
          <Link
            to="/artists"
            className="inline-block px-10 py-4 border border-charcoal/15 text-[11px] tracking-archive uppercase text-charcoal hover:bg-charcoal hover:text-paper transition-all duration-500 self-start md:self-auto"
          >
            Alle Artists entdecken
          </Link>
        </div>

        {/* Grid — asymmetric masonry-style layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Large card */}
          <div className="style-card col-span-2 md:col-span-1 md:row-span-2">
            <div className="group relative overflow-hidden h-full">
              <img
                src={styles[0].image}
                alt={styles[0].name}
                className="no-grayscale w-full h-full min-h-[400px] md:min-h-0 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <p className="text-white/70 text-[10px] tracking-journal uppercase mb-1">{styles[0].artist}</p>
                <p className="text-white text-sm md:text-base tracking-archive uppercase">{styles[0].name}</p>
              </div>
            </div>
          </div>

          {/* Remaining cards */}
          {styles.slice(1, 5).map((style, i) => (
            <div key={i} className="style-card">
              <div className="group relative overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="no-grayscale w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <p className="text-white/70 text-[10px] tracking-journal uppercase mb-1">{style.artist}</p>
                  <p className="text-white text-xs md:text-sm tracking-archive uppercase">{style.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Last card — wider */}
          <div className="style-card col-span-2 md:col-span-1">
            <div className="group relative overflow-hidden">
              <img
                src={styles[5].image}
                alt={styles[5].name}
                className="no-grayscale w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-6">
                <p className="text-white/70 text-[10px] tracking-journal uppercase mb-1">{styles[5].artist}</p>
                <p className="text-white text-xs md:text-sm tracking-archive uppercase">{styles[5].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
