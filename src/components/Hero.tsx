import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import bannerImage from './image/cover.jpg';

// Navbar (unchanged)
export function Navbar() {
  return (
    <nav className="w-full bg-white shadow-lg z-50 font-sen">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        <div className="text-4xl text-black font-bold font-kode">
          SR
          <span className="text-black">
            <Typewriter
              words={["."]}
              loop
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={100}
            />
          </span>
        </div>
        {/* …your menu links… */}
      </div>
    </nav>
  );
}

// Hero (updated heading text)
export function Hero() {
  return (
    <section className="font-sen">
      {/* Full-width banner */}
      <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Intro Content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          {/* Left: Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-kode leading-tight">
            <Typewriter
              words={[
                'Hello', 'Hola', 'नमस्ते', 'Bonjour', 'こんにちは', '안녕하세요',
                'مرحبا', 'Привет', 'Ciao', 'Hallo'
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1500}
            />{' '}
            <br></br>
            I’m Samrakshan Rijal.
          </h1>

          {/* Right: Paragraph + Buttons */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
              I am an aspiring Software Engineer with a passion for technology and innovation. Currently pursuing my degree in Electrical Engineering at TXST while engaging in exciting research projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#projects"
                
                className="inline-block px-6 py-3 border border-black text-black font-medium rounded-md hover:bg-gray-100 transition"
              >
                My Projects
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
