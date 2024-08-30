import React from "react";

export default function NewLatest({ image, title, category }) {
  return (
    <div id="flex_box">
      <div id="container_newLatest_margin">
        <div id="container_new_arrival_card">
          <img id="img_style" src={image} alt="" />
          <p id="category">{category}</p>

          <div id="container_icon_new_arrival_card">
            <i className="bx bx-search"></i>
            <i className="bx bxs-donate-heart"></i>
            <i className="bx bx-note"></i>
          </div>
        </div>
        <h5>{title}</h5>
        <div id="btn_flex">
          <button id="add_to_cart_newArrival">More Details</button>
        </div>
      </div>
    </div>
  );
}
