import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { serviceList } from './ServicesPage';
import NotFound from './NotFound';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = serviceList.find((s) => s.slug === slug);

  if (!service) return <NotFound />;

  return (
    <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
      {/* Breadcrumb */}
      <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-green-600 text-sm mb-8 transition-colors">
        <ArrowLeft size={14} /> All Services
      </Link>

      {/* Hero */}
      <div className="flex items-start gap-5 mb-10">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
          {service.icon}
        </div>
        <div>
          <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${service.tagColor}`}>
            {service.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">{service.title}</h1>
        </div>
      </div>

      {/* Summary */}
      <p className="text-xl text-gray-600 leading-relaxed mb-10 border-l-4 border-green-500 pl-5">
        {service.summary}
      </p>

      {/* Description */}
      <div className="space-y-4 mb-12">
        {service.desc.map((para, i) => (
          <p key={i} className="text-gray-500 leading-relaxed">{para}</p>
        ))}
      </div>

      {/* Deliverables + Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h3 className="text-gray-900 font-bold mb-4">What You Get</h3>
          <ul className="space-y-3">
            {service.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h3 className="text-gray-900 font-bold mb-4">Technologies We Use</h3>
          <div className="flex flex-wrap gap-2">
            {service.stack.map((tech) => (
              <span key={tech} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg px-3 py-1.5 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-green-50 to-orange-50 border border-green-100 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-black text-gray-900 mb-3">Need {service.title}?</h3>
        <p className="text-gray-500 mb-6">Tell us about your project and we'll get back to you within 24 hours.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Start a Project <ArrowRight size={16} />
          </Link>
          <Link to="/services" className="inline-flex items-center gap-2 border-2 border-green-600 text-green-700 font-semibold px-8 py-3 rounded-xl hover:bg-green-600 hover:text-white transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
