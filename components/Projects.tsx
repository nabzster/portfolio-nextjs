"use client"

import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import { motion } from 'framer-motion'
import Project from './Project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { useSectionInView } from '@/lib/hooks'


export default function Projects() {
    const { ref } = useSectionInView('Projects');
    
    return (
        <motion.section id="projects" className="scroll-mt-28" ref={ref}>
            <SectionHeading>
                Projects
            </SectionHeading>

            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </motion.section>
    )
}