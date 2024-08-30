import React from "react";
import { Link } from "react-router-dom";

export default function Product({ image, title, category, id }) {
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
        <p
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
            border: ".5px solid lightGray",
            justifyContent: "center",
            padding: "1rem 0",
          }}
        >
          {title}
        </p>

        <div id="btn_flex">
          <Link 
          style={{textDecoration:"none", color:'white', padding:".75rem 0" ,width:"100%", backgroundColor:"#f45db4"}}
          to={`/shop/${id}`}> More Details</Link>
        </div>
      </div>
    </div>
  );
}
