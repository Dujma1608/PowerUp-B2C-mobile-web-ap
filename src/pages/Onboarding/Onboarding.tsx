import React, { useEffect, useRef, useState } from "react";
import { IonButton, IonIcon, IonPage } from "@ionic/react";
import Slider from "react-slick";
import { arrowForwardOutline } from "ionicons/icons";
import { Link, useHistory } from "react-router-dom";
import Slide from "../../components/Onboarding/Slide";
import { slides } from "../../components/Onboarding/slides";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Onboarding.css";
import Dots1 from "../../assets/images/Slide1Dots.png";
import Dots2 from "../../assets/images/Slide2Dots.png";
import Dots3 from "../../assets/images/Slide3Dots.png";
import Dots4 from "../../assets/images/Slide4Dots.png";

const Onboarding: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const history = useHistory();

  useEffect(() => {
    // Check if the user has seen the onboarding before
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    // If user has seen the onboarding, redirect to /login
    if (hasSeenOnboarding) {
      history.replace("/login");
    }
  }, [history]);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleButtonClick = () => {
    if (currentSlide === 3) {
      localStorage.setItem("hasSeenOnboarding", "true");
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
        <div className="dots-img">
          {currentSlide === 0 ? (
            <img src={Dots1} alt="dots" id="dots" />
          ) : currentSlide === 1 ? (
            <img src={Dots2} alt="dots" id="dots" />
          ) : currentSlide === 2 ? (
            <img src={Dots3} alt="dots" id="dots" />
          ) : (
            <img src={Dots4} alt="dots" id="dots" />
          )}
        </div>
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
      </div>
    </IonPage>
  );
};

export default Onboarding;
