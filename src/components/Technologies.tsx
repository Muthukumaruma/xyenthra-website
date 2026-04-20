const techStack = [
  {
    category: 'Frontend',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    accent: 'text-blue-400',
    items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/30',
    accent: 'text-green-400',
    items: ['Node.js', 'Python', 'Java', 'Go', 'FastAPI', 'GraphQL'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-orange-500/20 to-amber-500/20',
    border: 'border-orange-500/30',
    accent: 'text-orange-400',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'Databases',
    color: 'from-purple-500/20 to-violet-500/20',
    border: 'border-purple-500/30',
    accent: 'text-purple-400',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'Cassandra'],
  },
  {
    category: 'AI & ML',
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/30',
    accent: 'text-pink-400',
    items: ['OpenAI', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'MLflow'],
  },
  {
    category: 'Mobile',
    color: 'from-yellow-500/20 to-orange-500/20',
    border: 'border-yellow-500/30',
    accent: 'text-yellow-400',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase'],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-400 text-sm font-medium">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We stay at the forefront of technology, working with the best tools to deliver future-proof solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${stack.color} border ${stack.border} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl`}
            >
              <h3 className={`text-lg font-bold mb-4 ${stack.accent}`}>{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/10 border border-white/10 text-gray-200 text-sm font-medium rounded-lg px-3 py-1.5 hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">Certified & Compliant</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['ISO 27001', 'SOC 2 Type II', 'AWS Partner', 'Google Cloud Partner', 'Microsoft Gold Partner', 'NASSCOM Member'].map((cert) => (
              <span
                key={cert}
                className="bg-white/5 border border-white/10 text-gray-300 rounded-xl px-5 py-2.5 text-sm font-medium hover:border-green-500/40 transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
