import "./App.css";
import Navigation from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Create from "./Pages/Productos/Create";
import Update from "./Pages/Productos/Update";
import Show from "./Pages/Productos/Show";

function App() {
    return (
        <div className="w-3/5 mx-auto my-10">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                
                <Route path="productos/create" element={<Create />} />

                <Route path="productos/update/:id" element={<Update />} />

                <Route path="productos/:id" element={<Show />} />
            </Routes>
        </div>
    );
}

export default App;