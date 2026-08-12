import { motion } from 'framer-motion'

/**
 * Reveal — scroll-triggered entrance. Same idiom as Motion Primitives' <InView>.
 * Swap for the official component:  npx motion-primitives@latest add in-view
 */
export default function Reveal({ children, as = 'div', delay = 0, y = 22, className = '', ...rest }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </M>
  )
}
