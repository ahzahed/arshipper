import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <React.Fragment>
      <div
        class="page-banner-wrap text-center bg-cover"
        style={{ backgroundImage: "url('assets/img/page-banner.jpg')" }}
      >
        <div class="container">
          <div class="page-heading text-white">
            <h1>contact us</h1>
          </div>
        </div>
      </div>
      <div class="breadcrumb-wrapper">
        <div class="container">
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section class="contact-page-wrap section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-contact-card card1">
                <div class="top-part">
                  <div class="icon">
                    <i class="fal fa-envelope"></i>
                  </div>
                  <div class="title">
                    <h4>Email Address</h4>
                    <span>Sent mail asap anytime</span>
                  </div>
                </div>
                <div class="bottom-part">
                  <div class="info">
                    <p>info@example.com</p>
                    <p>jobs@example.com</p>
                  </div>
                  <div class="icon">
                    <i class="fal fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-contact-card card2">
                <div class="top-part">
                  <div class="icon">
                    <i class="fal fa-phone"></i>
                  </div>
                  <div class="title">
                    <h4>Phone Number</h4>
                    <span>call us asap anytime</span>
                  </div>
                </div>
                <div class="bottom-part">
                  <div class="info">
                    <p>098-098-098-09</p>
                    <p>+(098) 098-098-765</p>
                  </div>
                  <div class="icon">
                    <i class="fal fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-contact-card card3">
                <div class="top-part">
                  <div class="icon">
                    <i class="fal fa-map-marker-alt"></i>
                  </div>
                  <div class="title">
                    <h4>Office Address</h4>
                    <span>Sent mail asap anytime</span>
                  </div>
                </div>
                <div class="bottom-part">
                  <div class="info">
                    <p>B2, Miranda City Tower</p>
                    <p>New York, US</p>
                  </div>
                  <div class="icon">
                    <i class="fal fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row pt-5">
            <div class="block-contents mb-30 pt-60">
              <div class="section-title text-center">
                <h5 class="text-center">contact</h5>
                <span>fil the form</span>
                <h2>
                  get <span>in touch</span>
                </h2>
              </div>
            </div>

            <div class="col-12 col-lg-12">
              <div class="contact-form">
                <form action="mail.php" class="row" id="contact-form">
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <label for="fname">Full Name</label>
                      <input type="text" id="fname" placeholder="Enter Name" />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <label for="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter Email Address"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <label for="phone">Phone Number</label>
                      <input
                        type="text"
                        id="phone"
                        placeholder="Enter Number"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <label for="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div class="col-md-12 col-12">
                    <div class="single-personal-info">
                      <label for="message">Enter Message</label>
                      <textarea
                        id="message"
                        placeholder="Enter message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 col-12 text-center">
                    <input
                      class="submit-btn"
                      type="submit"
                      value="Get A Quote"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="our-branch-wrapper section-padding pt-0">
        <div class="container">
          <div class="col-lg-8 offset-lg-2 text-center col-12">
            <div class="section-title-2">
              <span>our branches</span>
              <h1>Contact Us</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-branch-card">
                <div
                  class="country-flag bg-cover"
                  style={{ backgroundImage: "url('assets/img/flag-1.jpg')" }}
                ></div>
                <div class="content">
                  <h4>America, Los Angeles</h4>
                  <p>
                    24/7, Global Factory Street, 2nd Cross, San Fransisco 94112.
                  </p>
                  <p>+61 (625) 07520-6644 & 6655</p>
                  <p>
                    <Link to="#">support@example.com</Link>
                  </p>
                  <div class="branch-links">
                    <Link to="#">
                      all branch <i class="fas fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-branch-card">
                <div
                  class="country-flag bg-cover"
                  style={{ backgroundImage: "url('assets/img/flag-2.jpg')" }}
                ></div>
                <div class="content">
                  <h4>Canada, Saskatoon</h4>
                  <p>
                    24/7, Global Factory Street, 2nd Cross, San Fransisco 94112.
                  </p>
                  <p>+61 (625) 07520-6644 & 6655</p>
                  <p>
                    <Link to="#">support@example.com</Link>
                  </p>
                  <div class="branch-links">
                    <Link to="#">
                      all branch <i class="fas fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-branch-card">
                <div
                  class="country-flag bg-cover"
                  style={{ backgroundImage: "url('assets/img/flag-3.jpg')" }}
                ></div>
                <div class="content">
                  <h4>Great Britain</h4>
                  <p>
                    7220 Dean Martin Drive Suite, 46 Yarra Boulevard, 2nd Cross
                  </p>
                  <p>+61 (625) 07520-6644 & 6655</p>
                  <p>
                    <Link to="#">support@example.com</Link>
                  </p>
                  <div class="branch-links">
                    <Link to="#">
                      all branch <i class="fas fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="office-google-map-wrapper wow fadeInUp">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactPage;
