import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/react.svg";
import meter2 from "../assets/img/bootstrap_logo.png";
import meter3 from "../assets/img/css.svg";
import meter4 from "../assets/img/javascript.svg";
import meter5 from "../assets/img/node.svg";
import meter6 from "../assets/img/html.svg";
import meter7 from "../assets/img/Angular.svg";
import meter8 from "../assets/img/Astro.svg";
import meter9 from "../assets/img/MongoDB.svg";
import meter10 from "../assets/img/Next.js.svg";
import meter11 from "../assets/img/Tailwind CSS.svg";
import meter12 from "../assets/img/Vite.js.svg";
import meter13 from "../assets/img/MySQL.svg";

import colorSharp from "../assets/img/color-sharp-copia.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                I've had the opportunity to work with these technologies for
                full stack applications and web pages. SCRUM methodology was one
                of the crucial parts to develop some projects with a team so i'm
                very familiar with this agile methodology and also with the
                teamwork that this entails.
              </p>
              <Carousel
                autoPlaySpeed={1000}
                autoPlay={true}
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="" ></img>
                  
                </div>
                <div className="item2">
                  <img src={meter2} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter3} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter6} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter4} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter5} alt="" ></img>
                  
                </div>
                
                <div className="item">
                  <img src={meter7} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter8} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter9} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter10} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter11} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter12} alt="" ></img>
                  
                </div>
                <div className="item">
                  <img src={meter13} alt="" ></img>
                  
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt=""/>
    </section>
  );
};
