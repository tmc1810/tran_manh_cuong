import { useState } from "react";

const PROJECTS = [
    {
        img: `${process.env.PUBLIC_URL}/img/project1.jpg`,
        link_source: "https://github.com/tmc1810/stock_ai_platform.git",
        title:
            "Xây dựng hệ thống website Ứng dụng Trí tuệ nhân tạo để hỗ trợ phân tích và dự đoán thị trường chứng khoán",
        desc:
            "Dự án sử dụng trí tuệ nhân tạo và dữ liệu tài chính thực tế để dự đoán & phân tích cổ phiếu; tự động cập nhật dữ liệu, giao diện trực quan, dễ sử dụng.",
        tech_stack: {
            ai_models: ["LightGBM", "NHiTS"],
            architecture: "Microservices",
            frameworks: ["React", "Flask", "Tailwind CSS"],
            design_languages: ["HTML", "CSS"],
            programming_languages: ["JavaScript", "Python"],
        },
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project2.jpg`,
        link_source: "https://github.com/tmc1810/Travel_Tour.git",
        title: "Xây dựng website đặt tour du lịch cho HANOITOURIST",
        desc:
            "Website đặt tour online, quản lý tour, hỗ trợ khách hàng đặt vé nhanh chóng và dễ dàng.",
        tech_stack: {
            ai_models: [],
            architecture: "MVC (Model-View-Controller)",
            frameworks: ["Laravel"],
            design_languages: ["HTML", "CSS (SASS/SCSS)"],
            programming_languages: ["JavaScript", "PHP"],
        },
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project3.jpg`,
        link_source: "https://github.com/tmc1810/Project_Management.git",
        title: "Xây dựng website hỗ trợ quản lý dự án",
        desc:
            "Hệ thống quản lý dự án, phân quyền người dùng, quản lý tiến độ, theo dõi và quản lý công việc của từng thành viên trong nhóm.",
        tech_stack: {
            ai_models: [],
            architecture: "MVC (Model-View-Controller)",
            frameworks: ["Laravel"],
            design_languages: ["HTML", "CSS"],
            programming_languages: ["JavaScript", "PHP"],
        },
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project4.jpg`,
        link_source: "https://github.com/tmc1810/WebsiteNoiThat.git",
        title: "Xây dựng website bán nội thất",
        desc:
            "Website thương mại điện tử cho ngành nội thất, có giỏ hàng, quản lý đơn hàng, giao diện đẹp.",
        tech_stack: {
            ai_models: [],
            architecture: "Modular",
            frameworks: ["Bootstrap 5"],
            design_languages: ["HTML", "CSS (SASS/SCSS)"],
            programming_languages: ["PHP"],
        },
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project5.jpg`,
        link_source: "https://github.com/tmc1810/sell_tea_website.git",
        title: "Xây dựng website bán sản phẩm trà Phúc Anh Đường",
        desc:
            "Bán các loại trà sức khỏe, giao diện thân thiện người dùng, tối ưu tìm kiếm và đặt hàng.",
        tech_stack: {
            ai_models: [],
            architecture: "MVC (Model-View-Controller)",
            frameworks: ["React", "Java Spring Boot"],
            design_languages: ["HTML", "CSS"],
            programming_languages: ["TypeScript", "Java"],
        },
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project6.jpg`,
        link_source: "https://github.com/tmc1810/furniture_store_MONA.git",
        title: "Xây dựng website bán đồ nội thất MONA",
        desc: "Xây dựng website bán hàng  cho cửa hàng nội thất với đầy đủ chức năng bán hàng trực tuyến.",
        tech_stack: {
            ai_models: [],
            architecture: "MTV (Model-Template-View)",
            frameworks: ["Django"],
            design_languages: ["HTML", "CSS"],
            programming_languages: ["Python", "JavaScript"],
        },
    },
];

function Modal({ show, onClose, project }) {
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
}

function Projects() {
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
            <Modal
                show={openIndex !== null}
                onClose={() => setOpenIndex(null)}
                project={PROJECTS[openIndex] || {}}
            />
        </section>
    );
}

export default Projects;