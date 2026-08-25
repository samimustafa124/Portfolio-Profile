import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Frontend Developer & Learner',
    company: 'Self-Directed & Projects',
    period: '2023 - Present',
    description:
      'Building responsive and interactive web user interfaces using HTML, CSS, JavaScript, Tailwind CSS, and actively mastering modern frontend development with React.',
  },
  {
    role: 'Meta Ads Specialist',
    company: 'Freelance / Digital Marketing',
    period: '2023 - 2024',
    description:
      'Created and optimized targeted Meta ad campaigns, managed budget allocations, designed compelling ad creatives, and improved audience conversion rates.',
  },
  {
    role: 'Junior Web Developer',
    company: 'StartUp Ventures / Practice',
    period: '2022 - 2023',
    description:
      'Started my career building clean, mobile-friendly landing pages and basic web layouts while continuously expanding my technical foundation.',
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

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full min-h-screen bg-[#111113] py-24 px-6 md:px-16 text-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work <span className="text-[#8b5cf6]">Experience</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            My professional journey and career milestones
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#8b5cf6] ml-4 md:ml-8 pl-6 md:pl-10 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Purple Dot */}
              <div className="absolute -left-31px md:-left-47px top-6 h-4 w-4 rounded-full bg-[#8b5cf6] ring-4 ring-[#111113] group-hover:scale-125 transition-transform duration-300" />

              {/* Experience Card */}
              <div className="bg-[#18181b] border border-zinc-800/90 rounded-2xl p-6 sm:p-7 shadow-lg hover:border-[#8b5cf6]/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#8b5cf6] transition-colors duration-200">
                    {exp.role}
                  </h3>
                  {/* Period Badge */}
                  <span className="w-fit text-xs font-semibold px-3 py-1 rounded-full bg-[#8b5cf6]/15 text-[#a78bfa] border border-[#8b5cf6]/30">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-sm font-medium text-zinc-400 mb-4">
                  {exp.company}
                </h4>

                <p className="text-zinc-300/80 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Experience