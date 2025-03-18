"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Users, Trophy, Phone } from "lucide-react"
import { RoboAnimation } from "@/components/robo-animation"
import Image from "next/image"

export default function Hero() {
  const contactNumber = process.env.NEXT_PUBLIC_CONTACT_NUMBER || "+919876543210"
  
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center py-8 md:py-0">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6"
          >
            {/* Left Column - Main Content */}
            <div className="space-y-4 md:space-y-6 text-center md:text-left order-1 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
                  SANVEG 2025
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg">
                Join us for an electrifying experience of creativity, problem-solving, and next-level coding! Collaborate with brilliant minds, turn ideas into reality, and compete for thrilling prizes.
              </p>

              <p className="text-gray-400 text-base sm:text-lg">
                Whether you're a coding wizard or a curious innovator, this is your chance to build, break, and innovate like never before.
              </p>

              <div className="text-lg sm:text-xl font-semibold text-blue-400">
                🔥 Code. Create. Conquer. Are you ready? 🚀
              </div>

              <div className="hidden md:flex flex-row items-start justify-start gap-3">
                <a href="https://forms.gle/BFFbqQaWgBXJyNy79" target="_blank" rel="noopener noreferrer" className="w-auto">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-glow-hover">
                    <Users className="mr-2 h-5 w-5" />
                    Register Now
                  </Button>
                </a>
                <a href={`tel:${contactNumber}`} className="w-auto">
                  <Button size="lg" variant="outline" className="text-white border-green-500 hover:bg-green-500/20 shadow-glow-hover">
                    <Phone className="mr-2 h-5 w-5 text-green-500" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Event Details & Logos */}
            <div className="space-y-6 order-2 md:order-2">
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 space-y-4 shadow-glow">
                <div className="flex items-center gap-3 text-blue-400">
                  <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-lg sm:text-xl font-semibold">Event Details</span>
                </div>

                <div className="space-y-3 sm:space-y-4 text-gray-300">
                  <div>
                    <span className="text-blue-400 font-semibold">Date:</span>
                    <p className="text-base sm:text-lg">3 April 2025</p>
                  </div>
                  <div>
                    <span className="text-blue-400 font-semibold">Venue:</span>
                    <p className="text-base sm:text-lg">EGD Hall, I.K. Gujral Punjab Technical University Mohali Campus - I</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-500/20">
                  <span className="text-blue-400 font-medium block mb-4">Presented by</span>
                  <div className="flex items-center justify-center gap-0">
                    <Image 
                      src="/PTU.png" 
                      alt="PTU Logo" 
                      width={200} 
                      height={100} 
                      className="object-contain w-[160px] h-[80px] sm:w-[220px] sm:h-[110px]"
                    />
                    <span className="text-2xl sm:text-3xl font-bold text-gray-400 mx-0">×</span>
                    <Image 
                      src="/TECHzHUT.png" 
                      alt="TECHzHUT Logo" 
                      width={200} 
                      height={100} 
                      className="object-contain w-[160px] h-[80px] sm:w-[220px] sm:h-[110px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Buttons - After Event Details */}
            <div className="flex md:hidden flex-col items-center justify-center gap-3 order-3 col-span-1 md:col-span-2">
              <a href="https://forms.gle/BFFbqQaWgBXJyNy79" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-glow-hover w-full">
                  <Users className="mr-2 h-5 w-5" />
                  Register Now
                </Button>
              </a>
              <a href={`tel:${contactNumber}`} className="w-full">
                <Button size="lg" variant="outline" className="text-white border-green-500 hover:bg-green-500/20 shadow-glow-hover w-full">
                  <Phone className="mr-2 h-5 w-5 text-green-500" />
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 opacity-30 md:opacity-100">
        <RoboAnimation />
      </div>

      {/* Copyright */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-gray-400 text-[10px] sm:text-xs">
        © 2025 SANVEG. All rights reserved.
      </div>
    </div>
  )
}

