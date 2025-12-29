import { Tooltip } from "@heroui/react"
import { DeleteIcon } from "../icons"

const ProjectDelete: React.FC<{ deleteProject: (data: IProject) => void, index: number }> = ({ deleteProject, index }) => {
    return (
        <Tooltip color="danger" content="حذف پروژه">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => {
                    deleteProject({ id: index })
                }} />
            </span>
        </Tooltip>

    )
}

export default ProjectDelete;