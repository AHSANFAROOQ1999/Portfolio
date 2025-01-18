import React from "react";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";
import { AiFillGithub } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiUpwork, SiFiverr, SiMongodb, SiExpress } from 'react-icons/si'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, ReactJs, React Redux, NodeJs, Next Js. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to
                <b className="purple">
                  &nbsp; Crypto BlockChain and Web3.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  &nbsp;
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Vue.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
            <Col md={12} className="mern-stack">

              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://www.mongodb.com/cloud/atlas/lp/try2?utm_content=rlsavisitor&utm_source=google&utm_campaign=gs_emea_rlsamulti_search_core_brand_atlas_desktop_rlsa&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646455&adgroup=131761126492"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiMongodb />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.expressjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <SiExpress />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >

                    <FaReact />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://nodejs.org/en/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >

                    <FaNodeJs />
                  </a>
                </li>

              </ul>
            </Col>
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
                  href="https://github.com/AHSANFAROOQ1999/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.upwork.com/freelancers/~012b3189db30391995?viewMode=1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiUpwork />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.fiverr.com/s/38Y2GlY"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiFiverr />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahsan-farooq-9b1b27199/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
