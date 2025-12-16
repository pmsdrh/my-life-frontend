import { getProjectApi } from "@/api/projects";
import { createTaskGroupApi } from "@/api/task-groups";
import { useEffect, useState } from "react"

const useProject: (id: number | string) => IUseProject = (id) => {
    const [project, setProject] = useState<IProject>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);

    const getProject = () => {
        setLoading(true);
        getProjectApi(id)
            .then(setProject)
            .catch(setError)
            .finally(() => setLoading(false))
    }

    const addGroup = (name: string) => {
        setLoading(true);
        createTaskGroupApi({ ProjectId: id, name })
            .then(getProject)
            .catch(setError)
            .finally(() => setLoading(false))

    }

    useEffect(() => {
        getProject();
    }, [])

    return { project, loading, error, getProject, addGroup }
}

export default useProject;