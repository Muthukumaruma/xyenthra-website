import { Link } from 'react-router-dom';
import { Briefcase, X, Code2, Globe, Mail, Phone, ArrowUp } from 'lucide-react';
import logo from '../xyenthra-logo.png';

const footerLinks: { category: string; links: { label: string; to: string; external?: boolean }[] }[] = [
  {
    category: 'Services',
    links: [
      { label: 'Custom Software', to: '/services/custom-software' },
      { label: 'Cloud & DevOps', to: '/services/cloud-devops' },
      { label: 'AI / ML Solutions', to: '/services/ai-ml' },
      { label: 'Mobile Apps', to: '/services/mobile-apps' },
      { label: 'Cybersecurity', to: '/services/cybersecurity' },
      { label: 'Data Analytics', to: '/services/data-analytics' },
    ],
  },
  {
    category: 'Products',
    links: [
      { label: 'CodeSense', to: 'https://codesense.online', external: true },
      { label: 'CodeSense App', to: 'https://app.codesense.online', external: true },
    ],
  },
  {
    category: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Blog', to: '/blog' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    category: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Cookie Policy', to: '/cookies' },
    ],
  },
];

const socials = [
  { icon: <Briefcase size={18} />, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: <X size={18} />, label: 'X / Twitter', href: 'https://x.com' },
  { icon: <Code2 size={18} />, label: 'GitHub', href: 'https://github.com' },
  { icon: <Globe size={18} />, label: 'CodeSense', href: 'https://codesense.online' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <img src={logo} alt="Xyenthra Technologies" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              New company. Veteran team. We build custom software for startups and businesses — with 15+ years of experience behind every line of code.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Mail size={14} className="text-green-400 flex-shrink-0" />
              <a href="mailto:hello@xyenthra.com" className="hover:text-green-400 transition-colors">
                hello@xyenthra.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Phone size={14} className="text-green-400 flex-shrink-0" />
              +91 98765 43210
            </div>

            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ category, links }) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-green-400 text-sm transition-colors duration-200"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-gray-500 hover:text-green-400 text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Xyenthra Technologies Private Limited. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-gray-500 hover:text-green-400 text-sm transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
