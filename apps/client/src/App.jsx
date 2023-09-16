import Editor from "./routes/Editor";
import NotFound from "./routes/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/editor" element={<Editor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
