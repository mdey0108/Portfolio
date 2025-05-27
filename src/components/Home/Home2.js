import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO <span className="purple">MY WORLD</span> OF CODE
            </h1>
            <p className="home-about-body">
              My journey into programming began with curiosity and blossomed into passion.
              Every line of code tells a story... 💻
              <br />
              <br />My expertise spans classic technologies including
              <i>
                <b className="purple"> C, Java, and Spring Boot</b>
              </i>
              <br />Embracing innovation, I craft solutions with
              <i>
                <b className="purple"> Python, JavaScript, and Generative AI</b>
              </i>
              <br />
              <br />
              I'm passionate about &nbsp;
              <i>
                <b className="purple">Emerging Technologies, Full Stack Development, Production Engineering</b> and
                pioneering solutions in{" "}
                <b className="purple">
                  Artificial Intelligence
                </b>
              </i>
              <br />
              <br />
              Beyond coding, I find joy in creating content,{" "}
              <b className="purple">producing videos</b>, and sharing moments with my
              <i>
                <b className="purple">
                  {" "}
                  amazing network
                </b>
              </i>
              &nbsp; - bringing creativity to everything I do.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mdey0108/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/trdevloafer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mdey0108/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dev_loafer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
