import React, { useState, useRef, useEffect } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

const QRCodeScanner = () => {
  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState("");

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();
    let stream;

    const startScanner = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }

        // Quét QR Code từ video
        codeReader.decodeFromVideoDevice(undefined, videoRef.current, (result, error) => {
          if (result) {
            setScannedData(result.getText());
          }
          if (error) {
            console.error(error);
          }
        });
      } catch (err) {
        console.error("Camera access error:", err);
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
    <div>
      <h2>Scan QR Code</h2>
      <video ref={videoRef} style={{ width: '400px', height: '400px' }} />
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
};

export default QRCodeScanner;