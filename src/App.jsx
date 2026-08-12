import { useEffect, useState } from 'react'
import { BrainCircuit, CloudCog, ShieldCheck } from 'lucide-react'
import Field from './components/Field.jsx'
import Reveal from './components/Reveal.jsx'
import TextReveal from './components/TextReveal.jsx'
import ServiceCard from './components/ServiceCard.jsx'

// ── EDIT THESE ──────────────────────────────────────────────
const EMAIL = 'alec.harrison@xerikos.com'
const LINKEDIN = 'https://www.linkedin.com/in/alec13355'
const OWNER = 'Alec Harrison'
// ────────────────────────────────────────────────────────────

const PRINCIPLES = [
  ['Subtract first', 'Most projects carry features no one asked for. We find and cut them before writing anything new.'],
  ['You\u2019re hiring a decision', 'The value is the judgment, not the keystrokes. I own the call on what gets built, and defend it.'],
  ['Build for drought', 'Systems that hold up when attention moves on \u2014 resilient by default, not dependent on constant tending.'],
  ['Leave you able to run it', 'No lock-in to me by design. Clear handoff, real documentation, a team that owns what they run.'],
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const year = new Date().getFullYear()

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="wrap bar">
          <a className="brand" href="#top">Xerikos<span className="dot">.</span></a>
          <div className="navlinks">
            <a href="#thesis">Approach</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <Field />
        <div className="wrap">
          <div className="hero-inner">
            <Reveal as="span" className="eyebrow" delay={0.05}>Xerikos — Custom AI · Cloud · Governance</Reveal>
            <h1>
              <span className="l1"><TextReveal text="Anyone can write the code now." delay={0.15} /></span>
              <span className="l2">
                <TextReveal text="The work is" delay={0.62} />{' '}
                <TextReveal text="the right problems." accent delay={0.82} />
              </span>
            </h1>
            <Reveal as="p" className="lede" delay={1.05}>
              Xerikos builds custom AI, cloud, and governance systems for teams who&rsquo;ve figured out the truth: <b>shipping features was never the bottleneck.</b> Deciding which ones deserve to exist is.
            </Reveal>
            <Reveal className="cta-row" delay={1.18}>
              <a className="btn-primary" href="#contact">Start a conversation</a>
              <a className="btn-ghost" href="#services">See what I do</a>
            </Reveal>
            <Reveal as="p" className="gloss" delay={1.4}>
              <b>xerikós</b> (ξερικός), adj. — dry-farmed; grown on what the land already gives, without irrigation. The systems I build are meant to last through the seasons when no one&rsquo;s watering them.
            </Reveal>
          </div>
        </div>
      </header>

      <main>
        <section className="block" id="thesis">
          <div className="wrap">
            <Reveal className="sec-head"><span className="num">01</span><h2>The bottleneck moved. <em>Most teams didn&rsquo;t.</em></h2></Reveal>
            <div className="thesis-grid">
              <Reveal>
                <p>For years the constraint was output. You needed more hands, more hours, more code. So that&rsquo;s what everyone optimized — faster frameworks, bigger teams, now AI that writes whole modules on request.</p>
                <p><b>That constraint is gone.</b> Output is cheap and getting cheaper. What&rsquo;s left expensive is judgment: knowing which problem is actually worth solving, which system should exist, and which &ldquo;obvious&rdquo; feature will quietly cost you for years.</p>
                <p>Xerikos exists for that part. I don&rsquo;t sell you volume. I help you spend a limited amount of attention on the few things that change the outcome — and then build them properly.</p>
              </Reveal>
              <Reveal className="thesis-aside" delay={0.1}>
                <span className="k">The shift</span>
                <span className="big">Cheap</span>
                <span className="cap">Writing code, once the scarce thing.</span>
                <div className="rule" />
                <span className="k">The new scarcity</span>
                <span className="big" style={{ color: 'var(--olive)' }}>Judgment</span>
                <span className="cap">Choosing what deserves to be built.</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="block" id="services">
          <div className="wrap">
            <Reveal className="sec-head"><span className="num">02</span><h2>Three places I do the deepest work.</h2></Reveal>
            <div className="cards">
              <Reveal delay={0}>
                <ServiceCard icon={<BrainCircuit className="ic" strokeWidth={1.5} />} kicker="AI" title="AI that earns its place">
                  Retrieval systems, agents, and MCP integrations built to solve a named problem — not to have &ldquo;an AI story.&rdquo; I start by killing the use cases that don&rsquo;t pay for themselves, then ship the ones that do into production.
                </ServiceCard>
              </Reveal>
              <Reveal delay={0.08}>
                <ServiceCard icon={<CloudCog className="ic" strokeWidth={1.5} />} kicker="Cloud" title="Cloud without the sprawl">
                  Azure architecture sized to what you actually run. Fewer moving parts, clearer costs, and less to page you at 2&nbsp;a.m. I&rsquo;d rather cut your surface area than grow your bill.
                </ServiceCard>
              </Reveal>
              <Reveal delay={0.16}>
                <ServiceCard icon={<ShieldCheck className="ic" strokeWidth={1.5} />} kicker="Governance" title="Governance people follow">
                  Policy, access, and audit designed into the system instead of bolted on after review. The kind of governance that survives contact with a real team shipping real work.
                </ServiceCard>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="block" id="approach2">
          <div className="wrap">
            <Reveal className="sec-head"><span className="num">03</span><h2>How I work, in four rules.</h2></Reveal>
            <Reveal className="principles">
              {PRINCIPLES.map(([h, p]) => (
                <div className="pr" key={h}><span className="mk">+</span><div><h4>{h}</h4><p>{p}</p></div></div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="block" id="about">
          <div className="wrap">
            <div className="about-grid">
              <Reveal as="p" className="lead">A one-person practice, on purpose. <em>You talk to the person doing the work.</em></Reveal>
              <Reveal className="about-body" delay={0.1}>
                <p>Xerikos is run by <b>{OWNER}</b>. The engagement is hands-on end to end: I do the architecture and the build, and I&rsquo;m the one in the room when the hard trade-offs get made — no account manager, no handoff to a junior team.</p>
                <p>The name is the whole philosophy. Dry-farmed systems are built to survive on what&rsquo;s already there. That&rsquo;s the standard I hold the work to: <b>resilient, essential, and yours to run</b> when I&rsquo;m gone.</p>
                <div className="creds">
                  <span className="edit">Microsoft MVP, AI</span>
                  <span className="edit">Microsoft Certified Trainer</span>
                  <span className="edit">Azure community organizer</span>
                  <span className="edit">Omaha, Nebraska · remote</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="block contact" id="contact">
          <div className="wrap">
            <Reveal as="h2" className="big">Got a problem <em>worth</em> solving?</Reveal>
            <Reveal className="cta-row" delay={0.1}>
              <a className="btn-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a className="btn-ghost" href={LINKEDIN} target="_blank" rel="noopener">Connect on LinkedIn</a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div>
            <div className="brand">Xerikos<span className="dot" style={{ color: 'var(--olive)' }}>.</span></div>
            <div className="meta">Custom AI · Cloud · Governance</div>
          </div>
          <div className="meta" style={{ textAlign: 'right' }}>
            <a className="small" href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
            <a className="small" href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a><br />
            © {year} Xerikos LLC
          </div>
        </div>
      </footer>
    </>
  )
}
