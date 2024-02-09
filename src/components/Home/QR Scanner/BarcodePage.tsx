// Import necessary modules
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import {
  BarcodeScanner,
  SupportedFormat,
} from "@capacitor-community/barcode-scanner";
import { useEffect, useState } from "react";
import { arrowBackOutline, scanOutline } from "ionicons/icons";
import "./BarcodeScanner.css";
import "../../../global.css";
import { useHistory } from "react-router";
import { handleScan } from "./StartScan";
import bottomLeft from "../../../assets/images/QR/VectorbottomLeft.png";
import bottomRight from "../../../assets/images/QR/VectorbottomRight.png";
import topLeft from "../../../assets/images/QR/VectortopLeft.png";
import topRight from "../../../assets/images/QR/VectortopRight.png";
import QR from "../../../assets/images/QR/QR.png";

const BarcodePage: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scan, setScan] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const checkPermission = async () => {
    const status = await BarcodeScanner.checkPermission({ force: true });

    if (status.granted) {
      // the user did grant the permission now
      return true;
    }
    if (status.denied) {
      return false;
      // const c = confirm(
      //   "If you want to grant permission for using your camera, enable it in the app settings."
      // );
      // if (c) {
      //   BarcodeScanner.openAppSettings();
      // }
    }
  };

  const scanQRCode = async () => {
    setScan(true);
    checkPermission();
    try {
      const result = await BarcodeScanner.startScan({
        targetedFormats: [SupportedFormat.QR_CODE],
      });

      if (!result.hasContent) {
        console.log("Scan cancelled");
      } else {
        console.log("QR Code scanned:", result.content);
        setScanResult(result.content);
        history.push("/home");
      }
    } catch (error) {
      console.error("Error scanning QR Code:", error);
    }
  };
  const handleButtonClick = () => {
    setScan(true);
  };
  const handleBack = () => {
    setScan(false);
    stopScan();
    history.push("/home");
  };
  const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };
  useEffect(() => {
    scanQRCode();

    return () => {
      setScan(false);
      stopScan();
    };
  }, []);
  // const checkPermission = async () => {
  //   const status = await BarcodeScanner.checkPermission();

  //   if (status.granted) {
  //     // the user did grant the permission now
  //     return true;
  //   }
  //   if (status.denied) {
  //     // the user denied permission
  //     return new Promise((resolve) => {
  //       const onAllowEveryTime = async () => {
  //         await BarcodeScanner.requestPermission();
  //         resolve(true);
  //         setShowModal(false);
  //       };

  //       const onAllowOnce = async () => {
  //         await BarcodeScanner.requestPermission({ force: true });
  //         resolve(true);
  //         setShowModal(false);
  //       };

  //       const onNever = () => {
  //         resolve(false);
  //         setShowModal(false);
  //       };

  //       setShowModal(true);
  //     });
  //   }
  // };

  return (
    <IonPage>
      <div
        className={
          scan ? "startScanner-container transparent" : "startScanner-container"
        }
      >
        <div className="flex-container">
          <IonButton
            className={"scannerBack"}
            slot="start"
            onClick={handleBack}
          >
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
          <div className="text-container">
            <h3 className="scan-title">Scan to charge</h3>
            <p>
              Please, scan QR code next to connector you are planning to use for
              charging your vehicle
            </p>
          </div>
          {/* <div className="displayNone"> */}
          <div
            className={scan ? "square-border transparent" : "square-border"}
            style={{ position: "relative" }}
          >
            {scan ? null : (
              <img
                src={QR}
                style={{
                  width: "80%",
                  height: "80%",
                }}
              />
            )}
            <div>
              <img
                className="barcode-img"
                src={topLeft}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              <img
                className="barcode-img"
                src={topRight}
                style={{ position: "absolute", top: 0, right: 0 }}
              />
            </div>
            <div>
              <img
                className="barcode-img"
                src={bottomLeft}
                style={{ position: "absolute", bottom: 0, left: 0 }}
              />
              <img
                className="barcode-img"
                src={bottomRight}
                style={{ position: "absolute", bottom: 0, right: 0 }}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* <PermissionModal
          isOpen={showModal}
          onAllowEveryTime={() => checkPermission()}
          onAllowOnce={() => checkPermission()}
          onNever={() => checkPermission()}
          onClose={() => setShowModal(false)}
        /> */}
      </div>
    </IonPage>
  );
};

export default BarcodePage;
