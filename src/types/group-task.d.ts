interface IGroupTask {
    id?: number;
    name?: string;
    createdAt?: string;
    ProjectId: string | number;
    Tasks: ITask[] | [];
}