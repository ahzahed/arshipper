import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="top-bar-wrapper d-none d-sm-block">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="top-left">
          <Link to="tel:987-098-098-09">
            <i className="fal fa-phone-volume"></i>987-098-098-09
          </Link>
          <Link to="mailto:info@example.com">
            <i className="fal fa-envelope"></i>info@example.com
          </Link>
          <Link to="#">
            <i className="fal fa-map-marker-alt"></i>Cargo Hub, LD 32614, UK
          </Link>
        </div>
        <div className="top-right d-none d-md-block">
          <div className="social-pages">
            <Link to="#">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-youtube" aria-hidden="true"></i>
            </Link>
            <Link to="#">
              <i className="fab fa-skype" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
