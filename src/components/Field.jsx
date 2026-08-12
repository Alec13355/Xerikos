import { useEffect, useRef } from 'react'

/**
 * Field — the signature. A sparse "field" of dim marks (candidate problems);
 * a handful light up in olive (the right ones) and are gently linked + pulsed.
 * Visualizes the thesis: most problems stay dark; you solve the few that matter.
 */
export default function Field() {
  const ref = useRef(null)
  useEffect(() => {
    const svg = ref.current
    if (!svg) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const NS = 'http://www.w3.org/2000/svg'
    function build() {
      const W = window.innerWidth
      const H = Math.max(window.innerHeight, 640)
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
      svg.innerHTML = ''
      const cols = Math.max(7, Math.round(W / 150))
      const rows = Math.max(5, Math.round(H / 150))
      const gx = W / cols, gy = H / rows
      const pts = []
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          pts.push({ x: gx * (c + 0.5) + (Math.random() * 2 - 1) * 14, y: gy * (r + 0.5) + (Math.random() * 2 - 1) * 14 })
      const litCount = Math.max(4, Math.round(pts.length * 0.07))
      const lit = [...pts.keys()].sort(() => Math.random() - 0.5).slice(0, litCount)
      const litSet = new Set(lit)
      const litPts = lit.map(i => pts[i])
      litPts.forEach((p, i) => {
        let best = null, bd = 1e9
        litPts.forEach((q, j) => { if (i !== j) { const d = Math.hypot(p.x - q.x, p.y - q.y); if (d < bd) { bd = d; best = q } } })
        if (best && bd < Math.min(W, H) * 0.55) {
          const line = document.createElementNS(NS, 'line')
          line.setAttribute('x1', p.x); line.setAttribute('y1', p.y)
          line.setAttribute('x2', best.x); line.setAttribute('y2', best.y)
          line.setAttribute('stroke', '#aebe5a'); line.setAttribute('stroke-width', '1'); line.setAttribute('stroke-opacity', '0.16')
          svg.appendChild(line)
        }
      })
      pts.forEach((p, i) => {
        const on = litSet.has(i), s = on ? 5.5 : 4, col = on ? '#aebe5a' : '#3a3724'
        const g = document.createElementNS(NS, 'g')
        const h = document.createElementNS(NS, 'line')
        h.setAttribute('x1', p.x - s); h.setAttribute('y1', p.y); h.setAttribute('x2', p.x + s); h.setAttribute('y2', p.y)
        const v = document.createElementNS(NS, 'line')
        v.setAttribute('x1', p.x); v.setAttribute('y1', p.y - s); v.setAttribute('x2', p.x); v.setAttribute('y2', p.y + s)
          ;[h, v].forEach(l => { l.setAttribute('stroke', col); l.setAttribute('stroke-width', on ? 1.4 : 1); g.appendChild(l) })
        if (on && !reduce) {
          const an = document.createElementNS(NS, 'animate')
          an.setAttribute('attributeName', 'opacity'); an.setAttribute('values', '.35;1;.35')
          an.setAttribute('dur', (2.6 + Math.random() * 2.4).toFixed(2) + 's')
          an.setAttribute('repeatCount', 'indefinite'); an.setAttribute('begin', (Math.random() * 2).toFixed(2) + 's')
          g.appendChild(an)
        }
        g.setAttribute('opacity', on ? '0.9' : '0.5')
        svg.appendChild(g)
      })
    }
    build()
    let t
    const onResize = () => { clearTimeout(t); t = setTimeout(build, 220) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return <svg ref={ref} className="field" preserveAspectRatio="xMidYMid slice" aria-hidden="true" />
}
