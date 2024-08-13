import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Introduction() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least
                            learnt something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple">
                                    {" "}
                                    C++, Java and Python.{" "}
                                </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new&nbsp;
                            <i>
                                <b className="purple">
                                    Web Technologies and Products{" "}
                                </b>{" "}
                                and also in areas related to{" "}
                                <b className="purple">AI / ML.</b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for
                            developing products in{" "}
                            <b className="purple">MERN Stack</b> using
                            <i>
                                <b className="purple">
                                    {" "}
                                    modern tools and technologies
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple">
                                    {" "}
                                    Tailwind CSS, Redux-toolkit, Bcryptjs, JWT
                                </b>
                            </i>
                            &nbsp; etc.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        {/* Tilt effect on hovering over image */}
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/Faraz-Ansari"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/frzansari20/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Introduction;
