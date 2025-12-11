import useProject from "@/hooks/useProject";
import DefaultLayout from "@/layouts/default";
import { useParams } from "react-router-dom";

const SingleProjectPage = () => {
    const { id } = useParams();
    const project = useProject(id as string);


    return (

        <DefaultLayout>
            {JSON.stringify(project)}
        </DefaultLayout>
    )
}

export default SingleProjectPage;