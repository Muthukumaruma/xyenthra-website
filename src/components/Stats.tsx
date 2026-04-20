import { CheckCircle2, Zap, Users, DollarSign } from 'lucide-react';

const reasons = [
  {
    icon: <CheckCircle2 size={24} />,
    title: '15+ Years of Experience',
    desc: 'Our team has spent over 15 years building software across industries. You get seasoned engineers, not juniors learning on your project.',
    bg: 'bg-green-50',
    color: 'text-green-600',
    border: 'border-green-100',
  },
  {
    icon: <Zap size={24} />,
    title: 'Startup Speed & Mindset',
    desc: 'New company means no red tape, no layers of management. You talk directly to the engineers building your product and decisions happen fast.',
    bg: 'bg-orange-50',
    color: 'text-orange-600',
    border: 'border-orange-100',
  },
  {
    icon: <Users size={24} />,
    title: 'We Understand Startups',
    desc: 'We are a startup ourselves. We know the constraints — tight budgets, fast timelines, pivots. We build accordingly.',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
    border: 'border-blue-100',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Competitive, Honest Pricing',
    desc: 'Senior-level work at rates that make sense for growing businesses. No hidden costs, no inflated agency fees.',
    bg: 'bg-purple-50',
    color: 'text-purple-600',
    border: 'border-purple-100',
  },
];

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            15+ Years of Experience. <span className="gradient-text">Fresh Start.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            New company, seasoned team — and here's why that combination is exactly what your project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className={`p-6 rounded-2xl ${r.bg} border ${r.border} hover:-translate-y-1 transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center ${r.color} mb-4 shadow-sm`}>
                {r.icon}
              </div>
              <h3 className="text-gray-900 font-bold mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
