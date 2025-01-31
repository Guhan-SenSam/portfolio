import React, {useContext} from "react";

import {Project} from "./Project.tsx";

interface ProjectContextType {
    openProject: (details: Project) => void;
    closeProject: () => void;
    isOpen: boolean;
    currentProject: Project | null;
}

export const ProjectContext = React.createContext<ProjectContextType | null>(null);

export const useProjectContext = () => {
    const context = useContext(ProjectContext);
    if (!context) throw new Error('useProject must be used within a ProjectProvider');
    return context;
};