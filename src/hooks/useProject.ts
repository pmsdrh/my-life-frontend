import { getProjectApi } from "@/api/projects";
import { createTaskApi, deleteTaskApi, editTaskApi } from "@/api/task";
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
    const addTask: TAddTask = (gid, name) => {
        setLoading(true);
        createTaskApi({ GroupTaskId: gid, name })
            .then(getProject)
            .catch(setError)
            .finally(() => setLoading(false))

    }

    const renameTask: TReanemTask = (id, name) => {
        setLoading(true);
        editTaskApi({ id, name })
            .then(getProject)
            .catch(setError)
            .finally(() => setLoading(false))

    }

    const checkTask: TCheckTask = (id, checked) => {
        setLoading(true);
        editTaskApi({ id, checked })
            .then(getProject)
            .catch(setError)
            .finally(() => setLoading(false))

    }

    const deleteTask: TDeleteTask = (id) => {
        setLoading(true);
        deleteTaskApi({ id })
            .then(getProject)
            .catch(setError)
            .finally(() => setLoading(false))

    }



    useEffect(() => {
        getProject();
    }, [])

    return {
        project,
        loading,
        error,
        getProject,
        addGroup,
        addTask,
        renameTask,
        checkTask,
        deleteTask
    }
}

export default useProject;