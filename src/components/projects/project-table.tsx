import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Tooltip,
} from "@heroui/react";
import ProjectCreate from "./project-create";
import ProjectDelete from "./project-delete";
import ProjectEdit from "./project-edit";
import { EyeIcon } from "../icons";

export const columns = [
    { name: "#", uid: "id" },
    { name: "نام", uid: "name" },
    { name: "تاریخ", uid: "createdAt" },
    { name: "عملیات", uid: "actions" },
];

const ProjectTable: React.FC<{ projects: IUseProject }> = ({ projects }) => {
    const renderCell = React.useCallback((project: any, columnKey: React.Key) => {
        const cellValue = project[columnKey as number];

        switch (columnKey) {
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="مشاهده">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <ProjectEdit editProject={projects.editProject} index={project.id} />
                        <ProjectDelete deleteProject={projects.deleteProject} index={project.id} />
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <Table aria-label="لیست پروژه ها" topContent={
            <div>
                <ProjectCreate newProject={projects.createProject} />
            </div>
        }>

            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={projects.projects}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}


export default ProjectTable