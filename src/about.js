import React from "react";

function About() {
    const programmingSkills = [
        { name: "Java", level: 3 },
        { name: "Php", level: 2 },
        { name: "Python", level: 4 },
        { name: "JavaScript (TypeScript)", level: 3 },
    ];

    const otherSkills = [
        { name: "Html", level: 4 },
        { name: "Css", level: 4 },
        { name: "Spring Boot", level: 2 },
        { name: "Laravel", level: 3 },
        { name: "React", level: 3 },
        { name: "Flask", level: 3 },
        { name: "MySQL", level: 3 },
        { name: "Django", level: 4 },
        { name: "GitHub", level: 3 },
        { name: "MTV", level: 5 },
        { name: "MVC", level: 5 },
        { name: "Microservices", level: 3 },
    ];

    return (
        <section className="about">
            <div className="home-img">
                <div className="img-box">
                    <div className="img-item">
                        <img src={`${process.env.PUBLIC_URL}/img/home.png`} alt="" />
                    </div>
                </div>
            </div>

            <div className="about-info">
                <h1>Trần Mạnh Cường (18/10/2003)</h1>
                <div className="edu-box">
                    <div className="edu-row">
                        <span>🎓 <strong>Học tại:</strong></span>
                        <span>Trường Đại học Công nghệ Giao thông Vận tải</span>
                    </div>
                    <div className="edu-row">
                        <span>🧠 <strong>Chuyên ngành:</strong></span>
                        <span>Công nghệ thông tin</span>
                    </div>
                    <div className="edu-row">
                        <span>📈 <strong>GPA:</strong></span>
                        <span>3.26</span>
                    </div>
                </div>
                <h2 className="glow-title">Kỹ năng lập trình</h2>
                <div className="skill-grid">
                    {programmingSkills.map((skill, idx) => (
                        <div key={idx} className="skill-item">
                            <span>{skill.name}</span>
                            <div className="skill-bar">
                                {[1, 2, 3, 4, 5].map((lv) => (
                                    <div
                                        key={lv}
                                        className={`skill-level ${lv <= skill.level ? "active" : ""}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="glow-title">Chuyên môn khác</h2>
                <div className="skill-grid">
                    {otherSkills.map((skill, idx) => (
                        <div key={idx} className="skill-item">
                            <span>{skill.name}</span>
                            <div className="skill-bar">
                                {[1, 2, 3, 4, 5].map((lv) => (
                                    <div
                                        key={lv}
                                        className={`skill-level ${lv <= skill.level ? "active" : ""}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="glow-title">Sở thích</h2>
                <div className="hobby-grid">
                    <div className="hobby-item">🏸 Chơi cầu lông, chơi game</div>
                    <div className="hobby-item">💡 Tìm tòi sáng tạo</div>
                </div>
            </div>
        </section>
    );
}

export default About;