import "./features.css";

function Features() {
    const data = [
        {
            title: "Sapphire Crystal Glass",
            desc: "Ultra-scratch-resistant premium sapphire for long-lasting clarity.",
            icon: "💎",
        },
        {
            title: "5ATM Water Resistant",
            desc: "Designed to withstand rain, splashes, and daily wear.",
            icon: "💧",
        },
        {
            title: "Stainless Steel Body",
            desc: "Precision-crafted 316L steel for durability and elegance.",
            icon: "⛓️",
        },
        {
            title: "Premium Leather Strap",
            desc: "Soft, durable, and built for all-day comfort.",
            icon: "⌚",
        },
    ]



    return (
        <>
            <section className="feature">
                <h2 className="title">
                    Premium Features</h2>
                <div className="feature-container">
                    {
                        data.map((f, index) => (
                            <div key={index} className="fea-box">
                                <div className="feature-icon">{f.icon}</div>
                                <h3>{f.title}</h3>
                                <p>{f.desc}</p>

                            </div>
                        ))
                    }

                </div>

            </section>

        </>
    )
}

export default Features