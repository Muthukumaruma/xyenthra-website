import { ArrowRight, Sparkles, Code2, Globe, Shield } from 'lucide-react';

const floatingCards = [
  { icon: <Code2 size={20} />, label: 'Custom Software', color: 'from-green-500/20 to-emerald-600/20', border: 'border-green-500/30', top: '15%', left: '5%' },
  { icon: <Globe size={20} />, label: 'Cloud Solutions', color: 'from-orange-500/20 to-amber-600/20', border: 'border-orange-500/30', top: '60%', right: '5%' },
  { icon: <Shield size={20} />, label: 'Cybersecurity', color: 'from-blue-500/20 to-cyan-600/20', border: 'border-blue-500/30', bottom: '20%', left: '5%' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d1f0d] to-black" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-green-400" />
            <span className="text-green-400 text-sm font-medium">Innovating Since 2020</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Empowering <br />
            <span className="gradient-text">Digital Growth</span>
            <br />
            <span className="text-gray-300 text-4xl md:text-5xl font-bold">Through Technology</span>
          </h1>

          <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
            Xyenthra Technologies delivers cutting-edge IT solutions — from custom software
            and cloud infrastructure to AI-powered products that transform how businesses operate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#services" className="btn-primary flex items-center gap-2 justify-center">
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Talk to Us
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl font-black gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="flex-1 relative flex items-center justify-center min-h-[400px] w-full">
          {/* Central orb */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/30 to-orange-500/20 blur-2xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-600/40 to-emerald-700/30 border border-green-500/30 flex items-center justify-center animate-pulse-glow">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-400 to-orange-500 flex items-center justify-center shadow-2xl shadow-green-500/40">
                  <span className="text-white font-black text-5xl">X</span>
                </div>
                <span className="text-white font-bold text-sm tracking-widest uppercase">Xyenthra</span>
                <div className="text-green-400 text-xs mt-1">Technologies</div>
              </div>
            </div>

            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translate(160px) rotate(-${deg}deg)`,
                  background: i % 2 === 0 ? '#22c55e' : '#f97316',
                  boxShadow: i % 2 === 0 ? '0 0 8px #22c55e' : '0 0 8px #f97316',
                  marginTop: '-6px',
                  marginLeft: '-6px',
                }}
              />
            ))}
          </div>

          {/* Floating info cards */}
          {floatingCards.map((card, i) => (
            <div
              key={i}
              className={`absolute hidden lg:flex items-center gap-2 bg-gradient-to-r ${card.color} border ${card.border} backdrop-blur-sm rounded-xl px-4 py-3 text-sm font-medium text-white shadow-lg`}
              style={{
                top: card.top,
                left: card.left,
                right: card.right,
                bottom: card.bottom,
              }}
            >
              <span className="text-green-400">{card.icon}</span>
              {card.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
      </div>
    </section>
  );
}
