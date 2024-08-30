import React from "react";
import { useNavigate,Link,useParams } from "react-router-dom";

export default function New_arrival_card({ title, cost, image , id}) {
  const navigation = useNavigate()

  return (
    <div id="flex_box">
      <div id="container_new_arrival_margin">
        <div id="container_new_arrival_card">
          <img id="img_style" src={image} alt="" />

          <div id="container_icon_new_arrival_card">
            <i className="bx bx-search"></i>
            <i className="bx bxs-donate-heart"></i>
            <i className="bx bx-note"></i>
          </div>
        </div>
        <h5>{title}</h5>
        <p id="cost">{cost}</p>
        <div id="btn_flex">
          <Link id="add_to_cart_newArrival" to ={`/shop/${id}`}>More Details</Link>
        </div>
      </div>
    </div>
  );
}
