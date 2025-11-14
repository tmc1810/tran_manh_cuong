import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

const routes = [
  {
    path: "/",
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ]
  }
];

export default routes;