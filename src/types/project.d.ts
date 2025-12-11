interface IProject {
    id?: number;
    name?: string;
    createdAt?: string;
}

interface IUseProject {
    projects: IProject[];
    loading: boolean;
    error: string | null;
    setProjects: any;
    getProjects: () => void;
    createProject: (data: IProject) => void;
    deleteProject: (data: IProject) => void;
    editProject: (data: IProject) => void;
}