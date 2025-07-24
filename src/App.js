import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function App() {
    return (
        <Router basename="/tran_manh_cuong">
            <nav className="navbar">
                <Link to="/" className="logo">.Hồ sơ.</Link>
                <ul>
                    <li className="active"><Link to="/">Trang chủ</Link></li>
                    <li><Link to="/about">Giới thiệu</Link></li>
                    <li><Link to="/projects">Dự án</Link></li>
                    <li><Link to="/contact">Liên hệ</Link></li>
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