import { Link } from 'react-router-dom';
import { Code2, Cloud, Brain, Smartphone, Shield, BarChart3, ArrowRight } from 'lucide-react';

export const serviceList = [
  {
    slug: 'custom-software',
    icon: <Code2 size={32} />,
    iconBg: 'from-green-500 to-emerald-600',
    tag: 'Development',
    tagColor: 'text-green-700 bg-green-100 border-green-200',
    title: 'Custom Software Development',
    summary: 'Tailored web and backend applications built around your business — scalable, maintainable, and delivered on time.',
    desc: [
      'We design and build software that fits your exact workflows — not the other way around. Whether you need an internal tool, a customer-facing platform, or a full SaaS product, we handle everything from architecture to deployment.',
      'With 15+ years of engineering experience across startups and enterprise, we know how to make the right trade-offs: pragmatic where it matters, rigorous where it counts.',
    ],
    deliverables: ['Requirements analysis & technical scoping', 'System architecture design', 'Frontend & backend development', 'API design & integration', 'Testing, QA & deployment', 'Documentation & handover'],
    stack: ['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST / GraphQL'],
  },
  {
    slug: 'cloud-devops',
    icon: <Cloud size={32} />,
    iconBg: 'from-blue-500 to-cyan-600',
    tag: 'Infrastructure',
    tagColor: 'text-blue-700 bg-blue-100 border-blue-200',
    title: 'Cloud & DevOps',
    summary: 'Move to the cloud with confidence. We set up, migrate, and manage your infrastructure on AWS, Azure, or GCP.',
    desc: [
      'We help businesses modernise their infrastructure — whether that means migrating from on-premise servers, setting up cloud-native architectures, or improving deployment pipelines that are slowing your team down.',
      'We build with reliability, cost-efficiency, and security in mind — so you get infrastructure that scales with you without surprising bills.',
    ],
    deliverables: ['Cloud architecture design', 'AWS / Azure / GCP setup & migration', 'CI/CD pipeline setup', 'Docker & Kubernetes deployment', 'Infrastructure as Code (Terraform)', 'Monitoring & alerting'],
    stack: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    slug: 'ai-ml',
    icon: <Brain size={32} />,
    iconBg: 'from-purple-500 to-violet-600',
    tag: 'Artificial Intelligence',
    tagColor: 'text-purple-700 bg-purple-100 border-purple-200',
    title: 'AI & Machine Learning',
    summary: 'Integrate real AI into your product — not just a chatbot, but genuine intelligence that improves outcomes.',
    desc: [
      'We build AI features that actually move the needle: document analysis, intelligent search, automated decision-making, content generation, and custom LLM integrations. We\'ve already done this with CodeSense — our own AI product.',
      'We work with OpenAI, open-source models, and custom fine-tuned solutions depending on what your use case actually needs.',
    ],
    deliverables: ['Use case identification & feasibility', 'LLM integration (OpenAI, Anthropic, open-source)', 'RAG & vector search systems', 'AI workflow automation', 'Model evaluation & testing', 'Production deployment'],
    stack: ['OpenAI GPT-4', 'LangChain', 'Pinecone', 'Python', 'FastAPI', 'Hugging Face'],
  },
  {
    slug: 'mobile-apps',
    icon: <Smartphone size={32} />,
    iconBg: 'from-orange-500 to-amber-600',
    tag: 'Mobile',
    tagColor: 'text-orange-700 bg-orange-100 border-orange-200',
    title: 'Mobile App Development',
    summary: 'iOS and Android apps that users actually want to use — fast, reliable, and beautifully designed.',
    desc: [
      'We build cross-platform mobile apps using React Native and Flutter, giving you one codebase that works on both iOS and Android without sacrificing quality. For performance-critical use cases, we can also build native.',
      'From consumer apps to B2B field tools, we design for real users — with clean interfaces, offline support, and backend integration that works.',
    ],
    deliverables: ['UX wireframes & design', 'Cross-platform development (React Native / Flutter)', 'Backend API integration', 'Push notifications', 'App Store & Play Store submission', 'Post-launch support'],
    stack: ['React Native', 'Flutter', 'Expo', 'Firebase', 'Swift', 'Kotlin'],
  },
  {
    slug: 'cybersecurity',
    icon: <Shield size={32} />,
    iconBg: 'from-red-500 to-rose-600',
    tag: 'Security',
    tagColor: 'text-red-700 bg-red-100 border-red-200',
    title: 'Cybersecurity',
    summary: 'Protect your product and your customers. We identify vulnerabilities before attackers do.',
    desc: [
      'Security isn\'t an afterthought — it should be baked into your product from day one. We offer security reviews, penetration testing, and secure architecture consulting for startups and SMBs.',
      'We pay particular attention to web application security, API security, authentication, and data protection — the areas where most real-world breaches happen.',
    ],
    deliverables: ['Security architecture review', 'Penetration testing (web & API)', 'OWASP vulnerability assessment', 'Auth & session security review', 'Data encryption guidance', 'Security remediation'],
    stack: ['OWASP', 'Burp Suite', 'OWASP ZAP', 'AWS Security Hub', 'JWT / OAuth 2.0'],
  },
  {
    slug: 'data-analytics',
    icon: <BarChart3 size={32} />,
    iconBg: 'from-yellow-500 to-orange-500',
    tag: 'Analytics',
    tagColor: 'text-yellow-700 bg-yellow-100 border-yellow-200',
    title: 'Data Analytics & BI',
    summary: 'Turn your data into decisions. Custom dashboards, reports, and pipelines that give you real visibility.',
    desc: [
      'Most businesses are sitting on useful data they can\'t act on. We build the pipelines, dashboards, and reporting tools that bring it to life — from simple ops dashboards to full data warehouse setups.',
      'We work with your existing data sources and tools, and build solutions your team will actually use.',
    ],
    deliverables: ['Data audit & strategy', 'ETL / data pipeline development', 'Dashboard design & build', 'KPI definition & tracking', 'Automated reporting', 'Data warehouse setup'],
    stack: ['PostgreSQL', 'dbt', 'Metabase', 'Power BI', 'Python', 'Apache Airflow'],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-green-600 text-sm font-bold uppercase tracking-widest">What We Do</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Our <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Services</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          15+ years of engineering experience across every layer of the modern stack. We take on projects end-to-end or plug in where you need us.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceList.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:border-green-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
          >
            <div className="flex items-start justify-between">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                {service.icon}
              </div>
              <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${service.tagColor}`}>
                {service.tag}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 mb-2">{service.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{service.summary}</p>
            </div>
            <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mt-auto group-hover:gap-3 transition-all">
              Learn more <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-gradient-to-br from-green-50 to-orange-50 border border-green-100 rounded-3xl p-10 text-center">
        <h3 className="text-2xl font-black text-gray-900 mb-3">Not sure which service fits?</h3>
        <p className="text-gray-500 mb-6">Tell us what you're trying to build and we'll figure it out together. First call is free.</p>
        <Link to="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
          Talk to Us <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
