"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Play, Pause, X, Volume2, Maximize, Minimize } from "lucide-react"
import Navigation from "@/components/nav" 
import InclusionPanel from "@/components/inclusion-panel"
import WorkAtQcell from "@/components/work-at-qcell"
import LifeAtQcell from "@/components/life-at-qcell"
import MakeADifference from "@/components/make-difference"
import Footer from "@/components/footer"

export default function CareersPage() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isModalPlaying, setIsModalPlaying] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null)

  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  // Format time in MM:SS format
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const openVideoModal = () => {
    setShowVideoModal(true)
    // Pause the background video if it's playing
    if (videoRef.current && isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    }

    // Play the modal video after a short delay
    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current
          .play()
          .then(() => {
            setIsModalPlaying(true)
          })
          .catch((e) => console.log("Auto-play prevented:", e))
      }
    }, 500)
  }

  const closeVideoModal = () => {
    // Exit fullscreen if active when closing
    if (isFullscreen) {
      exitFullscreen()
    }

    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      setIsModalPlaying(false)
    }
    setShowVideoModal(false)
  }

  const toggleModalVideo = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.paused) {
        modalVideoRef.current.play()
        setIsModalPlaying(true)
      } else {
        modalVideoRef.current.pause()
        setIsModalPlaying(false)
      }
    }
  }

  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (modalVideoRef.current) {
      setDuration(modalVideoRef.current.duration)
    }
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalVideoRef.current) {
      const progressBar = e.currentTarget
      const rect = progressBar.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      modalVideoRef.current.currentTime = pos * modalVideoRef.current.duration
      setCurrentTime(modalVideoRef.current.currentTime)
    }
  }

  const handleMouseMove = () => {
    setShowControls(true)

    // Clear any existing timeout
    if (controlsTimeout) {
      clearTimeout(controlsTimeout)
    }

    // Set a new timeout to hide controls after 3 seconds
    const timeout = setTimeout(() => {
      setShowControls(false)
    }, 3000)

    setControlsTimeout(timeout)
  }

  // Fullscreen functionality
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen()
    } else {
      exitFullscreen()
    }
  }

  const enterFullscreen = () => {
    const element = videoContainerRef.current

    if (!element) return

    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if ((element as HTMLElement & { webkitRequestFullscreen?: () => void }).webkitRequestFullscreen) {
      /* Safari */
      ;(element as any).webkitRequestFullscreen()
    } else if ((element as HTMLElement & { msRequestFullscreen?: () => void }).msRequestFullscreen) {
      /* IE11 */
      ;(element as any).msRequestFullscreen()
    }
  }

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if ((document as Document & { webkitExitFullscreen?: () => void }).webkitExitFullscreen) {
      /* Safari */
      ;(document as any).webkitExitFullscreen()
    } else if ((document as Document & { msExitFullscreen?: () => void }).msExitFullscreen) {
      /* IE11 */
      ;(document as any).msExitFullscreen()
    }
  }

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement !== null ||
          (document as any).webkitFullscreenElement !== null ||
          (document as any).msFullscreenElement !== null,
      )
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("msfullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
      document.removeEventListener("msfullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (controlsTimeout) {
        clearTimeout(controlsTimeout)
      }
    }
  }, [controlsTimeout])

  return (
    <>
      {/* Navigation */}
      <Navigation page="careers"/>
      <header className="min-h-screen bg-black text-white">

        {/* Hero Content */}
        <div className="relative z-40 min-h-screen">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="/images/careersatqcell.jpg"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="/videos/careers-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#F98F1F] mix-blend-overlay"></div>
          </div>

          {/* Content */}
          <div ref={sectionRef} className="relative z-10 flex min-h-screen flex-col justify-center items-center px-6 py-24 md:px-12">
            {/*<div className="mt-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-white md:text-4xl"
              >
                Life at QCELL
              </motion.h2>
    </div>*/}

            <div>
              <video
                className="h-32 w-48 object-cover rounded-md"
                poster="/images/careersatqcell.jpg"
                loop
                muted
                playsInline
                autoPlay
              >
                <source src="/videos/careers-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8 text-5xl font-bold text-white md:text-7xl"
              >
                Join us. Be you.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mx-auto"
              >
                <button
                  onClick={openVideoModal}
                  className="group mx-auto flex items-center space-x-3 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <span className="flex h-8 w-8 mx-auto items-center justify-center rounded-full bg-[#F98F1F] text-white transition-transform group-hover:scale-110">
                    <Play className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white md:text-base">Watch the Film</span>
                </button>
              </motion.div>
            </div>

            {/*<motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl">Work at QCELL</h2>
    </motion.div>*/}
          </div>

          {/* Video Controls */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={toggleVideo}
            className="absolute bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {showVideoModal && (
            <motion.div
              ref={modalRef}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onMouseMove={handleMouseMove}
            >
              {/* Close button - always visible */}
              <button
                onClick={closeVideoModal}
                className={`absolute left-6 top-6 z-10 text-white hover:opacity-80 ${isFullscreen ? "opacity-0 hover:opacity-100" : ""}`}
              >
                <X className="h-6 w-6" />
              </button>

              {/* Video container */}
              <div ref={videoContainerRef} className="relative h-full w-full">
                {/* Video */}
                <video
                  ref={modalVideoRef}
                  className="h-full w-full object-contain"
                  controls={false}
                  playsInline
                  onClick={toggleModalVideo}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                >
                  <source src="/videos/careers-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Center play button - only show when paused */}
                {!isModalPlaying && (
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={toggleModalVideo}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                )}

                {/* Video controls - show/hide based on mouse movement */}
                <AnimatePresence>
                  {showControls && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="text-white hover:opacity-80" onClick={toggleModalVideo}>
                            {isModalPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                          </button>
                          <button className="text-white hover:opacity-80">
                            <Volume2 className="h-5 w-5" />
                          </button>
                          <span className="text-sm text-white">
                            {formatTime(currentTime)} / {formatTime(duration)}
                          </span>
                        </div>

                        <div className="mx-4 flex-1 cursor-pointer" onClick={handleSeek}>
                          <div className="h-1 w-full rounded-full bg-white/30">
                            <div
                              className="h-full rounded-full bg-white"
                              style={{ width: `${(currentTime / duration) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <div>
                          <button
                            className="text-white hover:opacity-80"
                            onClick={toggleFullscreen}
                            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                          >
                            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </header>

      <main>
        <InclusionPanel />

        <WorkAtQcell />

        <LifeAtQcell />

        <MakeADifference />
      </main>

      <Footer />

      <div
        className="hidden backdrop-filter z-40 bg-black/40 absolute inset-0 transition-all"
        style={{ height: `${document.body.scrollHeight}px` }}
      ></div>


    </>

    
  )
}
