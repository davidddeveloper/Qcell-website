"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Plus } from "lucide-react"

import type { Offering } from "@/types/offerings"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface OfferingCardProps {
  offering: Offering
  index: number
  isActive: boolean
  onClick: () => void
}

export default function OfferingCard({ offering, index, onClick }: OfferingCardProps) {
  return (
    
    <motion.div
      
      
      className="relative h-full min-h-[400px] w-full cursor-pointer md:min-h-[600px]" // md:min-h-[600px]
      onClick={onClick}
    >
      {/* initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.9,
        filter: isActive ? "brightness(1)" : "brightness(0.7)",
      }}
      transition={{ duration: 0.4 }} */}
      <Card className="group relative h-full overflow-hidden bg-gradient-to-br from-[#CD7F32] to-[#B87333] z-20">
        <div className="absolute inset-0 bg-black/20" />
        <CardContent className="relative flex h-full flex-col items-start justify-between p-6">
          <div className="w-full z-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-bold text-white"
            >
              {offering.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.1 }}
              className="mt-2 text-white/80"
            >
              {offering.description}
            </motion.p>
          </div>

          <div className="mt-4 w-full space-y-4 z-20">
            <div className="flex flex-wrap gap-2">
              {offering.features.map((feature, i) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + i * 0.1 }}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm"
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex items-center justify-between"
            >
              <Button
                variant="ghost"
                className="rounded-full border border-white/20 text-white hover:bg-white/20 hover:text-white"
              >
                {offering.cta.text}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full border border-white/20 text-white hover:bg-white/20 hover:text-white"
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Learn More</span>
              </Button>
            </motion.div>
          </div>

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
          <Image
            src={offering.image}
            alt={offering.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}

