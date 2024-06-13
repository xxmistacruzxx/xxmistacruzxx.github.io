import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Nav } from "react-bootstrap";
import $ from "jquery";
import About from "./About";
import Code from "./Code";
import Music from "./Music";
import NewlineText from "./newlineText";

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
      setCurrTab(0);
    } else if (e.target.id === "codeButton") {
      goToSlide(1);
      setCurrTab(1);
    } else {
      goToSlide(2);
      setCurrTab(2);
    }
  }

  return (
    <>
      <div id="overlay">
        <div id="intro">
          <div id="MeContainer">
            <img id="Me" src="/Me.jpg" />
            <h1 id="myName">David Cruz</h1>
            <div id="myLinks">
              <a
                id="linkedInLink"
                href="https://www.linkedin.com/in/davidalexandercruz/"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/linkedin.png" />
              </a>
              <a
                id="githubLink"
                href="https://github.com/xxmistacruzxx"
                title="Github"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/github.png" />
              </a>
              <a
                id="resumeLink"
                href="/Resume.pdf"
                title="Resume"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/pdf.png" />
              </a>
              <a
                id="emailLink"
                href="mailto: da.cruz@aol.com"
                title="Send Email"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/email.png" />
              </a>
            </div>
          </div>
          <div id="introText">
            <p>
              <NewlineText
                text={`David is an aspring Software Engineer, receiving his B.S. in Computer Science from Stevens Institute of Technology (Hoboken, NJ) in Spring 2024.\n\nAt Stevens, David developed his passion for UX/UI Design, Web Development, and Database Design & Management through his classes and personal projects.\n\nDavid is also very passionate for music, recently exploring DJing and producing, as well as having a long history with songwriting, singing, and playing piano & guitar.`}
              />
            </p>
          </div>
        </div>
        <Nav id="newnavbar" fill variant="tabs" defaultActiveKey="experience">
          <Nav.Item>
            <Nav.Link
              id="aboutButton"
              eventKey="experience"
              onClick={navBarButtonAction}
            >
              Experience
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              id="codeButton"
              eventKey="projects"
              onClick={navBarButtonAction}
            >
              Projects
            </Nav.Link>
          </Nav.Item>
        </Nav>

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

        <div id="backtotop">
          <a href="#intro">⬆ Back to Top ⬆</a>
        </div>
      </div>
    </>
  );
}

export default Overlay;
