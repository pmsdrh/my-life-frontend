import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import ProjectPage from "./pages/projects";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProjectPage />} path="/projects" />
      <Route element={<ProjectPage />} path="/project/:id" />
    </Routes>
  );
}

export default App;
