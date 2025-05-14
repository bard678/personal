'use client';

import { useState } from 'react';
import { FaGooglePlay, FaGithub } from 'react-icons/fa';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import Modal from './Modal';

const projects = [
  {
    title: 'Fitness Tracker Pro',
    description: 'A comprehensive fitness tracking app with real-time workout monitoring, custom exercise plans, and progress analytics. Features include:\n\n• Real-time workout tracking with GPS\n• Custom exercise plan creation\n• Progress analytics and insights\n• Social features for workout sharing\n• Integration with wearable devices\n• Nutrition tracking and meal planning',
    image: '/projects/fitness-app.jpg',
    tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'MVVM'],
    playStore: 'https://play.google.com/store',
    github: 'https://github.com',
  },
  {
    title: 'Smart Home Controller',
    description: 'IoT-based home automation app for controlling smart devices, with voice commands and energy consumption tracking. Key features include:\n\n• Voice command integration\n• Real-time device status monitoring\n• Energy usage analytics\n• Automated scheduling\n• Multi-user access control\n• Integration with major IoT platforms',
    image: '/projects/smart-home.jpg',
    tags: ['Java', 'Firebase', 'Material Design', 'IoT'],
    playStore: 'https://play.google.com/store',
    github: 'https://github.com',
  },
  {
    title: 'Crypto Wallet',
    description: 'Secure cryptocurrency wallet with real-time price tracking, multi-coin support, and biometric authentication. Features include:\n\n• Multi-cryptocurrency support\n• Real-time price tracking\n• Biometric security\n• Transaction history\n• Portfolio analytics\n• Backup and recovery options',
    image: '/projects/crypto-wallet.jpg',
    tags: ['Kotlin', 'Blockchain', 'Security', 'APIs'],
    playStore: 'https://play.google.com/store',
    website: 'https://example.com',
  },
];

const ProjectCard = ({ project, index, onClick }: { project: typeof projects[0], index: number, onClick: () => void }) => (
  <div
    className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer opacity-0 animate-fade-in"
    onClick={onClick}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="aspect-video relative bg-gray-100 dark:bg-gray-700">
      <div className="absolute inset-0 bg-gradient-custom opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center text-6xl text-gray-400 dark:text-gray-600">
        <HiArrowTopRightOnSquare />
      </div>
    </div>
    <div className="p-6">
      <h3 className="h3 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {project.description.split('\n')[0]}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.playStore && (
          <a
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGooglePlay className="mr-2" />
            Play Store
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        )}
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <HiArrowTopRightOnSquare className="mr-2" />
            Website
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container-custom">
        <div className="text-center mb-12 opacity-0 animate-fade-in">
          <h2 className="h2 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing some of my best Android development work. These projects demonstrate my expertise in creating robust, user-friendly mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || projects[0]}
      />
    </section>
  );
};

export default Projects; 