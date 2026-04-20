import { Link } from 'react-router-dom';
import { Code2, GitPullRequest, Brain, Zap, ArrowRight } from 'lucide-react';

const features = [
  { icon: <Brain size={20} />, title: 'AI-Powered Reviews', desc: 'GPT-4 analyses your code for bugs, security issues, and best practices instantly.' },
  { icon: <GitPullRequest size={20} />, title: 'PR Integration', desc: 'Connect directly to GitHub and get inline review comments on every pull request.' },
  { icon: <Zap size={20} />, title: 'Instant Feedback', desc: 'Get detailed code review reports in seconds, not hours.' },
  { icon: <Code2 size={20} />, title: 'Multi-Language', desc: 'Supports JavaScript, TypeScript, Python, Java, Go, and more.' },
];

export default function ProductsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pt-28 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-orange-600 text-sm font-bold uppercase tracking-widest">Our Product</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Introducing <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">CodeSense</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Our flagship product — an AI-powered code review platform that helps development teams ship better code, faster.
        </p>
      </div>

      {/* Main card */}
      <div className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 border border-green-200 rounded-3xl p-10 shadow-xl shadow-green-100/50 overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-100/60 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-200">
                <Code2 size={28} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900">CodeSense</h2>
                <span className="text-xs font-semibold text-green-700 bg-green-100 border border-green-200 rounded-full px-3 py-0.5">Live at codesense.online</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              CodeSense uses GPT-4 to review your code automatically — catching bugs, security vulnerabilities, and style issues before they reach production. Connect your GitHub repo and get AI reviews on every pull request.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://codesense.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-green-200">
                Try Free <ArrowRight size={16} />
              </a>
              <a href="https://app.codesense.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center border-2 border-green-600 text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-green-600 hover:text-white transition-colors">
                Open App
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-green-200 hover:shadow-md transition-all duration-200">
                <div className="w-9 h-9 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-3">
                  {f.icon}
                </div>
                <h3 className="text-gray-900 font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stack */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-12">
        <h3 className="text-gray-900 font-bold mb-4 text-lg">Built With</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'Vite', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'OpenAI GPT-4', 'Tailwind CSS'].map((tech) => (
            <span key={tech} className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-2 text-sm font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* More coming soon */}
      <div className="bg-gradient-to-br from-gray-50 to-orange-50 border border-gray-100 rounded-3xl p-8 text-center mb-12">
        <h3 className="text-xl font-black text-gray-900 mb-2">More Products in Development</h3>
        <p className="text-gray-500">We're building more developer tools. Stay tuned — or reach out if you have an idea you'd like us to build for you.</p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-500 mb-4">Want us to build a product or tool for your business?</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
          Talk to Us <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
