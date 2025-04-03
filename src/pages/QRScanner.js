import React, { useState } from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import ResultContainerPlugin from "./ResultContainerPlugin";

const QRCodeScanner = () => {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    setDecodedResults(prev => [...prev, decodedResult]);
  };

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
        qrCodeSuccessCallback={onNewScanResult}
      />
      <ResultContainerPlugin results={decodedResults} />
    </div>
  );
};

export default QRCodeScanner;