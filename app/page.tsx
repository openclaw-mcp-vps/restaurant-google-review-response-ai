export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Review Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Auto-respond to Google Reviews<br />
          <span className="text-[#58a6ff]">in your restaurant's voice</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          ReviewReply AI monitors your Google My Business reviews and instantly generates personalized, on-brand responses — so you never miss a review again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⭐</div>
            <h3 className="font-semibold text-white mb-1">Monitor All Reviews</h3>
            <p className="text-sm text-[#8b949e]">Syncs with Google My Business to surface new reviews the moment they arrive.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-semibold text-white mb-1">AI-Generated Replies</h3>
            <p className="text-sm text-[#8b949e]">OpenAI crafts responses that match your brand voice, policies, and tone guidelines.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Analytics Dashboard</h3>
            <p className="text-sm text-[#8b949e]">Track response rates, average ratings, and sentiment trends over time.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple, Flat Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 shadow-xl">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$15<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Per location. Unlimited reviews.</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited AI-generated responses',
              'Google My Business integration',
              'Custom brand voice & policies',
              'One-click post to Google',
              'Review analytics & reporting',
              'Email alerts for new reviews'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors duration-200 text-center"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI know my restaurant's voice?</h3>
            <p className="text-sm text-[#8b949e]">During onboarding you provide a short brand description, tone guidelines, and any response policies (e.g. how to handle complaints). The AI uses these as context for every reply it generates.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I edit responses before they go live?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Every AI-generated response appears in your dashboard for review. You can edit, approve, or discard before it's posted to Google — full control is always yours.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does this work for multiple locations?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Each location is billed at $15/mo and gets its own brand voice settings, review feed, and analytics. Hospitality groups managing many locations get a unified dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ReviewReply AI. All rights reserved.
      </footer>
    </main>
  )
}
