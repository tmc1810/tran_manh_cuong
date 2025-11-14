
const PROJECTS = [
    {
        img: `src/assets/img/project1.jpg`,
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
        img: `src/assets/img/project2.jpg`,
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
        img: `src/assets/img/project3.jpg`,
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
        img: `src/assets/img/project4.jpg`,
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
        img: `src/assets/img/project5.jpg`,
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
        img: `src/assets/img/project6.jpg`,
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

export default PROJECTS;