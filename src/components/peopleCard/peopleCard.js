import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import style from "./peopleCard.module.scss";
import { ArrowRight } from "react-feather";

function Displaycard({
  image,
  title1,
  title2,
  title3,
  description,
  onClick,
  icon,
  className,
}) {
  return (
    <div>
      <Card className={style.card}>
        <Row className={style.display}>
          <Col className="p-0">
            <CardImg
              top
              width="100%"
              className={style.img}
              src={image}
              alt="Card image cap"
            />
          </Col>
          <Col className="p-0">
            <CardBody className={`text-start ${style.cardlower}`}>
              <CardTitle tag="h5" className={style.title}>
                {title1}
              </CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {title2}
              </CardSubtitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {title3}
              </CardSubtitle>
              <CardText>{description}</CardText>
              <div className={`text-start`}>
                <Button onClick={onClick} className={style.button}>
                  {" "}
                  Read More
                </Button>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Displaycard;
