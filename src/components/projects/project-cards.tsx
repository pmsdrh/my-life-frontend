import { Button } from "@heroui/react";
import TaskGroup from "../tasks/task-group";
import { PlusIcon } from "../icons";

const ProjectCards: React.FC<{ project: IUseProject }> = ({ project }) => {

    return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {project.project.GroupTasks?.map(item => (
                <TaskGroup taskgroup={item} project={project} />
            ))}
            <Button
                onClick={() => project.addGroup('بدون عنوان')}
                className="w-full h-full bg-transparent border-dashed border-2 border-gray-400">
                <PlusIcon />
            </Button>
        </div>
    );
}

export default ProjectCards;