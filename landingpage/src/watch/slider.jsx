import { useEffect, useState } from "react";
import "./slider.css";

const slides = [
  {
    img: "/images/titan-1.webp",
    name: "Titan Raga Gold",
    price: "₹30,000",
    desc: "Ultra-thin design with sapphire glass and premium stainless steel body.",
    tag: "Best Seller",
  },
  {
    img: "/images/titan-4.webp",
    name: "Titan Raga Pro",
    price: "₹9,000",
    desc: "Advanced smart features with fitness tracking and elegant design.",
    tag: "Smart Choice",
  },
  {
    img: "/images/titan-3.webp",
    name: "Titan Raga Gray",
    price: "₹10,000",
    desc: "Luxury gold finish crafted specially for elegant occasions.",
    tag: "Luxury Pick",
  },
];

function WatchSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="vertical-slider-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 col-md-12 "data-aos="fade-up">
            <div className="vertical-image-wrapper">

              <div className="slider-glow"></div>

              <div className="vertical-image-card">

                <div
                  className="vertical-image-track"
                  style={{ transform: `translateY(-${index * 380}px)` }}
                >
                  {slides.map((item, i) => (
                    <div key={i} className="vertical-image-slide">
                      <img src={item.img} alt={item.name}/>
                    </div>
                  ))}
                </div>

                {/* SLIDER DOTS */}
                <div className="slider-dots">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className={index === i ? "dot active" : "dot"}
                    />
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div className="col-lg-6 col-md-12" data-aos="fade-left">
            <div className="vertical-details">

              <span className="watch-tag">{slides[index].tag}</span>

              <h2 className="watch-title">{slides[index].name}</h2>

              <div className="rating">
                ⭐⭐⭐⭐⭐ <span>4.9 (1.2k Reviews)</span>
              </div>

              <h3 className="price">{slides[index].price}</h3>

              <p>{slides[index].desc}</p>

              <ul className="feature-list">
                <li>✔ Sapphire Crystal Glass</li>
                <li>✔ 50m Water Resistant</li>
                <li>✔ Premium Stainless Steel</li>
                <li>✔ 2-Year Warranty</li>
              </ul>

              <div className="btn-group-slider">
                <button className="btn-gold">Buy Now</button>
                <button className="btn-outline">View Details</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WatchSlider;