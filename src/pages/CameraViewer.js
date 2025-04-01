import React, { useRef, useEffect, useState } from "react";

const CameraViewer = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    // Yêu cầu quyền truy cập camera
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // Sử dụng camera sau
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();
  }, []);

  // Chụp ảnh từ camera
  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Lưu ảnh chụp vào state
      setCapturedImage(canvas.toDataURL("image/png"));
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Camera Viewer</h2>

      {/* Video stream từ camera */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="200px"
        height="200px"
      />

      {/* Nút chụp ảnh */}
      <button
        onClick={captureImage}
        className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
      >
        Chụp Ảnh
      </button>

      {/* Canvas để lưu ảnh chụp */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {/* Hiển thị ảnh đã chụp */}
      {capturedImage && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Ảnh đã chụp</h3>
          <img
            src={capturedImage}
            alt="Captured"
            className="mt-2 border border-gray-500 rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default CameraViewer;
