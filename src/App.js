import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
