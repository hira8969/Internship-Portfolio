import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GSAPMarquee({ items }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.marquee-track', {
        xPercent: -50,
        repeat: -1,
        ease: 'none',
        duration: 24
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden border-y border-white/10 py-12">
      <div className="marquee-track flex w-max gap-4">
        {[...items, ...items].map((item, index) => <span key={`${item.name}-${index}`} className="glass-panel rounded-full px-6 py-3 text-sm font-black">{item.name}</span>)}
      </div>
    </div>
  );
}
