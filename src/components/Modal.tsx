'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaGooglePlay, FaGithub } from 'react-icons/fa';
import { HiArrowTopRightOnSquare, HiXMark } from 'react-icons/hi2';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    playStore?: string;
    github?: string;
    website?: string;
  };
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <HiXMark className="h-6 w-6" />
                  </button>
                </div>

                <div className="aspect-video relative bg-gray-100 dark:bg-gray-700 rounded-xl mb-6">
                  <div className="absolute inset-0 bg-gradient-custom opacity-50 rounded-xl" />
                  <div className="absolute inset-0 flex items-center justify-center text-8xl text-gray-400 dark:text-gray-600">
                    <HiArrowTopRightOnSquare />
                  </div>
                </div>

                <Dialog.Title as="h3" className="h3 mb-4">
                  {project.title}
                </Dialog.Title>

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

                <div className="prose dark:prose-invert max-w-none mb-8">
                  {project.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-4"
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
                    >
                      <HiArrowTopRightOnSquare className="mr-2" />
                      Website
                    </a>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 