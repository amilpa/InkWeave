
import Editor from "./routes/Editor";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route to="/editor" element={<Editor/>}/>
      
    </Routes>
  );
}

export default App;
