import { Rocket, Code2, Heart, Lightbulb } from 'lucide-react';

const values = [
  { icon: <Rocket size={20} />, title: 'We Move Fast', desc: 'Startups ship. We bring that same urgency to your project.', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: <Code2 size={20} />, title: 'Strong Tech Foundation', desc: 'React, Node.js, Python, cloud — we work with modern stacks.', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: <Lightbulb size={20} />, title: 'AI-Native Thinking', desc: 'We actively integrate AI where it genuinely adds value.', color: 'text-orange-600', bg: 'bg-orange-50' },
  { icon: <Heart size={20} />, title: 'We Care About Your Business', desc: 'Your success matters to us — it builds our reputation.', color: 'text-purple-600', bg: 'bg-purple-50' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-6">
              <span className="text-green-700 text-sm font-medium">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              New Company. <br />
              <span className="gradient-text">Veteran Team.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Xyenthra Technologies is a freshly founded IT company — but the people behind it bring over <strong className="text-gray-800">15 years of hands-on industry experience</strong> across enterprise software, SaaS products, cloud infrastructure, and AI.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5">
              We started Xyenthra because we wanted to build things our way — fast, lean, and with real craft. Our goal is to be the kind of tech partner that startups and growing businesses actually want: experienced engineers who care, communicate well, and deliver.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We also built our own product — <strong className="text-gray-800">CodeSense</strong>, an AI-powered code review SaaS — as proof that we can take an idea from zero to a live product.
            </p>

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

          {/* Right — honest pitch */}
          <div className="flex flex-col gap-6">
            {/* Proof of work card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <p className="text-xs text-green-600 font-bold uppercase tracking-widest mb-3">Proof We Can Ship</p>
              <h3 className="text-2xl font-black text-gray-900 mb-2">We built CodeSense</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                CodeSense is our own AI-powered code review SaaS — live at <a href="https://codesense.online" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium underline">codesense.online</a>. We designed it, built it, and launched it ourselves. It uses GPT-4 to review pull requests automatically.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                If we can build and ship a full SaaS product on our own, we can certainly build yours.
              </p>
            </div>

            {/* What we're looking for */}
            <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 border border-green-100">
              <p className="text-xs text-orange-600 font-bold uppercase tracking-widest mb-3">Who We Help</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Especially Love Working With Startups</h3>
              <ul className="space-y-3">
                {[
                  'Startups who need an MVP built right and fast',
                  'Founders with a vision but no in-house dev team',
                  'Small businesses going digital for the first time',
                  'Companies needing extra senior engineering capacity',
                  'Anyone tired of agencies that over-promise and under-deliver',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary mt-6 inline-block text-sm py-2.5 px-6">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
