import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png.webp";
import { getAllUsers } from "../services/contactService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login_slice } from "../Store";

export default function LogIn() {
  const [userNameInput, setUserNameInput] = useState("");
  const [userPassInput, setUserPassInput] = useState("");
  const [errorContent, setErrorContent] = useState();

  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //   const getAllUser = async()=>{

  //     return userssData
  //   }
  const findUser_handleLogin = async (e) => {
    e.preventDefault();
    const { data: usersData } = await getAllUsers();
    usersData.map((userData) => {
      if (userData.userName === userNameInput) {
        console.log("ok user name");
        if (userData.password === userPassInput) {
          console.log("ok pass");
          dispatch(login_slice({ username_slice: userNameInput }));

          navigate("/");
        }
      }else{
        return (
            setValid(true),
            setErrorContent("User Neme Or Password is not Valid ")
        )
      }
    });
  };
  return (
    <div>
        <div
        id="err_container"
        style={valid ? { display: "block" } : { display: "none" }}
      >
        {valid ? errorContent : null}
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "2rem", marginRight: ".5rem" }}>
          Login in{" "}
        </span>
        <img style={{ height: "1.5rem" }} src={logo} />
      </div>
      <form action="" onSubmit={findUser_handleLogin}>
        <div id="container_form_signin">
          <p>User Name</p>
          <input
            type="text"
            onChange={(event) => {
              setUserNameInput(event.target.value);
            }}
          />
          <p>Password</p>
          <input
            type="text"
            style={{ readOnly: "true" }}
            onChange={(event) => {
              setUserPassInput(event.target.value);
            }}
          />
          <button id="btn_signUp">Sign In</button>
        </div>
      </form>
      <Link id="link_signUp" to="/sign_up">
        Don't have an account? Sign up
      </Link>{" "}
    </div>
  );
}
