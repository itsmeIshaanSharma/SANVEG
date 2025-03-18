"use client"

import { Image as ImageIcon } from "lucide-react"
import { motion } from "framer-motion"

export default function GalleryPage() {
  const galleryItems = [
    { image: "/placeholder.jpg" },
    { image: "/placeholder.jpg" },
    { image: "/placeholder.jpg" },
    { image: "/placeholder.jpg" },
    { image: "/placeholder.jpg" },
    { image: "/placeholder.jpg" }
  ]

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <ImageIcon className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Gallery
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3 + index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-video rounded-lg overflow-hidden bg-card/40 backdrop-blur-sm border border-border/40"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"
            />
            <img
              src={item.image}
              alt="Gallery item"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 