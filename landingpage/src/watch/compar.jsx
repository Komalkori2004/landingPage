import "./compare.css";
import watch1 from "/images/titan-1.webp";
import watch2 from "/images/titan-4.webp";
import watch3 from "/images/titan-3.webp";

function Compare() {
  return (
    <section className="compare-section py-5">
      <div className="container text-center">

        <div data-aos="fade-up">
          <h2 className="compare-title">
            Find Your <span className="gold">Perfect Titan</span>
          </h2>

          <p className="compare-desc">
            Discover watches crafted for elegance, innovation, and everyday luxury.
            Choose the style that defines your personality.
          </p>
        </div>

        <div className="row g-4 mt-5">

          {/* Card 1 */}

          <div className="col-md-4" data-aos="zoom-in">
            <div className="compare-card">

              <div className="watch-glow"></div>

              <img src={watch1} alt="" className="watch-img"/>

              <h3>Classic</h3>

              <p className="watch-tag">Timeless Elegance</p>

              <ul>
                <li>✔ Stainless steel strap</li>
                <li>✔ Scratch resistant glass</li>
                <li>✔ Elegant minimal dial</li>
              </ul>

              <div className="price">₹10,000</div>

              <button className="compare-btn">Explore</button>

            </div>
          </div>

          {/* Card 2 */}

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="compare-card highlight">

              <div className="watch-glow"></div>

              <img src={watch2} alt="" className="watch-img"/>

              <h3>Edge</h3>

              <p className="watch-tag">Ultra Slim Luxury</p>

              <ul>
                <li>✔ World’s slimmest watch</li>
                <li>✔ Sapphire crystal glass</li>
                <li>✔ Premium luxury finish</li>
              </ul>

              <div className="price">₹30,000</div>

              <button className="compare-btn">Explore</button>

            </div>
          </div>

          {/* Card 3 */}

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="compare-card">

              <div className="watch-glow"></div>

              <img src={watch3} alt="" className="watch-img"/>

              <h3>Smart Pro</h3>

              <p className="watch-tag">Luxury Meets Tech</p>

              <ul>
                <li>✔ Smart health tracking</li>
                <li>✔ Notification alerts</li>
                <li>✔ Premium hybrid design</li>
              </ul>

              <div className="price">₹9,000</div>

              <button className="compare-btn">Explore</button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Compare;