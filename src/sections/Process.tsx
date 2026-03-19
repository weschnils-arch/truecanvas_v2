import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { processConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-heading', {
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

      gsap.from('.process-step', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.process-step',
          start: 'top 85%',
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
        <div className="process-heading mb-20 md:mb-28">
          <p className="text-[11px] tracking-archive uppercase text-charcoal/70 mb-6">
            Der Prozess
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-archive uppercase text-charcoal mb-8">
            {processConfig.title}
          </h2>
          <p className="text-sm text-charcoal/70 leading-relaxed max-w-2xl">
            {processConfig.subtitle}
          </p>
        </div>

        {/* Steps in Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {processConfig.steps.map((step, i) => (
            <div
              key={i}
              className={`process-step relative py-10 md:py-0 md:px-10 lg:px-14 ${
                i < processConfig.steps.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-charcoal/10'
                  : ''
              } ${i === 0 ? 'md:pl-0' : ''} ${i === processConfig.steps.length - 1 ? 'md:pr-0' : ''}`}
            >
              {/* Large faint step number */}
              <span className="text-[120px] md:text-[150px] lg:text-[180px] leading-none text-charcoal/[0.03] absolute top-0 left-0 md:left-auto md:right-4 select-none pointer-events-none">
                {String(i + 1)}
              </span>

              <div className="relative z-10">
                <span className="text-[11px] tracking-archive uppercase text-charcoal/60 block mb-6">
                  {step.number}
                </span>
                <h3 className="text-sm tracking-archive uppercase text-charcoal mb-4" style={{ fontWeight: 400 }}>
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
