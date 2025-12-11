import { createProjectApi, getProjectsApi, deleteProjectApi, editProjectApi, getProjectApi } from "@/api/projects";
import { useEffect, useState } from "react";


export default function useProjects() {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getProjects = () => {
        setLoading(true);
        getProjectsApi()
            .then(setProjects)
            .catch(setError)
            .finally(() => setLoading(false))

    }

    const createProject = (data: IProject) => {
        setLoading(true);
        createProjectApi(data)
            .then(getProjects)
            .catch(setError)
            .finally(() => setLoading(false))

    }

    const deleteProject = (data: IProject) => {
        setLoading(true);
        deleteProjectApi(data)
            .then(getProjects)
            .catch(setError)
            .finally(() => setLoading(false))

    }

    const editProject = (data: IProject) => {
        setLoading(true);
        editProjectApi(data)
            .then(getProjects)
            .catch(setError)
            .finally(() => setLoading(false))

    }

    const getProject = getProjectApi;

    useEffect(() => {
        getProjects();
    }, [])

    const call: IUseProject = {
        projects,
        loading,
        error,
        setProjects,
        getProjects,
        createProject,
        deleteProject,
        editProject,
        getProject
    }
    return call
}