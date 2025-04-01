import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRCodeScanner = () => {
  const [scannedData, setScannedData] = useState("");

  return (
    <div className="flex flex-col items-center p-4 gap-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">QR Code Scanner</h2>
      <QrReader
        constraints={{ facingMode: "environment" }} // Dùng camera sau
        scanDelay={500}
        onResult={(result, error) => {
          if (result) {
            setScannedData(result.text);
          }
          if (error) {
            console.warn("Không tìm thấy mã QR:", error);
          }
        }}
        style={{ width: "100%", maxWidth: "500px", border: "2px solid white" }}
      />
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