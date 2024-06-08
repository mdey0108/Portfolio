import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahesh Kumar Dey </span>
            from <span className="purple"> Balrampur, Chhattisgarh, India.</span>
            <br />
            I am currently employed as a software Engineer at Cognizant Technology Solutions
            from <span className="purple"> NewTown, Kolkata India.</span>
            <br />
            I have completed my B.Tech in Computer Science and Engineering from 
            <span className="purple"> CSIT Durg, Chhattisgarh, India.</span> 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Quotes.
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating Memes.
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing Videos.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "वो शांत जैसे खेत, में शहर जैसा बावला । 
            वो दूध जैसी सफेद, मैं चाय जैसा सांवला ।।"{" "}
          </p>
          <footer className="blockquote-footer">
          <a href="https://www.yourquote.in/mahesh-kumar-dey-n4et/quotes/" 
          target="_blank" 
          rel="noreferrer"
          className=""
                >
                 Mahesh
                </a>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
