import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', sublabel: 'Across 12 industries' },
  { value: 50, suffix: '+', label: 'Enterprise Clients', sublabel: 'Globally served' },
  { value: 99, suffix: '%', label: 'Client Satisfaction', sublabel: 'Retention rate' },
  { value: 5, suffix: '+', label: 'Years of Excellence', sublabel: 'In IT innovation' },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function StatItem({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, active);
  return (
    <div className="text-center group">
      <div className="text-5xl md:text-6xl font-black gradient-text mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
      <div className="text-gray-500 text-sm">{stat.sublabel}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-black to-orange-900/10" />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
