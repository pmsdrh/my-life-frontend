import { Listbox, ListboxItem, cn } from "@heroui/react";
import { AddNoteIcon, CopyDocumentIcon, DeleteDocumentIcon, EditDocumentIcon } from "../icons";


// export const ListboxWrapper = ({children}) => (
//   <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
//     {children}
//   </div>
// );

export default function TaskMenu() {
    const iconClasses = "text-xl text-default-500 pointer-events-none shrink-0";

    return (
        // <ListboxWrapper>
        <Listbox aria-label="Listbox menu with descriptions" variant="flat">
            <ListboxItem
                key="new"
                description="Create a new file"
                startContent={<AddNoteIcon className={iconClasses} />}
            >
                New file
            </ListboxItem>
            <ListboxItem
                key="copy"
                description="Copy the file link"
                startContent={<CopyDocumentIcon className={iconClasses} />}
            >
                Copy link
            </ListboxItem>
            <ListboxItem
                key="edit"
                showDivider
                description="Allows you to edit the file"
                startContent={<EditDocumentIcon className={iconClasses} />}
            >
                Edit file
            </ListboxItem>
            <ListboxItem
                key="delete"
                className="text-danger"
                color="danger"
                description="Permanently delete the file"
                startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
            >
                Delete file
            </ListboxItem>
        </Listbox>
        // </ListboxWrapper>
    );
}
