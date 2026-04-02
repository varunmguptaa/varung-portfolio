import React from "react";
import Card from "react-bootstrap/Card";

function ServiceCards(props) {
  return (
    <Card className="service-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServiceCards;
