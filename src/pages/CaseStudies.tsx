import { ArrowRight, Code2 } from 'lucide-react';

export default function CaseStudies() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
      <div className="text-center mb-16">
        <span className="text-green-600 text-sm font-bold uppercase tracking-widest">Case Studies</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Our <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Work</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          We're early-stage, so our case studies are just beginning. Here's what we've built so far.
        </p>
      </div>

      {/* CodeSense case study */}
      <div className="bg-white border border-green-200 rounded-3xl p-8 shadow-sm mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <Code2 size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900">CodeSense</h2>
            <span className="text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full">Our Own Product</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { label: 'Type', value: 'AI SaaS Product' },
            { label: 'Stack', value: 'React, Node.js, MongoDB, OpenAI GPT-4' },
            { label: 'Status', value: 'Live at codesense.online' },
          ].map((item) => (
            <div key={item.label} className="bg-gray-50 rounded-xl p-4">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{item.label}</div>
              <div className="text-gray-800 font-semibold text-sm">{item.value}</div>
            </div>
          ))}
        </div>

        <h3 className="font-bold text-gray-900 mb-2">What We Built</h3>
        <p className="text-gray-500 leading-relaxed mb-4">
          CodeSense is a full-stack AI-powered code review platform. It integrates with GitHub, analyses pull requests using GPT-4, and delivers detailed inline code review comments automatically — catching bugs, security issues, and style violations before a human reviewer even looks.
        </p>

        <h3 className="font-bold text-gray-900 mb-2">What It Demonstrates</h3>
        <ul className="space-y-2 mb-6">
          {[
            'End-to-end product development — from idea to live SaaS',
            'OpenAI GPT-4 API integration for code analysis',
            'GitHub OAuth and webhook integration',
            'Subscription and billing architecture',
            'Production deployment and ongoing maintenance',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="https://codesense.online"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          See it live <ArrowRight size={16} />
        </a>
      </div>

      {/* CTA for client projects */}
      <div className="bg-gradient-to-br from-green-50 to-orange-50 border border-green-100 rounded-3xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Your Project Could Be Next</h3>
        <p className="text-gray-500 mb-5">
          We're actively taking on client projects. Let's build something together and make it our next case study.
        </p>
        <a href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
          Start a Project <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
