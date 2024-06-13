import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewlineText from "./newlineText";
import MyCard from "./MyCard";

function About() {
  return (
    <>
      <h2>Education</h2>
      <div className="cards">
        <MyCard
          cardTopBackground={"rgba(163, 38, 54, .35)"}
          leftImage={"/stevens.png"}
          title={"Stevens Institute of Technology"}
          caption={"Bachelor of Science in Computer Science"}
          subCaption={"Fall 2020 - Spring 2024"}
          description={
            'Graduated with "Highest Honor" (achieves a GPA of 3.85 or higher for courses required for the degree) from the Charles V. Schaefer, Jr. School of Engineering and Science.\n\n• GPA: 3.972\n• Awards: Dean\'s List (Fall 2020 - Spring 2024), Edwin A. Stevens Scholarship\n• Activities: Upsilon Pi Epsilon (Computing and Information International Honor Society), Chi Psi Fraternity'
          }
          links={[
            [
              "Go to School",
              "https://www.stevens.edu/school-engineering-science",
              "secondary",
            ],
            ["Go to University", "https://www.stevens.edu/", "primary"],
          ]}
        />
      </div>

      <h2>Experience</h2>
      <div className="cards">
        <MyCard
          cardTopBackground={"rgba(77, 77, 77, .35)"}
          leftImage={"/stevens.png"}
          rightImage={"/cryptography.png"}
          title={'"Security, Privacy and Society" Course Assistant'}
          caption={"Stevens Institute of Technology"}
          subCaption={"Spring 2024, Fall 2023"}
          description={`Operated as an "Security, Privacy and Society Course Assistant" for Professor Abrar Alrumayh & Professor Tegan Brennan.\n\n• Monitored weekly lab sections where students are assessed on their comprehension of the course topics.\n• Evaluated and provided feedback on student submissions for assignments.\n• Conducted weekly office hours to aid students with conceptual, assignment, and/or logistical questions.`}
          links={[
            [
              "Go to Professor Alrumayh",
              "https://www.stevens.edu/profile/aalrumay",
              "secondary",
            ],
            [
              "Go to Professor Brennan",
              "https://www.stevens.edu/profile/tbrenna5",
              "secondary",
            ],
            [
              "Go to Course",
              "https://iq3.smartcatalogiq.com/en/catalogs/stevens-institution-of-technology/2022-2023/academic-catalog/courses/cs-computer-science/300/cs-396",
              "primary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(77, 77, 77, .35)"}
          leftImage={"/stevens.png"}
          rightImage={"/python.png"}
          title={'"Introduction to Scientific Computing" Course Assistant'}
          caption={"Stevens Institute of Technology"}
          subCaption={"Fall 2023, Fall 2022, Fall 2021"}
          description={`Operated as an "Introduction to Scientific Computing Course Assistant" for Professor Edward Banduk.\n\n• Conducted weekly lab sections for students to reinforce basic computing concepts and Python programming skills.\n• Performed walkthroughs of coding exercises to assist students in understanding the practicality and use cases of numerous programming techniques.\n• Presented new class material to students to further their progress in the curriculum.`}
          links={[
            [
              "Go to Course Page",
              "https://stevens.smartcatalogiq.com/2022-2023/academic-catalog/courses/cs-computer-science/100/cs-105/",
              "primary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(77, 77, 77, .35)"}
          leftImage={"/stevens.png"}
          rightImage={"/tree.png"}
          title={'"Data Structures" Course Assistant'}
          caption={"Stevens Institute of Technology"}
          subCaption={"Spring 2023"}
          description={`Operated as a "Data Structures Course Assistant" for Professor Abrar Alrumayh.\n\n• Administered weekly recitations for students to reinforce data structures concepts and Java programming skills.\n• Hosted weekly office hours for data structures students to assist with conceptual, assignment, and/or logistical.\n• Assessed assignment submissions for Professor Abrar Alrumayh by performing various testing using JUnit.`}
          links={[
            [
              "Go to Professor Alrumayh",
              "https://www.stevens.edu/profile/aalrumay",
              "secondary",
            ],
            [
              "Go to Course Page",
              "https://stevens.smartcatalogiq.com/en/2022-2023/academic-catalog/courses/cs-computer-science/200/cs-284/",
              "primary",
            ],
          ]}
        />
        <MyCard
          cardTopBackground={"rgba(77, 77, 77, .35)"}
          leftImage={"/stevens.png"}
          rightImage={"/cpu.png"}
          title={'"Computer Organization & Programming" Teaching Assistant'}
          caption={"Stevens Institute of Technology"}
          subCaption={"Spring 2023, Spring 2022"}
          description={`Operated as a "Computer Organization & Programming Teaching Assistant" for Professor Edward Banduk.\n\n• Managed Canvas pages for Professor Edward Banduk to ensure the organization and availability of course content and assignments.\n• Behaved as first contact for students in the class to provide appropriate resources and/or fulfill course logistical requests.`}
          links={[
            [
              "Go to Course Page",
              "https://stevens.smartcatalogiq.com/2022-2023/academic-catalog/courses/cs-computer-science/500/cs-550/",
              "primary",
            ],
          ]}
        />
      </div>
    </>
  );
}

export default About;
