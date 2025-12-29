import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@heroui/react";
import { CheckboxGroup, Checkbox } from "@heroui/react";
import Task from "./task";
import { DeleteIcon, EditIcon, PlusIcon } from "../icons";

const TaskGroup: React.FC<{ taskgroup: IGroupTask, addTask: TAddTask, renameTask: TReanemTask }> = ({ taskgroup, addTask, renameTask }) => {


    const TaskRender = () => {
        return (
            <CheckboxGroup defaultValue={[]} >
                {taskgroup.Tasks?.map(item => (
                    <Task task={item} renameTask={renameTask} />
                ))}
            </CheckboxGroup>
        );
    }

    return (
        <Card className="max-w-[350px]">
            <CardHeader className="flex gap-3 w-full justify-between">
                <Checkbox className="font-extrabold text-3xl" value="buenos-aires">{taskgroup.name}</Checkbox>
                <div className=" gap-2 flex">
                    <span className="text-primary" onClick={() => {

                    }}>
                        <EditIcon />
                    </span>
                    <span className="text-danger">
                        <DeleteIcon color="danger" />
                    </span>

                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <TaskRender />
            </CardBody>
            <Divider />
            <CardFooter>
                <Button
                    onClick={() => addTask(taskgroup.id as number, 'بدون عنوان')}
                    className="w-full"
                >
                    <PlusIcon />
                </Button>
            </CardFooter>
        </Card>
    );
}


export default TaskGroup;