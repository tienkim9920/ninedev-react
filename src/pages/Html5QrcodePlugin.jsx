import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const qrcodeRegionId = "html5qr-code-full-region";

const Html5QrcodePlugin = () => {
    const qrScanner = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [crop, setCrop] = useState({
        unit: "px",
        x: 10,
        y: 10,
        width: 250,
        height: 250,
        aspect: null,
    });
    const [croppedImage, setCroppedImage] = useState(null);
    const [resultQRcode, setResultQRcode] = useState(null);

    useEffect(() => {
        qrScanner.current = new Html5Qrcode(qrcodeRegionId);
        return () => {
            qrScanner.current = null;
        };
    }, []);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const getCroppedImage = async () => {
        if (!selectedImage || !crop.width || !crop.height) return;

        const image = new Image();
        image.src = selectedImage;
        await new Promise((resolve) => (image.onload = resolve));

        // Kích thước thật của ảnh
        const naturalWidth = image.naturalWidth;
        const naturalHeight = image.naturalHeight;

        // Giới hạn kích thước crop (tránh quá lớn làm crash trình duyệt)
        const MAX_CANVAS_SIZE = 2000; // Có thể thay đổi tùy theo trình duyệt

        // Tính tỉ lệ giữa ảnh lớn và kích thước tối đa của canvas
        const scaleFactor = Math.min(MAX_CANVAS_SIZE / naturalWidth, MAX_CANVAS_SIZE / naturalHeight, 1);

        const scaledWidth = Math.floor(naturalWidth * scaleFactor);
        const scaledHeight = Math.floor(naturalHeight * scaleFactor);

        // Tính toán tỷ lệ đúng hơn khi hiển thị ảnh
        const scaleX = naturalWidth / scaledWidth;
        const scaleY = naturalHeight / scaledHeight;

        // Điều chỉnh lại tỷ lệ tính toán thêm một chút (giảm lệch)
        const adjustmentFactorX = Math.round(scaleX);
        const adjustmentFactorY = Math.round(scaleY);

        // Tính lại vùng crop với điều chỉnh
        const realCropX = Math.round(crop.x * scaleX) - adjustmentFactorX;
        const realCropY = Math.round(crop.y * scaleY) - adjustmentFactorY;
        const realCropWidth = Math.round(crop.width * scaleX);
        const realCropHeight = Math.round(crop.height * scaleY);

        const canvas = document.createElement("canvas");
        canvas.width = realCropWidth;
        canvas.height = realCropHeight;
        const ctx = canvas.getContext("2d");

        // Vẽ ảnh lên canvas với vị trí và kích thước chính xác
        ctx.drawImage(
            image,
            realCropX, realCropY, // Vị trí cắt chính xác
            realCropWidth, realCropHeight, // Kích thước cắt
            0, 0, // Vị trí vẽ trên canvas
            realCropWidth, realCropHeight // Kích thước trên canvas
        );

        canvas.toBlob((blob) => {
            if (blob) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setCroppedImage(reader.result);
                };
                reader.readAsDataURL(blob);

                // Chuyển blob thành file để scan QR
                const croppedFile = new File([blob], "cropped.png", { type: "image/png" });
                scanCroppedImage(croppedFile);
            }
        }, "image/png");
    };

    const scanCroppedImage = async (file) => {
        try {
            const result = await qrScanner.current.scanFile(file, false);
            console.log("QR Code Result:", result);
            setResultQRcode(result);
        } catch (err) {
            console.log("QR Scan Error:", err);
        }
    };

    return (
        <div className="wrapper-qrcode">
            <input type="file" accept="image/*" onChange={handleFileSelect} />

            {selectedImage && (
                <div>
                    <ReactCrop
                        aspect={null}
                        crop={crop}
                        onChange={(c) => setCrop(c)}
                        onComplete={() => getCroppedImage()}
                    >
                        <img src={selectedImage} width="100%" height="auto" />
                    </ReactCrop>
                </div>
            )}

            <h2>Kết quả</h2>
            <div>{resultQRcode}</div>

            <h2>Preview:</h2>
            <img src={croppedImage} alt="Cropped" width="500px" height="500px" />

            <div id={qrcodeRegionId} className="container-qrcode" />
        </div>
    );
};

export default Html5QrcodePlugin;
