import { Button } from "@heroui/button";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate();
    return (<Button isIconOnly onClick={() => navigate(-1)}><ArrowLeftOutlined /></Button>)
}

