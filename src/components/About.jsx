import React from 'react'
import { motion } from 'framer-motion'
import { FaLightbulb, FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa'

const features = [
  {
    icon: <FaLightbulb className="text-2xl text-[#8b5cf6]" />,
    title: 'Innovative',
    desc: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
  },
  {
    icon: <FaPaintBrush className="text-2xl text-[#8b5cf6]" />,
    title: 'Design Oriented',
    desc: 'Beautiful design and user experience are at the heart of everything I create.',
  },
  {
    icon: <FaCode className="text-2xl text-[#8b5cf6]" />,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable, and optimized code following best industry practices.',
  },
  {
    icon: <FaRocket className="text-2xl text-[#8b5cf6]" />,
    title: 'Fast Learner',
    desc: 'Constantly exploring new tools and frameworks to stay ahead in web development.',
  },
]

// Container variant for orchestrated entry
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

// Child animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="min-h-screen w-full bg-[#111113] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading Animation */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="text-[#8b5cf6]">Me</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Get to know more about my background and passion
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image with Subtle Hover Scaling */}
          <motion.div variants={slideInLeft} className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl bg-zinc-900">
              <img
                src="/about.jpg"
                alt="About Me"
                className="w-full h-450px object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Text & Feature Cards */}
          <motion.div variants={slideInRight} className="lg:col-span-7 flex flex-col space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              My Journey
            </h3>

            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                 <p>
                     I'm a passionate frontend developer dedicated to building responsive, modern, and user-friendly web interfaces. My journey began with core web technologies like HTML, CSS, and JavaScript, and I'm currently expanding my skill set by diving deep into modern frontend development with React.
                 </p>
                 <p>
                    Alongside web development, I have hands-on experience running and optimizing Meta Ads campaigns to drive targeted digital growth. I believe in combining clean UI design with effective marketing strategies to build impactful web experiences.
                 </p>
            </div>

            {/* Feature Cards with Staggered Fade Up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  className="bg-[#18181b]/80 border border-zinc-800/80 p-5 rounded-2xl flex flex-col space-y-2 hover:border-[#8b5cf6]/40 transition-colors duration-300"
                >
                  <div className="p-2 w-fit rounded-lg bg-[#8b5cf6]/10">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-normal">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default About