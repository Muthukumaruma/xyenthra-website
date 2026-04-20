import { ArrowRight, MessageSquare } from 'lucide-react';

const process = [
  { step: '01', title: 'Tell us your idea', desc: 'Share your project brief — what you need, your timeline, and budget. No forms, just a conversation.' },
  { step: '02', title: 'We scope it together', desc: "We'll map out the work, suggest the right tech stack, and give you a clear proposal with no hidden costs." },
  { step: '03', title: 'We build it', desc: 'You get regular updates, working demos, and direct access to the team throughout the project.' },
  { step: '04', title: 'You own it completely', desc: 'Full source code, documentation, and handover. No vendor lock-in, ever.' },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-2 mb-4">
            <span className="text-green-700 text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Simple. Transparent. <span className="gradient-text">No Surprises.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Here's exactly how we work with clients from first contact to final delivery.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {process.map((p, i) => (
            <div key={i} className="relative">
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-green-300 to-transparent z-0 -translate-y-px" />
              )}
              <div className="relative bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-black gradient-text mb-4">{p.step}</div>
                <h3 className="text-gray-900 font-bold mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Be our first client CTA */}
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-6">
              <MessageSquare size={14} className="text-white" />
              <span className="text-white text-sm font-medium">We're taking on new clients</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              15+ Years of Experience.<br />Working for You.
            </h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Xyenthra is a new company — but our team brings over 15 years of real-world software engineering experience. You get senior-level thinking at startup-friendly rates. Our early clients get the best of both worlds.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors shadow-lg">
              Start a Conversation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
