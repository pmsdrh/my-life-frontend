import useProject from "@/hooks/useProject";
import { useParams } from "react-router-dom";

const SingleProjectPage = () => {
    const { id } = useParams();
    const project = useProject(id as string);


    return (
        <>
            {JSON.stringify(project)}
        </>
    )
}

export default SingleProjectPage;