import { Checkbox, Input } from "@heroui/react";
import { EditIcon } from "../icons";
import React, { useState } from "react";

const Task: React.FC<{ task: ITask }> = ({ task }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const onCancle = () => setIsEdit(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {

        }
        if (e.key === "Escape")
            onCancle();
    }
    return (
        <span className="flex gap-3">
            {isEdit ? (
                <Input
                    defaultValue={task.name}
                    variant="underlined"
                    onKeyDown={handleKeyDown}
                    onBlur={onCancle} />
            ) : (
                <Checkbox value={task.id as string} lineThrough>
                    <span>{task.name}</span>
                </Checkbox>
            )
            }
            <div ><EditIcon className="text-primary cursor-pointer" onClick={() => {
                setIsEdit(true);
            }} /></div>
        </span>
    );
}

export default Task;
