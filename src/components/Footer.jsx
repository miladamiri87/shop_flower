import React from "react";
import logo from "../assets/logo.png.webp";

export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5rem",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderBottom: "1px solid lightGray",
            paddingBottom: "1rem",
          }}
        >
          <img src={logo} />
          <p style={{ margin: "0" }}>
            The floristry business has a significant market in the corporate and
            social event world, as flowers
          </p>
          <div
            style={{
              fontSize: "2rem",
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
            }}
          >
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-linkedin-square"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-instagram"></i>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "20%", padding: "2rem" }}>
            <h2>Company</h2>
            <p>About Us</p>
            <p>Servcies</p>
            <p>Contact us</p>
          </div>
          <div style={{ width: "20%", padding: "2rem" }}>
            <h2>Account</h2>
            <p>My cart</p>
            <p>Wisslist</p>
            <p>Login/Register</p>
          </div>
          <div style={{ width: "30%", padding: "2rem" }}>
            <h2>Newletter</h2>
            <p>
              Subcribe to our newsletter to get more free tips. No Spam,
              Promise.
            </p>
            <input
              type="text"
              placeholder="Email..."
              style={{
                border: "none",
                borderBottom: "1px solid lightGray",
                padding: "0.5rem 2rem",
              }}
            />{" "}
            <span style={{cursor:"pointer"}}>Subscribe</span>
          </div>
          <div style={{ width: "25%", padding: "2rem" }}>
            <h2>Get in touch</h2>
            <p>
              69 North Cleveland Street, Memphis,USA. (123) 8111 9210 - (012)
              1111 6868 Florisr@supportthem.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
