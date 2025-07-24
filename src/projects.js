function Projects() {
    return (
        <section className="projects">
            <div className="projects-btn--1">
                <button className="projects-btn--box">
                    <img src={`${process.env.PUBLIC_URL}/img/project1.jpg`} alt="" />
                    <span>Xây dựng hệ thống website Ứng dụng Trí tuệ nhân tạo để hỗ trợ phân tích và dự đoán thị trường chứng khoán </span>
                </button>
                <button className="projects-btn--box">
                    <img src={`${process.env.PUBLIC_URL}/img/project2.jpg`} alt="" />
                    <span>Xây dựng website đặt tour du lịch cho HANOITOURIST</span>
                </button>
            </div>

            <div className="projects-btn--2">
                <button className="projects-btn--box">
                    <img src={`${process.env.PUBLIC_URL}/img/project3.jpg`} alt="" />
                    <span>Xây dựng website hỗ trợ quản lý dự án</span>
                </button>
                <button className="projects-btn--box">
                    <img src={`${process.env.PUBLIC_URL}/img/project4.jpg`} alt="" />
                    <span>Xây dựng website bán nội thất</span>
                </button>
            </div>

            <div className="projects-btn--3">
                <button className="projects-btn--box">
                    <img src={`${process.env.PUBLIC_URL}/img/project5.jpg`} alt="" />
                    <span>XÂY DỰNG WEBSITE BÁN SẢN PHẨM TRÀ PHÚC ANH ĐƯỜNG</span>
                </button>
                <button className="projects-btn--box">
                    <img src="" alt="" />
                    <span>Đang cập nhật...</span>
                </button>
            </div>
        </section>
    );
}

export default Projects;