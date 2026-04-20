import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="text-8xl font-black gradient-text mb-4">404</div>
      <h1 className="text-3xl font-black text-gray-900 mb-3">Page not found</h1>
      <p className="text-gray-500 mb-8 max-w-sm">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </div>
  );
}
