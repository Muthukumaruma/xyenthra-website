import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email Us',
    value: 'hello@xyenthra.com',
    sub: 'We respond within 24 hours',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
  {
    icon: <Phone size={20} />,
    label: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon–Fri, 9AM–6PM IST',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Visit Us',
    value: 'Chennai, Tamil Nadu',
    sub: 'India — 600001',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
];

const services = [
  'Custom Software Development',
  'Cloud & DevOps',
  'AI / Machine Learning',
  'Mobile App Development',
  'Cybersecurity',
  'Data Analytics & BI',
  'Web Development',
  'IT Consulting',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-green-400 text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Start Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                <div className={`w-10 h-10 rounded-xl ${info.bg} flex items-center justify-center ${info.color} flex-shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">{info.label}</div>
                  <div className="text-white font-semibold">{info.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{info.sub}</div>
                </div>
              </div>
            ))}

            <div className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-orange-500/10 border border-green-500/20">
              <h4 className="text-white font-bold mb-3">Why Xyenthra?</h4>
              <ul className="space-y-2">
                {['Free initial consultation', 'Fixed-price project models', 'Dedicated account manager', 'Weekly progress reports', '90-day post-launch support'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-white/5 border border-green-500/30">
                <CheckCircle2 size={64} className="text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
                <p className="text-gray-400">
                  Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/60 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/60 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company Ltd."
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/60 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Service Interested In *</label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#0d1a0d] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/60 transition-colors text-sm"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Project Details *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, goals, timeline, and budget range..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/60 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 w-full py-4"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
