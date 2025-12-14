import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectPage from "./pages/projects";
import SingleProjectPage from "./pages/project-single";
import DefaultLayout from "./layouts/default";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<ProjectPage />} path="/projects/" />
        <Route element={<SingleProjectPage />} path="/project/:id" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
