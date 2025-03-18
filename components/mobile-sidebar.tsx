"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-[300px] bg-black/90 backdrop-blur-md border-l border-white/10 shadow-glow z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <Link href="/" className="flex items-center space-x-2">
                  <Image 
                    src="/logo.png" 
                    alt="SANVEG Logo" 
                    width={35} 
                    height={35} 
                    className="shadow-glow rounded-full"
                  />
                  <span className="text-white font-medium text-lg">SANVEG 2025</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
                  <X className="w-6 h-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4 space-y-4">
                <MobileNavLink href="/schedule" onClick={onClose}>Schedule</MobileNavLink>
                <MobileNavLink href="/gallery" onClick={onClose}>Gallery</MobileNavLink>
                <MobileNavLink href="/rules" onClick={onClose}>Rules & Guidelines</MobileNavLink>
                <MobileNavLink href="/faqs" onClick={onClose}>FAQs</MobileNavLink>
              </nav>

              {/* Register Button */}
              <div className="p-4 border-t border-white/10">
                <a href="https://forms.gle/BFFbqQaWgBXJyNy79" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-glow-hover">
                    Register
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="block text-gray-300 hover:text-white transition-colors text-lg py-2"
    >
      {children}
    </Link>
  )
} 