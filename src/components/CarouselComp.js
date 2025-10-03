import React from "react";
import Slider from "react-slick";

const OfferCarousel = ({ restroDeal, resId }) => {
  const offers =
    restroDeal?.cards[3].card?.card?.gridElements?.infoWithStyle?.offers;

  if (!offers || offers.length === 0) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-6">
      <h2 className="font-bold py-4"> Deals for you</h2>
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={resId} style={{ padding: "0 10px" }}>
            <div
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: "1px solid rgba(0,0,0,0.1",
                textAlign: "center",
                margin: "0px 10px",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 style={{ margin: 0, color: "#0c0c0cff" }}>
                {offer?.info?.header}
              </h3>

              <p
                style={{
                  marginTop: "8px",
                  fontWeight: "bold",
                  color: "#2e7d32",
                }}
              >
                {offer?.info?.description || offer?.info?.couponCode}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OfferCarousel;
