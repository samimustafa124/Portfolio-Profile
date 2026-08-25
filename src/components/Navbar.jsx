import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-dark-100/90 px-8 py-4 shadow-lg backdrop-blur-sm'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div>
          <a href="#" className='relative text-3xl font-bold text-white tracking-tight'>
            Sami<span className='text-[#8b5cf6]'>Mustafa</span>
            <span className='absolute -bottom-1.5 left-0 h-2 w-2 rounded-full bg-[#8b5cf6]'></span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-10'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='group relative text-white/80 transition duration-300 hover:text-[#8b5cf6]'
            >
              <span>{link.name}</span>
              <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-[#8b5cf6] transition-all duration-300 group-hover:w-full'></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            aria-label='Toggle navigation'
            className='text-2xl text-white hover:text-[#8b5cf6] focus:outline-none transition duration-300'
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden bg-dark-100/95 px-4 pt-4 pb-6 mt-4 border-t border-white/10'>
          <div className='flex flex-col space-y-4'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className='text-lg text-white/80 hover:text-[#8b5cf6] transition duration-200'
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar