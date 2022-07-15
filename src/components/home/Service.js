import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <section className="our-service-solution section-bg section-padding">
      <div className="container">
        <div className="col-lg-8 offset-lg-2 text-center col-12">
          <div className="section-title-2">
            <span>services</span>
            <h1>We Provide Solution</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6 col-12">
            <div className="single-freight-service wow fadeInUp">
              <h3>
                <Link to="services-details.html">Land Transport</Link>
              </h3>
              <p>
                Road transport and industry driving coordinations experience
              </p>
              <div className="checked-list right">
                <li>Replenishment & Picking</li>
                <li>Packaging & Distribution</li>
                <li>Warehousing Operation</li>
              </div>
              <div className="icon">
                <i className="flaticon-delivery-truck-1"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div
              className="single-freight-service active wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h3>
                <Link to="services-details.html">Air Freight</Link>
              </h3>
              <p>
                Air transport organization and industry driving coordinations
                experience
              </p>
              <div className="checked-list right">
                <li>General Air Freight Products</li>
                <li>Charter Services</li>
                <li>Real Time Monitoring</li>
              </div>
              <div className="icon">
                <i className="flaticon-airplane-5"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div
              className="single-freight-service wow fadeInUp"
              data-wow-delay=".6s"
            >
              <h3>
                <Link to="services-details.html">Ocean Freight</Link>
              </h3>
              <p>
                Ocean freight gives organization and industry excellent
                experience
              </p>
              <div className="checked-list right">
                <li>Less-than-container Load</li>
                <li>Full Container Load</li>
                <li>Intermodal Solutions</li>
              </div>
              <div className="icon">
                <i className="flaticon-cargo-ship-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
