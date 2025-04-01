import React, { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

const QRCodeScanner = () => {
  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState("");

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    let stream;

    const startScanner = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // Dùng camera sau trên mobile
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute("playsinline", ""); // Fix lỗi trên iOS
          videoRef.current.play();
        }

        // Quét QR Code từ video
        codeReader.decodeFromVideoDevice(undefined, videoRef.current, (result, error) => {
          if (result) {
            setScannedData(result.getText());
          }
          if (error) {
            console.warn("Không tìm thấy mã QR:", error);
          }
        });
      } catch (err) {
        console.error("Không thể truy cập camera:", err);
      }
    };

    startScanner();

    return () => {
      codeReader.reset();
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-4 gap-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">QR Code Scanner</h2>
      <video ref={videoRef} style={{ width: "100%", maxWidth: "500px", border: "2px solid white" }} />
      {scannedData && (
        <div className="p-2 mt-2 bg-gray-700 rounded-md">
          <h3 className="text-lg font-bold">Scanned Data:</h3>
          <pre className="text-green-400">{scannedData}</pre>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
