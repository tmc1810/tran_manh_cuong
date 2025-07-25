import { useState } from "react";

// Dữ liệu các project
const PROJECTS = [
    {
        img: `${process.env.PUBLIC_URL}/img/project1.jpg`,
        title: "Xây dựng hệ thống website Ứng dụng Trí tuệ nhân tạo để hỗ trợ phân tích và dự đoán thị trường chứng khoán",
        desc: "Đây là dự án sử dụng AI (LightGBM, NHiTS, ...) và dữ liệu tài chính thực tế để dự đoán và phân tích cổ phiếu, tự động cập nhật dữ liệu, giao diện trực quan và dễ sử dụng."
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project2.jpg`,
        title: "Xây dựng website đặt tour du lịch cho HANOITOURIST",
        desc: "Website đặt tour online, tích hợp thanh toán, quản lý tour, hỗ trợ khách hàng đặt vé nhanh chóng và dễ dàng."
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project3.jpg`,
        title: "Xây dựng website hỗ trợ quản lý dự án",
        desc: "Hệ thống quản lý dự án, phân quyền người dùng, quản lý tiến độ, báo cáo tự động, nhắc việc và thông báo."
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project4.jpg`,
        title: "Xây dựng website bán nội thất",
        desc: "Website thương mại điện tử cho ngành nội thất, có giỏ hàng, quản lý đơn hàng, giao diện đẹp, responsive."
    },
    {
        img: `${process.env.PUBLIC_URL}/img/project5.jpg`,
        title: "Xây dựng website bán sản phẩm trà Phúc Anh Đường",
        desc: "Bán các loại trà sức khỏe, giao diện thân thiện người dùng, tối ưu tìm kiếm và đặt hàng."
    },
    {
        img: "",
        title: "Đang cập nhật...",
        desc: "Project sẽ cập nhật sau."
    }
];

// Modal component
function Modal({ show, onClose, project }) {
    if (!show) return null;

    // Đóng khi bấm outside
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            style={{
                position: "fixed",
                zIndex: 10001,
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.48)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all .2s"
            }}
            onClick={handleOverlayClick}
        >
            <div
                className="custom-modal-scroll"
                style={{
                    background: "#181d23",
                    color: "#fff",
                    top: 30,
                    padding: "clamp(16px, 6vw, 38px)",
                    borderRadius: "18px",
                    width: "100%",
                    maxWidth: "700px",
                    maxHeight: "650px",
                    overflowY: "auto",
                    boxShadow: "0 8px 40px #000b",
                    border: "2px solid #7cf03d",
                    position: "relative",
                    animation: "fadeInModal .22s"
                }}
            >
                <div style={{ marginBottom: 14, textAlign: "center" }}>
                    <strong style={{
                        fontSize: "20px",
                        color: "#ffffff",
                        textShadow: "0 0 10px #7cf03d",
                        textTransform: "uppercase"
                    }}>{project.title}</strong>
                </div>
                {project.img && (
                    <img
                        src={project.img}
                        alt=""
                        style={{
                            width: "100%",
                            borderRadius: "12px",
                            marginBottom: 14,
                            boxShadow: "0 2px 20px #0f09"
                        }}
                    />
                )}
                <div style={{
                    fontSize: "clamp(12px, 2vw, 18px)",
                    marginBottom: 14
                }}>
                    {project.desc}
                </div>
                <button
                    onClick={onClose}
                    style={{
                        background: "#7cf03d",
                        color: "#181d23",
                        border: "none",
                        borderRadius: "9px",
                        padding: "7px 24px",
                        fontSize: "clamp(13px, 2vw, 18px)",
                        cursor: "pointer",
                        fontWeight: 600,
                        marginTop: 5,
                        boxShadow: "0 2px 8px #2227"
                    }}
                >
                    Đóng
                </button>
            </div>
            <style>
                {`
          @keyframes fadeInModal {
            from {transform: scale(.85); opacity:0;}
            to {transform: scale(1); opacity:1;}
          }
        `}
            </style>
        </div>
    );
}


function Projects() {
    const [openIndex, setOpenIndex] = useState(null);

    // Mỗi cột 2 project (giống bố cục cũ)
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
                                style={{ position: "relative" }}
                            >
                                {project.img && <img src={project.img} alt="" />}
                                <span>{project.title}</span>
                            </button>
                        );
                    })}
                </div>
            ))}
            {/* Modal show */}
            <Modal
                show={openIndex !== null}
                onClose={() => setOpenIndex(null)}
                project={PROJECTS[openIndex] || {}}
            />
        </section>
    );
}

export default Projects;