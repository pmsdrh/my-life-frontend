import { getProjectApi } from "@/api/projects";
import { useEffect, useState } from "react"

const useProject: (id: number | string) => any = (id) => {
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

    useEffect(() => {
        getProject();
    }, [])

    return { project, loading, error, getProject }
}

export default useProject;