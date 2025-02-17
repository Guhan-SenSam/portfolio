import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LinkIcon, XIcon } from '@primer/octicons-react';

import { Project } from './Project.tsx';

interface ProjectSidecardProps extends Project {
  onClose: () => void;
}

export const ProjectSidecard: React.FC<ProjectSidecardProps> = ({
  onClose,
  image,
  title,
  big_description,
  tags = [],
  link
}) => {
  return (
    <div className="w-full max-w-md h-full  bg-surface shadow-xl shadow-black flex flex-col">
      <div className="p-4 flex justify-start">
        <button onClick={onClose} className="p-2 hover:bg-onSurface rounded-full transition-colors">
          <XIcon className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Project Image */}
      <div className="px-6 mb-6">
        <div className="w-full aspect-video bg-gray-700 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Project Title */}
      <div className="px-6 mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
      </div>

      {/* Project Description */}
      <div className="px-6 mb-6">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{big_description}</p>
      </div>

      {/* Project Tags */}
      <div className="px-6 mb-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Link */}
      {link && (
        <div className="px-6 mb-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
            View Project <LinkIcon className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
};

// Wrapper component to handle the slide-in animation
interface SlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SlidePanel: React.FC<SlidePanelProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Add a class to the body that prevents scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none'; // Prevents touch scrolling on mobile
    } else {
      // Remove the class when panel is closed
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full z-50">
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
