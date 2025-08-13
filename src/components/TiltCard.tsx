import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'

interface TiltCardProps {
  className?: string
  children: ReactNode
}

export function TiltCard({ className, children }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rX = useSpring(useTransform(y, [-50, 50], [10, -10]), { damping: 15, stiffness: 150 })
  const rY = useSpring(useTransform(x, [-50, 50], [-10, 10]), { damping: 15, stiffness: 150 })

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX)
    y.set(relY)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rX, rotateY: rY, transformStyle: 'preserve-3d' }}
      className={clsx('rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4 shadow-sm hover:shadow-md transition', className)}
    >
      {children}
    </motion.div>
  )
} 