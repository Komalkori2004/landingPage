import "./closure.css";
import ClaspImg from "./image2/titan-1.webp";
function Closure() {
    return (
        <section className="closure-section">
            <div className="closure-container">

                <img src={ClaspImg} alt="Watch Clasp" />

                <div className="closure-text">
                    <h2>Precision Lock Closure</h2>
                    <p>
                        Engineered with a **secure fold-over clasp** ensuring
                        comfort, durability, and effortless elegance.
                    </p>

                    <ul>
                        <li>✔ Stainless Steel Lock</li>
                        <li>✔ Sweat & Rust Resistant</li>
                        <li>✔ One-Click Secure Fit</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Closure;
