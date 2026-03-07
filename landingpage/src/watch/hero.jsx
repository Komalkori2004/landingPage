
import { useState } from "react";
import "./hero.css";
function Landing() {
   const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
  <header>
<div className="container">

<nav className="navbar navbar-expand-lg">

<div className="logo">TITAN</div>

<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse justify-content-between" id="navbarNav">

<ul className="navbar-nav gap-lg-4">

<li className="nav-item">
<a className="nav-link" href="#collection">Collection</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#features">Features</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#product">Product</a>
</li>

<li className="nav-item">
<a className="nav-link" href="#reviews">Reviews</a>
</li>

</ul>

<div className="d-flex gap-3 mt-3 mt-lg-0">

<a href="#store" className="btn-primary">Stores</a>

<button className="btn-secondary">Buy Now</button>

</div>

</div>

</nav>

</div>
</header>
      
    <section id="hero" className="hero-section">
  <div className="container">
    <div className="row align-items-center">

      {/* Left Content */}
      <div className="col-md-6 hero-text">

        <h1 data-aos="fade-right">
          REDEFINE <br />
          TIME WITH <span className="gold">TITAN</span>
        </h1>

       <p data-aos="fade-right" data-aos-delay="200">
          Luxury engineered for precision and crafted for elegance.
          Discover our latest collection — where timeless style meets modern craftsmanship.
        </p>

    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="#collection" className="btn-primary">Shop Collection</a>
          <a href="#video" className="btn-secondary">Watch Film</a>
        </div>

        <div className="hero-info">
          <span>Free worldwide shipping</span>
          <span>•</span>
          <span>2-year warranty</span>
        </div>

      </div>

      {/* Right Image */}
      <div className="col-md-6 hero-image-wrapper">
      <div className="hero-image-card" data-aos="zoom-in">
          <img src="/images/titan-1.webp" alt="Titan Watch" />
        </div>
        <div className="gold-glow"></div>
      </div>

    </div>
  </div>
</section>
    </>
  );
}

export default Landing;
