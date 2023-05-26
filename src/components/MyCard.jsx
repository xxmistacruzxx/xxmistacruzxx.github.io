import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import NewlineText from "./newlineText";

function MyCard({
  cardTopBackground,
  leftImage,
  rightImage,
  title,
  caption,
  subCaption,
  description,
  link,
  isLeft,
}) {
  let cardStyle = {};
  if (isLeft) cardStyle.marginLeft = "5%";
  else {
    cardStyle.marginLeft = "auto";
    cardStyle.marginRight = "5%";
  }

  let leftImageElement = <></>;
  if (leftImage) {
    leftImageElement = (
      <img
        src={leftImage}
        alt="card left image"
        style={{
          marginLeft: "20px",
          marginTop: "10px",
          aspectRatio: "1 /1 ",
          height: "60px",
        }}
      />
    );
  }

  let rightImageElement = <></>;
  if (rightImage) {
    rightImageElement = (
      <img
        src={rightImage}
        alt="card right image"
        style={{
          marginRight: "20px",
          marginTop: "10px",
          aspectRatio: "1 /1 ",
          height: "60px",
        }}
      />
    );
  }

  return (
    <Card className="myCard" style={cardStyle}>
      <a href={link} title={title} target="_blank" rel="noreferrer noopener">
        <div
          className="card-img-top"
          style={{
            height: "80px",
            backgroundColor: `${cardTopBackground}`,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {leftImageElement}
          {rightImageElement}
        </div>

        <Card.Body>
          <Card.Title style={{ marginBottom: "0px" }}>{title}</Card.Title>
          <Card.Text style={{ marginBottom: "0px", fontStyle: "italic" }}>
            {caption}
          </Card.Text>
          <Card.Text style={{ fontStyle: "italic", fontSize: "small" }}>
            {subCaption}
          </Card.Text>
          <Card.Text>
            <NewlineText text={description} />
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
}

export default MyCard;
