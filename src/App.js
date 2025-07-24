import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Projects from './projects';
import Contact from './contact';

function App() {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/tran_manh_cuong" className="logo">.Hồ sơ.</Link>
                <ul>
                    <li className="active"><Link to="/tran_manh_cuong">Trang chủ</Link></li>
                    <li><Link to="/tran_manh_cuong/about">Giới thiệu</Link></li>
                    <li><Link to="/tran_manh_cuong/projects">Dự án</Link></li>
                    <li><Link to="/tran_manh_cuong/contact">Liên hệ</Link></li>
                </ul>
            </nav>

            <div className="bars-animation">
                <div className="bar left" style={{ "--i": 1 }}></div>
                <div className="bar right" style={{ "--i": 1 }}></div>
            </div>

            <Routes>
                <Route path="/tran_manh_cuong" element={<Home />} />
                <Route path="/tran_manh_cuong/about" element={<About />} />
                <Route path="/tran_manh_cuong/projects" element={<Projects />} />
                <Route path="/tran_manh_cuong/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;