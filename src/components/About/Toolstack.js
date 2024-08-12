import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiWindows11,
    SiIntellijidea,
    SiClion,
    SiFirebase,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows11 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiClion />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaGithub />
            </Col>
        </Row>
    );
}

export default Toolstack;
