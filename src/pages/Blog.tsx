import { ArrowRight, Rss } from 'lucide-react';

const comingSoonPosts = [
  { tag: 'Engineering', title: 'Why We Built CodeSense — and What We Learned', teaser: 'Building a full AI SaaS product from scratch taught us a lot. Here\'s what worked and what didn\'t.' },
  { tag: 'Startup', title: 'How to Choose a Tech Partner as a Non-Technical Founder', teaser: 'The questions you should ask before handing over your product to any dev team.' },
  { tag: 'AI', title: 'Using GPT-4 for Real Code Review — Beyond the Hype', teaser: 'What AI code review is actually good at, and where it still falls short.' },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-green-600 text-sm font-bold uppercase tracking-widest">Blog</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Insights from <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Xyenthra</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Thoughts on software development, startups, AI, and building products. Written by our team.
        </p>
      </div>

      {/* Coming soon banner */}
      <div className="bg-gradient-to-br from-green-50 to-orange-50 border border-green-100 rounded-3xl p-10 text-center mb-12">
        <Rss size={40} className="text-green-600 mx-auto mb-4" />
        <h2 className="text-2xl font-black text-gray-900 mb-3">Blog Launching Soon</h2>
        <p className="text-gray-500 mb-2">
          We're putting together our first articles. In the meantime, here's what we're planning to write about:
        </p>
      </div>

      {/* Upcoming posts */}
      <div className="space-y-5">
        {comingSoonPosts.map((post, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm opacity-75">
            <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
              {post.tag} — Coming Soon
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{post.title}</h3>
            <p className="text-gray-500 text-sm">{post.teaser}</p>
          </div>
        ))}
      </div>

      {/* Subscribe nudge */}
      <div className="mt-12 text-center border-t border-gray-100 pt-10">
        <p className="text-gray-500 mb-4">Want to know when we publish? Reach out and we'll let you know.</p>
        <a
          href="mailto:hello@xyenthra.com?subject=Notify me when the blog launches"
          className="inline-flex items-center gap-2 text-green-600 font-semibold hover:underline"
        >
          Notify me <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
