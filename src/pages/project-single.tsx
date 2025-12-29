import ProjectCards from "@/components/projects/project-cards";
import useProject from "@/hooks/useProject";
import { Divider } from "@heroui/react";
import { useParams } from "react-router-dom";

const SingleProjectPage = () => {
    const { id } = useParams();
    const project = useProject(id as string);


    return (
        <section className="p-10 rounded-2xl shadow bg-default flex flex-col gap-10">
            <h1 className="mb-2 text-3xl font-semibold text-dark dark:text-white text-center">
                {project.project.name}
            </h1>
            <Divider />
            <ProjectCards project={project} />
        </section>
    )
}

export default SingleProjectPage;