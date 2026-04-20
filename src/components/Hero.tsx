import { ArrowRight, Sparkles, Code2, Globe, Shield } from 'lucide-react';
import logo from '../xyenthra-logo.png';

const floatingCards = [
  { icon: <Code2 size={20} />, label: 'Custom Software', color: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', top: '15%', left: '5%' },
  { icon: <Globe size={20} />, label: 'Web & Mobile Apps', color: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', top: '60%', right: '5%' },
  { icon: <Shield size={20} />, label: 'Cloud & DevOps', color: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', bottom: '20%', left: '5%' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated background image — Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{ backgroundImage: 'url(/web-bg.png)' }}
        />
      </div>
      {/* Overlay to keep text readable */}
      <div className="absolute inset-0 bg-white/75" />
      {/* Soft colour tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-transparent to-orange-50/40" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-green-600" />
            <span className="text-green-700 text-sm font-medium">15+ Years of Industry Experience</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
            Senior Engineers.
            <br />
            <span className="gradient-text">Startup Speed.</span>
            <br />
            <span className="text-gray-700 text-4xl md:text-5xl font-bold">Real Results.</span>
          </h1>

          <p className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed">
            Xyenthra is a new company — but our team brings 15+ years of industry experience. We partner with startups and businesses to build custom software, web apps, and cloud solutions that actually ship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary flex items-center gap-2 justify-center">
              Start a Project <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-outline">
              What We Do
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            {[
              '✓ 15+ years experience',
              '✓ Startup-friendly pricing',
              '✓ Talk directly to the engineers',
            ].map((item) => (
              <span key={item} className="text-sm text-gray-500 font-medium">{item}</span>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="flex-1 relative flex items-center justify-center min-h-[400px] w-full">
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-200/60 to-orange-200/40 blur-2xl" />
            <div className="absolute inset-4 rounded-full bg-white border border-green-200 shadow-2xl shadow-green-200/50 flex items-center justify-center animate-pulse-glow">
              <div className="text-center px-6">
                <img src={logo} alt="Xyenthra Technologies" className="w-40 h-auto object-contain drop-shadow-xl" />
              </div>
            </div>

            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translate(160px) rotate(-${deg}deg)`,
                  background: i % 2 === 0 ? '#16a34a' : '#f97316',
                  boxShadow: i % 2 === 0 ? '0 0 8px #16a34a' : '0 0 8px #f97316',
                  marginTop: '-6px',
                  marginLeft: '-6px',
                }}
              />
            ))}
          </div>

          {floatingCards.map((card, i) => (
            <div
              key={i}
              className={`absolute hidden lg:flex items-center gap-2 ${card.color} border ${card.border} rounded-xl px-4 py-3 text-sm font-medium ${card.text} shadow-md`}
              style={{ top: card.top, left: card.left, right: card.right, bottom: card.bottom }}
            >
              {card.icon}
              {card.label}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-400 text-xs">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green-500 to-transparent" />
      </div>
    </section>
  );
}
