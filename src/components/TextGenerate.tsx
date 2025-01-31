"use client";
import {useEffect} from "react";
import {motion, stagger, useAnimate, useInView} from "framer-motion";
import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const TextGenerateEffect = ({
                                       words,
                                       className,
                                       filter = true,
                                       duration = 0.5,
                                   }: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { margin: "-10% 0px -10% 0px" });

    const wordsArray = words.split(" ");

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                    opacity: 1,
                    filter: filter ? "blur(0px)" : "none",
                },
                {
                    duration: duration ? duration : 1,
                    delay: stagger(0.2),
                }
            );
        } else {
            animate(
                "span",
                {
                    opacity: 0,
                    filter: filter ? "blur(10px)" : "none",
                },
                {
                    duration: duration ? duration : 1,
                    delay: stagger(0.1),
                }
            );
        }
    }, [isInView]);

    return (
        <div className={cn("font-bold", className)}>
            <motion.div ref={scope} className="mt-4">
                <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
                    {wordsArray.map((word, idx) => (
                        <motion.span
                            key={word + idx}
                            className="dark:text-white text-black opacity-0"
                            style={{ filter: filter ? "blur(10px)" : "none" }}
                        >
                            {word}{" "}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
