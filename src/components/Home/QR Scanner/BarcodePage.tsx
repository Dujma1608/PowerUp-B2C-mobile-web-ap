// Import necessary modules
import {
  IonAlert,
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
} from "@ionic/react";
import {
  BarcodeScanner,
  SupportedFormat,
} from "@capacitor-community/barcode-scanner";
import { useEffect, useState } from "react";
import { arrowBackOutline, scanOutline } from "ionicons/icons";
import "./BarcodeScanner.css";
import "../../../global.css";
import { useHistory } from "react-router";
import bottomLeft from "../../../assets/images/QR/VectorbottomLeft.png";
import bottomRight from "../../../assets/images/QR/VectorbottomRight.png";
import topLeft from "../../../assets/images/QR/VectortopLeft.png";
import topRight from "../../../assets/images/QR/VectortopRight.png";
import QR from "../../../assets/images/QR/QR.png";
import BackArrow from "../../../app/common/BackArrow";
import QRCodeScanner from "./QRCodeScanner";
import SureModal from "../../../app/common/tabbar/SureModal";
import CameraPermissionModal from "./CameraPermissionModal";
import { Camera } from "@capacitor/camera";
import { useStore } from "../../../app/stores/store";

const BarcodePage: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scanActive, setScanActive] = useState(false);
  const [actionPopup, setActionPopup] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const { connectorStore } = useStore();
  const history = useHistory();

  const title = "Allow access to your camera";
  const subtitle = "To scan QR code we would like to access your camera";
  const confirmButtonText = "Allow";
  const denyButtonText = "No";

  const handleBack = () => {
    QRCodeScanner.stopScan();
    setScanActive(false);
    history.goBack();
  };

  const checkPermission = async () => {
    // await Camera.checkPermissions();
    const status = await Camera.requestPermissions({ permissions: ["camera"] });
    console.log("CAMERA STATUS: ", status.camera);
    if (status.camera === "granted") {
      console.log("Camera permission GRANTED");
      setActionPopup(false);
      return true;
    } else if (status.camera === "denied") {
      setActionPopup(true);
      return false;
    } else if (status.camera === "prompt-with-rationale") {
      setActionPopup(true);
      return false;
    } else {
      console.log("Camera permission NOT GRANTED");
      return false;
    }
  };

  useEffect(() => {
    const startScanner = async () => {
      const granted = await checkPermission();
      if (granted) {
        setScanActive(true);
        const result = await QRCodeScanner.startScan();
        connectorStore.getConnector(result!);
        setScanResult(result);
        history.push("/app/home");
        setScanActive(false);
      }
    };

    startScanner();
    return () => {
      QRCodeScanner.stopScan();
    };
  }, []);

  return (
    <IonPage>
      <div
        className={
          scanActive
            ? "startScanner-container transparent"
            : "startScanner-container"
        }
      >
        <div style={{ padding: "35px 15px 0px 15px" }}>
          <BackArrow setClose={handleBack} isWhite />
        </div>

        <div className="flex-container">
          <div className="text-container">
            <h3 className="scan-title">Scan to charge</h3>
            <p>
              Please, scan QR code next to connector you are planning to use for
              charging your vehicle
            </p>
          </div>
          {/* <div className="displayNone"> */}
          <div
            className={
              scanActive ? "square-border transparent" : "square-border"
            }
            style={{ position: "relative" }}
          >
            {/* {scanActive ? null : (
              <img
                src={QR}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            )} */}
            <div>
              <img
                className="barcode-img"
                src={topLeft}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
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
      </div>
      {/* <CameraPermissionModal
        isOpen={
          !QRCodeScanner.permissionGranted &&
          showModal &&
          QRCodeScanner.permissionDenied
        }
        setShowModal={setShowModal}
        title={title}
        subtitle={subtitle}
        confirmButtonText={confirmButtonText}
        allowCamera={handlePermissionAllow}
        denyButtonText={denyButtonText}
      /> */}
      <IonAlert
        isOpen={actionPopup}
        header="Camera Permission"
        // subHeader="A Sub Header Is Optional"
        message="If you want to grant permission for using your camera, enable it in the app settings."
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              history.push("/home");
            },
          },
          {
            text: "Open settings",
            role: "confirm",
            handler: () => {
              BarcodeScanner.openAppSettings();
              history.push("/home");
            },
          },
        ]}
      ></IonAlert>
    </IonPage>
  );
};

export default BarcodePage;
