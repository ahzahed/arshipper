import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonial-wrapper section-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 mb-40">
            <div className="block-contents text-center">
              <div className="section-title">
                <h5>review</h5>
                <span>Testimonials</span>
                <h2>
                  Client <span>Feedbacks</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-xl-4 col-12">
            <div className="single-testimonial-card text-center">
              <div
                className="client-img bg-cover bg-center"
                style={{
                  backgroundImage: "url('assets/img/blog/author2.jpg')",
                }}
              ></div>
              <div className="client-info">
                <h4>Thomas Smith</h4>
                <span>CEO & Engineer</span>
              </div>
              <div className="feedback">
                <p>
                  Great experience and impressive product. It was a very
                  professional and technically competent job from the whole
                  team.
                </p>

                <div className="star">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div className="single-testimonial-card text-center">
              <div
                className="client-img bg-cover bg-center"
                style={{
                  backgroundImage: "url('assets/img/blog/author3.jpg')",
                }}
              ></div>
              <div className="client-info">
                <h4>Ernest Smith</h4>
                <span>Business Man</span>
              </div>
              <div className="feedback">
                <p>
                  Great experience and impressive product. It was a very
                  professional and technically competent job from the whole
                  team.
                </p>

                <div className="star">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 col-12">
            <div className="single-testimonial-card text-center">
              <div
                className="client-img bg-cover bg-center"
                style={{
                  backgroundImage: "url('assets/img/blog/author_img.jpg')",
                }}
              ></div>
              <div className="client-info">
                <h4>Salman Ahmed</h4>
                <span>Project Manager</span>
              </div>
              <div className="feedback">
                <p>
                  Great experience and impressive product. It was a very
                  professional and technically competent job from the whole
                  team.
                </p>

                <div className="star">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
