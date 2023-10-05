"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] sm:mb-0 text-center">
            <div className="flex items-center justify-center mb-10">
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
                            className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl" />
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

            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I'm Alfred.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">0 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React(Next.js)</span>.
            </motion.h1>

            <motion.div className="flex flex-col justify-center sm:flex-row gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.15
                }}>
                <Link href="#contact"
                    className="group tracking-tighter bg-gray-900 text-white px-7 py-3 flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                    Contact Me Here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a href="/CV.pdf" download className="group tracking-tighter flex justify-center items-center bg-white px-7 py-3 text-black gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition select-none cursor-pointer border border-black/10">
                    Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a href="https://www.linkedin.com/in/alfredsylvanalfonso/" target="_blank" className="flex justify-center bg-white p-4 text-gray-700 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition select-none cursor-pointer border border-black/10">
                    <BsLinkedin/>
                </a>

                <a className="flex justify-center bg-white p-4 text-[1.35rem] text-gray-700 gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 transition select-none cursor-pointer border border-black/10">
                    <FaGithubSquare /> 
                </a>
            </motion.div>
        </section>
    )
}
