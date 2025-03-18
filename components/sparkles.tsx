"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      for (let i = 0; i < 30; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 1 + 0.5,
          delay: Math.random() * 1
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute bg-white rounded-full"
      style={{
            width: sparkle.size,
            height: sparkle.size,
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            opacity: 0.6
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 1, 0.6],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

