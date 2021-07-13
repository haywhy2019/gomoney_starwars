import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Header from "../../components/header/header";
import style from "./shipPage.module.scss"

import { getShips } from "../../redux/action/shipsAction";
import ShipCard from "../../components/shipCard/shipCard";
import ShipImages from "../../assets/ships"

import { Container, Row, Col, Button } from "reactstrap";

function People() {
    const dispatch = useDispatch();
    const [people, setPeople] = useState("");
    const allPeople = useSelector((state) => state.people.people);
    const allShips = useSelector((state) => state.ships.ships);

    useEffect(() => {
        dispatch(getShips());
      
      }, []);
    
    return (
        <div>
                <Header />
      <Container>
    <Row>
    <Col md="12" sm="12" className="py-5">
          <h1 className="text-center pt-5">Starwars Characters</h1>
          <div className={`${style.titleLine}`}></div>
        </Col>   
        <Row className="text-center">
           <Col className="d-inline-flex flex-wrap justify-content-around" md="12">
           {
           
           allShips &&
            allShips.data.results
              .filter((ship, index) => index < 9)
              .map((ships, index) => (
                <ShipCard
                  image={ShipImages[0].ship}
                  title1={ships.name}
                  title2={ships.model}
                  title3={ships.cargo_capacity}
                  key={`${index}ships`}
                />
              ))}
           </Col>
           <Col md="12">
           {/* <Button className={`${style.button}`}> VIEW MORE</Button> */}
           </Col>
       </Row> 
    </Row>
         
    </Container>
        </div>
    )
}

export default People
