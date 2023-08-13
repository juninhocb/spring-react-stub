import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import UserPage from "./components/pages/UserPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/users" element={<UserPage/>} />
                <Route path="/contact" element={<ContactPage/>} />
            </Routes>
        </Router>
    );
}

export default App;