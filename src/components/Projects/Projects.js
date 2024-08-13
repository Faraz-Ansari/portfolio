import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import CrestaView from "../../Assets/Projects/CrestaView.png";
import NexusGuard from "../../Assets/Projects/NexusGuard.png";

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
                    {/* CrestaView section */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={CrestaView}
                            isBlog={false}
                            title="CrestaView"
                            description="Welcome to CrestaView, a real estate application built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to browse, list, and manage properties efficiently with a seamless user experience."
                            ghLink="https://github.com/Faraz-Ansari/mern-estate"
                            demoLink="https://mern-estate-to9o.onrender.com/"
                        />
                    </Col>

                    {/* NexusGuard section */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={NexusGuard}
                            isBlog={false}
                            title="NexusGuard"
                            description="Welcome to the NexusGuard, A full-stack authentication system built using the MERN stack: MongoDB, Express, React, and Node.js. The frontend is styled with Tailwind CSS. It also includes features like user registration, login, and logout."
                            ghLink="https://github.com/Faraz-Ansari/mern-auth"
                            demoLink="https://mern-auth-z28q.onrender.com/"
                        />
                    </Col>

                    {/* Corona tweet classification system */}
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={editor}
                            isBlog={false}
                            title="Corona Tweet Classification System"
                            description="A machine learning project takes user input as a tweet and then classifies whether it is covid-positive or covid-negative. Built using jupyter notebook."
                            ghLink="https://github.com/Faraz-Ansari/covid19-tweet-classification-system"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
