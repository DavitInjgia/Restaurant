import React from "react";
import {
  FaHome,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import './ContactUs.css'
function ContactUs() {
  return (
    <div className="contact-container">
      <div className="info-section">
        <h2>About the Company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2>Contact</h2>
        <p>
          <FaHome /> 123 Main Street, Anytown, USA
        </p>
        <p>
          <FaEnvelope /> example@example.com
        </p>
        <p>
          <FaPhone /> +1 (123) 456-7890
        </p>
        <h2>Follow Us</h2>
        <p>
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
        </p>
      </div>
      <div className="map-section">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.7500385773733!2d44.76764637603326!3d41.72591237492897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472de955c1fcf%3A0x1798f6cf35850f30!2zMjcg4YOe4YOU4YOZ4YOY4YOc4YOY4YOhIOGDkuGDkOGDm-GDluGDmOGDoOGDmCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxNjA!5e0!3m2!1ska!2sge!4v1686725582383!5m2!1ska!2sge"
          width="100%"
          height="450"
          frameborder="0"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
