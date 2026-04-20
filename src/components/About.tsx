import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';

const values = [
  { icon: <Target size={20} />, title: 'Innovation First', desc: 'We pursue cutting-edge solutions that push boundaries and redefine what is possible in technology.' },
  { icon: <Eye size={20} />, title: 'Transparency', desc: 'Open communication and honest partnerships form the foundation of everything we build together.' },
  { icon: <Heart size={20} />, title: 'Client Success', desc: "Your success is our metric. We measure ourselves by the outcomes we create for your business." },
  { icon: <CheckCircle2 size={20} />, title: 'Quality Delivery', desc: 'Rigorous standards, meticulous testing, and attention to detail ensure exceptional output every time.' },
];

const milestones = [
  { year: '2020', event: 'Founded in Chennai, India' },
  { year: '2021', event: 'First 20 enterprise clients across South Asia' },
  { year: '2022', event: 'Launched XyFlow & XyHR product suite' },
  { year: '2023', event: 'Expanded to 3 international markets' },
  { year: '2024', event: 'ISO 27001 certified & 50+ client milestone' },
  { year: '2025', event: 'AI division launch and Series A funding' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#080d08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-green-400 text-sm font-medium">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Driven by <span className="gradient-text">Purpose</span>,<br />
              Defined by <span className="gradient-text">Results</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Xyenthra Technologies Private Limited is a full-service IT company headquartered in India,
              delivering world-class technology solutions to enterprises, startups, and government organizations worldwide.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our multidisciplinary team of engineers, designers, and strategists brings deep expertise across software
              development, cloud computing, AI/ML, and digital transformation — unified by a single mission: making
              technology work powerfully for your business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">{v.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{v.title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Our Journey</h3>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-orange-500 to-transparent" />
              {milestones.map((m, i) => (
                <div key={i} className="relative flex items-start gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-green-500/30 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="pt-2">
                    <span className="text-green-400 text-xs font-bold tracking-wider">{m.year}</span>
                    <p className="text-gray-300 font-medium mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
