import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import $ from "jquery";
import About from "./About";
import Code from "./Code";
import Music from "./Music";

function Overlay({ setCurrTab }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const goToSlide = (slideIndex) => {
    setActiveIndex(slideIndex);
  };

  function navBarButtonAction(e) {
    let navButtons = $("#navbar li button");
    navButtons.removeClass("active");
    e.target.classList.toggle("active");

    if (e.target.id === "aboutButton") {
      goToSlide(0);
      setCurrTab(0)
    } else if (e.target.id === "codeButton") {
      goToSlide(1);
      setCurrTab(1)
    } else {
      goToSlide(2);
      setCurrTab(2)
    }
  }

  return (
    <>
      <div id="overlay">
        <ul id="navbar" className="nav nav-pills">
          <li className="nav-item">
            <button
              id="aboutButton"
              className="nav-link active"
              onClick={navBarButtonAction}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button
              id="codeButton"
              className="nav-link"
              onClick={navBarButtonAction}
            >
              Code
            </button>
          </li>
          <li className="nav-item">
            <button
              id="musicButton"
              className="nav-link"
              onClick={navBarButtonAction}
            >
              Music
            </button>
          </li>
        </ul>

        <Carousel
          id="carousel"
          controls={false}
          indicators={false}
          interval={null}
          activeIndex={activeIndex}
          wrap={false}
          touch={false}
        >
          <Carousel.Item id="about">
            <About />
          </Carousel.Item>
          <Carousel.Item id="code">
            <Code />
          </Carousel.Item>
          <Carousel.Item id="music">
            <Music />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Overlay;
