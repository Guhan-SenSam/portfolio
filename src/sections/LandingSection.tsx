import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export const LandingSection = () => {
  const [modelLoaded, setModelLoaded] = useState(false);

  const handleModelLoad = () => {
    setModelLoaded(true);
  };

  return (
    <section className="relative w-screen h-screen flex items-end justify-center overflow-hidden " id="landingSection">

      {/* Text Content - Appears After Model Loads */}
      {modelLoaded ? (
        <motion.div
          className="absolute text-center flex flex-col top-0 bottom-0 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: -90 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h3
            className="sm:text-2xl  text-3xl text-white font-medium sm:text-left leading-none mb-5 sm:mb-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          >
            Hello, I'm
          </motion.h3>
          <motion.h1
            className="sm:text-10xl text-7xl text-white font-bold leading-none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          >
            Guhan SenSam
          </motion.h1>
          <motion.h3
            className="sm:text-2xl text-2xl text-white font-medium sm:text-right leading-none mt-5 sm:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          >
            Mobile App Developer
          </motion.h3>
          <div className="sm:h-[5rem]" />
        </motion.div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/logo.jpg" alt="loading" className="w-[20rem] h-[20rem] rounded-full" />
        </div>
      )}

      {/* 3D Model - Fullscreen and Centered */}
      <React.Suspense
      >
        <div className="absolute sm:opacity-100 w-screen h-[70%] sm:h-screen">
          <Spline
            scene="https://prod.spline.design/BsWAJiP-205yeLdm/scene.splinecode"
            className=""

            onLoad={handleModelLoad}
          />
        </div>
      </React.Suspense>
    </section>
  );
};
