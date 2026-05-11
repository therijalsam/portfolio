import React from 'react';
import { Eye, Cpu, Terminal, Bot } from 'lucide-react';
import myImage from './image/profile.jpeg';

export function About() {
  return (
    <>
      {/* Divider */}
      <div className="w-full border-t border-gray-200" />

      <section
        id="about"
        className="bg-white py-24 px-6 md:px-10 font-mono"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Small Label */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                  About Me
                </p>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                  Embedded Systems,
                  <br />
                  Robotics, and
                  <br />
                  Low-Level Software Engineering
                </h2>
              </div>

              {/* Paragraphs */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  I am an undergraduate Electrical Engineering student with a
                  strong focus on Computer Engineering, embedded systems, and
                  low-level software development. I enjoy building systems that
                  connect software with real-world hardware through robotics,
                  firmware, computer vision, and real-time applications.
                </p>

                <p>
                  My work primarily involves C++, Linux, SDL3, OpenCV, and
                  Dear ImGui, where I design interactive visualization tools,
                  robotics simulation platforms, and high-performance graphical
                  systems. I am especially interested in systems programming,
                  hardware-software integration, and autonomous technologies.
                </p>

                <p>
                  Currently, I am conducting undergraduate research focused on
                  drone planning systems and robotics visualization tools. My
                  research includes real-time image processing, coordinate
                  computation, simulation-based deployment systems, and
                  interactive graphical interfaces for autonomous workflows.
                </p>

                <p>
                  My long-term goal is to contribute to robotics, embedded
                  systems, and intelligent autonomous platforms by developing
                  efficient low-level software that powers reliable and
                  high-performance systems.
                </p>
              </div>

              {/* Tech Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all duration-300">
                  <Cpu className="w-8 h-8 mb-3 text-black" />
                  <h3 className="font-semibold text-black mb-1">
                    Embedded Systems
                  </h3>
                  <p className="text-sm text-gray-600">
                    Firmware, GPIO, UART, SPI, I2C, low-level development
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all duration-300">
                  <Terminal className="w-8 h-8 mb-3 text-black" />
                  <h3 className="font-semibold text-black mb-1">
                    Systems Programming
                  </h3>
                  <p className="text-sm text-gray-600">
                    Linux, C++, multithreading, graphics, performance
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 hover:border-black transition-all duration-300">
                  <Bot className="w-8 h-8 mb-3 text-black" />
                  <h3 className="font-semibold text-black mb-1">
                    Robotics & AI
                  </h3>
                  <p className="text-sm text-gray-600">
                    OpenCV, simulation systems, autonomous platforms
                  </p>
                </div>
              </div>

              {/* Resume Button */}
              <div className="pt-4">
                <a
                  href="/resume.html"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-4
                    bg-black
                    text-white
                    rounded-xl
                    font-semibold
                    hover:bg-gray-800
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <Eye className="w-5 h-5" />
                  View Resume
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Background Border */}
                <div
                  className="
                    absolute
                    -inset-5
                    border
                    border-gray-200
                    rounded-[2rem]
                  "
                />

                {/* Image */}
                <div
                  className="
                    relative
                    w-[320px]
                    h-[420px]
                    md:w-[380px]
                    md:h-[500px]
                    overflow-hidden
                    rounded-[2rem]
                    shadow-2xl
                    border
                    border-gray-200
                  "
                >
                  <img
                    src={myImage}
                    alt="Samrakshan Rijal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}