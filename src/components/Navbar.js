import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { usePagesContext } from "../context/pages_context";

const Navbar = () => {
  const {
    openSidebar,
    isSidebarOpen,
    closeSidebar,
    openModal,
    closeModal,
    isModalOpen,
    // isStickyOpen,
  } = usePagesContext();

  return (
    <header className="header-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-sm-5 col-md-4 col-6 pr-lg-5">
            <div className="logo">
              <Link to="/">
                <img src="assets/img/logo.png" alt="Transland" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center">
            <div className="menu-wrap">
              <div className="main-menu">
                <ul>
                  <li>
                    <Link to="#">
                      Home <i className="fas fa-angle-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/">Home 1</Link>
                      </li>
                      <li>
                        <Link to="index-2.html">Home 2</Link>
                      </li>
                      <li>
                        <Link to="index-3.html">Home 3</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="about">About</Link>
                  </li>
                  <li>
                    <Link to="services.html">Services</Link>
                  </li>
                  <li>
                    <Link to="#">
                      Pages <i className="fas fa-angle-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="faq.html">faq</Link>
                      </li>
                      <li>
                        <Link to="team.html">team</Link>
                      </li>
                      <li>
                        <Link to="pricing.html">pricing</Link>
                      </li>
                      <li>
                        <Link to="404.html">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="news.html">News</Link>
                  </li>
                  <li>
                    <Link to="contact.html">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right-element">
              <div
                // to="contact.html"
                className="theme-btn"
                onClick={openModal}
              >
                Track Your Shipment <i className="fal fa-long-arrow-right"></i>
              </div>
              <Link to="#" className="search-btn">
                <i className="fal fa-search"></i>
              </Link>
              <div className="search-box">
                <form action="#">
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fal fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="d-block d-lg-none col-sm-1 col-md-8 col-6">
            <div className="mobile-nav-wrap">
              <div id="hamburger">
                <i className="fal fa-bars" onClick={openSidebar}></i>
              </div>
              {/* <!-- mobile menu - responsive menu  --> */}
              <div
                className={`${
                  isSidebarOpen ? "mobile-nav show" : "mobile-nav"
                }`}
              >
                <button type="button" className="close-nav">
                  <i className="fal fa-times-circle" onClick={closeSidebar}></i>
                </button>
                <nav className="sidebar-nav">
                  <ul className="metismenu" id="mobile-menu">
                    <li>
                      <Link className="has-arrow" to="#">
                        Homes
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="index.html">Homepage 1</Link>
                        </li>
                        <li>
                          <Link to="index-2.html">Homepage 2</Link>
                        </li>
                        <li>
                          <Link to="index-3.html">Homepage 3</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="about.html">about</Link>
                    </li>
                    <li>
                      <Link to="services.html">services</Link>
                    </li>
                    <li>
                      <Link className="has-arrow" to="#">
                        Pages
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="faq.html">faq</Link>
                        </li>
                        <li>
                          <Link to="services-details.html">
                            services details
                          </Link>
                        </li>
                        <li>
                          <Link to="team.html">Team</Link>
                        </li>
                        <li>
                          <Link to="404.html">404</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="news.html">News</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact</Link>
                    </li>
                  </ul>
                </nav>

                <div className="action-bar text-white">
                  <div className="single-info-element">
                    <div className="icon">
                      <i className="fal fa-map-marked-alt"></i>
                    </div>
                    <div className="text">
                      <h5>visit our location:</h5>
                      <span>West Jakarta City, UK</span>
                    </div>
                  </div>
                  <div className="single-info-element">
                    <div className="icon">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="text">
                      <h5>Opening Hours:</h5>
                      <span>Mon-Fri 8am-5pm</span>
                    </div>
                  </div>
                  <div className="single-info-element">
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="text">
                      <h5>Send us mail</h5>
                      <span>info@example.com</span>
                    </div>
                  </div>
                  <div className="call-us">
                    <div className="icon text-white">
                      <i className="fal fa-phone-volume"></i>
                    </div>
                    <div className="text">
                      <h5>Troll fre number</h5>
                      <span>+09 949 858327</span>
                    </div>
                  </div>
                  <Link to="contact.html" className="theme-btn mt-4">
                    Track Your Shipment
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`${isSidebarOpen ? "overlay active" : "overlay"}`}
            ></div>
          </div>
        </div>
      </div>

      {/* Modal for order tracking */}
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Navbar;
