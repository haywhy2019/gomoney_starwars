import React,  { useState, useEffect }from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getPeople} from "../../redux/action/peopleAction"
import {getShips} from "../../redux/action/shipsAction"
import {getPlanet} from "../../redux/action/planetAction"


import { Container, Row, Col } from "reactstrap";
import style from "./homePage.module.scss"

const HomePage = () => {
    const dispatch = useDispatch()
    const [people, setPeople] = useState("")
    const [ships, setShips] = useState("")
    const [planet, setPlanet] = useState("")

  const allPeople = useSelector(state => state.people.people)
  const allShips = useSelector(state => state.ships.ships)
  const allPlanet = useSelector(state => state.planet.planet)
  const allPeopleLoad = useSelector(state => state.people.loading)
  const allShipsLoad = useSelector(state => state.ships.loading)
  const allPlanetLoad  = useSelector(state => state.planet.loading)

  const popularPeople = allPeople &&(allPeople.data.results.slice(0,3))
  console.log(popularPeople, "popular")
  console.log(allPeople,allPlanet,allShips, "all", allShipsLoad)
    useEffect(() => {
        dispatch(getPeople())
        dispatch(getShips())
        dispatch(getPlanet())
      }, [])

    return (
        <Container>
            <Row>
                <h1 className="text-center pt-5">Popular Starships</h1>
                <span className={`${style.titleLine}`}></span>
            </Row>
        </Container>
    );
}

export default HomePage;
