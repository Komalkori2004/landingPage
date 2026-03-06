import "./table.css";

function Table() {
  return (
    <section id="specs" className="specs-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="spec-heading">
            Precision <span className="gold">Specifications</span>
          </h2>

          <p className="spec-para">
            Explore the craftsmanship and engineering behind every Titan
            timepiece. Compare features, materials, and performance
            specifications to choose the perfect watch for your style.
          </p>
        </div>

        {/* Table Card */}
        <div className="table-card" data-aos="zoom-in">

          <div className="table-responsive">
            <table className="custom-table">

              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Titan Edge</th>
                  <th className="best">Titan Smart Pro</th>
                  <th>Regalia Gold</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Dial Size</td>
                  <td>40mm</td>
                  <td className="best">42mm</td>
                  <td>36mm</td>
                </tr>

                <tr>
                  <td>Case Thickness</td>
                  <td>8.6mm</td>
                  <td className="best">11.4mm</td>
                  <td>9.2mm</td>
                </tr>

                <tr>
                  <td>Strap Material</td>
                  <td>Stainless Steel</td>
                  <td className="best">Premium Silicone</td>
                  <td>Genuine Leather</td>
                </tr>

                <tr>
                  <td>Water Resistance</td>
                  <td>50m</td>
                  <td className="best">IP68</td>
                  <td>30m</td>
                </tr>

                <tr>
                  <td>Warranty</td>
                  <td>2 Years</td>
                  <td className="best">1 Year</td>
                  <td>2 Years</td>
                </tr>

                <tr>
                  <td>Special Feature</td>
                  <td>Ultra Slim Design</td>
                  <td className="best">Smart Fitness Tracking</td>
                  <td>Luxury Gold Finish</td>
                </tr>

              </tbody>

            </table>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Table;