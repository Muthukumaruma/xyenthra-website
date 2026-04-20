export default function CookiePolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">
      <div className="mb-10">
        <span className="text-green-600 text-sm font-bold uppercase tracking-widest">Legal</span>
        <h1 className="text-4xl font-black text-gray-900 mt-2 mb-3">Cookie Policy</h1>
        <p className="text-gray-400 text-sm">Last updated: April 2025</p>
      </div>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Are Cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you use it.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies We Use</h2>
          <div className="space-y-4">
            {[
              { type: 'Essential Cookies', desc: 'Required for the website to function. These cannot be disabled. They do not store personal data.' },
              { type: 'Analytics Cookies', desc: 'Help us understand how visitors interact with our site — which pages are visited most, how long visitors stay, etc. This data is aggregated and anonymous.' },
              { type: 'Preference Cookies', desc: 'Remember settings you\'ve chosen so you don\'t have to set them each visit.' },
            ].map((c) => (
              <div key={c.type} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-1">{c.type}</h3>
                <p className="text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Managing Cookies</h2>
          <p>You can control and delete cookies through your browser settings. Disabling cookies may affect the functionality of this website. Most browsers allow you to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>View what cookies are stored and delete them individually</li>
            <li>Block cookies from specific websites</li>
            <li>Block all cookies from all sites</li>
            <li>Delete all cookies when you close the browser</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Third-Party Cookies</h2>
          <p>Some cookies may be set by third-party services that appear on our pages (e.g., analytics tools). These are governed by the respective third party's privacy policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@xyenthra.com" className="text-green-600 underline">hello@xyenthra.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
