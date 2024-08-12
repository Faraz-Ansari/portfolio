import React from "react";
import Card from "react-bootstrap/Card";
import { TbPointFilled } from "react-icons/tb";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am{" "}
                        <span className="purple">Ahmad Faraz Ansari </span>
                        from{" "}
                        <span className="purple"> Uttar Pradesh, India.</span>
                        <br />
                        <br />
                        I am currently pursuing my Master's in Computer
                        Applications (M.C.A.) from Madan Mohan Malaviya
                        University of Technology, Gorakhpur.
                        <br />
                        <br />
                        I am have completed my graduation in B.C.A. from
                        University of Allahabad in 2022.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to
                        do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <TbPointFilled /> Playing video games
                        </li>
                        <li className="about-activity">
                            <TbPointFilled /> Watching movies and series
                        </li>
                        <li className="about-activity">
                            <TbPointFilled /> Reading novels
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
