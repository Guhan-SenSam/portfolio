import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './styles.css';
import { DownloadIcon } from '@primer/octicons-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const googleDriveResumeUrl = "https://drive.usercontent.google.com/download?id=1rz5L5f3cM0ckd6yDajyB56M-TxiDrvfx&export=download&authuser=0"

    const downloadResume = async (_element: any, next: any) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.open(googleDriveResumeUrl, "_blank");
        next();
    };

    const menuItems = [
        { label: 'About', href: '#aboutSection' },
        { label: 'Technologies', href: '#techSection' },
        { label: 'Projects', href: '#projectSection' },
        { label: 'Contact', href: '#contactSection' },
    ];

    return (
      <nav className="w-full bg-transparent py-4 absolute z-50">
          <div className="container mx-auto flex items-center justify-between px-4">
              {/* Logo */}
              <div className="rounded-full overflow-clip bg-black">
                  <img src="/logo.jpg" alt="logo" className="scale-75 h-14 sm:h-16" />
              </div>

              {/* Hamburger Menu Button */}
              <button
                className="md:hidden flex flex-col space-y-[8px]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white block transition-transform"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-6 h-0.5 bg-white block"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white block transition-transform"
                  />
              </button>

              <div className="hidden md:flex space-x-8 items-center">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="hover:text-indigo-400 transition duration-300"
                    >
                        {item.label}
                    </a>
                  ))}
                  <AwesomeButtonProgress type="primary" before={<DownloadIcon />} onPress={downloadResume}>
                      Resume
                  </AwesomeButtonProgress>
              </div>
          </div>

          <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden absolute top-full left-0 w-full bg-surface/60 backdrop-blur-lg"
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {menuItems.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="text-white hover:text-indigo-400 transition duration-300 text-lg"
                            onClick={() => setIsOpen(false)}
                          >
                              {item.label}
                          </a>
                        ))}
                        <div className="py-2">
                            <AwesomeButtonProgress
                              type="primary"
                              before={<DownloadIcon />}
                              onPress={downloadResume}
                            >
                                Resume
                            </AwesomeButtonProgress>
                        </div>
                    </div>
                </motion.div>
              )}
          </AnimatePresence>
      </nav>
    );
};