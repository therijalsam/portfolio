// src/components/Research.tsx
import React from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
import researchImage from "./image/research.jpg"; // replace with your actual image

export default function Research() {
  return (
    <section id="research" className="bg-white py-16 px-4 md:px-8 font-sen">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Small label */}
          <span className="text-base md:text-lg font-medium text-gray-500 uppercase">
            Research
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Innovative Research in vision-language models (VLMs) and intelligent automation
          </h2>

          {/* Intro paragraph */}
          <p className="text-gray-700 leading-relaxed">
            I am currently involved in hands-on research under the guidance of my professor, where we are building an intelligent 2D drone planning system for interactive image-based coordination and deployment. Our project emphasizes real-time visualization, intuitive interface design, and efficient image handling in simulation environments.          </p>

          {/* Bullet list */}
          <ul className="space-y-4">
            {[
              "Developing an SDL3-based graphical interface for drone placement and manipulation.",
              "Integrating OpenCV and C++ to support real-time image preprocessing and coordinate computation.",
              " Exploring interaction techniques with Dear ImGui and file-based session management.",
              " Contributing to research presentations and future tools for human-AI visual planning systems.",
            ].map((text, i) => (
              <li key={i} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap items-center space-x-4 mt-6">
            <a
              href="#learn-more"
              className="inline-flex items-center px-6 py-2 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-100 transition"
            >
              Learn More
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>
           
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="w-full h-auto">
          <img
            src={researchImage}
            alt="Research discussion"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
