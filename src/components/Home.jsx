import React, { useState } from "react";
import Banner_craowsel from "./Banner_craowsel";
import Card_features from "./Card_features";
import New_arrival_cardes from "./New_arrival_cardes";
import NewLatestes from "./NewLatestes";
import Footer from "./Footer"


export default function Home({
  banner_content,
  Loading,
  card_features,
  new_arrival_card,
}) {



  const findActiveBtn = (e) => {
    e.preventDefault();
    if (e.target.value === "all") {
      return setSlug("all");
    } else if (e.target.value === "bouquet") {
      return setSlug("bouquet");
    } else if (e.target.value === "flower_box") {
      return setSlug("flower_box");
    } else if (e.target.value === "flower_shelf") {
      return setSlug("flower_shelf");
    } else if (e.target.value === "basket_of_flower") {
      return setSlug("basket_of_flower");
    } else if (e.target.value === "gift_combos") {
      return setSlug("gift_combos");
    }
  };
  const [slug, setSlug] = useState("all");
  return (
    <div>
      <Banner_craowsel banner_content={banner_content} Loading={Loading} />
      <div id="container_card_features_all">
        {card_features.map((cf) => (
          <Card_features
            title={cf.card_title_card_features}
            icon={cf.icon}
            description={cf.description_card_features}
            key={cf.id}
          />
        ))}
      </div>
      <div id="container_btn_style">
        <button onClick={findActiveBtn} value="all">
          All
        </button>
        <button onClick={findActiveBtn} value="gift_combos">
          Gift Combos
        </button>
        <button onClick={findActiveBtn} value="basket_of_flower">
          Basket of Flower
        </button>
        <button onClick={findActiveBtn} value="flower_shelf">
          Flower Shelf
        </button>
        <button onClick={findActiveBtn} value="flower_box">
          Flower Box
        </button>
        <button onClick={findActiveBtn} value="bouquet">
          Bouquet
        </button>
      </div>
      <div>
        {<New_arrival_cardes new_arrival_card={new_arrival_card} slug={slug} />}
      </div>
      <div>
        <p style={{ fontSize: "2rem", color: "#f45db4", marginTop: "5rem" }}>Latest posts</p>
        <h2>Florist tricks</h2>
        {<NewLatestes new_arrival_card={new_arrival_card} />}

      </div>
      <Footer />
    </div>
  );
}
