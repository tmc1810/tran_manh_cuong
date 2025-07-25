import { useState } from "react";

// Dữ liệu các project
const PROJECTS = [
    {
        img: `${process.env.PUBLIC_URL}/img/project1.jpg`,
        link_source: "https://github.com/tmc1810/stock_ai_platform.git",
        title: "Xây dựng hệ thống website Ứng dụng Trí tuệ nhân tạo để hỗ trợ phân tích và dự đoán thị trường chứng khoán",
        desc: "Đây là dự án sử dụng AI (LightGBM, NHiTS, ...) và dữ liệu tài chính thực tế để dự đoán và phân tích cổ phiếu, tự động cập nhật dữ liệu, giao diện trực quan và dễ sử dụng."
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project2.jpg`,
        link_source: "https://github.com/tmc1810/stock_ai_platform.git",
        title: "Xây dựng website đặt tour du lịch cho HANOITOURIST",
        desc: "Website đặt tour online, tích hợp thanh toán, quản lý tour, hỗ trợ khách hàng đặt vé nhanh chóng và dễ dàng."
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project3.jpg`,
        link_source: "https://github.com/tmc1810/stock_ai_platform.git",
        title: "Xây dựng website hỗ trợ quản lý dự án",
        desc: "Hệ thống quản lý dự án, phân quyền người dùng, quản lý tiến độ, báo cáo tự động, nhắc việc và thông báo."
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project4.jpg`,
        link_source: "https://github.com/tmc1810/stock_ai_platform.git",
        title: "Xây dựng website bán nội thất",
        desc: "Website thương mại điện tử cho ngành nội thất, có giỏ hàng, quản lý đơn hàng, giao diện đẹp, responsive."
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project5.jpg`,
        link_source: "https://github.com/tmc1810/stock_ai_platform.git",
        title: "Xây dựng website bán sản phẩm trà Phúc Anh Đường",
        desc: "Bán các loại trà sức khỏe, giao diện thân thiện người dùng, tối ưu tìm kiếm và đặt hàng."
    },
    {
        img: "",
        title: "Đang cập nhật...",
        desc: "Project sẽ cập nhật sau."
    }
];

function Modal({ show, onClose, project }) {
    if (!show) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content custom-modal-scroll">
                {/* Nút Đóng dạng X */}
                <button className="modal-close-x" onClick={onClose} title="Đóng">
                    &times;
                </button>
                <div className="modal-title">
                    <strong>{project.title}</strong>
                </div>
                {project.img && (
                    <img className="modal-img" src={project.img} alt="" />
                )}
                {project.link_source && (
                    <a
                        href={project.link_source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-source"
                    >
                        Source
                    </a>
                )}
                <div className="modal-desc">{project.desc}</div>
            </div>
        </div>
    );
}

function Projects() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="projects">
            {[0, 1, 2].map(col => (
                <div className={`projects-btn--${col + 1}`} key={col}>
                    {[0, 1].map(row => {
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