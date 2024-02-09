import {
  BarcodeScanner,
  SupportedFormat,
} from "@capacitor-community/barcode-scanner";
import { useHistory } from "react-router";

export const handleScan = async () => {
  const history = useHistory();
  try {
    const result = await BarcodeScanner.startScan({
      targetedFormats: [SupportedFormat.QR_CODE],
    });

    if (!result.hasContent) {
      console.log("Scan cancelled");
    } else {
      console.log("QR Code scanned:", result.content);

      history.push("/home");
    }
  } catch (error) {
    console.error("Error scanning QR Code:", error);
  }
};

const checkPermission = async () => {
  try {
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("Permission error", error);
  }
};
