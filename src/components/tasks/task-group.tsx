import { Card, CardHeader, CardBody, CardFooter, Divider, Button } from "@heroui/react";
import { CheckboxGroup, Checkbox } from "@heroui/react";
import Task from "./task";
import { PlusIcon } from "../icons";

const TaskGroup: React.FC = () => {


    const TaskRender = () => {
        return (
            <CheckboxGroup defaultValue={[]} >
                <Task />
                <Task />
                <Task />
            </CheckboxGroup>
        );
    }

    return (
        <Card className="max-w-[350px]">
            <CardHeader className="flex gap-3">
                <Checkbox className="font-extrabold text-3xl" value="buenos-aires">Buenos Aires</Checkbox>
            </CardHeader>
            <Divider />
            <CardBody>
                <TaskRender />
            </CardBody>
            <Divider />
            <CardFooter>
                <Button className="w-full"><PlusIcon /></Button>
            </CardFooter>
        </Card>
    );
}


export default TaskGroup;