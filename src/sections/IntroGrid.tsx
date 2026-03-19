import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { introGridConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const studioImages = [
  { src: '/images/studio/JollySchwarz-4038.webp', alt: 'TrueCanvas Studio Detail' },
  { src: '/images/studio/JollySchwarz-4075.webp', alt: 'TrueCanvas Studio Workspace' },
  { src: '/images/studio/JollySchwarz-4112.webp', alt: 'TrueCanvas Studio Atmosphere' },
];

const stats = [
  { value: '+7', label: 'Jahre' },
  { value: '+2500', label: 'Unikate' },
  { value: '+50', label: 'Guest Artists' },
];

export function IntroGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerImageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the title area
      gsap.from('.intro-title', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.intro-title',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from('.intro-description', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.intro-description',
          start: 'top 85%',
          once: true,
        },
      });

      // Parallax on each image
      innerImageRefs.current.forEach((img, i) => {
        if (!img || !imageRefs.current[i]) return;
        gsap.fromTo(
          img,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: imageRefs.current[i],
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });

      // Fade in images staggered
      imageRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      });

      // Stats fade in
      gsap.from('.intro-stats', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.intro-stats',
          start: 'top 90%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      {/* Title Row */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 md:mb-32">
          <div className="intro-title">
            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 400, letterSpacing: '0.02em', textTransform: 'none' }}>
              {introGridConfig.titleLine1} {introGridConfig.titleLine2}
            </h2>
          </div>
          <div className="intro-description flex items-end">
            <p className="text-sm md:text-base text-charcoal/60 leading-relaxed max-w-lg">
              {introGridConfig.description}
            </p>
          </div>
        </div>

        {/* Three Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {studioImages.map((image, i) => (
            <div
              key={i}
              ref={(el) => { imageRefs.current[i] = el; }}
              className="overflow-hidden aspect-[3/4]"
            >
              <img
                ref={(el) => { innerImageRefs.current[i] = el; }}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                className="w-full h-[120%] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="intro-stats flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 mt-20 md:mt-28">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="text-2xl md:text-3xl text-charcoal/80 tracking-archive">
                {stat.value}
              </span>
              <span className="text-[11px] tracking-journal uppercase text-charcoal/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
