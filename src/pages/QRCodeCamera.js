import { useState, useRef } from "react";
import axios from "axios";

const QRCodeCamera = () => {
  const videoRef = useRef(null);
  const [qrResult, setQrResult] = useState("");
  const [isBackCamera, setIsBackCamera] = useState(true);

  const startCamera = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Trình duyệt của bạn không hỗ trợ camera!");
        return;
      }

      const constraints = {
        video: {
          facingMode: "environment", // Ưu tiên camera sau
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Không thể mở camera", err);
      alert("Lỗi khi mở camera. Kiểm tra quyền hoặc thử trình duyệt khác.");
    }
  };

  // Chụp ảnh từ camera
  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(uploadImage, "image/png");
  };

  // Gửi ảnh lên server
  const uploadImage = async (blob) => {
    const formData = new FormData();
    formData.append("file", blob, "qr_code.png");

    try {
      const response = await axios.post(
        "http://192.168.1.7:8000/scan_qr/",
        formData
      );
      setQrResult(response.data.qr_data || response.data.error);
    } catch (error) {
      console.error("Lỗi khi gửi ảnh:", error);
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="300"
        height="200"
      ></video>
      <br />
      <button onClick={startCamera}>Bật Camera</button>
      <button onClick={captureImage}>Chụp & Quét</button>
      <h2>Kết quả: {qrResult}</h2>
    </div>
  );
};

export default QRCodeCamera;
