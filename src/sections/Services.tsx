import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-subtitle', {
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

      gsap.from('.service-col', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service-col',
          start: 'top 85%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Subtitle */}
        <p className="services-subtitle text-[11px] tracking-archive uppercase text-charcoal/70 mb-20 md:mb-28">
          {servicesConfig.subtitle}
        </p>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {servicesConfig.services.map((service, i) => (
            <div
              key={i}
              className={`service-col py-10 md:py-0 md:px-10 lg:px-14 ${
                i < servicesConfig.services.length - 1
                  ? 'border-b md:border-b-0 md:border-r border-charcoal/10'
                  : ''
              } ${i === 0 ? 'md:pl-0' : ''} ${i === servicesConfig.services.length - 1 ? 'md:pr-0' : ''}`}
            >
              <span className="text-5xl lg:text-6xl text-charcoal/[0.06] block mb-8">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-sm tracking-archive uppercase text-charcoal mb-6" style={{ fontWeight: 400 }}>
                {service.title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
