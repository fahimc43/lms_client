import React, { useEffect, useState } from "react";
import AreaTitle from "../../components/AreaTitle";
import OfferCard from "../../components/OfferCard";
import rectangle from "../../image/rectangle.png";

export async function loader() {
  return fetch("offerData.json");
}

function Offers() {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    fetch("offerData.json")
      .then((response) => response.json())
      .then((data) => setOffer(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(offer);
  return (
    <div>
      <AreaTitle title={"Special Offers"} />
      <div className="container px-0 md:px-20 mx-auto my-10 grid grid-cols-1 md:grid-cols-3 justify-items-center items-center">
        {offer.map((item) => (
          <OfferCard key={item.id} offer={item} />
        ))}
      </div>
    </div>
  );
}

export default Offers;
