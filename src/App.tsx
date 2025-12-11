import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectPage from "./pages/projects";
import SingleProjectPage from "./pages/project-single";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProjectPage />} path="/projects/" />
      <Route element={<SingleProjectPage />} path="/project/:id" />
    </Routes>
  );
}

export default App;
