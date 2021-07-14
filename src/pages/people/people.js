import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPeople } from "../../redux/action/peopleAction";
import PeopleImages from "../../assets/people";
import PeopleCard from "../../components/peopleCard/peopleCard";
import Header from "../../components/header/header";
import style from "./people.module.scss";
import { ChevronLeft, ChevronRight } from "react-feather";
import ReactPaginate from "react-paginate";
import {searchPeople } from "../../redux/action/searchAction";


import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

function People() {
  let history = useHistory();
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
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [peopleData, setPeopleData]  = useState(null)

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const allPeople = useSelector((state) => state.people.people);
  const searchPeopleResult = useSelector(
    (state) => state.searchPeople.searchPeople
  );
  
  const searchName = (e, search) => {
    e.preventDefault();
    dispatch(searchPeople(search));
  };
  const closeSearch = (e) => {
    e.preventDefault()
    setPeopleData(null)
  }

  const viewDetails = (e, link, content) => {
    e.preventDefault();
    let id = link.replace(/\D/g, "");
    history.push(`/single/${content}/${id}`);
  };
  const filteredPeople =
    allPeople &&
    allPeople.data.results.filter((filter) => filter.gender.includes(people));

  const lastIndex = allPeople && allPeople.data.count;
  const pageCount = Math.ceil(lastIndex / 20);
  const handlePageClick = async (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
    dispatch(getPeople(selected + 1));
  };
  useEffect(() => {
    dispatch(getPeople(1));
  }, []);

  useEffect(() => {

    setPeopleData(searchPeopleResult && searchPeopleResult.data.results)
  }, [searchPeopleResult])
  return (
    <div>
      <Header  onChange={(e) => setSearch(e.target.value)}
        value={search}
        onClick={(e) => searchName(e, search)}/>
        <Container>
        {peopleData&&( Array.isArray(peopleData)) ?
(
      <Button outline color="danger" className="mt-3" onClick={(e) => closeSearch(e)}> X Close search</Button>
) : ""}
        </Container>
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
        ) : ""}
      <Container>
        <Row className="mt-5">
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            value={people}
            onClick={(e) => setPeople(e.target.value)}
          >
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
