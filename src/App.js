import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
    return (
        <Router basename="/tran_manh_cuong">
            <nav className="navbar">
                <NavLink to="/" className="logo">.Hồ sơ.</NavLink>
                <ul>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>Giới thiệu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Dự án</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Liên hệ</NavLink>
                    </li>
                </ul>
            </nav>

            <div className="bars-animation">
                <div className="bar left" style={{ "--i": 1 }}></div>
                <div className="bar right" style={{ "--i": 1 }}></div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;