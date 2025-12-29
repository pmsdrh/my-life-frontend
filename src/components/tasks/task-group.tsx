import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Tooltip, Input } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import Task from "./task";
import { DeleteIcon, EditIcon, PlusIcon } from "../icons";
import { useRef, useState } from "react";

const TaskGroup: React.FC<{
    taskgroup: IGroupTask,
    project: IUseProject
}> = ({ taskgroup, project }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null)

    const onConfirm = () => {
        project.renameGroup(taskgroup.id as number, ref.current?.value as string)
        setIsEdit(false)
    }

    const onCancle = () => setIsEdit(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onConfirm();
        }
        if (e.key === "Escape")
            onCancle();
    }


    const TaskRender = () => {
        return (
            <div>
                {taskgroup.Tasks?.map(item => (
                    <Task
                        task={item}
                        renameTask={project.renameTask}
                        checkTask={project.checkTask}
                        deleteTask={project.deleteTask}
                    />
                ))}
            </div>
        );
    }

    const isIndeterminate = (taskgroup.Tasks?.some(i => i.checked) &&
        taskgroup.Tasks.some(i => !i.checked)) ||
        !taskgroup.Tasks?.length

    return (
        <Card className="max-w-[350px]">
            <CardHeader className="flex gap-3 w-full justify-between">
                {isEdit ? (
                    <Input
                        defaultValue={taskgroup.name}
                        variant="underlined"
                        onKeyDown={handleKeyDown}
                        onBlur={onConfirm}
                        ref={ref}
                    />
                ) : (
                    <Checkbox
                        className="font-extrabold text-3xl"
                        value={String(taskgroup.id)}
                        isSelected={taskgroup.Tasks?.every(t => t.checked)}
                        isIndeterminate={isIndeterminate}
                        onValueChange={(isSelected) => {
                            taskgroup.Tasks?.map(t => {
                                project.checkTask(t.id as string, isSelected)
                            })
                        }}
                    >{taskgroup.name}</Checkbox>
                )}
                <div className="gap-2 flex">
                    <Tooltip content="ویرایش">
                        <span className="text-primary" onClick={() => setIsEdit(true)}>
                            <EditIcon />
                        </span>
                    </Tooltip>
                    <Tooltip content="حذف">
                        <span onClick={() => project.deleteGroup(taskgroup.id as number)} className="text-danger">
                            <DeleteIcon color="danger" />
                        </span>
                    </Tooltip>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <TaskRender />
            </CardBody>
            <Divider />
            <CardFooter>
                <Button
                    onClick={() => project.addTask(taskgroup.id as number, 'بدون عنوان')}
                    className="w-full"
                >
                    <PlusIcon />
                </Button>
            </CardFooter>
        </Card>
    );
}


export default TaskGroup;