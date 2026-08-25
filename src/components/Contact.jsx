import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-xl text-[#8b5cf6]" />,
    title: 'Location',
    value: 'Faisalabad, Pakistan',
  },
  {
    icon: <FaEnvelope className="text-xl text-[#8b5cf6]" />,
    title: 'Email',
    value: 'muhammadsamimustafa0@gmail.com',
  },
  {
    icon: <FaPhoneAlt className="text-xl text-[#8b5cf6]" />,
    title: 'Phone',
    value: '+92 305 9480821',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)

    try {
      const response = await fetch('https://formspree.io/f/xkjwlppn', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full min-h-screen bg-[#111113] py-24 px-6 md:px-16 text-white flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In <span className="text-[#8b5cf6]">Touch</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Sami Mustafa"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. hello@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#18181b] border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-8 py-3 rounded-xl bg-[#8b5cf6] text-white font-semibold text-sm hover:bg-[#7c3aed] transition-colors duration-200 shadow-lg shadow-purple-500/20 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-emerald-400 text-sm font-medium mt-2">
                  Message sent successfully! I will get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-400 text-sm font-medium mt-2">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </form>
          </motion.div>

          {/* Right Column: Contact Details & Socials */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col space-y-8 lg:pl-8"
          >
            {/* Contact Items */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#18181b] border border-zinc-800 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-zinc-400 mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-zinc-800">
              <h4 className="text-base font-bold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/923059480821" // Apna number yahan add karein (Format: https://wa.me/92XXXXXXXXXX)
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="p-3 rounded-xl bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-[#25D366] hover:border-[#25D366] transition-colors duration-200"
                >
                <FaWhatsapp className="text-lg" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/samimustafa6538"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="p-3 rounded-xl bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors duration-200"
                >
                  <FaFacebookF className="text-lg" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/whos.sami0"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-xl bg-[#18181b] border border-zinc-800 text-zinc-400 hover:text-[#E4405F] hover:border-[#E4405F] transition-colors duration-200"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact