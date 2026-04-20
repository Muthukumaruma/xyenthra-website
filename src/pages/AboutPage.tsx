import { Link } from 'react-router-dom';
import { Rocket, Code2, Heart, Lightbulb, ArrowRight } from 'lucide-react';

const values = [
  { icon: <Rocket size={20} />, title: 'We Move Fast', desc: 'Startups ship. We bring that same urgency to your project.', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: <Code2 size={20} />, title: 'Strong Tech Foundation', desc: 'React, Node.js, Python, cloud — we work with modern stacks.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: <Lightbulb size={20} />, title: 'AI-Native Thinking', desc: 'We actively integrate AI where it genuinely adds value.', color: 'text-orange-600', bg: 'bg-orange-50' },
  { icon: <Heart size={20} />, title: 'We Care About Your Business', desc: 'Your success matters to us — it builds our reputation.', color: 'text-purple-600', bg: 'bg-purple-50' },
];

const milestones = [
  { year: '2024', event: 'Xyenthra Technologies founded' },
  { year: '2024', event: 'Started building CodeSense — AI Code Reviewer' },
  { year: '2025', event: 'Launched codesense.online publicly' },
  { year: '2025', event: 'First 100+ users onboarded' },
  { year: 'Next', event: 'GitHub App, team plans & more client projects' },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-green-600 text-sm font-bold uppercase tracking-widest">Who We Are</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          New Company. <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Veteran Team.</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Xyenthra Technologies is a freshly founded IT company backed by 15+ years of hands-on industry experience in software engineering, SaaS, cloud, and AI.
        </p>
      </div>

      {/* Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-5">Our Story</h2>
          <p className="text-gray-500 leading-relaxed mb-5">
            We started Xyenthra because we wanted to build things our way — fast, lean, and with real craft. Our goal is to be the kind of tech partner that startups and growing businesses actually want: experienced engineers who care, communicate well, and deliver.
          </p>
          <p className="text-gray-500 leading-relaxed mb-5">
            We're honest: we're a new company. But the people behind it aren't new to software. We've built enterprise systems, shipped SaaS products, managed cloud infrastructure at scale, and integrated AI into real production workflows.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            As proof of what we can build, we created <strong className="text-gray-800">CodeSense</strong> — a fully working AI-powered code review SaaS — from scratch and launched it publicly.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Work With Us <ArrowRight size={16} />
          </Link>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-5">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-green-200 transition-colors">
                <span className={`w-9 h-9 rounded-lg ${v.bg} ${v.color} flex items-center justify-center flex-shrink-0`}>{v.icon}</span>
                <div>
                  <div className="text-gray-900 font-semibold text-sm mb-1">{v.title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Journey So Far</h2>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-green-500 via-orange-400 to-gray-200" />
          {milestones.map((m, i) => (
            <div key={i} className="relative flex items-start gap-6 mb-8 last:mb-0">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md z-10 ${
                m.year === 'Next' ? 'bg-gradient-to-br from-orange-400 to-amber-500' : 'bg-gradient-to-br from-green-500 to-emerald-600'
              }`}>
                {m.year === 'Next' ? '→' : m.year.slice(2)}
              </div>
              <div className="pt-2">
                <span className={`text-xs font-bold tracking-wider ${m.year === 'Next' ? 'text-orange-500' : 'text-green-600'}`}>{m.year}</span>
                <p className="text-gray-700 font-medium mt-1">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who we help */}
      <div className="bg-gradient-to-br from-green-50 to-orange-50 border border-green-100 rounded-3xl p-8">
        <h2 className="text-2xl font-black text-gray-900 mb-2">We Especially Love Working With Startups</h2>
        <p className="text-gray-500 mb-6">We are a startup ourselves. We know the constraints.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {[
            'Startups who need an MVP built right and fast',
            'Founders with a vision but no in-house dev team',
            'Small businesses going digital for the first time',
            'Companies needing extra senior engineering capacity',
            'Anyone tired of agencies that over-promise',
            'Teams who want direct, honest communication',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-600 bg-white rounded-xl px-4 py-3 border border-green-100">
              <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
              {item}
            </div>
          ))}
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
          Start a Conversation <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
