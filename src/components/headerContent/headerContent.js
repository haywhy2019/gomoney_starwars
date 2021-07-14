import React from "react";
import Logo from "../../assets/logo.png";
import style from "./headerContent.module.scss";
import { Search } from "react-feather";
import { Container, Row, Col } from "reactstrap";

function headerContent({ onChange, ...otherProps }) {
  return (
    <Container className={`text-center ${style.topBotPad}`}>
      <div
        className={`d-inline-flex  justify-content-center align-items-center border-bottom border-white border-2 p-3`}
      >
        <img src={Logo} alt="logo" className={style.logo} />
        <h1 className={`text-white fw-bold ms-3 `}>Directory</h1>
      </div>
      <div>
        <p className={`fs-5 py-4 ${style.favColor}`}>
          Find your favourite Characters, Films, Species, <br />
          Starships and Planets
        </p>
      </div>
      <Row className="justify-content-center" sm="5">
        <Col
          md="7"
          sm="5"
          className={`d-flex align-items-center py-3 ${style.inputBg}`}
        >
          <Search className={`mx-4`} />
          <input
            className={`flex-grow-1 ${style.input}`}
            placeholder="Enter a search term"
            type=""
            onChange={onChange}
            {...otherProps}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default headerContent;
