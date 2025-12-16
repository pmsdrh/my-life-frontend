interface IProject {
    id?: number;
    name?: string;
    createdAt?: string;
    GroupTasks?: IGroupTask[];
}

interface IUseProjects {
    projects: IProject[];
    loading: boolean;
    error: string | null;
    setProjects: any;
    getProjects: () => void;
    createProject: (data: IProject) => void;
    deleteProject: (data: IProject) => void;
    editProject: (data: IProject) => void;
}


interface IUseProject {
    project: IProject;
    loading: boolean;
    error: string | null;
    getProject: () => void;
    addGroup: (name: string) => void;
}