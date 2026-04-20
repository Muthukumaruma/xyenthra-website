import { Code2, Cloud, Brain, Smartphone, Shield, BarChart3, Globe, Database } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={28} />,
    title: 'Custom Software Development',
    description: 'Tailored enterprise-grade applications built with modern architectures. From MVPs to full-scale platforms, we engineer solutions that scale with your business.',
    color: 'from-green-500 to-emerald-600',
    tags: ['React', 'Node.js', 'Python', 'Microservices'],
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud Infrastructure & DevOps',
    description: 'Migrate, manage, and optimize your cloud infrastructure on AWS, Azure, or GCP. CI/CD pipelines, Kubernetes orchestration, and 99.9% uptime SLAs.',
    color: 'from-blue-500 to-cyan-600',
    tags: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
  },
  {
    icon: <Brain size={28} />,
    title: 'AI & Machine Learning',
    description: 'Integrate intelligent automation into your workflows. Predictive analytics, NLP, computer vision, and custom LLM-powered solutions for real business impact.',
    color: 'from-purple-500 to-violet-600',
    tags: ['OpenAI', 'TensorFlow', 'LangChain', 'MLOps'],
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile apps for iOS and Android. Pixel-perfect UIs, offline capabilities, and seamless backend integration.',
    color: 'from-orange-500 to-amber-600',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    icon: <Shield size={28} />,
    title: 'Cybersecurity Solutions',
    description: 'Protect your business with comprehensive security audits, penetration testing, compliance frameworks (ISO 27001, SOC 2), and 24/7 threat monitoring.',
    color: 'from-red-500 to-rose-600',
    tags: ['Pen Testing', 'ISO 27001', 'SOC 2', 'VAPT'],
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Data Analytics & BI',
    description: 'Transform raw data into strategic decisions. Custom dashboards, real-time reporting, ETL pipelines, and predictive analytics powered by modern data stacks.',
    color: 'from-yellow-500 to-orange-500',
    tags: ['Power BI', 'Tableau', 'Spark', 'dbt'],
  },
  {
    icon: <Globe size={28} />,
    title: 'Web Design & Development',
    description: 'High-performance, SEO-optimized websites and portals that convert. From corporate sites to complex e-commerce platforms with exceptional UX.',
    color: 'from-teal-500 to-green-600',
    tags: ['Next.js', 'Tailwind', 'Figma', 'SEO'],
  },
  {
    icon: <Database size={28} />,
    title: 'Enterprise IT Consulting',
    description: 'Strategic technology advisory for digital transformation. Architecture reviews, technology roadmaps, vendor selection, and IT governance frameworks.',
    color: 'from-indigo-500 to-blue-600',
    tags: ['Architecture', 'Strategy', 'Roadmap', 'Governance'],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#080d08]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-green-400 text-sm font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end technology services designed to accelerate your business — from ideation to deployment and beyond.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-glass p-6 group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white/5 border border-white/10 text-gray-400 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
