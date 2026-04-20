import { ArrowRight, Zap, Users, LineChart, Lock } from 'lucide-react';

const products = [
  {
    badge: 'SaaS Platform',
    badgeColor: 'text-green-400 bg-green-400/10 border-green-400/30',
    icon: <Zap size={32} />,
    iconBg: 'from-green-500 to-emerald-600',
    title: 'XyFlow',
    subtitle: 'Workflow Automation Platform',
    description:
      'An intelligent workflow orchestration platform that automates repetitive business processes. Connect your tools, define rules, and let XyFlow handle the rest — saving hundreds of hours every month.',
    features: ['Visual Workflow Builder', 'AI-Powered Triggers', '200+ Integrations', 'Real-time Analytics'],
    accent: 'border-green-500/40 hover:border-green-500/70',
    glow: 'hover:shadow-green-500/15',
  },
  {
    badge: 'HR Tech',
    badgeColor: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
    icon: <Users size={32} />,
    iconBg: 'from-orange-500 to-amber-600',
    title: 'XyHR',
    subtitle: 'Smart HR Management Suite',
    description:
      'A comprehensive human resource management system built for modern organizations. Streamline recruitment, payroll, performance reviews, and employee engagement in one unified dashboard.',
    features: ['AI Resume Screening', 'Payroll Automation', 'Performance Tracking', 'Employee Self-Service'],
    accent: 'border-orange-500/40 hover:border-orange-500/70',
    glow: 'hover:shadow-orange-500/15',
  },
  {
    badge: 'Analytics',
    badgeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/30',
    icon: <LineChart size={32} />,
    iconBg: 'from-blue-500 to-cyan-600',
    title: 'XyInsight',
    subtitle: 'Business Intelligence Dashboard',
    description:
      'Turn your business data into actionable intelligence. XyInsight connects to any data source and delivers real-time dashboards, predictive forecasts, and executive reporting with zero-code setup.',
    features: ['Real-time Dashboards', 'Predictive Analytics', 'Multi-source Connectors', 'Custom Reports'],
    accent: 'border-blue-500/40 hover:border-blue-500/70',
    glow: 'hover:shadow-blue-500/15',
  },
  {
    badge: 'Security',
    badgeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/30',
    icon: <Lock size={32} />,
    iconBg: 'from-purple-500 to-violet-600',
    title: 'XyGuard',
    subtitle: 'Enterprise Security Platform',
    description:
      'A proactive cybersecurity platform that monitors, detects, and responds to threats in real time. XyGuard gives your team full visibility across your entire IT estate with zero-trust architecture.',
    features: ['Threat Detection', 'Zero-Trust Access', 'Compliance Reports', '24/7 SOC Monitoring'],
    accent: 'border-purple-500/40 hover:border-purple-500/70',
    glow: 'hover:shadow-purple-500/15',
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-400 text-sm font-medium">Built by Xyenthra</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proprietary software products crafted to solve real business challenges — ready to deploy, built to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className={`relative bg-white/5 border ${product.accent} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${product.glow} group`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.iconBg} flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              <h3 className="text-3xl font-black text-white mb-1">{product.title}</h3>
              <p className="text-gray-400 text-sm font-medium mb-4">{product.subtitle}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{product.description}</p>

              <ul className="grid grid-cols-2 gap-2 mb-8">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300 transition-colors group/btn">
                Learn more <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
