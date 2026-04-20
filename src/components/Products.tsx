import { ArrowRight, Code2, GitPullRequest, Brain, Zap } from 'lucide-react';

const features = [
  { icon: <Brain size={20} />, title: 'AI-Powered Reviews', desc: 'GPT-4 analyses your code for bugs, security issues, and best practices instantly.' },
  { icon: <GitPullRequest size={20} />, title: 'PR Integration', desc: 'Connect directly to GitHub and get inline review comments on every pull request.' },
  { icon: <Zap size={20} />, title: 'Instant Feedback', desc: 'Get detailed code review reports in seconds, not hours.' },
  { icon: <Code2 size={20} />, title: 'Multi-Language', desc: 'Supports JavaScript, TypeScript, Python, Java, Go, and more.' },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-4">
            <span className="text-orange-700 text-sm font-medium">Our Product</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Introducing <span className="gradient-text">CodeSense</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our flagship product — an AI-powered code review platform that helps development teams ship better code, faster.
          </p>
        </div>

        {/* Main product card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 border border-green-200 rounded-3xl p-10 shadow-xl shadow-green-100/50 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-100/60 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-200">
                    <Code2 size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900">CodeSense</h3>
                    <span className="text-xs font-semibold text-green-700 bg-green-100 border border-green-200 rounded-full px-3 py-0.5">Live at codesense.online</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  CodeSense uses GPT-4 to review your code automatically — catching bugs, security vulnerabilities, and style issues before they reach production. Connect your GitHub repo and get AI reviews on every pull request.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://codesense.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 justify-center"
                  >
                    Try CodeSense Free <ArrowRight size={16} />
                  </a>
                  <a
                    href="https://app.codesense.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2 justify-center"
                  >
                    Open App
                  </a>
                </div>
              </div>

              {/* Right — features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-green-200 hover:shadow-md transition-all duration-200">
                    <div className="w-9 h-9 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-3">
                      {f.icon}
                    </div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1">{f.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* More coming soon */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              More products are in development. <span className="text-green-600 font-medium">Stay tuned.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
