import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { studioConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Studio() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const innerImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on studio image
      if (innerImageRef.current && imageRef.current) {
        gsap.fromTo(
          innerImageRef.current,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }

      // Text fade in
      gsap.from('.studio-text', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.studio-text',
          start: 'top 85%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const descriptionParts = studioConfig.description.split('\n\n');

  return (
    <section ref={sectionRef} id="studio" className="py-32 md:py-48">
      {/* Full-bleed Image */}
      <div ref={imageRef} className="w-full overflow-hidden aspect-[16/7] md:aspect-[21/9]">
        <img
          ref={innerImageRef}
          src="/images/studio/JollySchwarz-4173.webp"
          alt="TrueCanvas Studio — Gewolbedecken"
          loading="lazy"
          onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
          className="w-full h-[120%] object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="studio-text max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mt-20 md:mt-28">
        <p className="text-[11px] tracking-archive uppercase text-charcoal/70 mb-6">
          {studioConfig.subtitle}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-archive uppercase text-charcoal mb-16">
          {studioConfig.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 max-w-5xl">
          {descriptionParts.map((part, i) => (
            <p key={i} className="text-sm text-charcoal/70 leading-relaxed">
              {part}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
