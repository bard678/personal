'use client';

import { FaAndroid } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-custom opacity-40" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <FaAndroid className="text-7xl sm:text-8xl text-blue-600 dark:text-blue-500" />
          </div>
          
          <h1 className="h1 mb-6">
            Android Developer crafting{' '}
            <span className="text-gradient">beautiful</span> mobile experiences
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 text-balance">
            I specialize in creating elegant, performant, and user-friendly Android applications
            that deliver exceptional mobile experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 