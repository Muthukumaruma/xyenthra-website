import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const techStack = [
  {
    category: 'Frontend',
    color: 'bg-blue-50', border: 'border-blue-100', accent: 'text-blue-700', tagBg: 'bg-blue-100 text-blue-700',
    items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    color: 'bg-green-50', border: 'border-green-100', accent: 'text-green-700', tagBg: 'bg-green-100 text-green-700',
    items: ['Node.js', 'Python', 'Java', 'Go', 'FastAPI', 'Express', 'GraphQL'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'bg-orange-50', border: 'border-orange-100', accent: 'text-orange-700', tagBg: 'bg-orange-100 text-orange-700',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    color: 'bg-purple-50', border: 'border-purple-100', accent: 'text-purple-700', tagBg: 'bg-purple-100 text-purple-700',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'Supabase'],
  },
  {
    category: 'AI & ML',
    color: 'bg-pink-50', border: 'border-pink-100', accent: 'text-pink-700', tagBg: 'bg-pink-100 text-pink-700',
    items: ['OpenAI GPT-4', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Pinecone'],
  },
  {
    category: 'Mobile',
    color: 'bg-yellow-50', border: 'border-yellow-100', accent: 'text-yellow-700', tagBg: 'bg-yellow-100 text-yellow-700',
    items: ['React Native', 'Flutter', 'Expo', 'Firebase', 'Swift', 'Kotlin'],
  },
];

export default function TechnologiesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Tech Stack</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Technologies We <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Master</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          15+ years of hands-on experience across the full modern stack. We pick the right tool for the job — not the trendy one.
        </p>
      </div>

      {/* Stack grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {techStack.map((stack, i) => (
          <div key={i} className={`${stack.color} border ${stack.border} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg`}>
            <h3 className={`text-lg font-bold mb-4 ${stack.accent}`}>{stack.category}</h3>
            <div className="flex flex-wrap gap-2">
              {stack.items.map((tech) => (
                <span key={tech} className={`${stack.tagBg} text-sm font-medium rounded-lg px-3 py-1.5`}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CodeSense proof */}
      <div className="bg-gradient-to-br from-green-50 to-orange-50 border border-green-100 rounded-3xl p-8 mb-12">
        <p className="text-xs text-green-600 font-bold uppercase tracking-widest mb-2">Proven in Production</p>
        <h2 className="text-2xl font-black text-gray-900 mb-3">We Don't Just List Technologies — We Ship Them</h2>
        <p className="text-gray-500 leading-relaxed mb-4">
          We built <strong className="text-gray-800">CodeSense</strong> — a live AI SaaS product — using React, Vite, TypeScript, Node.js, Express, MongoDB, and OpenAI GPT-4. Every technology we recommend is one we've used in production.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://codesense.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm">
            See CodeSense Live <ArrowRight size={14} />
          </a>
          <Link to="/case-studies" className="inline-flex items-center gap-2 border border-green-300 text-green-700 font-semibold px-6 py-2.5 rounded-xl hover:bg-green-50 transition-colors text-sm">
            View Case Study
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-black text-gray-900 mb-3">Have a Tech Stack in Mind?</h3>
        <p className="text-gray-500 mb-6">Tell us what you're building and we'll advise on the right stack for your use case and budget.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
          Get a Free Consultation <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
