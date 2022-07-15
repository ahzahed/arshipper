import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-1 footer-wrap">
      <div className="footer-widgets-wrapper theme-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xl-3">
              <div className="about-transland pe-md-5 pe-xl-0">
                <Link to="index.html">
                  <img src="assets/img/footer-logo.png" alt="transland" />
                </Link>
                <p>
                  Transland Logistics Services is a global supplier of transport
                  and logistics solutions. We have offices in more than 20
                  countries and agents.
                </p>
              </div>
            </div>

            <div className="col-sm-6 col-xl-2">
              <div className="single-footer-wid ps-xl-4">
                <div className="wid-title">
                  <h6>Our Divisions</h6>
                </div>
                <ul>
                  <li>
                    <Link to="about.html">What We Do</Link>
                  </li>
                  <li>
                    <Link to="contact.html">Request a Freight</Link>
                  </li>
                  <li>
                    <Link to="services.html">Track & Trace</Link>
                  </li>
                  <li>
                    <Link to="services.html">Rail Freight</Link>
                  </li>
                  <li>
                    <Link to="services.html">Maritime Transport</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-2">
              <div className="single-footer-wid ps-xl-2">
                <div className="wid-title">
                  <h6>Our Services</h6>
                </div>
                <ul>
                  <li>
                    <Link to="#">What We Do</Link>
                  </li>
                  <li>
                    <Link to="#">Request a Freight</Link>
                  </li>
                  <li>
                    <Link to="#">Track & Trace</Link>
                  </li>
                  <li>
                    <Link to="#">Rail Freight</Link>
                  </li>
                  <li>
                    <Link to="#">Maritime Transport</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-2">
              <div className="single-footer-wid">
                <div className="wid-title">
                  <h6>Industry Sectors</h6>
                </div>
                <ul>
                  <li>
                    <Link to="#">Electronics Industry</Link>
                  </li>
                  <li>
                    <Link to="#">Manufacturing</Link>
                  </li>
                  <li>
                    <Link to="#">Semicon & Solar</Link>
                  </li>
                  <li>
                    <Link to="#">Oil & Gas Cargo</Link>
                  </li>
                  <li>
                    <Link to="#">Energy & Chemicals</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-3">
              <div className="single-footer-wid site-info-widget">
                <div className="wid-title">
                  <h6>Get In Touch</h6>
                </div>
                <div className="get-in-touch">
                  <div className="single-contact-info">
                    <div className="icon id1">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-info">
                      <span>94 Roa Malaka, West Jakarta City, UK</span>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="icon id2">
                      <i className="fal fa-phone"></i>
                    </div>
                    <div className="contact-info">
                      <span>+91-7687287658</span>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="icon id3">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="contact-info">
                      <span>info@example.com</span>
                    </div>
                  </div>
                </div>

                <div className="newsletter_widget">
                  <div className="newsletter_box">
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        required
                      />
                      <button className="submit-btn" type="submit">
                        <i className="fas fa-envelope-open"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container align-items-center">
          <div className="bottom-content-wrapper">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="copy-rights">
                  <p>
                    &copy;2022 <strong>Transland</strong>, All Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-md-6 mt-2 mt-md-0 col-12 text-md-end">
                <div className="social-links">
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer