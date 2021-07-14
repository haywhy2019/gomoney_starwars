import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import style from "./shipCard.module.scss";
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
        <CardImg
          top
          width="100%"
          className={style.img}
          src={image}
          alt="Card image cap"
        />
        <CardBody className={`text-start ${style.cardlower}`}>
          <CardTitle tag="h5">{title1}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {title2}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {title3}
          </CardSubtitle>
          <CardText>{description}</CardText>
          <div className={`text-end `}>
            <Button onClick={onClick} className={style.button}>
              {" "}
              Read More <ArrowRight size={15} className={style.icon} />{" "}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Displaycard;
