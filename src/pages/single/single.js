import React from "react";
import Header from "../../components/header/header";
import { Container, Row, Col } from "reactstrap";
import Ship from "../../assets/starship-1.jpg";
import style from "./single.module.scss";
import { Play } from "react-feather";

function Single() {
  return (
    <div>
      <Header content={<Content />} />
    </div>
  );
}

export default Single;

const Content = () => {
  return (
    <div>
      <div className={style.position}>
        <img src={Ship} alt="logo" className={style.img} />
        <div className={`${style.positionAb}`}>
            <div className={style.section}> 
            <div className={`d-flex `}>
            <div className={style.leftBracket}></div>
            <p className={style.shipName}>Correllian Scout</p>
            <div className={style.rightBracket}></div>
          </div>
          <div className={`d-flex `}>
            <div className={`me-5 ${style.iconBorder}`}>
              {" "}
              <Play className={`${style.iconLeft}`} size={18} />
            </div>
            <div className={style.iconBorder}>
              {" "}
              <Play className={style.icon} size={18} />
            </div>
          </div>
            </div>
       
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};
