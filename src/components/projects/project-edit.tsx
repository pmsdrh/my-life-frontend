import { Button, ButtonGroup, Input, Popover, PopoverContent, PopoverTrigger } from "@heroui/react"
import { EditIcon } from "../icons"
import { useRef } from "react";

const ProjectEdit: React.FC<{ editProject: (data: IProject) => void, index: number }> = ({ editProject, index }) => {
    const nameRef = useRef<HTMLInputElement | null>(null);
    return (
        <Popover showArrow offset={10} placement="bottom">
            <PopoverTrigger>
                <span className="text-lg text-primary cursor-pointer active:opacity-50">
                    <EditIcon />
                </span>
            </PopoverTrigger>
            <PopoverContent className="w-[240px]">
                <ButtonGroup>

                    <Input placeholder="نام پروژه" ref={nameRef} prefix="s" /> <Button color="primary" onClick={() => {
                        editProject({ id: index, name: nameRef.current?.value as string })
                    }}>تایید</Button>
                </ButtonGroup>
            </PopoverContent>
        </Popover>


    )
}

export default ProjectEdit;