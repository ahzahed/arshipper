import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <section className="faq-wrapper section-padding section-bg">
      <div className="container">
        <div className="row equal">
          <div className="col-lg-6 col-12">
            <div className="block-contents mb-20">
              <div className="section-title">
                <h5 className="textleft">faq</h5>
                <span>Questions & Answers</span>
                <h2>
                  may our faq<span> help you properly</span>
                </h2>
              </div>
            </div>

            <div className="faq-accordion-2">
              <div className="accordion no-border" id="accordion">
                <div className="accordion-item">
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="false"
                      aria-controls="faq1"
                    >
                      How can I pay htmlFor your logistics services?
                    </button>
                  </h4>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      We have intentionally never developed a stylistic formula
                      htmlFor our work, which is why our projects never quite
                      look or feel the same. Each of our spaces is the result of
                      our ability to listen.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                      aria-expanded="true"
                      aria-controls="faq2"
                    >
                      What options htmlFor logistics plans are available?
                    </button>
                  </h4>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      We have intentionally never developed a stylistic formula
                      htmlFor our work, which is why our projects never quite
                      look or feel the same. Each of our spaces is the result of
                      our ability to listen.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                    >
                      What payment methods are supported?
                    </button>
                  </h4>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      We have intentionally never developed a stylistic formula
                      htmlFor our work, which is why our projects never quite
                      look or feel the same. Each of our spaces is the result of
                      our ability to listen.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                    >
                      Can i specify a delivery date when ordering?
                    </button>
                  </h4>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      We have intentionally never developed a stylistic formula
                      htmlFor our work, which is why our projects never quite
                      look or feel the same. Each of our spaces is the result of
                      our ability to listen.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 col-12 mt-5 mt-lg-0 d-none">
            <div className="investors-inquire-card text-white text-center">
              <div className="investors-title">
                <h2>For Investors Inquire</h2>
              </div>
              <div
                className="investor-img bg-cover"
                style={{ backgroundImage: "url('assets/img/investor.jpg')" }}
              ></div>
              <div className="investors-data mt-3">
                <div className="profile-data mb-4">
                  <h4>Nowrin Jaan</h4>
                  <h6>Manager of Relationship Team</h6>
                  <p>Head Office - Transland LTD</p>
                </div>
                <div className="investors-contact">
                  <p>
                    <i className="fal fa-phone-volume"></i> (+81) 324 56 789
                  </p>
                </div>
                <div className="investors-contact">
                  <p>
                    <i className="fal fa-envelope"></i>{" "}
                    investorinquire@example.com
                  </p>
                </div>
              </div>
              <div className="social-profile mt-3">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-skype"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="faq-banner-half bg-cover d-none d-lg-block"
        style={{ backgroundImage: "url('assets/img/mask-bg.jpg')" }}
      ></div>
    </section>
  );
};

export default Faq;
