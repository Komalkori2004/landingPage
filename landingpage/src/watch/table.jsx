import './table.css'

function Table() {


    return (<>


        <section id="specs" className="specs-section">
            <div className="specs-container">
                {/* Heading */}
                <h2 className="spec-heading">Specifications</h2>

                {/* Paragraph */}
                <p className="spec-para">
                    Technical details to help you compare models and choose the right one.
                </p>

                {/* Glass Table */}
                <div className="glass-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Model</th>
                                <th>Titan Edge</th>
                                <th>Titan Smart Pro</th>
                                <th>Regalia Gold</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dial Size</td>
                                <td>40mm</td>
                                <td>42mm</td>
                                <td>36mm</td>
                            </tr>
                            <tr>
                                <td>Case Thickness</td>
                                <td>8.6mm</td>
                                <td>11.4mm</td>
                                <td>9.2mm</td>
                            </tr>
                            <tr>
                                <td>Strap</td>
                                <td>Steel</td>
                                <td>Silicone</td>
                                <td>Leather</td>
                            </tr>
                            <tr>
                                <td>Warranty</td>
                                <td>2 Years</td>
                                <td>1 Year</td>
                                <td>2 Years</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>





    </>)
}

export default Table