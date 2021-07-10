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

function Displaycard({image,title1,title2,title3,description,onClick}) {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={image}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{title1}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {title2}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {title3}
          </CardSubtitle>
          <CardText>
            {description}
          </CardText>
          <Button onClick={onClick}>Read More</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Displaycard;
