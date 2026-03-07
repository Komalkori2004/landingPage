
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row footer-top">

          {/* Logo + About */}

          <div className="col-md-4 footer-brand">
            <h2 className="footer-logo">TITAN</h2>

            <p>
              Crafting timeless watches with precision, elegance,
              and innovation. Titan represents luxury, trust,
              and modern design for every generation.
            </p>
          </div>

          {/* Quick Links */}

          <div className="col-md-2 footer-links">
            <h4>Quick Links</h4>

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Reviews</a></li>
            </ul>
          </div>

          {/* Collections */}

          <div className="col-md-3 footer-links">
            <h4>Collections</h4>

            <ul>
              <li><a href="#">Titan Edge</a></li>
              <li><a href="#">Titan Classic</a></li>
              <li><a href="#">Smart Watches</a></li>
              <li><a href="#">Premium Series</a></li>
            </ul>
          </div>

          {/* Contact */}

          <div className="col-md-3 footer-contact">
            <h4>Contact</h4>

            <p>Email: support@titan.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: India</p>

            <div className="social-icons">

              <a href="#">🌐</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
              <a href="#">▶</a>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">
          <p>© 2026 Titan Watches. All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;