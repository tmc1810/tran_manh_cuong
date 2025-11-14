import { useState } from "react";
import Modal from '../components/modal';
import PROJECTS from '../utils/projectsVar';

export default function Projects() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="projects">
            {[0, 1, 2].map((col) => (
                <div className={`projects-btn--${col + 1}`} key={col}>
                    {[0, 1].map((row) => {
                        const idx = col * 2 + row;
                        const project = PROJECTS[idx];
                        if (!project) return null;
                        return (
                            <button
                                key={idx}
                                className="projects-btn--box"
                                onClick={() => setOpenIndex(idx)}
                            >
                                {project.img && <img src={project.img} alt="" />}
                                <span>{project.title}</span>
                            </button>
                        );
                    })}
                </div>
            ))}
            <Modal show={openIndex !== null} onClose={() => setOpenIndex(null)} project={PROJECTS[openIndex] || {}}/>
        </section>
    );
};