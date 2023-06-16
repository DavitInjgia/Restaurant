import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid rgba(0,0,0,.1)",
        padding: "40px 50px 100px 50px",
      }}
    >
      <Row className="justify-content-md-center text-center">
        <Col xs={12} md={4}>
          <h5>About Company</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <h5>Contact</h5>
          <p>
            <FaHome /> 123 Main Street, Anytown, USA
          </p>
          <p>
            <FaEnvelope /> example@example.com
          </p>
          <p>
            <FaPhone /> +1 (123) 456-7890
          </p>
        </Col>
        <Col xs={12} md={4}>
          <h5>Follow Us</h5>
          <a href="#">
            <FaFacebook />
          </a>{" "}
          <a href="#">
            <FaTwitter />
          </a>{" "}
          <a href="#">
            <FaInstagram />
          </a>{" "}
          <a href="#">
            <FaYoutube />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
