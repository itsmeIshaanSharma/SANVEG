"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function FAQsPage() {
  const faqs = [
    {
      question: "What is SANVEG 2025?",
      answer: "SANVEG 2025 is a 48-hour hackathon where participants come together to build innovative solutions."
    },
    {
      question: "Who can participate?",
      answer: "Anyone with an interest in technology can participate! Whether you're a developer, designer, or product manager."
    },
    {
      question: "Do I need a team?",
      answer: "No, you don't need a team to register. We have team formation activities at the start of the event."
    },
    {
      question: "Is it free?",
      answer: "Yes, participation in SANVEG 2025 is completely free! We believe in making innovation accessible."
    }
  ]

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          FAQ's
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-border/40 bg-card/40 backdrop-blur-sm rounded-lg px-4"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
} 