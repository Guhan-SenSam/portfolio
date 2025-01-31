import { SubTitle } from '../components/SubTitle.tsx';
import { motion } from 'motion/react';
import { ProjectTabEntry, ProjectTabs } from '../components/projects/ProjectsTabs.tsx';
import { useState } from 'react';
import { ProjectContext } from '../components/projects/ProjectContext.tsx';
import { Project } from '../components/projects/Project.tsx';

import projectsData from '../components/projects/projects.json';
import { ProjectSidecard, SlidePanel } from '../components/projects/SideCard.tsx';

const PROJECTS: Project[] = projectsData as unknown as Project[]; // Type assertion
const filterProjectsByTag = (tag: string): Project[] => {
    if (tag === "All") {
        return PROJECTS;
    }
    return PROJECTS.filter(project => project.tags.includes(tag));
};

const TABS = [
    {
        title: "Mobile",
        value: "mobile",
        content: <ProjectTabEntry title={"Mobile Projects"} content={filterProjectsByTag("Mobile")} />
    },
    {
        title: "Frontend",
        value: "frontend",
        content: <ProjectTabEntry title={"Frontend Projects"} content={filterProjectsByTag("Frontend")} />
    },
    {
        title: "UI/UX",
        value: "uiux",
        content: <ProjectTabEntry title={"UI/UX"} content={filterProjectsByTag("UI/UX")} />
    },
    {
        title: "Desktop",
        value: "desktop",
        content: <ProjectTabEntry title={"Desktop Applications"} content={filterProjectsByTag("Desktop")} />
    },
    {
        title: "Libraries",
        value: "libraries",
        content: <ProjectTabEntry title={"Libraries"} content={filterProjectsByTag("Library")} />
    },
    {
        title: "All",
        value: "all",
        content: <ProjectTabEntry title={"All Projects"} content={filterProjectsByTag("All")} />
    }
];




export const ProjectsSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    const openProject = (details: Project) => {
        setCurrentProject(details);
        setIsOpen(true);
    };

    const closeProject = () => {
        setIsOpen(false);
        setCurrentProject(null);
    };


    return (
        <ProjectContext.Provider value={{
            openProject,
            closeProject,
            isOpen,
            currentProject

        }}>
        <section className="w-screen overflow-hidden bg-surface sm:pt-[10rem] h-[90rem] " id="projectSection">
            <div className=" flex flex-col text-center mt-20 items-center justify-center">
                <SubTitle words={["Projects and Libraries"]} duration={3000} className="sm:text-5xl text-3xl font-bold text-primary mb-2"/>
                <motion.div
                    className="h-1 w-40 bg-blue-500 "
                    initial={{scaleX: 0}}
                    whileInView={{
                        scaleX: 1,
                        transition: {duration: 0.6, ease: "easeOut"},
                    }}
                    viewport={{once: false, amount: 0.2}}
                    style={{originX: 0.5}}
                />
            </div>
            <div
                className="[perspective:1000px] relative flex flex-col max-w-[90rem] mx-auto w-full justify-start mt-10 h-full" >
                <ProjectTabs tabs={TABS} />
            </div>
            <SlidePanel isOpen={isOpen} onClose={closeProject}>
                <ProjectSidecard
                    onClose={closeProject}
                    {...currentProject!}
                >
                </ProjectSidecard>
            </SlidePanel>
        </section>
        </ProjectContext.Provider>
    );
}