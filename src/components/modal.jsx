export default function Modal({ show, onClose, project }) {
    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    const stack = project?.tech_stack || {};

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content custom-modal-scroll">
                <button className="modal-close-x" onClick={onClose} title="Đóng">
                    &times;
                </button>
                <div className="modal-title">
                    <strong>{project?.title}</strong>
                </div>
                {project?.img && <img className="modal-img" src={project.img} alt="" />}
                {project?.link_source && (
                    <a
                        href={project.link_source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-source"
                    >
                        Source
                    </a>
                )}
                <div className="modal-desc">{project?.desc}</div>
                <table className="project-tech-table">
                    <tbody>
                        {stack.ai_models?.length > 0 && (
                            <tr>
                                <th>Mô hình AI</th>
                                <td>{stack.ai_models.join(", ")}</td>
                            </tr>
                        )}
                        {stack.architecture && (
                            <tr>
                                <th>Mô hình cấu trúc</th>
                                <td>{stack.architecture}</td>
                            </tr>
                        )}
                        {stack.frameworks?.length > 0 && (
                            <tr>
                                <th>Framework</th>
                                <td>{stack.frameworks.join(", ")}</td>
                            </tr>
                        )}
                        {stack.design_languages?.length > 0 && (
                            <tr>
                                <th>Ngôn ngữ thiết kế</th>
                                <td>{stack.design_languages.join(", ")}</td>
                            </tr>
                        )}
                        {stack.programming_languages?.length > 0 && (
                            <tr>
                                <th>Ngôn ngữ lập trình</th>
                                <td>{stack.programming_languages.join(", ")}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};