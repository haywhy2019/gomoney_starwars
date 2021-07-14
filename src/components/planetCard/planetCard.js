import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React  from "react";
import Slider from "react-slick";
import PlanetImages from "../../assets/planet";
import style from "./planetCard.module.scss";

const PlanetCard = ({ content }) => {
  const planetDetails = content && content.data.results;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={style.imageCover}>
          <img src={PlanetImages[0].planet} className={style.img} alt="planet"/>
          <div className={style.imageText}>
            <p className="fw-bold">{planetDetails && planetDetails[0].name}</p>
            <p>{planetDetails && planetDetails[0].climate}</p>
            <p>{planetDetails && planetDetails[0].population}</p>
          </div>
        </div>
        <div className={style.imageCover}>
          <img src={PlanetImages[1].planet} className={style.img} alt="planet"/>
          <div className={style.imageText}>
            <p className="fw-bold">{planetDetails && planetDetails[1].name}</p>
            <p>{planetDetails && planetDetails[1].climate}</p>
            <p>{planetDetails && planetDetails[1].population}</p>
          </div>
        </div>
        <div className={style.imageCover}>
          <img src={PlanetImages[2].planet} className={style.img} alt="planet"/>
          <div className={style.imageText}>
            <p className="fw-bold">{planetDetails && planetDetails[2].name}</p>
            <p>{planetDetails && planetDetails[2].climate}</p>
            <p>{planetDetails && planetDetails[2].population}</p>
          </div>
        </div>
        <div className={style.imageCover}>
          <img src={PlanetImages[1].planet} className={style.img} alt="planet"/>
          <div className={style.imageText}>
            <p className="fw-bold">{planetDetails && planetDetails[3].name}</p>
            <p>{planetDetails && planetDetails[3].climate}</p>
            <p>{planetDetails && planetDetails[3].population}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default PlanetCard;
