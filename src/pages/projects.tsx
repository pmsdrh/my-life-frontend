import ProjectTable from "@/components/projects/project-table";
import useProjects from "@/hooks/useProjects"
import DefaultLayout from "@/layouts/default";

const ProjectPage = () => {
    const projects: IUseProject = useProjects();

    return (

        <DefaultLayout>
            <ProjectTable projects={projects} />
        </DefaultLayout>
    )
}

export default ProjectPage;