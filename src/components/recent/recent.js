import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeople } from "../../redux/action/peopleAction";
import { getShips } from "../../redux/action/shipsAction";
import { getPlanet } from "../../redux/action/planetAction";
import ShipCard from "../../components/shipCard/shipCard";
import ShipImages from "../../assets/starship-1.jpg";
import PeopleImages from "../../assets/character-1.jpg";
import PlanetImages from "../../assets/planet-1.jpg";
import PeopleCard from "../../components/peopleCard/peopleCard";
import {Container, Row, Col} from "reactstrap"
import style from "./recent.module.scss"

function Recent({content,ships,people,planet}) {
    const dispatch = useDispatch();
  
    console.log(ships,people,planet, "loadeing")
    useEffect(() => {
      dispatch(getPeople());
      dispatch(getShips());
      dispatch(getPlanet());
    }, []);
    return (
        <div>
          <Container className="my-5">
              <Row>
                  <Col md="12" className="text-center"> <p  className={`mt-3 ${style.heading}`}>Recently viewed {content}</p></Col>
              </Row>
              <Row className="text-center py-5">
                <Col className={style.contain}>
                {
                      content === "ship" ?
                     ( <Col
                      className={style.recent}
                      md="12"
                      sm="12"
                    >
                      {ships &&
                        ships.data.results
                          .filter((ship, index) => index < 3)
                          .map((ships, index) => (
                            <ShipCard
                              image={ShipImages}
                              title1={ships.name}
                              title2={ships.model}
                              title3={ships.cargo_capacity}
                              key={`${index}ships`}
                            />
                          ))}
                    </Col> )
                    : content === "planet" ? (
                        <Col
                        className={style.recent}
                        md="12"
                      >
                        {planet &&
                          planet.data.results
                            .filter((Planet, index) => index < 3)
                            .map((planet, index) => (
                              <ShipCard
                                image={PlanetImages}
                                title1={planet.name}
                                title2={planet.climate}
                                title3={planet.population}
                                key={`${index}people`}
                              />
                            ))}
                      </Col>
                    ) : content === "people" ?
                    (
                        <Col
                        md="12"
                        className={style.recentPeople}
                      >
                        {people &&
                          people.data.results
                            .filter((people, index) => index < 4)
                            .map((people, index) => (
                              <PeopleCard
                                image={PeopleImages}
                                title1={people.name}
                                title2={people.birth_year}
                                title3={people.gender}
                                key={`${index}people`}
                              />
                            ))}
                      </Col>) : ""
                    
                  }
                </Col>
                
              </Row>
              </Container>  
        </div>
    )
}

export default Recent
