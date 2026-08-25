import React from 'react'

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className="group bg-[#18181b] border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:border-[#8b5cf6]/50 transition-all duration-300 flex flex-col justify-between">
      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#8b5cf6] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-zinc-800/80">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard