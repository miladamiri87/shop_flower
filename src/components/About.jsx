import React from 'react'
import Footer from "./Footer"
import img_feater01 from "../assets/ABOUT/icons/services-1.png.webp"
import img_feater02 from "../assets/ABOUT/icons/services-2.png.webp"
import img_feater03 from "../assets/ABOUT/icons/services-3.png.webp"
import Card_team from './Card_team'

export default function About({ teamMember }) {


  return (
    <div>
      <div id='container_banner_about'>
        <h2>About</h2>
      </div>
      <div id='container_content_about'>
        <div id='left_content_about'>
          <p style={{ color: "#f45db4" }}>ABOUT US</p>
          <h2 style={{ fontSize: "3rem" }}>We provide all kinds of fresh flower services</h2>
        </div>
        <div id='right_content_about'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, qui pariatur veorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, qui pariatur velorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, qui pariatur velorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, qui pariatur velorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, qui pariatur velorem ipsum dolor sit amet consectetur adipisicing elit. Illo eos, qui pariatur vellit possimus minima magnam fuga ea dicta, culpa at eum odit ullam! Rerum repellendus ea quo iste eaque.</p>
        </div>

      </div>

      <div id='container_servises_about'>
        <p style={{ color: "#f45db4" }}>Our services</p>
        <h2>Florist’s services</h2>
        <div id='cartes_features_container_servises_about'>
          <div id='cart_feature_container_servises_about'>
            <img id='cart_icon' src={img_feater02} alt="" />
            <p style={{ fontSize: "2rem" }}>Custom orders</p>
            <p>Flower helps you perfectly express how important your significant.</p>
          </div>


          <div id='cart_feature_container_servises_about'>
            <img id='cart_icon' src={img_feater03} alt="" />
            <p style={{ fontSize: "2rem" }}>Event decoration</p>
            <p>Flower helps you perfectly express how important your significant.</p>
          </div>

          <div id='cart_feature_container_servises_about'>
            <img id='cart_icon' src={img_feater01} alt="" />
            <p style={{ fontSize: "2rem" }}>Green landscape</p>
            <p>Flower helps you perfectly express how important your significant.</p>
          </div>
        </div>

      </div>

      <div id='container_our_team'>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div style={{ textAlign: "left" }}>
            <p style={{ color: "#f45db4" }}>OUR TEAM MEMBER </p>
            <h2>Flower Experts</h2>
          </div>
          <button id='met_our_member'> MEET OUR MEMBER </button></div>
        <div id='container_cardes_team_member_about'>
        {
          teamMember.map((ct)=>(

            <Card_team member = {ct} key={ct.id}/>
          ))
        }
        </div>

      </div>

      <Footer />
    </div>
  )
}
