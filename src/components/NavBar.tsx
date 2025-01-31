import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './styles.css';
import { DownloadIcon } from '@primer/octicons-react';

export const Navbar = () => {
    const googleDriveResumeUrl = "https://drive.usercontent.google.com/download?id=1rz5L5f3cM0ckd6yDajyB56M-TxiDrvfx&export=download&authuser=0"

    const downloadResume = async (_element: any, next: any) => {
        // sleep for 1 second to allow the button animation to finish
        await new Promise((resolve) => setTimeout(resolve, 1000));
        window.open(googleDriveResumeUrl, "_blank");
        next();
    };

    return (
      <nav className="w-full bg-transparent py-4 absolute z-50">
          <div className="container mx-auto flex items-center justify-between px-4">
              {/* Logo */}
              <div className="rounded-full overflow-clip bg-black">
                  <img src="/logo.jpg" alt="logo" className="h-16 scale-75" />
              </div>

              {/* Links */}
              <div className="flex space-x-8 items-center">
                  <a href="#aboutSection" className="hover:text-indigo-400 transition duration-300">
                      About
                  </a>
                  <a href="#techSection" className="hover:text-indigo-400 transition duration-300">
                      Technologies
                  </a>
                  <a href="#projectSection" className="hover:text-indigo-400 transition duration-300">
                      Projects
                  </a>
                  <a href="#contactSection" className="hover:text-indigo-400 transition duration-300">
                      Contact
                  </a>
                  <AwesomeButtonProgress type="primary" before={<DownloadIcon />} onPress={downloadResume}>
                      Resume
                  </AwesomeButtonProgress>
              </div>
          </div>
      </nav>
    );
};

