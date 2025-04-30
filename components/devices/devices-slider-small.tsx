"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

import { offerings } from "@/types/offerings"
import { Button } from "@/components/ui/button"

export default function DevicesSliderSmall() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="relative w-full px-0 overflow-hidden py-2 pb-10 bg-transparent rounded-lg md:max-w-[110%] md:rounded-lg"> {/* py-16 */}
      
      <div className="relative mt-24"> {/* px-4 */}
        {/*<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="ml-4">
          <h2 className="mt-3 max-w-2xl text-xl text-gray-500 my-5 sm:mt-4 md:text-2xl">
            Take a Look at What's <span className="text-orange-400">New</span>
          </h2>
        </motion.div>*/}

        <div className="rounded-lg"> {/* px-4 */}
          <div className="relative w-[80%] md:w-[50%] mx-auto rounded-lg">
            <div className="block absolute left-0 top-1/2 z-10 -translate-x-4 lg:-translate-x-14 -translate-y-2/4">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 md:h-10 md:w-10 rounded-full border border-gray-200 bg-orange-400/80 shadow-lg backdrop-blur-sm text-white hover:text-black"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous slide</span>
              </Button>
            </div>

            <div className="block absolute right-0 top-1/2 z-10 translate-x-4 lg:translate-x-14 -translate-y-2/4 ">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 md:h-10 md:w-10 rounded-full border border-gray-200 bg-orange-400/80 shadow-lg backdrop-blur-sm text-white hover:text-black"
                onClick={scrollNext}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>

            <div className="overflow-hidden rounded-lg" ref={emblaRef}>
              <div className="flex touch-pan-y w-full rounded-lg h-[120px] md:h-[120px]">
                {offerings.map((offering) => (
                  <div
                    key={offering.id}
                    className="relative min-w-0 flex-[0_0_50%] pl-4 pr-4 sm:flex-[0_0_50%] md:flex-[0_0_35%] lg:flex-[0_0_40%] space-x-4"
                  >
                    <motion.div
                      className="relative h-full min-h-[50px] w-full cursor-pointer md:min-h-[50px]" // md:min-h-[600px]
                    >
                      
                      <Card className="group relative h-full overflow-hidden bg-gradient-to-br from-[#CD7F32] to-[#B87333] z-20">
                        
                        <CardContent className="relative flex h-full flex-col items-start justify-between p-6 md:p-14">
                          {/*<div className="w-full z-20">
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
                          </div>*/}

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
                  </div>
                ))}
              </div>
            </div>

            {/*<div className="mt-8 flex justify-center gap-2">
              {offerings.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentIndex === index ? "bg-[#CD7F32] w-4" : "bg-gray-300"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

