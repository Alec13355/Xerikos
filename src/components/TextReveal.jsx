import { motion } from 'framer-motion'

/**
 * TextReveal — word-by-word rise. Same idiom as Motion Primitives' <TextEffect per="word">.
 * Swap for the official component:  npx motion-primitives@latest add text-effect
 */
export default function TextReveal({ text, className = '', accent = false, delay = 0, stagger = 0.07 }) {
  const words = text.split(' ')
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }} aria-hidden>
          <motion.span
            style={{ display: 'inline-block' }}
            className={accent ? 'accent' : undefined}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.7, delay: delay + i * stagger, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </span>
  )
}
