// QRCodeScanner.ts
import {
  BarcodeScanner,
  SupportedFormat,
} from "@capacitor-community/barcode-scanner";
import { Camera } from "@capacitor/camera";

class QRCodeScanner {
  static permissionGranted = false;
  static openActionSettings = false;

  static onPermissionDenied: () => void;

  static setPermissionGranted(value: boolean) {
    this.permissionGranted = value;
  }
  static setOnPermissionDenied(value: boolean) {
    this.openActionSettings = value;
  }

  // static checkPermission = async () => {
  //   await Camera.checkPermissions();
  //   const status = await Camera.requestPermissions({ permissions: ["camera"] });
  //   console.log("CAMERA STATUS: ", status.camera);
  //   if (status.camera === "granted") {
  //     console.log("Camera permission GRANTED");
  //     // setActionPopup(false);
  //     return true;
  //   } else if (status.camera === "denied") {
  //     // setActionPopup(true);
  //     return false;
  //   } else {
  //     console.log("Camera permission NOT GRANTED");
  //   }
  // };

  static async startScan() {
    const result = await BarcodeScanner.startScan({
      targetedFormats: [SupportedFormat.QR_CODE],
    });

    if (!result.hasContent) {
      console.log("Scan cancelled");
      return null;
    } else {
      console.log("QR Code scanned:", result.content);
      return result.content;
    }
  }

  static stopScan() {
    BarcodeScanner.stopScan();
  }
}

export default QRCodeScanner;
