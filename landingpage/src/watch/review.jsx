import "./reviews.css";

function Reviews() {
  return (
    <section className="reviews-section py-5">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="review-heading">
            What <span>Customers Say</span>
          </h2>

          <p className="review-sub">
            Trusted by thousands who love Titan watches for their
            precision, elegance and timeless craftsmanship.
          </p>
        </div>

        {/* Carousel */}
        <div
         id="reviewCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="2500"
  data-bs-pause="false"
  data-aos="zoom-in"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row justify-content-center g-4">

                <div className="col-md-4">
                  <div className="review-card p-4">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p>
                      "Absolutely premium finish and incredible comfort.
                      Titan watches always feel luxurious."
                    </p>
                    <h5>Rahul Sharma</h5>
                    <span>Watch Enthusiast</span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="review-card p-4">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p>
                      "Titan never disappoints. Elegant design and
                      perfect for everyday wear."
                    </p>
                    <h5>Anjali Mehta</h5>
                    <span>Fashion Blogger</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row justify-content-center g-4">

                <div className="col-md-4">
                  <div className="review-card p-4">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p>
                      "The build quality is outstanding. Looks premium
                      and stylish."
                    </p>
                    <h5>Arjun Patel</h5>
                    <span>Entrepreneur</span>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="review-card p-4">
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    <p>
                      "Beautiful design and excellent durability.
                      Highly recommended!"
                    </p>
                    <h5>Priya Kapoor</h5>
                    <span>Designer</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default Reviews;