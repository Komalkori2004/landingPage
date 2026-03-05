import './product.css'
import Img1 from './image2/titan-ed-2.webp'
import Img2 from './image2/titan-3.webp'
import Img3 from './image2/titan-4.webp'
function Product() {
    const products = [
        {
            name: "Titan Edge Black",
            price: "$ 30,000",
            img: Img1
        },
        {
            name: "Titan smart pro",
            price: "$ 9,000",
            img: Img2

        },
        {
            name: "Titan Raga Gold",
            price: "$ 10,000",
            img: Img3

        }
    ]



    return (<>

        <section className="collection-section py-5">
            <h2 className="collection-title text-center">Our Collection</h2>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    {products.map((f, index) => (
                        <div key={index} className="col-12 col-md-4 mb-4">
                            <div className="collection-card">
                                <div className="collection-img-wrapper">
                                    <img src={f.img} alt={f.name} className="collection-img" />
                                </div>

                                <div className="collection-body text-center">
                                    <h5 className="collection-name">{f.name}</h5>
                                    <p className="collection-price">₹{f.price}</p>

                                    <div className="collection-buttons">
                                        <a href="#shop" className="btn-gold">Buy Now</a>
                                        <button className="btn-outline">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>







    </>)

}

export default Product