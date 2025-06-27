import React from 'react';

// Components
import { Navbar } from './components/Hero';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import {Skills} from './components/skills';
import { Projects } from './components/Projects';
import Research from './components/Research';
import {Contact} from './components/Contact';
import { Footer } from './components/Footer';
import DisableDevTools from './components/DisableDevTools';

function App() {
  return (
    <div className="min-h-screen">
      {/* <DisableDevTools /> */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Research />
      <Experience />
      <Skills />
      {/* Uncomment below when Education section is ready */}
      {/* <Education /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
