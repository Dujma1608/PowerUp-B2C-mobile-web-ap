import React, { CSSProperties } from "react";
import "../../pages/Onboarding/Onboarding.css";
import { IonPage } from "@ionic/react";

interface SlideProps {
  title: string;
  subtitle: string;
  image: string;
  dots: string;
  imageAlt: string;
  imageStyle: CSSProperties;
}

const Slide: React.FC<SlideProps> = ({
  title,
  subtitle,
  image,
  dots,
  imageAlt,
  imageStyle,
}) => {
  return (
    <div className="slider-slide">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <img src={image} alt={imageAlt} style={imageStyle} />
      {/* <img src={dots} alt="dots" id="dots" /> */}
    </div>
  );
};

export default Slide;
