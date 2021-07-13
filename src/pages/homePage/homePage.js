import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../redux/action/peopleAction";
import { getShips } from "../../redux/action/shipsAction";
import { getPlanet } from "../../redux/action/planetAction";
import ShipCard from "../../components/shipCard/shipCard";
import ShipImages from "../../assets/ships";
import PeopleImages from "../../assets/people";
import PlanetImages from "../../assets/planet";
import PlanetCard from "../../components/planetCard/planetCard";
import PeopleCard from "../../components/peopleCard/peopleCard";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import style from "./homePage.module.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const [people, setPeople] = useState("");
  const [ships, setShips] = useState("");
  const [planet, setPlanet] = useState("");

  const allPeople = useSelector((state) => state.people.people);
  const allShips = useSelector((state) => state.ships.ships);
  const allPlanet = useSelector((state) => state.planet.planet);
  const allPeopleLoad = useSelector((state) => state.people.loading);
  const allShipsLoad = useSelector((state) => state.ships.loading);
  const allPlanetLoad = useSelector((state) => state.planet.loading);

  useEffect(() => {
    dispatch(getPeople());
    dispatch(getShips());
    dispatch(getPlanet());
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md="12" sm="12" className="py-5">
            <h1 className="text-center">Popular Starships</h1>
            <div className={`${style.titleLine}`}></div>
          </Col>
        </Row>
        <Row className="text-center">
          <Col
            className="d-inline-flex flex-wrap justify-content-around"
            md="12"
            sm="12"
          >
            {allShips &&
              allShips.data.results
                .filter((ship, index) => index < 6)
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
          <Col md="12" sm="10">
            <Link to="/ships">
              <Button className={`${style.button}`}> VIEW MORE</Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col md="12" sm="12" className="py-5">
            <h1 className="text-center pt-5">Popular Planets</h1>
            <div className={`${style.titleLine}`}></div>
          </Col>
<Col md="12">
           
                  <PlanetCard  content={allPlanet}/>
             
          </Col>
        </Row>

        <Row>
          <Col md="12" sm="12" className="py-5">
            <h1 className="text-center pt-5">Popular Characters</h1>
            <div className={`${style.titleLine}`}></div>
          </Col>
          <Row className="text-center">
            <Col
              className="d-inline-flex flex-wrap justify-content-around"
              md="12"
            >
              {allPeople &&
                allPeople.data.results
                  .filter((people, index) => index < 6)
                  .map((people, index) => (
                    <PeopleCard
                      image={PeopleImages[0].people}
                      title1={people.name}
                      title2={people.birth_year}
                      title3={people.gender}
                      key={`${index}people`}
                    />
                  ))}
            </Col>
            <Col md="12">
              <Link to="/people">
                <Button className={`${style.button}`}> VIEW MORE</Button>
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
