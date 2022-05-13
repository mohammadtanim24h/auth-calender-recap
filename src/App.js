import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import DateContainer from "./components/DateContainer/DateContainer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/date" element={<DateContainer></DateContainer>}></Route>
            </Routes>
        </div>
    );
}

export default App;
