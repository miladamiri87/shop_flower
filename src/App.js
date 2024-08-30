import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Detail_product from "./components/Detail_product";
import { useEffect, useState } from "react";
import axios from "axios";
import { createUser, getAllUsers } from "./services/contactService";
import { useLocation } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { store } from "./Store";
import { Provider, useDispatch } from "react-redux";
import { login_slice } from "./Store";

export default function App() {
  const [Loading, setLoading] = useState(true);
  const [banner_content, setBanner_content] = useState([]);
  const [card_features, setCardFeatures] = useState([]);
  const [new_arrival_card, setNewArrivalCard] = useState([]);
  const [teamMember, setTeamMember] = useState([]);
  const [forceRender, setForceRender] = useState(false);
  const [error, setError] = useState(false);
  const [errorContent, setErrorContent] = useState();

  const [getUser, setUser] = useState({
    fullName: "",
    userName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //create user
  const createUserForm = async (event) => {
    event.preventDefault();
    try {
      const { status } = await createUser(getUser);
      if (status === 201) {
        setUser({});
        setForceRender(!forceRender);
        console.log(getUser)

        dispatch(login_slice({ username_slice: getUser.userName }));

        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setUserInfo = (event) => {
    setUser({
      ...getUser,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "userName") {
      handlle_duplicate_user(event.target.value);
    }
  };

  const handlle_duplicate_user = async (usernaemeInput) => {
    const { data: usersData } = await getAllUsers();
    usersData.map((user) => {
      if (user.userName === usernaemeInput) {
        setError(true);
        setErrorContent("User Name Must Be Uniqe");
      } else {
        return setError(false);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: bannerData } = await axios.get(
          "http://localhost:9000/banner_top"
        );
        const { data: cardFeatures } = await axios.get(
          "http://localhost:9000/card_features"
        );
        const { data: newArrivalCardes } = await axios.get(
          "http://localhost:9000/new_arrival_card"
        );
        const { data: teamMember } = await axios.get(
          "http://localhost:9000/groups"
        );

        setBanner_content(bannerData);
        setCardFeatures(cardFeatures);
        setNewArrivalCard(newArrivalCardes);
        setTeamMember(teamMember);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: bannerData } = await axios.get(
          "http://localhost:9000/banner_top"
        );
        const { data: cardFeatures } = await axios.get(
          "http://localhost:9000/card_features"
        );
        const { data: newArrivalCardes } = await axios.get(
          "http://localhost:9000/new_arrival_card"
        );
        const { data: teamMember } = await axios.get(
          "http://localhost:9000/groups"
        );

        setBanner_content(bannerData);
        setCardFeatures(cardFeatures);
        setNewArrivalCard(newArrivalCardes);
        setTeamMember(teamMember);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [setForceRender]);

  return (
    <>
        <Navbar location={location} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                banner_content={banner_content}
                Loading={Loading}
                card_features={card_features}
                new_arrival_card={new_arrival_card}
              />
            }
          ></Route>
          <Route
            path="/shop"
            element={
              <Shop
                Loading={Loading}
                card_features={card_features}
                new_arrival_card={new_arrival_card}
              />
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop/:id_product" element={<Detail_product />}></Route>
          <Route
            path="/about"
            element={<About teamMember={teamMember} />}
          ></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route
            path="/sign_up"
            element={
              <SignUp
                user={getUser}
                createUserForm={createUserForm}
                setUserInfo={setUserInfo}
                error={error}
                errorContent={errorContent}
              />
            }
          ></Route>
        </Routes>
    </>
  );
}
