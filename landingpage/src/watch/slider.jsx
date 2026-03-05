import { useEffect, useState } from "react";
import "./slider.css";

import Img1 from "./image2/titan-1.webp";
import Img2 from "./image2/titan-3.webp";
import Img3 from "./image2/titan-4.webp";

const slides = [
    {
        img: Img1,
        name: "Titan Edge Black",
        price: "₹30,000",
        desc: "Ultra-thin design with sapphire glass and steel body."
    },
    {
        img: Img2,
        name: "Titan Smart Pro",
        price: "₹9,000",
        desc: "Advanced smart features with premium comfort."
    },
    {
        img: Img3,
        name: "Titan Raga Gold",
        price: "₹10,000",
        desc: "Luxury gold finish crafted for elegance."
    }
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
            <div className="vertical-slider-container">

                {/* LEFT : IMAGE SLIDER */}
                <div className="vertical-image-wrapper">
                    <div
                        className="vertical-image-track"
                        style={{ transform: `translateY(-${index * 100}%)` }}
                    >
                        {slides.map((item, i) => (
                            <div key={i} className="vertical-image-slide">
                                <img src={item.img} alt={item.name} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT : DETAILS */}
                <div className="vertical-details">
                    <h2>{slides[index].name}</h2>
                    <h3>{slides[index].price}</h3>
                    <p>{slides[index].desc}</p>

                    <ul>
                        <li>✔ Sapphire Crystal</li>
                        <li>✔ Water Resistant</li>
                        <li>✔ 2-Year Warranty</li>
                    </ul>

                    <button className="btn-gold">Buy Now</button>
                </div>

            </div>
        </section>
    );
}

export default WatchSlider;
