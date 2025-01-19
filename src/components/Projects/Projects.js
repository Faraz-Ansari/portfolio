import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import CrestaView from "../../Assets/Projects/CrestaView.png";
import Synchronium from "../../Assets/Projects/Synchronium.png";
import PixelPen from "../../Assets/Projects/PixelPen.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            {/* Animation component */}
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Work</strong>
                </h1>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    {/* Pixel Pen section */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={PixelPen}
                            isBlog={true}
                            title="Pixel Pen"
                            description="Pixel Pen is a full-stack blog application, utilizing React.js for the frontend and Express.js for the backend. Styled with Tailwind CSS and Flowbite React components, it offers a responsive and modern user interface. "
                            ghLink="https://github.com/Faraz-Ansari/pixel-pen"
                            demoLink="https://pixel-pen.onrender.com/"
                        />
                    </Col>

                    {/* Synchronium section */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Synchronium}
                            isBlog={false}
                            title="Synchronium"
                            description="Synchronium is a full-featured social media platform built using the MERN stack. It enables users to securely authenticate with JWT, interact through posts, and receive real-time notifications."
                            ghLink="https://github.com/Faraz-Ansari/synchronium"
                            demoLink="https://synchronium-y0r6.onrender.com/"
                        />
                    </Col>

                    {/* CrestaView section */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={CrestaView}
                            isBlog={false}
                            title="CrestaView"
                            description="Welcome to CrestaView, a real estate application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to browse, list, and manage properties efficiently with a seamless user experience."
                            ghLink="https://mern-estate-to9o.onrender.com/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
