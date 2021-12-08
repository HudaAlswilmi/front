import React, { useState,useEffect } from "react";
import Store from "./Components/Store";
import LogIn from "./Components/LogIn";
import SinUp from "./Components/SinUp";
import NavBar from "./Components/NavBar";
import Parv from "./Components/Parv";
import { Route } from "react-router-dom";

//////
export default function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    if(!token && localStorage.getItem("token"))
    setToken(JSON.parse(localStorage.getItem("token")))
  }, []);


  return (
    <div className="store">
      <NavBar token={token} setToken={setToken} />
      <Route
        exact
        path="/Store"
        render={() => {
          return <Store token={token} />;
        }}
      />
      <Route
        exact
        path="/LogIn"
        render={() => {
          return <LogIn setToken={setToken} />;
        }}
      />
      <Route exact path="/SinUp" component={SinUp} />
      <Route
        exact
        path="/product/:id"
        render={() => {
          return <Parv token={token} />;
        }}
      />

    </div>
  );
}
