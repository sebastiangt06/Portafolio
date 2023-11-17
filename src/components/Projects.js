import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2-copia.png";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/appcostos.jpg";
import projImg3 from "../assets/img/workinprogress.png";
import projImg4 from "../assets/img/movieapp.png";
import projImg5 from "../assets/img/weatherapp.jpg";
import projImg6 from "../assets/img/projImg6.png";
import projImg7 from "../assets/img/projImg7.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const teamProjects = [
    {
      title: "Warbug Income and Expense Application",
      description:
        "An application designed to list the income and expenses of a company, featuring a secure login system. Built with Java using Spring Boot,Java with Thymeleaf, HTML, and CSS.",
      imgUrl: projImg2,
      gitUrl: "https://github.com/Warbug-MisionTic/Warbug",
      projUrl: "",
    },
    {
      title: "Warbug Store Ecommerce",
      description:
        "E-commerce store, secured with a login system. Includes an administrator system that allows tracking sales and their total sum. Built with React.js, Bootstrap, HTML, CSS, Node.js with Express.js, and MongoDB.",
      imgUrl: projImg1,
      gitUrl: "https://github.com/Warbug-MisionTic/DesarrolloWeb-Ciclo4",
      projUrl: "",
    },
  ];
  const ownProjects = [
    {
      title: "Greenhouse Gas Emissions Calculator",
      description:
        "Greenhouse Gas Emissions Calculator. Designed for individuals seeking to determine their daily greenhouse gas emissions.",
      imgUrl: projImg3,
      gitUrl: "",
      projUrl: "",
    },
    {
      title: "Movie Searcher",
      description:
        "A movie search application built with React.js, incorporating custom hooks like useRef, useCallback, and useMemo React hooks.",
      imgUrl: projImg4,
      gitUrl: "https://github.com/sebastiangt06/movie-searcher",
      projUrl: "https://movie-searcher-six.vercel.app/",
    },
    {
      title: "Weather APP",
      description:
        "A weather app, developed with React.js, utilizing custom hooks such as useRef, useCallback, and useMemo, and connected to the OpenWeather API.",
      imgUrl: projImg5,
      gitUrl: "https://github.com/sebastiangt06/weatherapp",
      projUrl: "https://weatherapp-olive-eta.vercel.app/",
    },
    {
      title: "Tesla clone web page",
      description:
        "A cloned webpage of the original Tesla landing page from June 2023, built with Astro and TailwindCSS.",
      imgUrl: projImg6,
      gitUrl: "https://github.com/sebastiangt06/tesla-clone",
      projUrl: "https://tesla-clone-nu-two.vercel.app/",
    },
    {
      title: "Real time chat",
      description:
        "A small real-time chat exercise built in Node.js with Express.js, using web sockets and an API for user identification. Due to its persistence of past chats, it uses a free SQL database provided by Turso. The minimalistic styles were developed using TailwindCSS.",
      imgUrl: projImg7,
      gitUrl: "https://github.com/sebastiangt06/realtime-chat-nodejs",
      projUrl: "https://realtimechat-q083.onrender.com/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    As a web developer, I have focused on both web pages and
                    applications using the JavaScript programming language. I've
                    worked with React.js and Angular as frameworks, and utilized
                    Bootstrap CSS along with the Tailwind CSS for styles.
                    Utilizing these front-end frameworks has taught me a lot about clean
                    architecture and how to initiate a project. 
                  </p>
                  <p>
                  Additionally, I've explored Node.js with Express and Java with Spring Boot
                    for implementing backend functionalities. Currently, I am in
                    the process of learning Astro and Next.js. These emerging
                    technologies, combined with Bootstrap CSS and the Tailwind
                    CSS framework, complement my skill set and enable me to
                    explore innovative approaches in web development.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="second">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                      fill="true"
                      justify="true"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Own Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Made it with a team
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__fadeIn" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <p>
                          These are the projects that i made by my own, i used
                          React Js, Astro, ExpressJs, NodeJs, HTML5, JavaScript,
                          CSS Bootstrap and TailwindCSS.
                        </p>
                        <Row className="cards-container">
                          {ownProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          These academic projects were developed by a team in
                          MisionTic 2022, where I served as a full-stack
                          developer. We utilized various technologies such as
                          React.js, Node.js, Java Spring Boot, Java Thymeleaf,
                          among others.
                        </p>
                        <Row className="cards-container">
                          {teamProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
