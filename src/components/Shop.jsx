import React, { useState, useEffect } from "react";
import Product from "./Product";
import Footer from "./Footer";

export default function Shop({ new_arrival_card }) {
  const [slug, setSlug] = useState("all");  
  const [filterContent, setFilterContent] = useState(new_arrival_card); 
  const [query, setQueryContent] = useState({ text: "" });

  useEffect(() => {
    if (!query.text) {
      const filtered = slug === "all"
        ? new_arrival_card
        : new_arrival_card.filter((fnac) => fnac.slug_tag_new_arrival_card.includes(slug));
      setFilterContent(filtered);
    }
  }, [slug, query.text, new_arrival_card]);

  const searchProduct = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQueryContent({ ...query, text: searchTerm });
    if (searchTerm) {
      const allProducts = new_arrival_card.filter((p) =>
        p.title_new_arrival_card.toLowerCase().includes(searchTerm)
      );
      setFilterContent(allProducts);
    } else {
      // Reset to slug-based filtering if search is cleared
      const filtered = slug === "all"
        ? new_arrival_card
        : new_arrival_card.filter((fnac) => fnac.slug_tag_new_arrival_card.includes(slug));
      setFilterContent(filtered);
    }
  };

  const findActiveBtn = (e) => {
    e.preventDefault();
    const selectedSlug = e.target.value;
    setSlug(selectedSlug);
    const filtered = selectedSlug === "all"
      ? new_arrival_card
      : new_arrival_card.filter((fnac) => fnac.slug_tag_new_arrival_card.includes(selectedSlug));
    setFilterContent(filtered);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          id="show_product"
          style={{ display: "flex", flexWrap: "wrap", width: "60%" }}
        >
          {filterContent.map((nac) => (
            <Product
              key={nac.id}
              id={nac.id}
              image={nac.img_new_arrival_card}
              title={nac.title_new_arrival_card}
              category={nac.category_id}
            />
          ))}
        </div>
        <div
          id="serch"
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            alignItems: "flex-start",
          }}
        >
          <p>Filter By category :</p>
          <div
            id="container_search_btn"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "left",
            }}
          >
            <button id="change_color_hover" onClick={findActiveBtn} value="all">
              All
            </button>
            <button
              id="change_color_hover"
              onClick={findActiveBtn}
              value="gift_combos"
            >
              Gift Combos
            </button>
            <button
              id="change_color_hover"
              onClick={findActiveBtn}
              value="basket_of_flower"
            >
              Basket of Flower
            </button>
            <button
              id="change_color_hover"
              onClick={findActiveBtn}
              value="flower_shelf"
            >
              Flower Shelf
            </button>
            <button
              id="change_color_hover"
              onClick={findActiveBtn}
              value="flower_box"
            >
              Flower Box
            </button>
            <button
              id="change_color_hover"
              onClick={findActiveBtn}
              value="bouquet"
            >
              Bouquet
            </button>
          </div>

          <input
            type="search"
            value={query.text}
            onChange={searchProduct}
            placeholder="search name product...."
            style={{
              width: "90%",
              border: "none",
              borderBottom: "1px solid lightGray",
              padding: ".5rem 1rem ",
              marginTop: "2rem",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
