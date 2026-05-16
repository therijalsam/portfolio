// src/components/Projects.tsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";

import shiftappImage from "./image/shiftmakerapp.png";
import imagecoor from "./image/imagecoorproject.png";
import cone from "./image/cone.jpg";
import conexl from "./image/underconstuct.jpg";
import sdllds from "./image/3dusingsdl3.png";
import spiimage from "./image/spi.png";
import gpioimage from "./image/gpio.png";
import i2cimage from "./image/i2c.png";

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  preview?: string;
  techStack: string[];
}

export const Projects: React.FC = () => {
  const projects: Project[] = [

    {
      title: "ConeXL",
      description: "Currently Working!!",
      image: conexl,
      github: "https://github.com/therijalsam/",
      techStack: ["C++", "CMake", "Linux", "UDP", "Networking", "MCUs","Python"],
    },

    {
      title: "Cone",
      description:
        "A C++ command-line device management system for LAN discovery, remote command execution, file transfer, and real-time system monitoring across Linux and Raspberry Pi devices.",
      image: cone,
      github: "https://github.com/therijalsam/Cone",
      techStack: ["C++", "CMake", "Linux", "UDP", "Networking", "Raspberry Pi"],
    },
    {
      title: "Image Click Coordinates Tracker",
      description:
        "A desktop tool that lets users upload an image, click points, mark coordinates, and export the results to a text file for annotation, mapping, and computer vision workflows.",
      image: imagecoor,
      github: "https://github.com/therijalsam/image_coordinates",
      techStack: ["C++", "SDL2", "Dear ImGui", "CMake", "Docker"],
    },
    {
      title: "Shift Maker App",
      description:
        "A React and TypeScript web app for creating shift schedules, managing employees, setting maximum work hours, and exporting schedules as PDFs.",
      image: shiftappImage,
      github: "https://github.com/therijalsam/Shiftmakerapp.git",
      preview: "https://shiftmakerapp-7gxx9dadd-therijalsams-projects.vercel.app/",
      techStack: ["React", "TypeScript", "Vite", "Node.js", "Lucide React"],
    },
    {
      title: "3D Using SDL3",
      description:
        "A lightweight C++ graphics project that demonstrates 3D rendering, camera movement, coordinate transformations, and real-time visualization on Linux.",
      image: sdllds,
      github: "https://github.com/therijalsam/3dusingsdl3",
      techStack: ["C++", "SDL3", "OpenGL", "CMake", "Linux"],
    },
    {
      title: "SPI Inertial Measurement System",
      description:
        "An embedded systems project that communicates with an inertial measurement sensor using SPI to collect accelerometer and gyroscope data in real time.",
      image: spiimage,
      github: "https://github.com/therijalsam/SPI-Inertial-Measurement-System",
      techStack: ["C", "SPI", "Embedded Systems", "UART", "Microcontrollers"],
    },
    {
      title: "Distributed Stoplight System",
      description:
        "A low-level embedded project that simulates a traffic light network using GPIO communication, synchronized state control, and real-time hardware logic.",
      image: gpioimage,
      github: "https://github.com/therijalsam/Distributed-Stoplight-System-using-GPIO",
      techStack: ["C", "GPIO", "Embedded Systems", "Microcontrollers"],
    },

    {
      title: "I2C Temperature Sensor Interface",
      description:
        " A low-level embedded systems project that interfaces with a digital temperature sensor using the I2C communication protocol. The system reads real-time temperature data through direct register communication and processes sensor values using microcontroller peripherals and embedded C programming.",
      image: i2cimage,
      github: "https://github.com/therijalsam/Distributed-Stoplight-System-using-GPIO",
      techStack: ["C", "GPIO", "Embedded Systems", "Microcontrollers"],
    },

    {
      title: "iGPT AI Desktop Assistant",
      description:
        " A Java desktop AI assistant application built with Java Swing and OpenAI APIs. The project supports conversational AI interactions, AI image generation, configurable personalities, and modern API integration through a desktop interface.",
      image: image,
      github: " https://bitbucket.org/oou11/igpt/src/main/src/",
      techStack: [ "Java", "Java Swing","OpenAI API","JSON","REST API","Desktop Application",],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white font-sen">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Selected Projects
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="relative min-h-[360px] flex items-center"
            >
              <div
                className={`w-full md:w-[58%] h-[310px] md:h-[360px] overflow-hidden bg-gray-200 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`relative md:absolute w-[92%] md:w-[55%] -mt-20 md:mt-0 mx-auto md:mx-0 bg-[#f3c13a] p-8 md:p-12 shadow-xl ${
                  index % 2 === 0 ? "md:left-0" : "md:right-0"
                }`}
              >
                <h3 className="text-2xl md:text-4xl font-extrabold tracking-wide text-[#4b0b0b] uppercase mb-5">
                  {project.title}
                </h3>

                <p className="text-base md:text-lg leading-8 text-[#4b0b0b] mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-semibold bg-white/40 text-[#4b0b0b] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#4b0b0b] border-b-2 border-[#4b0b0b] pb-1 hover:opacity-70 transition"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}

                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#4b0b0b] border-b-2 border-[#4b0b0b] pb-1 hover:opacity-70 transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};