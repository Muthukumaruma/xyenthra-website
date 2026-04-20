import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CTO, FinEdge Solutions',
    company: 'FinEdge Solutions',
    avatar: 'RK',
    color: 'from-green-500 to-emerald-600',
    rating: 5,
    text: 'Xyenthra delivered our core banking platform in record time without compromising on quality. Their team treated the project as their own — exceptional ownership and technical depth.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'VP Engineering, LogiChain Inc.',
    company: 'LogiChain Inc.',
    avatar: 'SM',
    color: 'from-orange-500 to-amber-600',
    rating: 5,
    text: 'The cloud migration Xyenthra executed cut our infrastructure costs by 40% while improving system performance by 3x. The team was knowledgeable, communicative, and delivered on every promise.',
  },
  {
    name: 'Priya Nair',
    role: 'Director of Technology, MedCore',
    company: 'MedCore',
    avatar: 'PN',
    color: 'from-blue-500 to-cyan-600',
    rating: 5,
    text: 'XyHR transformed how we manage 2,000+ employees across 5 offices. The implementation was seamless and the support has been outstanding. Truly a technology partner, not just a vendor.',
  },
  {
    name: 'Ahmed Al-Rashid',
    role: 'CEO, RetailPulse',
    company: 'RetailPulse',
    avatar: 'AA',
    color: 'from-purple-500 to-violet-600',
    rating: 5,
    text: "Their AI-powered analytics solution gave us real-time insights that increased our seasonal revenue by 28%. Xyenthra's data team understood our domain deeply and delivered measurable ROI.",
  },
  {
    name: 'Jennifer Wong',
    role: 'Head of Product, StartupLab',
    company: 'StartupLab',
    avatar: 'JW',
    color: 'from-pink-500 to-rose-600',
    rating: 5,
    text: 'As a startup, we needed a partner who could move fast and build right. Xyenthra delivered our MVP in 6 weeks and has been scaling it with us ever since. They feel like an extension of our team.',
  },
  {
    name: 'Suresh Varma',
    role: 'IT Manager, GovTech India',
    company: 'GovTech India',
    avatar: 'SV',
    color: 'from-teal-500 to-green-600',
    rating: 5,
    text: 'Xyenthra implemented a citizen portal serving 5 million users with 99.99% uptime. Their security practices and compliance expertise made them the obvious choice for a government-grade solution.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#080d08] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-400 text-sm font-medium">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Trusted by <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from real partnerships — hear what our clients say about working with Xyenthra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-glass p-6 flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-1">
                {Array(t.rating).fill(0).map((_, s) => (
                  <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote size={20} className="text-green-500/40 mb-2" />
                <p className="text-gray-300 text-sm leading-relaxed italic">{t.text}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
