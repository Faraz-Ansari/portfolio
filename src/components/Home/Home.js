import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Introduction from "./Introduction";
import TypeWriter from "./TypeWriter";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                {/* Animation component */}
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1
                                style={{ paddingBottom: 15 }}
                                className="heading"
                            >
                                Hi There!{" "}
                                <span
                                    className="wave"
                                    role="img"
                                    aria-labelledby="wave"
                                >
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name">
                                    {" "}
                                    Ahmad Faraz Ansari
                                </strong>
                            </h1>

                            {/* Typewriter effect */}
                            <div style={{ padding: 50, textAlign: "left" }}>
                                <TypeWriter />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                                src={homeLogo}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "450px" }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            {/* introduction page */}
            <Introduction />
        </section>
    );
}

export default Home;
