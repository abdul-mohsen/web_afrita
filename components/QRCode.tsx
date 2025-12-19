// components/QRCode.tsx
import { FC } from "react";
import QRCode from "react-qr-code";
import React from "react";

interface QRCodeProps {
  billId: string;
}

const QRCodeComponent: FC<QRCodeProps> = ({ qr_code }) => {
  return (
    <div>
      <QRCode value={qrValue} size={64} />
    </div>
  );
};

export default QRCodeComponent;
