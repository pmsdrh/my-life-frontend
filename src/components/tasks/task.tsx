import { Checkbox } from "@heroui/react";

const Task: React.FC<{ task: ITask }> = ({ task }) => {
    return (
        <Checkbox value={task.id as string} lineThrough>
            {task.name}
        </Checkbox>
    );
}

export default Task;
