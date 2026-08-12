import { useRef } from 'react'

/**
 * ServiceCard — cursor-spotlight card. Same idiom as a Watermelon UI spotlight/feature card.
 * Swap for an official block:  npx shadcn@latest add "https://registry.watermelon.sh/<card>.json"
 */
export default function ServiceCard({ icon, kicker, title, children }) {
  const ref = useRef(null)
  const onMove = e => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', e.clientX - r.left + 'px')
    el.style.setProperty('--my', e.clientY - r.top + 'px')
  }
  return (
    <article className="card" ref={ref} onPointerMove={onMove}>
      {icon}
      <span className="k">{kicker}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}
