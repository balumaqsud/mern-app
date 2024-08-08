import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
import Home from "../src/pages/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
