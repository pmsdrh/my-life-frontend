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

type TAddTask = (gid: number | string, name: string) => void;
type TReanemTask = (id: number | string, name: string) => void;
type TCheckTask = (id: number | string, checked: boolean) => void;
type TDeleteTask = (id: number | string) => void;

interface IUseProject {
    project: IProject;
    loading: boolean;
    error: string | null;
    getProject: () => void;
    addGroup: (name: string) => void;
    addTask: TAddTask;
    renameTask: TReanemTask;
    checkTask: TCheckTask;
    deleteTask: TDeleteTask;
}
