import "./features.css";

function Features() {

const data = [
{
title: "Sapphire Crystal Glass",
desc: "Highly scratch-resistant sapphire crystal ensures long-lasting clarity and premium protection.",
icon: "💎",
},
{
title: "5ATM Water Resistance",
desc: "Engineered to resist rain, splashes and daily water exposure for reliable performance.",
icon: "💧",
},
{
title: "316L Stainless Steel",
desc: "Premium stainless steel body crafted for durability, elegance and corrosion resistance.",
icon: "⚙️",
},
{
title: "Luxury Leather Strap",
desc: "Soft premium leather strap designed for all-day comfort and timeless style.",
icon: "⌚",
}
];

return (

<section id="features" className="features-section">

<div className="container">

<div className="text-center mb-5">

<h2 className="features-title" data-aos="fade-up">
Premium <span>Features</span>
</h2>
<p className="features-subtitle" data-aos="fade-up" data-aos-delay="200">
Crafted with precision engineering and premium materials,
our watches deliver durability, elegance and performance.
</p>

</div>

<div className="row g-4 justify-content-center">

{data.map((f,index)=>(
<div key={index} className="col-12 col-sm-6 col-lg-3">
<div
className="feature-card"
data-aos="fade-up"
data-aos-delay={index * 150}
>

<div className="feature-icon">
{f.icon}
</div>

<h4 className="feature-heading">
{f.title}
</h4>

<p className="feature-desc">
{f.desc}
</p>

</div>

</div>
))}

</div>

</div>

</section>

);

}

export default Features;