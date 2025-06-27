// src/components/Projects.tsx
import React, { useState, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  Code2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import shiftappImage from './image/shiftmakerapp.png';
import imagecoor from './image/imagecoorproject.png';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  preview?: string;
  techStack: string[];
}

export const Projects: React.FC = () => {
  // Your original projects
  const baseProjects: Project[] = [
    {
      title: 'Shift Maker App',
      description:
        'Shift Making App is a modern web application built with React TSX and Vite, designed to streamline shift schedule management. Users can create, view, and generate shift schedules for multiple days, with the ability to track employee availability and set maximum working hours. The app offers a smooth, responsive interface using Lucide React components and allows users to download schedules as PDFs. With features like customizable time slots and employee assignment, it is perfect for managing shifts efficiently. Developed with Node.js and optimized for fast performance.',
      image: shiftappImage,
      github: 'https://github.com/therijalsam/Shiftmakerapp.git',
      preview:
        'https://shiftmakerapp-7gxx9dadd-therijalsams-projects.vercel.app/',
      techStack: ['React', 'TypeScript', 'Lucide React', 'Node.js', 'Vite'],
    },
    {
      title: 'Image Click Coordinates Tracker',
      description:
        'The Image Click Coordinates Tracker is a lightweight desktop application built with C++, SDL2, and Dear ImGui. It allows users to upload an image, click on any point to mark it, and save the relative coordinates to a text file. This tool is especially useful for annotation, game development, or any task requiring precise coordinate mapping.',
      image: imagecoor,
      github: 'https://github.com/therijalsam/image_coordinates',
      techStack: [
        'C++',
        'SDL2',
        'SDL2_image',
        'Dear ImGui',
        'ImGuiFileDialog',
        'CMake',
        'Docker',
      ],
    },
    
    {
      title: 'lorem',
      description:
        'lorem',
      image:
        'lorem',
      techStack: ['React', 'Redux', 'Node.js', 'Socket.io', 'MongoDB'],
    },
    {
      title: 'lorem',
      description:
        'lorem',
      image:
        'lorem',
      techStack: ['React', 'Redux', 'Node.js', 'Socket.io', 'MongoDB'],
    },
    {
      title: 'lorem',
      description:
        'lorem',
      image:
        'lorem',
      techStack: ['React', 'Redux', 'Node.js', 'Socket.io', 'MongoDB'],
    },
    {
      title: 'lorem',
      description:
        'lorem',
      image:
        'lorem',
      techStack: ['React', 'Redux', 'Node.js', 'Socket.io', 'MongoDB'],
    },
  ];

  // Responsive visible count: 1 on mobile, 2.5 on md+
  const [visibleCount, setVisibleCount] = useState<number>(
    window.innerWidth < 768 ? 1 : 2.5
  );

  useEffect(() => {
    const onResize = () =>
      setVisibleCount(window.innerWidth < 768 ? 1 : 2.5);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Duplicate the first `ceil(visibleCount)` items for seamless wrap
  const extra = Math.ceil(visibleCount);
  const projects = [...baseProjects, ...baseProjects.slice(0, extra)];
  const total = baseProjects.length;

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const id = setInterval(next, 10000);
    return () => clearInterval(id);
  }, [total]);

  const slideWidth = 100 / visibleCount;

  return (
    <section id="projects" className="py-20 bg-white font-sen">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Projects
        </h2>

        {/* Always-enabled controls */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${current * slideWidth}%)`,
            }}
          >
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="flex-none px-2"
                style={{ width: `${slideWidth}%` }}
              >
                <div className="h-full flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-200">
                  <div className="relative group">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-32 md:h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                      <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-200">
                        {proj.github && (
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {proj.preview && (
                          <a
                            href={proj.preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow p-4 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-700 text-base mb-4 flex-grow">
                      {proj.description}
                    </p>
                    <div>
                      <div className="flex items-center mb-2">
                        <Code2 className="w-5 h-5 text-gray-500 mr-2" />
                        <span className="text-sm font-semibold text-gray-800">
                          Tech Stack
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {proj.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
