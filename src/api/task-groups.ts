const BASE_URL = import.meta.env.VITE_API_URL + '/group-tasks/'


async function createTaskGroupApi(data: IGroupTask): Promise<IGroupTask> {
    const res = await fetch(BASE_URL + 'create', {
        method: 'put',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Faild to create Projects");
    return res.json();
}

export { createTaskGroupApi }
