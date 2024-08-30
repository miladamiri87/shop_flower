import React from "react";
import { Link } from "react-router-dom";
import { createUser, getAllUsers } from "../services/contactService";

import logo from "../assets/logo.png.webp";

export default function SignUp({
  user,
  createUserForm,
  setUserInfo,
  error,
  errorContent,
}) {
  return (
    <div>
      <div
        id="err_container"
        style={error ? { display: "block" } : { display: "none" }}
      >
        {error ? errorContent : null}
      </div>
      <form onSubmit={createUserForm}>
        <div
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "2rem", marginRight: ".5rem" }}>
            Sign Up{" "}
          </span>
          <img style={{ height: "1.5rem" }} src={logo} alt="logo" />
        </div>

        <div id="container_form_signin">
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                textAlign: "start",
                width: "45%",
                display: "flex",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <p style={{ margin: "0" }}>Full Name</p>
              <input
                name="fullName"
                onChange={setUserInfo}
                value={user.fullName}
                required={true}
                type="text"
                style={{ padding: "0 2rem" }}

              />
            </div>
            <div style={{ textAlign: "start", width: "45%" }}>
              <p style={{ margin: "0", textAlign: "start" }}>User name</p>
              <input
                name="userName"
                onChange={setUserInfo}
                value={user.userName}
                required={true}
                type="text"
                style={{ padding: "0 2rem" }}

              />
            </div>
          </div>
          <p style={{ margin: "0", textAlign: "start" }}>Mobile</p>
          <input
            name="mobile"
            onChange={setUserInfo}
            value={user.mobile}
            required={true}
            type="text"
            style={{ padding: "0 2rem" }}

          />
          <p style={{ margin: "0", textAlign: "start" }}>Password</p>
          <input
            name="password"
            onChange={setUserInfo}
            value={user.password}
            required={true}
            type="text"
            placeholder="6+characters"
            style={{ readOnly: "true", padding: "0 2rem" }}
          />
          <p style={{ margin: "0", textAlign: "start" }}>Confirm Password</p>
          <input
            name="confirmPassword"
            onChange={setUserInfo}
            value={user.confirmPassword}
            required={true}
            type="text"
            placeholder="6+characters"
            style={{ readOnly: "true", padding: "0 2rem" }}
          />
          <input
            type="submit"
            id="btn_signUp"
            disabled={error ? true : false}
            style={
              error
                ? { backgroundColor: "lightGray" }
                : { backgroundColor: "#f45db4" }
            }
          />
        </div>
      </form>
      <Link id="link_signUp" to="/login">
        If you Have account ? Sign in
      </Link>{" "}
    </div>
  );
}
