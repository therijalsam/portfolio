// src/components/Research.tsx
import React from "react";
import { CheckCircle, ChevronRight } from "lucide-react";
import researchImage from "./image/research.jpg";

export default function Research() {
  return (
    <section
      id="research"
      className="bg-black text-white py-24 px-6 md:px-10 font-mono"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Small Label */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Research & Development
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Robotics Systems,
              <br />
              Embedded Software,
              <br />
              and Interactive Drone Planning
            </h2>
          </div>

          {/* Intro */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Currently conducting research focused on drone planning systems,
            robotics visualization, and real-time interactive software using
            C++ and Linux-based development environments. The project explores
            high-performance graphical systems, real-time image processing, and
            simulation tools for autonomous and human-assisted robotics
            workflows.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-5">
            {[
              "Developing high-performance graphical tools using SDL3 and Dear ImGui for drone deployment simulation and coordinate visualization.",
              "Integrating OpenCV pipelines for image preprocessing, edge detection, and real-time coordinate computation.",
              "Implementing low-level rendering systems, interactive input handling, and file-based coordinate export workflows in C++.",
              "Exploring robotics-oriented architectures for visualization, planning, and autonomous system interaction in Linux environments.",
              "Contributing to technical demonstrations, system design discussions, and future robotics planning tools.",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-white mt-1 flex-shrink-0" />

                <span className="text-gray-300 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                px-6
                py-3
                bg-white
                text-black
                rounded-lg
                font-semibold
                hover:bg-gray-200
                transition-all
                duration-300
              "
            >
              View Projects
              <ChevronRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                px-6
                py-3
                border
                border-gray-700
                text-white
                rounded-lg
                font-semibold
                hover:border-white
                transition-all
                duration-300
              "
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div
            className="
              absolute
              -inset-4
              border
              border-gray-800
              rounded-3xl
            "
          />

          <img
            src={researchImage}
            alt="Robotics and Embedded Systems Research"
            className="
              relative
              w-full
              h-full
              object-cover
              rounded-3xl
              shadow-2xl
              border
              border-gray-800
            "
          />
        </div>
      </div>
    </section>
  );
}