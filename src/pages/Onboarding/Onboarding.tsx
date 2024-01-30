import React, { useRef, useState } from "react";
import { IonButton, IonIcon, IonPage } from "@ionic/react";
import Slider from "react-slick";
import { arrowForwardOutline } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
import Slide from "../../components/Onboarding/Slide";
import { slides } from "../../components/Onboarding/slides";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Onboarding.css";

const Onboarding: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useHistory();

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleButtonClick = () => {
    if (currentSlide === 3) {
      history.push("/login");
    } else {
      goToNextSlide();
    }
  };

  const settings = {
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const buttonText = currentSlide === 3 ? "Get Started" : "Next";

  return (
    <IonPage>
      <div className="slider-container">
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide) => (
            <Slide key={slide.title} {...slide} />
          ))}
        </Slider>
        <div className="buttons-container">
          <IonButton onClick={handleButtonClick} className="next">
            {buttonText} <IonIcon slot="end" icon={arrowForwardOutline} />
          </IonButton>
          {currentSlide !== 3 && (
            <Link className="skip" to="/login">
              Skip onboarding and login
            </Link>
          )}
        </div>
        <Link to="/home">GO TO HOME</Link>
      </div>
    </IonPage>
  );
};

export default Onboarding;
