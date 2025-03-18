"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { useState } from "react"
import { MobileSidebar } from "./mobile-sidebar"

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/10 shadow-glow bg-black/40"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.png" 
            alt="SANVEG Logo" 
            width={45} 
            height={45} 
            className="shadow-glow rounded-full"
          />
          <span className="text-white font-medium text-xl">SANVEG 2025</span>
        </Link>

        <div className="hidden md:flex items-center justify-center flex-1 px-8">
          <div className="flex items-center space-x-8">
            <NavLink href="/schedule">Schedule</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/rules">Rules & Guidelines</NavLink>
            <NavLink href="/faqs">FAQs</NavLink>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <a href="https://forms.gle/BFFbqQaWgBXJyNy79" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-glow-hover">Register</Button>
          </a>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-white shadow-glow-hover"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </Button>
      </motion.nav>

      <MobileSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group text-lg">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full shadow-glow" />
    </Link>
  )
}

