import React from "react";

const Calculator = () => {
  return (
    <section
      className="request-a-quote-section theme-bg bg-cover calculate-wrapper section-padding"
      style={{ backgroundImage: "url('assets/img/cost-bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-12">
            <div className="block-contents mb-20 pr-30">
              <div className="section-title">
                <h5 className="textleft">quote</h5>
                <span>Request a quote</span>
                <h2>
                  Cost <span>Calculator</span>
                </h2>
                <p className="text-white">
                  You can know the Price htmlFor your Transportation in Advance.
                  We Offers intellgent concepts htmlFor road and tail and well
                  as complex special transport services
                </p>
              </div>
            </div>
            <div className="row me-xl-5 text-white">
              <div className="col-sm-6">
                <div className="single-request-element">
                  <div className="icon">
                    <i className="fal fa-warehouse"></i>
                  </div>
                  <h6>Warehouse</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-request-element">
                  <div className="icon">
                    <i className="fal fa-location"></i>
                  </div>
                  <h6>Online Tracking</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-request-element">
                  <div className="icon">
                    <i className="fal fa-headset"></i>
                  </div>
                  <h6>Support 24/7</h6>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="single-request-element">
                  <div className="icon">
                    <i className="fal fa-shield-check"></i>
                  </div>
                  <h6>Cargo Insurance</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-12">
            <div className="request-quote-form-wrapper mt-5 mt-xl-0 ms-xl-3">
              <h4>Personal & Shipment data</h4>
              <div className="request-quote-form">
                <form action="#">
                  <div className="row d-flex align-item-center">
                    <div className="col-sm-6 col-12">
                      <input type="text" name="name" placeholder="Full name" />
                    </div>
                    <div className="col-sm-6 col-12">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="col-sm-6 col-12">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-sm-6 col-12">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="col-sm-6 col-12">
                      <input
                        type="text"
                        name="deliverycity"
                        placeholder="Delivery city"
                      />
                    </div>
                    <div className="col-sm-6 col-12">
                      <input
                        type="text"
                        name="departurecity"
                        placeholder="City of departure"
                      />
                    </div>
                    <div className="col-sm-6 col-12">
                      <select name="ftype" className="wide" id="transfreight">
                        <option value="type">Freight type</option>
                        <option value="air">Air Freight</option>
                        <option value="ship">Ship Freight</option>
                        <option value="cargo">Cargo Freight</option>
                        <option value="road">Road Freight</option>
                        <option value="rail">rail Freight</option>
                      </select>
                    </div>
                    <div className="col-sm-6 col-12">
                      <select name="incoterms" className="wide" id="incoterms">
                        <option value="incotermstype">Incoterms</option>
                        <option value="value1">Value 1</option>
                        <option value="value2">Value 2</option>
                        <option value="value3">Value 3</option>
                        <option value="value4">Value 4</option>
                      </select>
                    </div>
                    <div className="col-6 col-sm-3">
                      <input type="text" name="weight" placeholder="Weight" />
                    </div>
                    <div className="col-6 col-sm-3">
                      <input type="text" name="height" placeholder="Height" />
                    </div>
                    <div className="col-6 col-sm-3">
                      <input type="text" name="width" placeholder="Width" />
                    </div>
                    <div className="col-6 col-sm-3">
                      <input type="text" name="length" placeholder="Lenght" />
                    </div>
                    <div className="col-sm-3 col-6 d-flex align-items-center">
                      <input type="checkbox" name="deliverytype" id="fragile" />
                      <label htmlFor="fragile">fragile</label>
                    </div>
                    <div className="col-sm-3 col-6 d-flex align-items-center">
                      <input
                        type="checkbox"
                        name="deliveryexpress"
                        id="express"
                      />
                      <label htmlFor="express">Express delivery</label>
                    </div>
                    <div className="col-sm-3 col-6 d-flex align-items-center">
                      <input type="radio" name="optname" id="insurance" />
                      <label htmlFor="insurance">Insurance</label>
                    </div>
                    <div className="col-sm-3 col-6 d-flex align-items-center">
                      <input type="radio" name="optname" id="packaging" />
                      <label htmlFor="packaging">Packaging</label>
                    </div>

                    <div className="col-sm-12">
                      <input
                        type="submit"
                        className="theme-btn"
                        value="Request a quote"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
