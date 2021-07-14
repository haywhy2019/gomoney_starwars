import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/header";
import style from "./shipPage.module.scss";
import { getShips } from "../../redux/action/shipsAction";
import ShipCard from "../../components/shipCard/shipCard";
import ShipImages from "../../assets/ships";

import {
  Container,
  Row,
  Col
} from "reactstrap";
import { ChevronLeft, ChevronRight } from "react-feather";

import ReactPaginate from "react-paginate";

function Ship() {
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
  const [currentPage, setCurrentPage] = useState(0);
  const allShips = useSelector((state) => state.ships.ships);

  const lastIndex = allShips && allShips.data.count;
  const pageCount = Math.ceil(lastIndex / 9);
  const handlePageClick = async (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
    dispatch(getShips(selected + 1));
  };

  useEffect(() => {
    dispatch(getShips(1));
  });

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md="12" sm="12" className="py-5">
            <h1 className="text-center pt-5">Popular Starships</h1>
            <div className={`${style.titleLine}`}></div>
          </Col>
          <Row className="text-center">
            <Col
              className="d-inline-flex flex-wrap justify-content-around"
              md="12"
            >
              {allShips &&
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

export default Ship;
