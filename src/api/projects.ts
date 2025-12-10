const BASE_URL = import.meta.env.VITE_API_URL + '/projects/'

async function getProjectsApi(): Promise<IProject[]> {
    const res = await fetch(BASE_URL)
    if (!res.ok) throw new Error("Faild to get Projects");
    return res.json();
}
async function getProjectApi(id: number | string): Promise<IProject> {
    const res = await fetch(BASE_URL + id as string)
    if (!res.ok) throw new Error("Faild to get Project");
    return res.json();
}
async function createProjectApi(data: IProject): Promise<IProject> {
    const res = await fetch(BASE_URL + '/create', {
        method: 'put',
        body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Faild to create Projects");
    return res.json();
}
async function deleteProjectApi(data: IProject): Promise<IProject> {
    const res = await fetch(BASE_URL + data.id as string, {
        method: 'delete',
        body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Faild to delete Projects");
    return res.json();
}
async function editProjectApi(data: IProject): Promise<IProject> {
    const res = await fetch(BASE_URL + data.id as string + '/edit', {
        method: 'post',
        body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Faild to delete Projects");
    return res.json();
}

export { getProjectsApi, getProjectApi, createProjectApi, deleteProjectApi, editProjectApi }
