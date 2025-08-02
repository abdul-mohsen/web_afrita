// components/QRCode.tsx
import { FC } from 'react';
import { QRCode } from 'qrcode.react';

interface QRCodeProps {
  billId: string;
}

const QRCodeComponent: FC<QRCodeProps> = ({ billId }) => {
  const qrValue = `https://ifritah.com/bill/${billId}`; // Unique URL for each bill

  return (
    <div>
      <QRCode value={qrValue} size={256} />
    </div>
  );
};

export default QRCodeComponent;
