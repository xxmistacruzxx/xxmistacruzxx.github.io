import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonToolbar, Button, Card } from "react-bootstrap";
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
  links,
}) {
  let cardStyle = {};
  if (links === undefined) links = [];

  let leftImageElement = <></>;
  if (leftImage) {
    leftImageElement = (
      <img
        src={leftImage}
        alt="Card Left Image"
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
        alt="Card Right Image"
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
    <Card className="myCard">
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
        <Card.Footer>
          <ButtonToolbar style={{ display: "flex", flexDirection: "row" }}>
            {(() => {
              let buttons = [];
              for (let link of links) {
                buttons.push(
                  <Button
                    href={link[1]}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant={link[2]}
                    style={{
                      flexGrow: "1",
                      borderColor: "rgba(255,255,255,.5)",
                      margin: "5px",
                    }}
                  >
                    {link[0]}
                  </Button>
                );
              }
              return buttons;
            })()}
          </ButtonToolbar>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
