import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Frontend Developer',
  'Meta Ads Specialist',
]

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect logic
  useEffect(() => {
    const fullText = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const delayBeforeDelete = 1800

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1))
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), delayBeforeDelete)
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1))
        if (displayedText === '') {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentRoleIndex])

  return (
    <section id="home" className="min-h-screen w-full bg-[#18181b] text-white flex items-center justify-center px-6 md:px-16 pt-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col items-start space-y-6"
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-[#8b5cf6]">Muhammad Sami Mustafa</span>
          </h1>

          {/* Typewriter Subheading */}
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center text-zinc-100 min-h-40px">
            <span>{displayedText}</span>
            <span className="text-[#8b5cf6] ml-1 font-normal animate-pulse">|</span>
          </h2>

          {/* Description */}
          <p className="text-zinc-400 text-base sm:text-lg max-w-lg leading-relaxed">
            I create stunning web experiences with modern technologies and innovative designs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-[#8b5cf6] text-white font-semibold text-sm hover:bg-[#7c3aed] transition-colors duration-200 shadow-lg shadow-purple-500/20"
            >
              View Work
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-zinc-700 bg-transparent text-white font-semibold text-sm hover:bg-zinc-800/80 hover:border-zinc-500 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Floating Image with Gradient Border */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            animate={{
              y: [-12, 12, -12], // Smooth up-and-down continuous float
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="p-3px rounded-full bg-linear-to-tr from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] shadow-2xl shadow-purple-500/10"
          >
            <img
              src="/profile.JPG"
              alt="Muhammad Sami Mustafa"
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover bg-zinc-900"
            />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero