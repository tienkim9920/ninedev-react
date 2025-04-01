import React, { useState } from "react";
import { useQrReader } from "react-qr-reader";

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState("");

  useQrReader({
    constraints: { facingMode: "environment" }, // Sử dụng camera sau
    onResult: (result, error) => {
      if (result) {
        setScannedData(result.getText());
      }
      if (error) {
        console.error(error);
      }
    },
    scanDelay: 500, // Quét mỗi 500ms
  });

  return (
    <div>
      <h2>Scan QR Code</h2>
      <video id="qr-video" style={{ width: "100%" }} />
      {scannedData && (
        <div>
          <h3>Scanned Data:</h3>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeScanner;
