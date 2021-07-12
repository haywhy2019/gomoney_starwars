import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { getPeople } from "../../redux/action/peopleAction";
import PeopleImages from "../../assets/people"
import PeopleCard from "../../components/peopleCard/peopleCard"
import Header from "../../components/header/header";

import { Container, Row, Col, Button } from "reactstrap";

function People() {
    const dispatch = useDispatch();
    const [people, setPeople] = useState("");
    const allPeople = useSelector((state) => state.people.people);

    useEffect(() => {
        dispatch(getPeople());
      
      }, []);
    
    return (
        <div>
                <Header />
      <Container>
    <Row>
    {/* <Col md="12" sm="12" className="py-5">
          <h1 className="text-center pt-5">Popular Characters</h1>
          <div className={`${style.titleLine}`}></div>
        </Col>    */}
        <Row className="text-center">
           <Col className="d-inline-flex flex-wrap justify-content-around" md="12">
           {
           
           allPeople &&
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
           {/* <Button className={`${style.button}`}> VIEW MORE</Button> */}
           </Col>
       </Row> 
    </Row>
         
    </Container>
        </div>
    )
}

export default People
