import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 12 })
  const springY = useSpring(y, { stiffness: 150, damping: 12 })
  const rotateX = useTransform(springY, [ -20, 20 ], [ 8, -8 ])
  const rotateY = useTransform(springX, [ -20, 20 ], [ -8, 8 ])

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX / 4)
    y.set(relY / 4)
  }
  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY, rotateX, rotateY }}
      className={clsx('px-5 py-3 rounded-2xl bg-emerald-600 text-white shadow-lg hover:shadow-xl transition will-change-transform', className)}
    >
      {children}
    </motion.button>
  )
} 