function Home() {
  return (
    <section className="home">
      <div className="home-info">
        <h1>Trần Mạnh Cường</h1>
        <h2>Tôi là
          <span style={{ "--i": 1 }} data-text="Web Developer">Web Developer</span>
          <span style={{ "--i": 2 }} data-text="Web Developer">Web Developer</span>
          <span style={{ "--i": 3 }} data-text="Web Developer">Web Developer</span>
          <span style={{ "--i": 4 }} data-text="Web Developer">Web Developer</span>
        </h2>
        <p>Chào mừng bạn đến với trang hồ sơ cá nhân của tôi! Tôi là một nhà phát triển Website
          với niềm đam mê tạo ra những trải nghiệm người dùng tuyệt vời.
        </p>
        <div className="btn-sci">
          <div className="sci">
            <a href="https://github.com/tmc1810"><i className='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/tr%E1%BA%A7n-m%E1%BA%A1nh-c%C6%B0%E1%BB%9Dng-84b974339"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.facebook.com/tran.manh.cuong1810"><i className='bx bxl-facebook'></i></a>
            <a href="https://discord.com/users/mrshine1558"><i className='bx bxl-discord-alt'></i></a>
          </div>
          <a href="#!" className="btn">Tải CV</a>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={`${process.env.PUBLIC_URL}/img/home.png`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;