import { Mail, MapPin, Briefcase } from 'lucide-react';

const openRoles = [
  {
    title: 'Full Stack Developer',
    type: 'Full-time / Contract',
    location: 'Remote (India)',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    desc: 'We\'re looking for an experienced full-stack developer to help build client projects and our own products.',
  },
  {
    title: 'UI/UX Designer',
    type: 'Contract / Freelance',
    location: 'Remote',
    skills: ['Figma', 'Tailwind CSS', 'Prototyping', 'User Research'],
    desc: 'Looking for a designer who can turn complex requirements into clean, intuitive interfaces.',
  },
];

export default function Careers() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-green-600 text-sm font-bold uppercase tracking-widest">Join the Team</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Work at <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Xyenthra</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          We're a small, early-stage team building cool things. We value skill, curiosity, and people who take ownership.
        </p>
      </div>

      {/* Culture */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { title: 'Remote-first', desc: 'Work from anywhere. We care about output, not where you sit.' },
          { title: 'Equity potential', desc: 'Early team members may be eligible for equity as we grow.' },
          { title: 'Real ownership', desc: 'No micromanagement. You own your work end to end.' },
        ].map((item) => (
          <div key={item.title} className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
            <h3 className="text-gray-900 font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Open roles */}
      <h2 className="text-2xl font-black text-gray-900 mb-6">Open Roles</h2>
      <div className="space-y-6 mb-12">
        {openRoles.map((role, i) => (
          <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-green-200 hover:shadow-md transition-all">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-400">
                  <span className="flex items-center gap-1"><Briefcase size={13} /> {role.type}</span>
                  <span className="flex items-center gap-1"><MapPin size={13} /> {role.location}</span>
                </div>
              </div>
              <a
                href={`mailto:hello@xyenthra.com?subject=Application: ${role.title}`}
                className="bg-gradient-to-r from-green-600 to-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
              >
                Apply Now
              </a>
            </div>
            <p className="text-gray-500 text-sm mb-4">{role.desc}</p>
            <div className="flex flex-wrap gap-2">
              {role.skills.map((s) => (
                <span key={s} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Speculative applications */}
      <div className="bg-gradient-to-br from-green-50 to-orange-50 border border-green-100 rounded-3xl p-8 text-center">
        <Mail size={32} className="text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Don't See a Fit?</h3>
        <p className="text-gray-500 text-sm mb-5">We're always open to hearing from talented people. Send us your CV and tell us how you could help.</p>
        <a
          href="mailto:hello@xyenthra.com?subject=Speculative Application"
          className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
        >
          Send a Speculative Application
        </a>
      </div>
    </div>
  );
}
