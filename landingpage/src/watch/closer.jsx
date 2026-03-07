import "./closure.css";
import ClaspImg from "/images/titan-1.webp";

function Closure() {
  return (
    <section className="closure-section py-5">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* IMAGE SIDE */}

          <div
            className="col-lg-6 text-center"
            data-aos="fade-right"
          >
            <div className="closure-image-wrapper">

              <img
                src={ClaspImg}
                alt="Titan Watch Clasp"
                className="img-fluid clasp-image"
              />

            </div>
          </div>

          {/* TEXT SIDE */}

          <div
            className="col-lg-6"
            data-aos="fade-left"
          >

            <span className="closure-tag">
              Premium Craftsmanship
            </span>

            <h2 className="closure-title">
              Precision Lock <span>Closure System</span>
            </h2>

            <p className="closure-desc">
              Designed with Titan’s signature engineering, the precision
              fold-over clasp provides a secure, comfortable and seamless fit.
              Built for durability and elegance, it keeps your watch perfectly
              locked throughout the day.
            </p>

            <ul className="closure-features">

              <li>✔ High-grade Stainless Steel Lock</li>
              <li>✔ Sweat & Rust Resistant Build</li>
              <li>✔ One-Click Secure Fit Mechanism</li>
              <li>✔ Smooth Lock & Release Action</li>

            </ul>

            <div className="mt-4">

              <button className="btn btn-warning px-4 me-3">
                Explore Watches
              </button>

              <button className="btn btn-outline-light px-4">
                View Details
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Closure;