import React, { useEffect, useState } from "react";
import { IonBackButton, IonButton, IonButtons, IonModal } from "@ionic/react";
import "./BarcodeScanner.css"; // Import your component-specific styles
import { startScan } from "./StartScan";

interface ScannerModalProps {
  onClose: () => void;
}

const ScannerComponent: React.FC<ScannerModalProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleModalDismiss = () => {
    setIsOpen(false);
    onClose();
  };

  const handleModalPresent = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    // Initialize your component or perform any setup logic here
    return () => {
      // Clean up any resources or subscriptions when the component is unmounted
    };
  }, []);

  return (
    <IonModal
      isOpen={isOpen}
      onDidDismiss={handleModalDismiss}
      onWillPresent={handleModalPresent}
    >
      <div className="scanner-container">
        <div className="text-container">
          <h3 className="scan-title">Scan to charge</h3>
          <p>
            Please, scan QR code next to connector you are planning to use for
            charging your vehicle
          </p>
        </div>
        <div className="black-background">
          <div className="square-border">
            <IonButton onClick={startScan}>Scan Barcode</IonButton>
          </div>
        </div>
      </div>
    </IonModal>
  );
};

export default ScannerComponent;
