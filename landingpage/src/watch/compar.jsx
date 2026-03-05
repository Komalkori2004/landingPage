
import "./compare.css";

function Compare() {
    return (
        <section className="compare-section">
            <h2>Choose Your Titan</h2>

            <div className="compare-grid">
                <div className="compare-card">
                    <h3>Classic</h3>
                    <p>Elegant daily wear</p>
                    <span>₹10,000</span>
                </div>

                <div className="compare-card highlight">
                    <h3>Edge</h3>
                    <p>Ultra-slim premium</p>
                    <span>₹30,000</span>
                </div>

                <div className="compare-card">
                    <h3>Smart Pro</h3>
                    <p>Luxury meets tech</p>
                    <span>₹9,000</span>
                </div>
            </div>
        </section>
    );
}

export default Compare;
