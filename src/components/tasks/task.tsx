import { Checkbox, Input, Tooltip } from "@heroui/react";
import { DeleteIcon, EditIcon } from "../icons";
import React, { useRef, useState } from "react";

const Task: React.FC<{
    task: ITask,
    renameTask: TReanemTask,
    checkTask: TCheckTask,
    deleteTask: TDeleteTask
}> = ({ task, renameTask, checkTask, deleteTask }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const ref = useRef<HTMLInputElement>(null)
    const onCancle = () => setIsEdit(false);

    const onConfirm = () => {
        setIsEdit(false);
        renameTask(task.id as string, ref.current?.value as string);
    }


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onConfirm();
        }
        if (e.key === "Escape")
            onCancle();
    }
    return (
        <span className="flex gap-3 justify-between">
            {isEdit ? (
                <Input
                    defaultValue={task.name}
                    variant="underlined"
                    onKeyDown={handleKeyDown}
                    onBlur={onConfirm}
                    ref={ref} />
            ) : (
                <Checkbox
                    onValueChange={(select) => {
                        checkTask(task.id as string, select)
                    }}
                    value={task.id as string}
                    isSelected={task.checked}
                    defaultSelected={task.checked}
                    className="mb-1.5"
                    key={task.id as string}
                    lineThrough
                >
                    <span className="wrap-anywhere">{task.name}</span>
                </Checkbox>
            )
            }
            <div className="flex gap-1 self-center">
                <Tooltip content="ویرایش" >
                    <span>
                        <EditIcon className="text-primary cursor-pointer" onClick={() => {
                            setIsEdit(true);
                        }} />
                    </span>
                </Tooltip>
                <Tooltip content="حذف">
                    <span>
                        <DeleteIcon className="text-danger" onClick={() => deleteTask(task.id as string)} />
                    </span>
                </Tooltip>

            </div>
        </span >
    );
}

export default Task;
