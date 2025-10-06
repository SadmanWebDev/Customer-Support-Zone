import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mt-16">
      <div className="bg-black text-white p-10">
        <footer class="footer sm:footer-horizontal md:grid md:grid-cols-5 text-center md:pt-10">
          <aside className=" col-span-2 text-center md:text-left">
            <h1 className="font-bold text-2xl">CS — Ticket System</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </aside>
          <nav>
            <h6 class="footer-title">Company</h6>
            <a class="link link-hover">About Us</a>
            <a class="link link-hover">Our Mission</a>
            <a class="link link-hover">Contact Saled</a>
          </nav>
          <nav>
            <h6 class="footer-title">Services</h6>
            <a class="link link-hover">Products & Services</a>
            <a class="link link-hover">Customer Stories</a>
            <a class="link link-hover">Jobs</a>
            <a class="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 class="footer-title">Information</h6>
            <a class="link link-hover">Privacy Policy</a>
            <a class="link link-hover">Terms & Conditions</a>
            <a class="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 class="footer-title">Social Links</h6>
            <a class="link link-hover">
              <FontAwesomeIcon icon={faSquareXTwitter} /> @CS — Ticket System
            </a>
            <a class="link link-hover">
              <FontAwesomeIcon icon={faLinkedin} /> @CS — Ticket System
            </a>
            <a class="link link-hover">
              <FontAwesomeIcon icon={faFacebook} /> @CS — Ticket System
            </a>
            <a class="link link-hover">
              <FontAwesomeIcon icon={faEnvelope} /> support@cst.com
            </a>
          </nav>
        </footer>
        <p className=" text-center mt-[100px]">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
