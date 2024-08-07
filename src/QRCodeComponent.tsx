import React from 'react';
import QRCode from 'qrcode.react';

interface QRCodeComponentProps {
    text: string;
    size?: number;
    bgColor?: string;
    fgColor?: string;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({
     text,
     size = 256,
     bgColor = "#ffffff",
     fgColor = "#000000"
 }) => {
    const qrCodeText = `TEXT:${text}`;

    return (
        <div>
            <QRCode
                value={qrCodeText}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
            />
        </div>
    );
};

export default QRCodeComponent;
