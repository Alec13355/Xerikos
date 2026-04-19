const steps = [
  {
    number: "01",
    title: "Discovery & Scoping",
    description:
      "We start by understanding your business, goals, and technical landscape. We ask the hard questions upfront so there are no surprises later.",
  },
  {
    number: "02",
    title: "Architecture & Planning",
    description:
      "We design a solution architecture that balances your immediate needs with long-term scalability—no over-engineering, no cutting corners.",
  },
  {
    number: "03",
    title: "Agile Execution",
    description:
      "We build in focused sprints with full transparency. You see working software early and often, and your feedback shapes every iteration.",
  },
  {
    number: "04",
    title: "Quality & Launch",
    description:
      "Comprehensive testing, performance validation, and a smooth launch. We don't ship unless we're confident it's ready.",
  },
  {
    number: "05",
    title: "Continuous Improvement",
    description:
      "Post-launch, we stay engaged. We monitor, optimize, and evolve your product as your business and users' needs change.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-slate-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            A Process Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Predictable Excellence
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Our battle-tested process ensures every project is delivered on
            time, on budget, and at the quality level you expect.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Step number circle */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-4">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  {/* Mobile connector line */}
                  {index < steps.length - 1 && (
                    <div className="flex-1 h-px bg-slate-700 lg:hidden" />
                  )}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA inside process section */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-base mb-6">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-blue-600/25"
          >
            Let&apos;s Talk
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
        </div>
      </div>
    </section>
  );
}
