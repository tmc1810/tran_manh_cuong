import { useEffect, useRef, useState } from "react";
import App from '../App';

export default function Fullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  const targetRef = useRef(null);

  // Hàm yêu cầu fullscreen
  const requestFullscreen = (el) => {
    if (el.requestFullscreen) return el.requestFullscreen();
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen(); // Safari
    if (el.msRequestFullscreen) return el.msRequestFullscreen(); // IE/Edge cũ
  };

  // Cập nhật trạng thái fullscreen
  const checkFullscreen = () => {
    const fsElement =
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;
    setIsFullscreen(!!fsElement);
  };

  // Khi click lần đầu → fullscreen
  const handleFirstClick = async () => {
    if (hasClicked) return; // Nếu đã click rồi thì không làm gì nữa

    setHasClicked(true); // Đánh dấu đã click
    const el = targetRef.current || document.documentElement;

    try {
      await requestFullscreen(el);
      console.log("Đã bật fullscreen lần đầu");
    } catch (err) {
      console.error("Không thể fullscreen:", err);
    }
  };

  // Lắng nghe thay đổi fullscreen
  useEffect(() => {
    document.addEventListener("fullscreenchange", checkFullscreen);
    document.addEventListener("webkitfullscreenchange", checkFullscreen);
    document.addEventListener("msfullscreenchange", checkFullscreen);

    return () => {
      document.removeEventListener("fullscreenchange", checkFullscreen);
      document.removeEventListener("webkitfullscreenchange", checkFullscreen);
      document.removeEventListener("msfullscreenchange", checkFullscreen);
    };
  }, []);

  return (
    <div ref={targetRef} onClick={handleFirstClick}>
        <App />
    </div>
  );
}
