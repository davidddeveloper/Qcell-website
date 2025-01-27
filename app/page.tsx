"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TypingAnimation } from "@/components/typing-animation"
import { ZoomTransition } from "@/components/zoom-transition"
import Navigation from "@/components/navigation"

export default function Home() {
  const [stage, setStage] = useState<"typing" | "zooming" | "content">("typing")

  const handleTypingComplete = () => {
    setStage("zooming")
  }

  const handleZoomComplete = () => {
    setStage("content")
  }

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <AnimatePresence mode="wait">
        {stage === "typing" && (
          <motion.div
            key="typing"
            className="flex min-h-screen items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TypingAnimation text="QCELL" onComplete={handleTypingComplete} />
          </motion.div>
        )}
        {stage === "zooming" && (
          <motion.div
            key="zooming"
            className="flex min-h-screen items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ZoomTransition onZoomComplete={handleZoomComplete} />
          </motion.div>
        )}
        {stage === "content" && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navigation />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}