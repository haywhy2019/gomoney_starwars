import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPeople } from "../../redux/action/peopleAction";
import PeopleImages from "../../assets/people";
import PeopleCard from "../../components/peopleCard/peopleCard";
import Header from "../../components/header/header";
import style from "./people.module.scss";
import { ChevronLeft, ChevronRight } from "react-feather";
import ReactPaginate from "react-paginate";
import { Container, Row, Col,  Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

function People() {
  const Previous = () => {
    return (
      <React.Fragment>
        <ChevronLeft size={15} /> {""}
        <span className="align-middle d-none d-md-inline-block">Prev</span>
      </React.Fragment>
    );
  };

  const Next = (next) => {
    return (
      <React.Fragment>
        <span className="align-middle d-none d-md-inline-block">Next</span>
        <ChevronRight size={15} />
      </React.Fragment>
    );
  };

  const dispatch = useDispatch();
  const [people, setPeople] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
console.log(people,"people")
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const allPeople = useSelector((state) => state.people.people);
  // const filteredPeople = allPeople &&(allPeople.data.results.gender.toLowerCase().includes(people.toLowerCase()))
  const filteredPeople = allPeople &&(allPeople.data.results).filter(filter => filter.gender.includes(people))
  console.log(filteredPeople, "filter")

  const lastIndex = allPeople && allPeople.data.count;
  const pageCount = Math.ceil(lastIndex / 9);
  const handlePageClick = async (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
    dispatch(getPeople(selected + 1));
  };
  useEffect(() => {
    dispatch(getPeople(1));
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} value={people} onClick={(e) => setPeople(e.target.value)}>
      <DropdownToggle caret color="primary" size="lg">
        Filter
      </DropdownToggle>
      <DropdownMenu>
      <DropdownItem value="">All</DropdownItem>
        <DropdownItem value="male">Male</DropdownItem>
        <DropdownItem value="female">Female</DropdownItem>
        <DropdownItem value="n/a">Robot</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        </Row>
        <Row>
          <Col md="12" sm="12" className="py-5">
            <h1 className="text-center pt-5">Starwars Characters</h1>
            <div className={`${style.titleLine}`}></div>
          </Col>
          <Row className="text-center">
            <Col
              className="d-inline-flex flex-wrap justify-content-around"
              md="12"
            >
              {filteredPeople &&
                filteredPeople.map((people, index) => (
                  <PeopleCard
                    image={PeopleImages[0].people}
                    title1={people.name}
                    title2={people.birth_year}
                    title3={people.gender}
                    key={`${index}people`}
                  />
                ))}
            </Col>
          </Row>
        </Row>
        <div sm="12" className="d-flex justify-content-center">
          <ReactPaginate
            previousLabel={<Previous />}
            nextLabel={<Next />}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            forcePage={currentPage}
            onPageChange={handlePageClick}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </Container>
    </div>
  );
}

export default People;
