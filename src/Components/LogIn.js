import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { RiLockPasswordFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
//
import "./login.css";
//
export default function LogIn({ setToken }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };
  const logIn = async () => {
    try {
      const res = await axios.post("https://tuwiq-projecthuda.herokuapp.com/logIn", {
        email,
        pass,
      });
      console.log(res.data);
      setToken(res.data.token);
      history.push("/Store");
      localStorage.setItem("token",JSON.stringify(res.data.token))
    } catch (err) {
      console.log("aa");
    }
  };
  return (
    <div className="loginbox">
      <h1> LOGIN </h1>
      <RiLockPasswordFill className="log" />
      <input
        onChange={(e) => {
          changeEmail(e);
        }}
        type="text"
        placeholder="email"
      />
      <GrUserManager className="log" />
      <input
        onChange={(e) => {
          changePass(e);
        }}
        type="password"
        placeholder="pass"
      />
      <button
        onClick={() => {
          logIn();
        }}
      >
        logIn
      </button>
    </div>
  );
}
