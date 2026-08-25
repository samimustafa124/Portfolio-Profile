import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#18181b] border-t border-zinc-800/80 py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-zinc-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Created By <span className="text-zinc-300 font-medium">Sami Mustafa</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer