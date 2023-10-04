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

            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I'm Alfred.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">0 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">React(Next.js)</span>.
            </motion.h1>

            <div className="flex gap-2 justify-center">
                <Link href="#contact"
                    className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full">
                    Contact Me Here <BsArrowRight />
                </Link>

                <a className="flex items-center bg-white px-7 py-3 text-black gap-2 rounded-full">
                    Resume <HiDownload />
                </a>

                <a className="flex items-center bg-white p-4 text-gray-700 gap-2 rounded-full">
                    <BsLinkedin />
                </a>

                <a className="flex items-center bg-white p-4 text-[1.35rem] text-gray-700 gap-2 rounded-full">
                    <FaGithubSquare />
                </a>
            </div>
        </section>
    )
}
