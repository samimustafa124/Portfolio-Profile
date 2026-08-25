import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaReact, FaBullhorn } from 'react-icons/fa'

const skillsData = [
  {
    icon: <FaCode className="text-3xl text-[#8b5cf6]" />,
    title: 'Core Web Development',
    description: 'Building modern, clean, and fully responsive layouts with semantic web standards.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    icon: <FaReact className="text-3xl text-[#8b5cf6]" />,
    title: 'Frontend & React',
    description: 'Developing interactive user interfaces, components, and single-page web applications.',
    tags: ['React', 'Framer Motion', 'Vite', 'Component Design', 'Git/GitHub'],
  },
  {
    icon: <FaBullhorn className="text-3xl text-[#8b5cf6]" />,
    title: 'Meta Ads & Marketing',
    description: 'Setting up, managing, and optimizing paid advertising campaigns for business growth.',
    tags: ['Meta Ads Manager', 'Audience Targeting', 'Campaign Scaling', 'Ad Creatives'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full min-h-screen bg-[#111113] py-20 px-6 md:px-16 text-white flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            My <span className="text-[#8b5cf6]">Skills</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-[#18181b]/90 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-[#8b5cf6]/40 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <div>
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {skill.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Badges / Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
                {skill.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/90 text-zinc-300 border border-zinc-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills