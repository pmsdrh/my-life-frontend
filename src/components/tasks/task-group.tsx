import { Card, CardHeader, CardBody, CardFooter, Divider, Button, Tooltip } from "@heroui/react";
import { Checkbox } from "@heroui/react";
import Task from "./task";
import { DeleteIcon, EditIcon, PlusIcon } from "../icons";

const TaskGroup: React.FC<{
    taskgroup: IGroupTask,
    project: IUseProject
}> = ({ taskgroup, project }) => {

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
                <div className="gap-2 flex">
                    <Tooltip content="ویرایش">
                        <span className="text-primary" onClick={() => {

                        }}>
                            <EditIcon />
                        </span>
                    </Tooltip>
                    <Tooltip content="حذف">
                        <span className="text-danger">
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