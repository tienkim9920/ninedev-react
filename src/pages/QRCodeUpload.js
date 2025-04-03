import { useState } from "react";
import axios from "axios";

const QRCodeUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [qrResult, setQrResult] = useState("");

  // Xử lý chọn file
  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Gửi file lên server để quét QR Code
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Vui lòng chọn một hình ảnh trước!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:8000/scan_qr/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.qr_data) {
        setQrResult(response.data.qr_data);
      } else {
        setQrResult("Không tìm thấy QR Code!");
      }
    } catch (error) {
      console.error("Lỗi khi gửi ảnh:", error);
      setQrResult("Lỗi khi gửi ảnh!");
    }
  };

  return (
    <div>
      <h2>Quét QR Code từ hình ảnh</h2>

      {/* Input chọn file */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/* Nút upload */}
      <button onClick={handleUpload}>Quét QR</button>

      {/* Hiển thị kết quả */}
      {qrResult && (
        <div>
          <h3>Kết quả:</h3>
          <p>{qrResult}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeUpload;
