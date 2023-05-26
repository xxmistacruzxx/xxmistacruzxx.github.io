import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import $ from "jquery";
import NewlineText from "./newlineText";

function MyCard({ image, title, caption, description, time, link, isLeft }) {
  let cardStyle = {
    backgroundColor: "rgba(255, 255, 255, .1)",
    width: "60%",
    marginBottom: "15px",
  };
  if (isLeft) cardStyle.marginLeft = "5%";
  else {
    cardStyle.marginLeft = "auto";
    cardStyle.marginRight = "5%";
  }

  return (
    <Card className="myCard" style={cardStyle}>
      <a href={link} title={title} target="_blank" rel="noreferrer noopener">
        <img
          class="card-img-top"
          src={image}
          alt="Card image cap"
          style={{ height: "80px" }}
        />

        <Card.Body>
          <Card.Title style={{ marginBottom: "0px" }}>{title}</Card.Title>
          <Card.Text style={{ marginBottom: "0px", fontStyle: "italic" }}>
            {caption}
          </Card.Text>
          <Card.Text style={{ fontStyle: "italic", fontSize: "small" }}>
            {time}
          </Card.Text>
          <Card.Text>
            <NewlineText text={description} />
          </Card.Text>
        </Card.Body>
      </a>
    </Card>
  );
}

function Overlay({ cameraX, setCameraX }) {
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
      setCameraX(-4);
    } else if (e.target.id === "codeButton") {
      goToSlide(1);
      setCameraX(4);
    } else {
      goToSlide(2);
      setCameraX(12);
    }
  }

  return (
    <>
      <script src="/src/components/Overlay.js"></script>
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
            <div
              id="MeContainer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img id="Me" src="/src/assets/Me.jpg" />
            </div>
            <h1 id="myName">David Cruz</h1>
            <div id="myLinks">
              <a
                id="linkedInLink"
                href="https://www.linkedin.com/in/davidalexandercruz/"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/src/assets/linkedin.png" />
              </a>
              <a
                id="githubLink"
                href="https://github.com/xxmistacruzxx"
                title="Github"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/src/assets/github.png" />
              </a>
              <a
                id="resumeLink"
                href="https://drive.google.com/file/d/1ANYVE9pHHH9K74U8HtZmYNOnpWk3dwxN/view?usp=sharing"
                title="Resume"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/src/assets/pdf.png" />
              </a>
              <a
                id="emailLink"
                href="mailto: dcruz2@stevens.edu"
                title="Send Email"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src="/src/assets/email.png" />
              </a>
            </div>

            <h2>About David</h2>
            <p>
              <NewlineText
                text={`David Cruz is a Class of 2024 Computer Science Undergraduate at Stevens Institute of Technology in Hoboken, NJ. Here, David gained a large interest in user experience and interface design, web development, and database design & management.\n\nDavid is also very passionate for music, recently exploring DJing and producing, as well as having a long history with songwriting, singing, and playing piano & guitar.`}
              />
            </p>
            <h2>Education</h2>
            <MyCard
              image={"/src/assets/stevens.jpg"}
              title={"Stevens Institute of Technology"}
              caption={"Bachelor of Science in Computer Science"}
              time={"Fall 2020 - Spring 2024"}
              description={
                "Studied at the Charles V. Schaefer, Jr. School of Engineering and Science.\n\n• GPA: 3.975\n• Awards: Dean's List (Fall 2020 - Spring 2023), Edwin A. Stevens Scholarship\n• Activities: Chi Psi Fraternity, Upsilon Pi Epsilon (Computing and Information International Honor Society)"
              }
              link={"https://www.stevens.edu/"}
              isLeft={true}
            />
            <h2>Experience</h2>
            <MyCard
              image={"/src/assets/dataStructures.jpg"}
              title={"Data Structures Course Assistant"}
              caption={"Stevens Institute of Technology"}
              time={"Spring 2023"}
              description={`Operated as a "Data Structures Course Assistant" for Professor Abrar Alrumay.\n\n• Administered weekly recitations for students to reinforce data structures concepts and Java programming skills.\n• Hosted weekly office hours for data structures students to assist with conceptual, assignment, and/or logistical.\n• Assessed assignment submissions for Professor Abrar Alrumayh by performing various testing using JUnit.`}
              link={
                "https://stevens.smartcatalogiq.com/en/2022-2023/academic-catalog/courses/cs-computer-science/200/cs-284/"
              }
              isLeft={true}
            />
            <MyCard
              image={"/src/assets/introductionToComputing.jpg"}
              title={"Introduction to Scientific Computing Course Assistant"}
              caption={"Stevens Institute of Technology"}
              time={"Fall 2022, Fall 2021"}
              description={`Operated as an "Introduction to Scientific Computing Course Assistant" for Professor Edward Banduk.\n\n• Conducted weekly lab sections for students to reinforce basic computing concepts and Python programming skills.\n• Performed walkthroughs of coding exercises to assist students in understanding the practicality and use cases of numerous programming techniques.\n• Presented new class material to students to further their progress in the curriculum.`}
              link={
                "https://stevens.smartcatalogiq.com/2022-2023/academic-catalog/courses/cs-computer-science/100/cs-105/"
              }
              isLeft={false}
            />
            <MyCard
              image={"/src/assets/computerArchitecture.jpg"}
              title={"Computer Organization & Programming Teaching Assistant"}
              caption={"Stevens Institute of Technology"}
              time={"Spring 2023, Spring 2022"}
              description={`Operated as a "Computer Organization & Programming Teaching Assistant" for Professor Edward Banduk.\n\n• Managed Canvas pages for Professor Edward Banduk to ensure the organization and availability of course content and assignments.\n• Behaved as first contact for students in the class to provide appropriate resources and/or fulfill course logistical requests.`}
              link={
                "https://stevens.smartcatalogiq.com/2022-2023/academic-catalog/courses/cs-computer-science/500/cs-550/"
              }
              isLeft={true}
            />
          </Carousel.Item>
          <Carousel.Item id="code">
            <h1>WIP...</h1>
          </Carousel.Item>
          <Carousel.Item id="music">
            <h1>WIP...</h1>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Overlay;
