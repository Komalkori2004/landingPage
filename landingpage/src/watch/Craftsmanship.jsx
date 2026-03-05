import "./craftsmanship.css";

function Craftsmanship() {
    return (
        <section className="craft-section">
            <div className="craft-container">
                <h2>Crafted With Precision</h2>
                <p>
                    Every Titan watch is the result of meticulous craftsmanship,
                    engineered by master watchmakers with decades of expertise.
                </p>

                <div className="craft-stats">
                    <div>
                        <h3>40+</h3>
                        <span>Years Legacy</span>
                    </div>
                    <div>
                        <h3>120+</h3>
                        <span>Quality Checks</span>
                    </div>
                    <div>
                        <h3>5M+</h3>
                        <span>Happy Customers</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Craftsmanship;
