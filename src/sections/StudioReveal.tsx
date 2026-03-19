import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function StudioReveal() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { clipPath: 'inset(0 50% 0 50%)' },
          {
            clipPath: 'inset(0 0% 0 0%)',
            ease: 'none',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 md:py-16">
      <div
        ref={imageRef}
        className="w-full overflow-hidden"
        style={{ clipPath: 'inset(0 50% 0 50%)' }}
      >
        <img
          src="/images/studio/JollySchwarz-4211.webp"
          alt="True Canvas Studio"
          className="w-full aspect-[21/9] object-cover grayscale"
          loading="lazy"
        />
      </div>
    </section>
  );
}
