import Charge from "../../assets/images/Charge0.png";
import ScanQR from "../../assets/images/Scan0.png";
import ConnectCar from "../../assets/images/Connect0.png";
import Park from "../../assets/images/Park0.png";
import Dots1 from "../../assets/images/Slide1Dots.png";
import Dots2 from "../../assets/images/Slide2Dots.png";
import Dots3 from "../../assets/images/Slide3Dots.png";
import Dots4 from "../../assets/images/Slide4Dots.png";

export const slides = [
  {
    title: "Park",
    subtitle: "Park your car close to charger",
    image: Park,
    dots: Dots1,
    imageAlt: "Park",
    imageStyle: {
      width: "77.5%",
      margin: "0 auto",
      height: "auto",
      marginBottom: "48px",
    },
  },
  {
    title: "Connect Car",
    subtitle: "Plug in charging cable into your car",
    image: ConnectCar,
    dots: Dots2,
    imageAlt: "Connect",
    imageStyle: {
      width: "63%",
      margin: "0 auto",
      height: "auto",
      marginBottom: "33px",
    },
  },
  {
    title: "Scan QR code",
    subtitle:
      "Use your phone to scan QR code next to the charging cable you intend to use",
    image: ScanQR,
    dots: Dots3,
    imageAlt: "Scan",
    imageStyle: {
      width: "69%",
      margin: "0 auto",
      height: "auto",
      marginBottom: "26px",
    },
  },

  {
    title: "Charge",
    subtitle: "You can monitor charging status from anywhere within mobile app",
    image: Charge,
    dots: Dots4,
    imageAlt: "Charge",
    imageStyle: {
      width: "91.65%",
      margin: "0 auto",
      height: "auto",
      marginBottom: "26px",
    },
  },
];
