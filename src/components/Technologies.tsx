const techStack = [
  {
    category: 'Frontend',
    color: 'bg-blue-50',
    border: 'border-blue-100',
    accent: 'text-blue-700',
    tagBg: 'bg-blue-100 text-blue-700',
    items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    color: 'bg-green-50',
    border: 'border-green-100',
    accent: 'text-green-700',
    tagBg: 'bg-green-100 text-green-700',
    items: ['Node.js', 'Python', 'Java', 'Go', 'FastAPI', 'GraphQL'],
  },
  {
    category: 'Cloud & DevOps',
    color: 'bg-orange-50',
    border: 'border-orange-100',
    accent: 'text-orange-700',
    tagBg: 'bg-orange-100 text-orange-700',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    category: 'Databases',
    color: 'bg-purple-50',
    border: 'border-purple-100',
    accent: 'text-purple-700',
    tagBg: 'bg-purple-100 text-purple-700',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch', 'Cassandra'],
  },
  {
    category: 'AI & ML',
    color: 'bg-pink-50',
    border: 'border-pink-100',
    accent: 'text-pink-700',
    tagBg: 'bg-pink-100 text-pink-700',
    items: ['OpenAI', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face', 'MLflow'],
  },
  {
    category: 'Mobile',
    color: 'bg-yellow-50',
    border: 'border-yellow-100',
    accent: 'text-yellow-700',
    tagBg: 'bg-yellow-100 text-yellow-700',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase'],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-700 text-sm font-medium">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We stay at the forefront of technology, working with the best tools to deliver future-proof solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((stack, i) => (
            <div
              key={i}
              className={`${stack.color} border ${stack.border} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg`}
            >
              <h3 className={`text-lg font-bold mb-4 ${stack.accent}`}>{stack.category}</h3>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((tech) => (
                  <span
                    key={tech}
                    className={`${stack.tagBg} text-sm font-medium rounded-lg px-3 py-1.5`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stack used in CodeSense */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-green-50 to-orange-50 border border-green-100 text-center">
          <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest">Powering CodeSense</p>
          <h3 className="text-gray-900 font-bold text-xl mb-6">Built with the best stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Vite', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'OpenAI GPT-4', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="bg-white border border-green-200 text-green-700 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
