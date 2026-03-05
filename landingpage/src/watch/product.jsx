import "./product.css";

function Product() {

const products = [
{
name: "Titan Edge Black",
price: "30,000",
img: "/images/titan-ed-2.webp",
desc: "Ultra-slim luxury watch with sapphire glass and premium stainless steel finish."
},
{
name: "Titan Smart Pro",
price: "9,000",
img: "/images/titan-3.webp",
desc: "Advanced smartwatch with fitness tracking, AMOLED display and long battery life."
},
{
name: "Titan Raga Gold",
price: "10,000",
img: "/images/titan-4.webp",
desc: "Elegant women's watch with gold-tone design crafted for timeless beauty."
}
];

return (

<section id="collection" className="collection-section py-5">

<div className="container">

{/* Title */}
<div className="text-center mb-5">

<h2 className="collection-title">
Our <span>Collection</span>
</h2>

<p className="collection-subtitle">
Discover our premium Titan watches crafted with precision,
luxury design, and timeless elegance for every occasion.
</p>

</div>

{/* Cards */}
<div className="row g-4 justify-content-center">

{products.map((p,index)=>(
<div key={index} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">

<div className="collection-card">

<div className="collection-img-wrapper">
<img src={p.img} alt={p.name} className="collection-img"/>
</div>

<h5 className="collection-name">{p.name}</h5>
<p className="collection-desc">
{p.desc}
</p>
<p className="collection-price">₹{p.price}</p>

<div className="collection-buttons">
<a href="#shop" className="btn-gold">Buy Now</a>
<button className="btn-outline">Details</button>
</div>

</div>

</div>
))}

</div>

</div>

</section>
)

}

export default Product;