import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2.jsx";
import SimpleType from "./SimpleType.jsx";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading animate-fadeIn">
                Hi There!{" "}
                <span className="wave animate-scaleUp delay-200" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name animate-slideInLeft delay-100">
                I'M
                <strong className="main-name"> DIMPLE MAKWANA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }} className="animate-fadeIn delay-300">
                <SimpleType texts={["MERN Stack Developer", "Web Developer", "Full Stack Developer"]} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid animate-slideInRight delay-200"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
