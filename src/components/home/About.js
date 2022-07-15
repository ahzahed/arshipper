import React from "react";

const About = () => {
  return (
    <section className="about-us-wrapper section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="about-img-gallery me-lg-5 mb-5 mb-lg-0">
              <div className="about-img-left">
                <img src="assets/img/home2/about-left.jpg" alt="transland" />
              </div>
              <div
                className="about-img-center bg-cover"
                style={{
                  backgroundImage: "url('assets/img/home2/about-center.jpg')",
                }}
              ></div>
              <div className="about-img-right">
                <img src="assets/img/home2/about-right.jpg" alt="transland" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="section-title-2">
              <span>About Us</span>
              <h1>Initiatives in goods move anywhere.</h1>
            </div>
            <p>
              Denounce with righteous indignation and dislike men who are
              beguiled likes and demoralized by the charms off pleasures of the
              moments
            </p>
            <div className="row">
              <div className="col-12 col-md-5 col-sm-6">
                <ul className="checked-list wow fadeInUp">
                  <li>Transparent Pricing</li>
                  <li>On-Time Delivery</li>
                  <li>Real Time Tracking</li>
                </ul>
              </div>
              <div className="col-12 col-md-5 col-sm-6">
                <ul
                  className="checked-list color wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <li>24/7 Online Support</li>
                  <li>Cost Optimizations</li>
                  <li>Warehousing Operation</li>
                </ul>
              </div>
            </div>
            <div
              className="about-ceo d-sm-flex align-items-center wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div
                className="ceo-img bg-cover"
                style={{ backgroundImage: "url('assets/img/home2/ceo.jpg')" }}
              ></div>
              <div className="ceo-info">
                <h5>Alexis D. Denzol</h5>
                <span>CEO & Founder, Transland</span>
              </div>
              <div className="autograph-signature">
                <img src="assets/img/home2/signature.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center section-padding pb-0">
          <div className="col-lg-2">
            <div className="single-client">
              <img src="assets/img/brand/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-client">
              <img src="assets/img/brand/2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-client">
              <img src="assets/img/brand/3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-client">
              <img src="assets/img/brand/4.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-client">
              <img src="assets/img/brand/5.png" alt="" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="single-client">
              <img src="assets/img/brand/7.png" alt="" />
            </div>
          </div>
        </div>
        {/* <div className=" section-padding pb-0">
          <div className="single-client">
            <img src="assets/img/brand/1.png" alt="" />
          </div>
          <div className="single-client">
            <img src="assets/img/brand/2.png" alt="" />
          </div>
          <div className="single-client">
            <img src="assets/img/brand/3.png" alt="" />
          </div>
          <div className="single-client">
            <img src="assets/img/brand/4.png" alt="" />
          </div>
          <div className="single-client">
            <img src="assets/img/brand/5.png" alt="" />
          </div>
          <div className="single-client">
            <img src="assets/img/brand/2.png" alt="" />
          </div>
          <div className="single-client">
            <img src="assets/img/brand/7.png" alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
