import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


const heroImages = [
    "/telecom-pole-image.jpg",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1546027658-7aa750153465?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]


export default function SliderImages () {
    const [currentSlide, setCurrentSlide] = useState(0)
    const heroRef = useRef<HTMLDivElement>(null)
    
    // Auto-advance slider
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length)
        }, 10000)
    
        return () => clearInterval(interval)
    }, [])

    return (
        <div ref={heroRef} className="relative w-full h-full overflow-hidden">
            {/* Slider Images */}
            <AnimatePresence initial={false}>
                <motion.div
                key={currentSlide}
                className="absolute inset-0 z-0"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                    transition: "all 2s"
                }}
                >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8400]/80 to-[#ff8400]/80 z-10 mix-blend-overlay" />
                <Image
                    src={heroImages[currentSlide] || "/placeholder.svg"}
                    alt={`Slide ${currentSlide + 1}`}
                    fill
                    className="object-cover object-center"
                    priority
                />
                </motion.div>
            </AnimatePresence>
        </div>

    )
}