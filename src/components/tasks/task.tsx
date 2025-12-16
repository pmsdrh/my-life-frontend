import { Checkbox } from "@heroui/react";

const Task: React.FC<{ task: ITask }> = ({ task }) => {
    return (
        <Checkbox defaultSelected lineThrough>
            {task.name}
        </Checkbox>
    );
}

export default Task;
