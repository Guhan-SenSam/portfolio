import { FC } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { ArrowRightIcon } from '@primer/octicons-react';
import { useProjectContext } from './ProjectContext.tsx';
import { Project } from './Project.tsx';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { openProject } = useProjectContext();

  return (
    <div className="w-full max-w-sm border-border rounded-2xl overflow-clip border-2 p-3 relative hover:scale-[102%] transition-transform duration-300 bg-surface shadow-lg shadow-black">
      <div className=" w-full h-56">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>
      <div className="mt-3 gap-y-3 flex flex-col">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{project.small_description}</p>
        <AwesomeButton
          type="secondary"
          after={<ArrowRightIcon />}
          onPress={() => openProject(project)}>
          View
        </AwesomeButton>
      </div>
      {/* Conditionally render the banner */}
      {project.isOpenSource && (
        <div className="absolute top-0 right-0  bg-accent text-black p-2 text-[12px] font-bold rounded-bl-2xl">
          Open Source
        </div>
      )}
    </div>
  );
};
