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
import style from "./singleCard.module.scss";
import { ArrowRight } from "react-feather";

function Displaycard({
  type,
  image,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
}) {
  let label1;
  let label2;
  let label3;
  let label4;
  let label5;

  if (type === "people") {
    label1 = "Birth Year : ";
    label2 = "Eye Color : ";
    label3 = "Gender : ";
    label4 = "Height : ";
    label5 = "Mass : ";
  } else {
    label1 = "Cargo Capacity : ";
    label2 = "Consumable : ";
    label3 = "Crew : ";
    label4 = "Passengers : ";
    label5 = "Manufacturers : ";
  }

  return (
    <div className="mb-5">
      <Card className={style.card}>
        <div className={style.contain}>
          <CardImg
            top
            width="100%"
            className={style.img}
            src={image}
            alt="Card image cap"
          />
          <CardBody className={`${style.body}`}>
            <div className="">
              <div className="text-start">
                <CardTitle tag="h6" className="text-white">
                  {title1}
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-white">
                  {label1}
                  {title2}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-white">
                  {label2} {title3}
                </CardSubtitle>
              </div>
              <div className="">
                <CardSubtitle tag="h5" className=" text-white mt-3 mb-2">
                  {" "}
                  {label3}
                  {title4}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-white">
                  {label4}
                  {title5}
                </CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-white">
                  {label5}
                  {title6}
                </CardSubtitle>
              </div>
            </div>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}

export default Displaycard;
