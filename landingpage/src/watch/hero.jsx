// import "bootstrap/dist/css/bootstrap.min.css";

// import "aos/dist/aos.css";
// import AOS from "aos";
// import { useEffect } from "react";

import "./hero.css";
import Titan1 from './image2/titan-1.webp'

function Landing() {


  return (

    <>

      <header>
        <div className=" container ">
          <div className="d-flex align-item-center g-4">
            <div className="logo">TITAN</div>
            <nav className="navbar">
              <ul>

                <li><a href="#">Collection</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Reviews</a></li>
              </ul>

            </nav>
          </div>


          <div className="btn">
            <a href="#shop" className="btn-primary " style={{ borderRadius: "15px", textDecoration: "none" }}>Stores</a>
            <button className="btn-secondary" style={{ borderRadius: "15px", textDecoration: "none",background:"transparet" }}>Buy Now</button>

          </div>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-container">

          <div className="hero-text">
            <h1>REDEFINE <br />
              TIME WITH <span className="gold">TITAN</span></h1>
            <p>Luxury engineered for precision and crafted for elegance. Discover our latest collection — where timeless style meets modern craftsmanship.</p>

            <div className="hero-buttons">
              <a href="#collection" class="btn-primary">Shop Collection</a>
              <a href="#video" class="btn-secondary">Watch Film</a>
            </div>

            <div className="hero-info">
              <span>Free worldwide shipping</span>
              <span>•</span>
              <span>2-year warranty</span>
            </div>
          </div>


          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img src={Titan1} alt="Titan Watch" />
            </div>
            <div className="gold-glow"></div>
          </div>
        </div>
      </section>








    </>
  );
}

export default Landing;
