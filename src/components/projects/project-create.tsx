import { Popover, PopoverTrigger, PopoverContent, Button, Input, ButtonGroup } from "@heroui/react";
import { useRef } from "react";
import { PlusIcon } from "../icons";

const ProjectCreate: React.FC<{ newProject: (data: IProject) => void }> = ({ newProject }) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  return (
    <Popover showArrow offset={10} placement="bottom">
      <PopoverTrigger>
        <Button color="primary" endContent={<PlusIcon />}>افزودن</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <ButtonGroup>

          <Input placeholder="نام پروژه" ref={nameRef} prefix="s" /> <Button color="primary" onClick={() => {
            newProject({ name: nameRef.current?.value as string })
          }}>تایید</Button>
        </ButtonGroup>
      </PopoverContent>
    </Popover>
  );
}

export default ProjectCreate;
