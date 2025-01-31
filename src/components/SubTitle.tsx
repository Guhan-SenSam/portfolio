import {useCallback, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const SubTitle = ({
                             words,
                             duration = 3000,
                             className,
                         }: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating) {
            setTimeout(() => {
                startAnimation();
            }, duration);
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { delay: 0.1, duration: 0.6, ease: "easeOut" }, // Delay before animation starts
                }}
                exit={{
                    opacity: 0,
                    y: -30,
                    filter: "blur(10px)",
                    transition: { duration: 0.4, ease: "easeIn" },
                }}
                viewport={{ once: false, amount: 0.2 }}
                className={cn(
                    "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
                    className
                )}
                key={currentWord}
            >
                {currentWord.split(" ").map((word, wordIndex) => (
                    <motion.span
                        key={word + wordIndex}
                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            delay: 0.5 + wordIndex * 0.3, // Adds slight delay to each word
                            duration: 0.3,
                        }}
                        className="inline-block whitespace-nowrap"
                    >
                        {word.split("").map((letter, letterIndex) => (
                            <motion.span
                                key={word + letterIndex}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: 0.5 + wordIndex * 0.3 + letterIndex * 0.05, // Staggered animation
                                    duration: 0.2,
                                }}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
