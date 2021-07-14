import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/header";
import PeopleImage from "../../assets/character-3.jpg"
import { getPeople } from "../../redux/action/peopleAction";
import { getShips } from "../../redux/action/shipsAction";
import { getPlanet } from "../../redux/action/planetAction";

import {
  Container,
  Row,
  Col
} from "reactstrap";
import ShipImage from "../../assets/starship-1.jpg";
import style from "./single.module.scss";
import { Play } from "react-feather";
import Recent from "../../components/recent/recent";
import SingleCard from "../../components/singleCard/singleCard"

import { getSingle } from "../../redux/action/singleAction";

function Single(props) {
  const dispatch = useDispatch();
  const type = props.match.params.type;
  const id = props.match.params.id;
  const allDetails = useSelector((state) => state.single.single);
  const allPeople = useSelector((state) => state.people.people);
  const allShips = useSelector((state) => state.ships.ships);
  const allPlanet = useSelector((state) => state.planet.planet);

  const  data =  allDetails &&(allDetails.data)
  console.log(data, "all details");
  useEffect(() => {
    dispatch(getSingle(id,type));
    dispatch(getPeople(1));
    dispatch(getShips(1));
    dispatch(getPlanet());
  }, []);

  let choseImage 
  if(  type == "people" ){
    choseImage = PeopleImage
  }else {
    choseImage = ShipImage
  }

  return (
    <div>
      <Header content={<Content />} />   
      
          <div md="12" sm="12" className={style.center}>
        <SingleCard 
        type = {type}
        image = {choseImage}
        title1={data&&(data.name)} 
        title2=  {data&&(data.birth_year) || data&&(data.cargo_capacity)}
         title3= {data&&(data.eye_divor) || data&&(data.consumables)}
          title4 =   {data&&(data.gender) || data&&(data.crew)}
          title5  =    {data&&(data.height) || data&&(data.passengers)}
          title6 =  {data&&(data.mass) || data&&(data.manufacturer)}/>
          </div>
       
      
      <Recent content={type}  ships={allShips} people={allPeople} planet={allPlanet}/>
    </div>
  );
}

export default Single;

const Content = () => {
  return (
    <div>
      <div className={style.position}>
        <img src={ShipImage} alt="logo" className={style.img} />
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
      <div></div>
    </div>
  );
};
