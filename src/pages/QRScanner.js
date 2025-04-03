import React from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";

const QRCodeScanner = () => {
  return (
    <div className="container">
      <h2>Quét mã QR</h2>
      <Html5QrcodePlugin
        fps={60}
        qrbox={{ width: 100, height: 100 }}
        aspectRatio={1}
        disableFlip={false}
        videoConstraints={{
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        }}
      />
    </div>
  );
};

export default QRCodeScanner;