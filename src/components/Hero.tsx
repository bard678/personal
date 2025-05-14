'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="min-h-[100svh] flex items-center justify-center py-20 px-4 sm:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-6">
              <h1 className="h1">
                Android Developer
                <span className="text-gradient block mt-2">& Mobile Expert</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting beautiful and performant mobile experiences with modern Android development.
                Passionate about creating apps that users love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="btn-primary w-full sm:w-auto">
                  Get in Touch
                </a>
                <a href="#projects" className="btn-secondary w-full sm:w-auto">
                  View Projects
                </a>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start pt-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub aria-label="GitHub Profile" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin aria-label="LinkedIn Profile" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaTwitter aria-label="Twitter Profile" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-custom rounded-3xl rotate-6 transform-gpu"></div>
              <div className="absolute inset-0 bg-gradient-custom rounded-3xl -rotate-6 transform-gpu"></div>
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-custom flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/10">
                <FaAndroid className="text-[12rem] md:text-[16rem] text-blue-600/40 dark:text-blue-400/40 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 