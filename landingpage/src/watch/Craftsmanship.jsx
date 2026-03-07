import "./craftsmanship.css";

function Craftsmanship() {
  return (
    <section className="craft-section py-5">
      <div className="container text-center">

        <div data-aos="fade-up">
          <h2 className="craft-title">
            Precision <span className="gold">Craftsmanship</span>
          </h2>

          <p className="craft-desc">
            Our watches are not just accessories, they are a reflection of
            innovation, heritage, and precision engineering built over decades.
          </p>
        </div>

        <div className="row mt-5 g-4">

          <div className="col-md-4" data-aos="zoom-in">
            <div className="craft-card">

              <div className="craft-icon">⌚</div>

              <h3>40+</h3>

              <h5>Years Of Heritage</h5>

              <p>
                Decades of watchmaking expertise delivering timeless designs
                trusted by millions worldwide.
              </p>

            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="craft-card">

              <div className="craft-icon">✔</div>

              <h3>120+</h3>

              <h5>Quality Checks</h5>

              <p>
                Every watch passes through rigorous testing to ensure
                durability, precision, and premium finishing.
              </p>

            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="craft-card">

              <div className="craft-icon">🌍</div>

              <h3>5M+</h3>

              <h5>Happy Customers</h5>

              <p>
                Trusted globally by watch enthusiasts who value elegance,
                craftsmanship, and reliability.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Craftsmanship;