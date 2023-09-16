import Editor from "./routes/Editor";
import NotFound from "./routes/NotFound";
import Dashboard from "./routes/Dashboard";
import Navbar from "./components/Navbar";

import Private from "./utils/Private";

import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";

function App() {
  return (
    <Routes>
      {/* <Route element={<Private redirect={"/login"} />}> */}
      <Route element={<Navbar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/" element={<Navigate to={"/dashboard"} />} />
      </Route>
      {/* </Route> */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
