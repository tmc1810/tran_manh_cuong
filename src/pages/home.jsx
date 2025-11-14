import homeImg from "../assets/img/home.png";
import CV from '../assets/pdf/CV_Tran_Manh_Cuong.pdf';

export default function Home() {
  return (
    <section className="home">
      <div className="home-info">
        <h1>Trần Mạnh Cường</h1>
        <h2>
          Tôi là
          {[1, 2, 3, 4].map((i) => (
            <span key={i} style={{ "--i": i }} data-text="Web Developer">Web Developer</span>
          ))}
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
          <a href={CV} className="btn" download>Tải CV</a>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src={homeImg} alt="Home" />
          </div>
        </div>
      </div>
    </section>
  );
};