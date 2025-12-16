const BASE_URL = import.meta.env.VITE_API_URL + '/tasks/'


async function createTaskApi(data: ITask): Promise<ITask> {
    const res = await fetch(BASE_URL + 'create', {
        method: 'put',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Faild to create Task");
    return res.json();
}

export { createTaskApi }
