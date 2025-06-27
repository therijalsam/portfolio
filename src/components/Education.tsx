import React from "react";
import { GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-300" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-900 tracking-wide">
          🎓 My Education
        </h2>
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>

          {/* Texas State University */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col md:flex-row items-start space-x-6 p-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border-l-4 border-indigo-500"
          >
            <div className="flex-shrink-0 relative z-10 mb-4 md:mb-0">
              <GraduationCap className="w-12 h-12 text-indigo-600 bg-white p-2 rounded-full shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800">Texas State University</h3>
              <p className="text-gray-600">Bachelor of Computer Science</p>
              <p className="text-gray-600">Major: Computer Engineering</p>
              <p className="text-gray-600">Minor: Data Analytics</p>
              <p className="text-gray-500">Expected Graduation: 2025</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-indigo-600 font-medium mt-2"
              >
                🏆 Dean's List | Research in AI & Data Science
              </motion.p>
            </div>
          </motion.div>

          {/* Connector Point */}
          {/* <div className="w-5 h-5 bg-indigo-500 rounded-full absolute left-[19px] top-[120px] shadow-lg"></div> */}
{/* 
          Janata Secondary School
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative flex flex-col md:flex-row items-start space-x-6 p-6 mt-8 bg-white shadow-lg rounded-xl hover:shadow-2xl transition duration-300 border-l-4 border-purple-500"
          >
            <div className="flex-shrink-0 relative z-10 mb-4 md:mb-0">
              <School className="w-12 h-12 text-purple-600 bg-white p-2 rounded-full shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-800">Janata Secondary School</h3>
              <p className="text-gray-600">Technical School Background</p>
              <p className="text-gray-500">Graduated: 2021</p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-purple-600 font-medium mt-2"
              >
                🏅 Awarded for Academic Excellence
              </motion.p>
            </div>
          </motion.div> */}

          {/* Connector Point */}
          {/* <div className="w-5 h-5 bg-purple-500 rounded-full absolute left-[19px] top-[280px] shadow-lg"></div> */}
        </div>
      </div>
    </section>
  );
}
