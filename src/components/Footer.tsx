import { Linkedin, Twitter, Github, Instagram, Mail, Phone, ArrowUp } from 'lucide-react';

const footerLinks = {
  Services: [
    'Custom Software',
    'Cloud & DevOps',
    'AI / ML Solutions',
    'Mobile Apps',
    'Cybersecurity',
    'Data Analytics',
  ],
  Products: ['XyFlow', 'XyHR', 'XyInsight', 'XyGuard'],
  Company: ['About Us', 'Careers', 'Blog', 'Case Studies', 'Partners', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR Compliance'],
};

const socials = [
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
  { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
  { icon: <Github size={18} />, label: 'GitHub', href: '#' },
  { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#050a05] border-t border-white/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-orange-500 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-green-500/30">
                X
              </div>
              <div>
                <span className="text-white font-bold text-lg block">Xyenthra</span>
                <span className="text-green-400 text-xs tracking-widest uppercase">Technologies Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering businesses through innovative technology solutions. Your trusted partner for digital transformation and growth.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Mail size={14} className="text-green-400" />
              hello@xyenthra.com
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Phone size={14} className="text-green-400" />
              +91 98765 43210
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-green-400 text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
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
          <p className="text-gray-600 text-sm">
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
