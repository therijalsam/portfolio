import React from 'react';
import { Eye } from 'lucide-react';
import myImage from './image/IMG_0086.jpg';

export function About() {
  return (
    <>
      {/* Divider between Hero and About */}
      <hr className="my-16 border-t-2 border-gray-200" />

      <section id="about" className="py-20 bg-white font-sen">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          {/* Intro: text + large avatar + button */}
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 mb-16">
            {/* Left: Text */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Passionate about technology and driven to innovate in software engineering.
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed max-w-lg">
              <p>
                 I'm an undergraduate student in Electrical Engineering with a strong focus on Computer Engineering and applied software development. I love working at the intersection of hardware, algorithms, and user interaction—whether it's building interactive drone planning tools, experimenting with vision-language models, or automating interfaces with C++ and ImGui.
                </p>
                <p>
                 Currently, I’m working as an undergraduate research assistant, where I help design systems for visual planning, real-time image processing, and intelligent automation. From GUI-based drone deployments to resource-efficient AI pipelines, I’m always looking for ways to make complex technology feel seamless and human-centered.
                   </p>
                 <p>
                My goal is to keep exploring areas where software meets the physical world—whether through robotics, embedded systems, or AI—so I can help create tools that solve meaningful problems and are actually enjoyable to use.
                    </p>
                  </div>
              {/* View Resume button */}
              <div>
                <a
                  href="/resume.html"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Resume</span>
                </a>
              </div>
            </div>

            {/* Right: Larger Avatar */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-full shadow-lg flex-shrink-0">
              <img
                src={myImage}
                alt="Samrakshan Rijal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
