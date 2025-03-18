"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface MousePosition {
  x: number
  y: number
}

export function MouseEffect() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Mouse trail */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-500/20 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? [1, 1.5, 1] : 1,
          opacity: isHovering ? [0.2, 0.4, 0.2] : 0.2,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mouse glow */}
      <motion.div
        className="fixed w-32 h-32 bg-blue-500/5 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
        animate={{
          scale: isHovering ? [1, 1.2, 1] : 1,
          opacity: isHovering ? [0.1, 0.2, 0.1] : 0.1,
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  )
} 