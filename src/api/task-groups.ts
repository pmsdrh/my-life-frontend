const BASE_URL = import.meta.env.VITE_API_URL + '/group-tasks/'


async function createTaskGroupApi(data: IGroupTask): Promise<IGroupTask> {
    const res = await fetch(BASE_URL + 'create', {
        method: 'put',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Faild to create Group");
    return res.json();
}

async function deleteTaskGroupApi(data: IGroupTask): Promise<IGroupTask> {
    const res = await fetch(BASE_URL + `${data.id}`, {
        method: 'delete',
    })
    if (!res.ok) throw new Error("Faild to delete Group");
    return res.json();
}

async function editTaskGroupApi(data: IGroupTask): Promise<IGroupTask> {
    const res = await fetch(BASE_URL + `${data.id}/edit`, {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Faild to edit Task");
    return res.json();
}

export { createTaskGroupApi, deleteTaskGroupApi, editTaskGroupApi }
