// src/components/Experience.tsx
import React from "react";
import {
  GraduationCap,
  Briefcase,
  User,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6 text-gray-800" />,
      title: "Education",
      degree: "B.S. Electrical Engineering",
      institution: "Texas State University",
      major: "Computer Engineering Concentration",
      minor: "Mathematics Minor",
      date: "Expected Graduation: May 2028",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-gray-800" />,
      title: "Internship",
      subtitle: "Software Engineering Intern at XYZ Corp.",
      date: "June 2023 – August 2023",
    },
    {
      icon: <User className="w-6 h-6 text-gray-800" />,
      title: "Part-Time",
      subtitle: "Teaching Assistant, Electrical Engineering Dept.",
      date: "September 2022 – Present",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-gray-800" />,
      title: "Research",
      subtitle: "Embedded systems under Prof. Smith",
      date: "September 2022 – Present",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white font-sen px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <span className="text-base font-medium text-gray-500 uppercase">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Educational and Professional Journey
          </h2>
          <div className="flex space-x-4">
            <button className="inline-flex items-center px-5 py-2 border border-gray-900 rounded-md text-gray-900 font-medium hover:bg-gray-100 transition">
              View
            </button>
            
          </div>
        </div>

        {/* Right Column: Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 w-px bg-gray-300 h-full" />

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-start space-x-4"
              >
                {/* Icon */}
                <div className="flex-none bg-white p-2 rounded-full border border-gray-300">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Education has separate fields */}
                  {item.title === "Education" ? (
                    <div className="space-y-1">
                      <p className="text-gray-700">
                        <span className="font-medium">{item.degree}</span>, {item.institution}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Major:</span> {item.major}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Minor:</span> {item.minor}
                      </p>
                    </div>
                  ) : (
                    <p className="text-gray-700">{item.subtitle}</p>
                  )}

                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
