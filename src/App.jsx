import { BrowserRouter as Router, Routes, NavLink } from 'react-router-dom';
import RenderRoutes from './components/routesConfig';
import RenderNavLinks from './components/navLinksConfig';
import routes from './utils/routesVar';
import navItems from './utils/navLinksVar';

export default function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <nav className="navbar">
                <NavLink to="/" className="logo">.Hồ sơ.</NavLink>

                <ul>
                    {RenderNavLinks(navItems)}
                </ul>
            </nav>

            <div className="bars-animation">
                <div className="bar left" style={{ "--i": 1 }}></div>
                <div className="bar right" style={{ "--i": 1 }}></div>
            </div>

            <Routes>
                {RenderRoutes(routes)}
            </Routes>
        </Router>
    );
};