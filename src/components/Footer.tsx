import React from 'react';
import { Github, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black text-white py-8">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/therijalsam"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/therijalsam"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:therijalsamrakshan96@gmail.com"
          className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Samrakshan&nbsp;Rijal. All rights reserved.
        </p>
      </div>

      {/* Scroll to Top */}
      <a
        href="#top"
        className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors"
        aria-label="Back to top"
      >
        <ArrowUpCircle className="w-6 h-6 text-white" />
      </a>
    </footer>
  );
}
