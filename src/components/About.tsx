const values = [
  {
    icon: "🎯",
    title: "Quality Without Compromise",
    description:
      "We refuse to ship mediocre software. Every line of code is reviewed, tested, and held to the highest engineering standards.",
  },
  {
    icon: "🤖",
    title: "AI as a Multiplier",
    description:
      "We don't just add AI for the sake of it. We identify where AI genuinely transforms your product and apply it with precision.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    description:
      "We embed ourselves in your success. Your goals become our goals, and we work collaboratively at every stage.",
  },
  {
    icon: "⚡",
    title: "Speed with Stability",
    description:
      "Move fast without breaking things. Our disciplined approach means you get rapid delivery and a solid foundation.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <span className="inline-block text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              About Xerikos
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Engineering Excellence{" "}
              <span className="text-blue-600">Meets AI Innovation</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Xerikos LLC was founded on a simple belief: companies deserve a
              technology partner that cares as much about the quality of their
              software as they do about their business outcomes.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We are a boutique technology firm specializing in AI-powered
              software solutions. Our team brings deep expertise in modern
              software engineering and applied AI to help businesses compete and
              win in an increasingly complex digital landscape.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Work with us
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

          {/* Right: Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
