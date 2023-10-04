"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <section className="text-center">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}>
                        <Image src="https://images.unsplash.com/photo-1562860149-691401a306f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
                            alt="Display Photo" width="192" height="192" quality="95" priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                        className="absolute text-4xl bottom-0 right-0">
                        🤯
                    </motion.span>
                </div>
            </div>

            <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                <span className="font-bold">Hello, I'm Alfred.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">0 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React (Next.js)</span>.
            </h1>
        </section>
    )
}
