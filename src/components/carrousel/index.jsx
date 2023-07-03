import { useState } from "react";
import arrowRight from "../../asset/arrow_forward_ios-24px 1.svg";
import arrowLeft from "../../asset/arrow_forward_ios-24px 2.svg";

function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };

  return (
    <div id="carrousel">
      {length > 1 && (
        <img
          src={arrowLeft} //Affichage des flèches seulement si length > 1
          alt="gauche"
          onClick={prevSlide}
          className="left-arrow"
        />
      )}
      {length > 1 && (
        <img
          src={arrowRight}
          alt="droite"
          onClick={nextSlide}
          className="right-arrow"
        />
      )}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={current === index ? "slide slide-active" : "slide"}
        >
          {index === current && <img src={slide} alt="appartement" />}

          <span className="carrousel-number"></span>
        </div>
      ))}
    </div>
  );
}

export default Carrousel;
