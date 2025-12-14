import ProjectTable from "@/components/projects/project-table";
import useProjects from "@/hooks/useProjects"

const ProjectPage = () => {
    const projects: IUseProjects = useProjects();

    return (

        <ProjectTable projects={projects} />
    )
}

export default ProjectPage;