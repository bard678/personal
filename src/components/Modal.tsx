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
    <Transition.Root show={isOpen} as={Fragment}>
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <HiXMark className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div>
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
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {project.description}
                  </p>
                  <div className="flex gap-3">
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
} 