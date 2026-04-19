export default function Hero() {
  return (
    <section className="relative bg-slate-900 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-indigo-700/15 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 text-blue-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            AI-Powered Software Engineering
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Build the Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              AI & World-Class
            </span>{" "}
            Engineering
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-10">
            Xerikos LLC partners with companies to design, build, and scale
            exceptional software products—combining the power of AI with the
            discipline of elite engineering.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
            >
              Start Your Project
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:-translate-y-0.5"
            >
              Explore Services
            </a>
          </div>

          {/* Social proof bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-slate-800">
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-slate-400 text-sm">Quality Commitment</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-700" />
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white">AI-First</div>
              <div className="text-slate-400 text-sm">Engineering Approach</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-slate-700" />
            <div className="text-center sm:text-left">
              <div className="text-3xl font-bold text-white">End-to-End</div>
              <div className="text-slate-400 text-sm">Delivery Partner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
