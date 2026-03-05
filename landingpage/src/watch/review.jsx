//  import "./reviews.css";

function Reviews() {
    return (
        <section className="reviews">
            <h2 className="section-title">What Customers Say</h2>

            <div className="review-grid">
                <div className="review-card">
                    ⭐⭐⭐⭐⭐
                    <p>"Absolutely premium finish and comfort."</p>
                    <h4>- Rahul</h4>
                </div>

                <div className="review-card">
                    ⭐⭐⭐⭐⭐
                    <p>"Titan never disappoints. Worth every rupee."</p>
                    <h4>- Anjali</h4>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
