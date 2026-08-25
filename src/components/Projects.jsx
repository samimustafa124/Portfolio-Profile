import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './Projectcard'
import project1 from '../assets/project1.avif'
import project2 from '../assets/project2.avif'
import project4 from '../assets/project4.avif'

const projectsData = [
  {
    title: 'Personal Developer Portfolio',
    description: 'A modern, responsive dark-themed developer portfolio built with interactive UI components and animations.',
    image: project1,
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Meta Ads Lead Generation Campaign',
    description: 'High-converting targeted ad campaigns designed with custom audience funnels and creative testing.',
    image: project2,
    tech: ['Meta Ads Manager', 'Audience Insights', 'Copywriting'],
  },
  {
    title: 'Modern Landing Page',
    description: 'A clean, mobile-first product showcase landing page optimized for speed and conversion.',
    image: project4,
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
  },
]

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 bg-[#111113] text-white"
    >
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          My <span className="text-[#8b5cf6]">Projects</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2">
          A selection of my recent work
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  )
}

export default Projects