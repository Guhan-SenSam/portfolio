import {useState} from "react";
import {motion} from "framer-motion";
import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {ProjectCard} from "./ProjectCard.tsx";
import {Project} from "./Project.tsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | never;
};

export const ProjectTabs = ({
     tabs: propTabs,
     containerClassName,
     activeTabClassName,
     tabClassName,
    contentClassName
 }: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    return (
        <>
            <div
                className={cn(
                    "flex justify-center items-center overflow-auto sm:overflow-visible no-visible-scrollbar ",
                    containerClassName
                )}
            >
                <div className="inline-flex flex-row justify-center border-2 rounded-2xl border-border p-1 mb-10">
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                        }}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={cn("relative px-4 py-2 rounded-full", tabClassName)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0  bg-onSurface rounded-full",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span className="relative block text-black dark:text-white">
                        {tab.title}
                    </span>
                    </button>
                ))}
                </div>
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("mt-32", contentClassName)}
            />
        </>
    );
};

export const FadeInDiv = ({
          className,
          tabs,
          hovering,
  }: {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
    };
    return (
        <div className="relative w-full h-full">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className={cn("w-full h-full absolute top-0 left-0", className)}
                >
                    {tab.content}
                </motion.div>
            ))}
        </div>
    );
};

export const ProjectTabEntry = ({ title, content }: { title: string, content: Project[] }) => {
    return (
        <div className="bg-background w-full h-[60rem] overflow-auto rounded-2xl p-10 ">
            <h2 className="text-white font-semibold text-4xl mb-8">{title}</h2>
            <div className="flex flex-wrap justify-start h-auto gap-20">
                {content.map((project: Project) => (
                    <ProjectCard
                        project={project}
                    />
                ))}
            </div>
        </div>
    );
};


