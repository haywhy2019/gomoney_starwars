import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../redux/action/peopleAction";
import { getShips } from "../../redux/action/shipsAction";
import { getPlanet } from "../../redux/action/planetAction";
import { searchShips, searchPeople } from "../../redux/action/searchAction";
import ShipCard from "../../components/shipCard/shipCard";
import ShipImages from "../../assets/ships";
import PeopleImages from "../../assets/people";
import PlanetCard from "../../components/planetCard/planetCard";
import PeopleCard from "../../components/peopleCard/peopleCard";
import Header from "../../components/header/header";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Button} from "reactstrap";
import style from "./homePage.module.scss";

const HomePage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [shipData, setShipData] = useState(null);
  const [peopleData, setPeopleData] = useState(null);
  const allPeople = useSelector((state) => state.people.people);
  const allShips = useSelector((state) => state.ships.ships);
  const allPlanet = useSelector((state) => state.planet.planet);

  // const searchPlanetResult = useSelector((state) => state.searchPlanet.searchPlanet);
  const searchShipsResult = useSelector(
    (state) => state.searchShips.searchShips
  );
  const searchPeopleResult = useSelector(
    (state) => state.searchPeople.searchPeople
  );
  useEffect(() => {
    dispatch(getPeople(1));
    dispatch(getShips(1));
    dispatch(getPlanet());
  });

  useEffect(() => {
    setShipData(searchShipsResult && searchShipsResult.data.results);
    setPeopleData(searchPeopleResult && searchPeopleResult.data.results);
  }, [searchShipsResult, searchPeopleResult]);

  const viewDetails = (e, link, content) => {
    e.preventDefault();
    let id = link.replace(/\D/g, "");
    history.push(`/single/${content}/${id}`);
  };

  const searchName = (e, search) => {
    e.preventDefault();
    dispatch(searchPeople());
    dispatch(searchShips());
    dispatch(searchPeople(search));
    dispatch(searchShips(search));
  };

  const closeSearch = (e) => {
    e.preventDefault();
    setShipData(null);
    setPeopleData(null);
  };
  return (
    <div>
      <Header
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onClick={(e) => searchName(e, search)}
      />
      <Container className="text-center">
        {(shipData && Array.isArray(shipData)) ||
        (peopleData && Array.isArray(peopleData)) ? (
          <Button
            outline
            color="danger"
            className="mt-3 mb-3"
            onClick={(e) => closeSearch(e)}
          >
            {" "}
            X Close search
          </Button>
        ) : (
          ""
        )}
        {shipData && shipData.length >= 1 ? (
          <Container>
            <Col
              className="d-inline-flex flex-wrap justify-content-around"
              md="12"
              sm="12"
            >
              {shipData &&
                shipData.map((ships, index) => (
                  <ShipCard
                    image={ShipImages[0].ship}
                    title1={ships.name}
                    title2={ships.model}
                    title3={ships.cargo_capacity}
                    key={`${index}ships`}
                    onClick={(e) => viewDetails(e, ships.url, "ship")}
                  />
                ))}
            </Col>
          </Container>
        ) : (
          ""
        )}

        {peopleData && peopleData.length >= 1 ? (
          <Container>
            <Col
              className="d-inline-flex flex-wrap justify-content-around"
              md="12"
            >
              {peopleData &&
                peopleData.map((people, index) => (
                  <PeopleCard
                    image={PeopleImages[0].people}
                    title1={people.name}
                    title2={people.birth_year}
                    title3={people.gender}
                    key={`${index}people`}
                    onClick={(e) => viewDetails(e, people.url, "people")}
                  />
                ))}
            </Col>
          </Container>
        ) : (
          ""
        )}
      </Container>

      <Container className="home">
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
                    onClick={(e) => viewDetails(e, ships.url, "ship")}
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
            <PlanetCard content={allPlanet} />
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
                      onClick={(e) => viewDetails(e, people.url, "people")}
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
