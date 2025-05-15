"use client"
import {motion, AnimatePresence} from 'framer-motion'
import { useRef} from 'react'
import Navigation from "@/components/nav"
import BackgroundVideo from '@/components/background-video'
import SliderContent from '@/components/promotions/slider-content'


export default function Promotions () {
    

    return (
        <>
        <motion.header className='w-full relative'>
            <Navigation page='promotions' />
            {/** hero */}
            <AnimatePresence>
                <motion.div className="relative min-h-screen w-full">
                    {/** Background video */}
                    <BackgroundVideo
                        poster="/images/promotion1.png"
                        videoSource="/videos/promotion1.mp4"
                    />
                    {/** Content overlayed */}
                    <SliderContent />
                </motion.div>
            </AnimatePresence>
        </motion.header>
        {typeof window !== "undefined" && (
            <div
                className="hidden backdrop-filter z-40 bg-black/40 absolute inset-0 transition-all"
                style={{ height: `${document.body.scrollHeight}px` }}
            ></div>
        )}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </>
    )
}