// src/components/Skills.tsx
import React from 'react';
import {
  Code,
  Layout,
  GitBranch,
  Cloud,
  Beaker,
  Cpu,
  Layers,
  Terminal,
} from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      icon: <Code className="w-12 h-12 text-black" />,
      title: 'Programming Languages',
      items: ['C', 'C++', 'Python', 'Java', 'Embedded C', 'Bash'],
    },
    {
      icon: <Cpu className="w-12 h-12 text-black" />,
      title: 'Embedded Systems',
      items: ['GPIO', 'UART', 'SPI', 'I2C', 'PWM', 'Interrupts'],
    },
    {
      icon: <Terminal className="w-12 h-12 text-black" />,
      title: 'Firmware & Low-Level',
      items: [
        'Register-Level Programming',
        'Memory-Mapped I/O',
        'Device Drivers',
        'Bare-Metal Programming',
        'RTOS Basics',
      ],
    },
    {
      icon: <Layers className="w-12 h-12 text-black" />,
      title: 'Robotics & Control',
      items: [
        'ROS 2',
        'OpenCV',
        'Gazebo',
        'RViz',
        'Sensor Fusion',
        'Motion Planning',
      ],
    },
    {
      icon: <GitBranch className="w-12 h-12 text-black" />,
      title: 'Tools & Debugging',
      items: [
        'Git',
        'CMake',
        'GDB',
        'Valgrind',
        'Logic Analyzer',
        'Oscilloscope',
      ],
    },
    {
      icon: <Cloud className="w-12 h-12 text-black" />,
      title: 'Linux & Systems',
      items: [
        'Linux',
        'Shell Scripting',
        'Networking',
        'Multithreading',
        'Docker',
      ],
    },
    {
      icon: <Beaker className="w-12 h-12 text-black" />,
      title: 'Testing & Validation',
      items: [
        'Unit Testing',
        'Hardware Bring-Up',
        'Serial Debugging',
        'Protocol Testing',
      ],
    },
    {
      icon: <Layout className="w-12 h-12 text-black" />,
      title: 'Software Engineering',
      items: [
        'OOP',
        'Data Structures',
        'Algorithms',
        'System Design',
        'REST APIs',
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-white font-mono border-t border-gray-200"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
            Technical Expertise
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
            Embedded Systems,
            <br />
            Firmware, Robotics,
            <br />
            and Low-Level Development
          </h2>

          <p className="mt-6 text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Building low-level software, embedded systems, robotics platforms,
            and high-performance applications using modern C++, Linux systems,
            firmware development, and real-time hardware communication.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="
                group
                border
                border-gray-200
                rounded-2xl
                p-6
                bg-white
                hover:bg-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              {/* Icon */}
              <div className="mb-5 flex justify-start text-black group-hover:text-white transition-colors duration-300">
                {cat.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">
                {cat.title}
              </h3>

              {/* Skill Items */}
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="
                      text-sm
                      text-gray-600
                      group-hover:text-gray-300
                      transition-colors
                      duration-300
                      flex
                      items-start
                    "
                  >
                    <span className="mr-2 text-black group-hover:text-white">
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};