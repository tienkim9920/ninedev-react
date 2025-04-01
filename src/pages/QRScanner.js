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
        fps={10}
        qrbox={200}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <ResultContainerPlugin results={decodedResults} />
    </div>
  );
};

export default QRCodeScanner;