import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';


export const LandingSection = () => {
    const [modelLoaded, setModelLoaded] = useState(false);

    const handleModelLoad = () => {
        setModelLoaded(true);
    };

    return (
        <section className="w-screen h-screen flex items-center justify-center overflow-hidden bg-transparent" id="landingSection">

            {modelLoaded ? (
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -90 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <motion.h3
                        className="text-2xl text-white font-medium text-left leading-none"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                    >
                        Hello, I'm
                    </motion.h3>
                    <motion.h1
                        className="text-10xl text-white font-bold leading-none"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                    >
                        Guhan SenSam
                    </motion.h1>
                    <motion.h3
                        className="text-2xl text-white font-medium text-right leading-none"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                    >
                        Mobile App Developer
                    </motion.h3>
                </motion.div>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/logo.jpg" alt="loading" className="w-[20rem] h-[20rem] rounded-full" />
                </div>
            )}

            <React.Suspense
                fallback={
                    <div className="absolute inset-0 flex items-center justify-center bg-background">
                        <p className="text-white text-xl">Loading...</p>
                    </div>
                }
            >
                <div className="absolute inset-0">
                    <Spline
                        scene="https://prod.spline.design/BsWAJiP-205yeLdm/scene.splinecode"
                        className="absolute inset-0"
                        onLoad={handleModelLoad}
                    />
                </div>
            </React.Suspense>
        </section>
    );
};
