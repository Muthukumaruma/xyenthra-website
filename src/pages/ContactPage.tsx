import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: <Mail size={20} />, label: 'Email Us', value: 'hello@xyenthra.com', sub: 'We respond within 24 hours', color: 'text-green-600', bg: 'bg-green-100' },
  { icon: <Phone size={20} />, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Fri, 9AM–6PM IST', color: 'text-orange-600', bg: 'bg-orange-100' },
  { icon: <MapPin size={20} />, label: 'Visit Us', value: 'Chennai, Tamil Nadu', sub: 'India — 600001', color: 'text-blue-600', bg: 'bg-blue-100' },
];

const services = [
  'Custom Software Development', 'Cloud & DevOps', 'AI / Machine Learning',
  'Mobile App Development', 'Cybersecurity', 'Data Analytics & BI',
  'Web Development', 'IT Consulting',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-green-600 text-sm font-bold uppercase tracking-widest">Get In Touch</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-2 mb-4">
          Start Your <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Project</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Tell us what you're building. We'll respond within 24 hours with a clear, no-obligation proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left — info */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {contactInfo.map((info, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-green-200 transition-colors">
              <div className={`w-10 h-10 rounded-xl ${info.bg} flex items-center justify-center ${info.color} flex-shrink-0`}>
                {info.icon}
              </div>
              <div>
                <div className="text-gray-400 text-xs mb-1">{info.label}</div>
                <div className="text-gray-900 font-semibold">{info.value}</div>
                <div className="text-gray-400 text-xs mt-0.5">{info.sub}</div>
              </div>
            </div>
          ))}

          <div className="mt-2 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-orange-50 border border-green-100">
            <h4 className="text-gray-900 font-bold mb-3">Why Xyenthra?</h4>
            <ul className="space-y-2">
              {[
                '15+ years of industry experience',
                'Free initial consultation',
                'Fixed-price project models',
                'Direct access to the engineers',
                '90-day post-launch support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-green-50 border border-green-200">
              <CheckCircle2 size={64} className="text-green-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Received!</h3>
              <p className="text-gray-500">Thank you! We'll review your project and get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-600 text-sm mb-2 block font-medium">Full Name *</label>
                  <input required type="text" placeholder="John Smith" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:bg-white transition-colors text-sm" />
                </div>
                <div>
                  <label className="text-gray-600 text-sm mb-2 block font-medium">Email Address *</label>
                  <input required type="email" placeholder="john@company.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:bg-white transition-colors text-sm" />
                </div>
              </div>

              <div>
                <label className="text-gray-600 text-sm mb-2 block font-medium">Company Name</label>
                <input type="text" placeholder="Your Company Ltd." value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:bg-white transition-colors text-sm" />
              </div>

              <div>
                <label className="text-gray-600 text-sm mb-2 block font-medium">Service Interested In *</label>
                <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white transition-colors text-sm">
                  <option value="">Select a service...</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="text-gray-600 text-sm mb-2 block font-medium">Project Details *</label>
                <textarea required rows={5} placeholder="Describe your project, goals, timeline, and budget range..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:bg-white transition-colors text-sm resize-none" />
              </div>

              <button type="submit" className="bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
