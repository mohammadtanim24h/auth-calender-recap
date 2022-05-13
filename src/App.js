import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Calender from "./components/Calender/Calender";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="calender" element={<Calender />}></Route>
            </Routes>
        </div>
    );
}

export default App;
