import { NavLink } from "react-router-dom";

export default function RenderNavLinks(navItems) {
    return navItems.map(({ path, label, end }, index) => (
        <li key={index}>
            <NavLink to={path} end={end} className={({ isActive }) => isActive ? "active-link" : ""}>
                {label}
            </NavLink>
        </li>
    ));
};