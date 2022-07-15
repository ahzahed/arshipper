import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <React.Fragment>
      <section className="hero-wrapper hero-2">
        <div className="hero-slider-2">
          <div
            className="single-slide bg-cover"
            style={{ backgroundImage: "url('assets/img/home2/slide1.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-xxl-6 col-md-8">
                  <div className="hero-contents">
                    <h1
                      className="fs-lg animated"
                      // data-animation-in="fadeInUp"
                      // data-delay-in="0.1"
                    >
                      Quick <span>Transport</span>
                    </h1>

                    <p
                      className="pe-lg-5 animated"
                      // data-animation-in="fadeInUp"
                      // data-delay-in="0.5"
                    >
                      We are Trusted 15+ Countries Worldwide We hire and build
                      your own remote dedicated development teams tailored to
                      your specific needs.
                    </p>
                    <Link
                      to="contact.html"
                      className="theme-btn me-sm-4 "
                      // data-animation-in="fadeInUp"
                      // data-delay-in="0.8"
                    >
                      get a quote <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-watermark-icon d-none d-lg-block">
              <img src="assets/img/watermark.png" alt="" />
            </div>
          </div>
          {/* <div
            className="single-slide bg-cover"
            style={{ backgroundImage: "url('assets/img/home2/slide2.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 col-xxl-6 col-md-8">
                  <div className="hero-contents">
                    <h1
                      className="fs-lg animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.1"
                    >
                      Fastest <span>Transport</span>
                    </h1>
                    <p
                      className="pe-lg-5 animated"
                      data-animation-in="fadeInUp"
                      data-delay-in="0.5"
                    >
                      We are Trusted 15+ Countries Worldwide We hire and build
                      your own remote dedicated development teams tailored to
                      your specific needs.
                    </p>
                    <a
                      href="contact.html"
                      className="theme-btn me-sm-4 "
                      data-animation-in="fadeInUp"
                      data-delay-in="0.8"
                    >
                      get a quote <i className="fal fa-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-watermark-icon d-none d-lg-block">
              <img src="assets/img/watermark.png" alt="" />
            </div>
          </div> */}
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
          <symbol
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
            width="44px"
            height="44px"
            id="circle"
            fill="none"
            stroke="currentColor"
          >
            <circle r="20" cy="22" cx="22" id="translandcircle" />
          </symbol>
        </svg> */}
      </section>

      <div className="services-bar-wrapper">
        <div className="container">
          <div className="our-services-box">
            <div className="row no-padding align-items-center">
              <div className="col-sm-6 col-12 border-right col-md-4 col-xl-2">
                <div className="single-service-icon">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-truck-2"></i>
                    </div>
                    <div className="title">
                      <h6>
                        <Link to="services-details.html">road freight</Link>
                      </h6>
                    </div>
                  </div>
                  <Link to="services-details.html" className="service-link">
                    <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-12 border-right col-md-4 col-xl-2">
                <div className="single-service-icon">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-airplane-5"></i>
                    </div>
                    <div className="title">
                      <h6>
                        <Link to="services-details.html">air freight</Link>
                      </h6>
                    </div>
                  </div>
                  <Link to="services-details.html" className="service-link">
                    <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-12 border-right col-md-4 col-xl-2">
                <div className="single-service-icon">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-cargo-boat"></i>
                    </div>
                    <div className="title">
                      <h6>
                        <Link to="services-details.html">ocean freight</Link>
                      </h6>
                    </div>
                  </div>
                  <Link to="services-details.html" className="service-link">
                    <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-12 border-right col-md-4 col-xl-2">
                <div className="single-service-icon">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-subway"></i>
                    </div>
                    <div className="title">
                      <h6>
                        <Link to="services-details.html">train freight</Link>
                      </h6>
                    </div>
                  </div>
                  <Link to="services-details.html" className="service-link">
                    <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-12 border-right col-md-4 col-xl-2">
                <div className="single-service-icon">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-drone-2"></i>
                    </div>
                    <div className="title">
                      <h6>
                        <Link to="services-details.html">drone freight</Link>
                      </h6>
                    </div>
                  </div>
                  <Link to="services-details.html" className="service-link">
                    <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-sm-6 col-12 border-right col-md-4 col-xl-2">
                <div className="single-service-icon">
                  <div className="content">
                    <div className="icon">
                      <i className="flaticon-approval"></i>
                    </div>
                    <div className="title">
                      <h6>
                        <Link to="services-details.html">send gift</Link>
                      </h6>
                    </div>
                  </div>
                  <Link to="services-details.html" className="service-link">
                    <i className="fal fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
