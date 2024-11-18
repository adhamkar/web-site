import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import me from "../../Assets/myAvatar-removebg-preview.jpg";
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
              LITTLE <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              Spending a lot of time coding makes my brain cells tired but i enjoy it
              <br />
              <br />I am good at
              <i>
                <b className="purple"> Java, Angular, React and Big Data Fields. </b>
                , i think ... 🤷‍♂️
              </i>
              <br />
              
              <br />
              My field of Interest's are many. &nbsp;
              <i>
                <b className="purple">Web applications </b>, 
                <b className="purple">Data visualization </b> and &nbsp;
                <b className="purple">
                  Bodybuilding.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Spring Boot</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern technologies
                </b>
              </i>
              &nbsp; as
              <i>
                <b className="purple"> Angular and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={me} className="img-fluid" alt="avatar" style={{borderRadius:"300px", width: "100%",
                   height: "400px",}}/>
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
                  href="https://github.com/adhamkar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
          
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adham-karmadi-08685b206/"
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
export default Home2;
