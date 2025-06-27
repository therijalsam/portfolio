import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white font-sen">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="bg-gray-100 p-8 rounded-xl shadow-md space-y-6">
          <h3 className="text-2xl font-semibold">Get In Touch</h3>
          <p className="text-gray-700">
            Feel free to reach out if you have any questions or would like to discuss potential
            opportunities. I'm currently looking for internship positions in software engineering or
            embedded systems development.
          </p>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <a href="mailto:oou11@txstate.edu" className="hover:underline">
                oou11@txstate.edu
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <a href="mailto:therijalsamrakshan96@gmail.com" className="hover:underline">
                therijalsamrakshan96@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-gray-600" />
              <a
                href="https://linkedin.com/in/therijalsam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/therijalsam
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Github className="w-5 h-5 text-gray-600" />
              <a
                href="https://github.com/therijalsam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/therijalsam
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
