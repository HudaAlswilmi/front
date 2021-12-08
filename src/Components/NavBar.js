import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

import "./nav.css";
//////////////
export default function NavBar({ token, setToken }) {
  // const history=useHistory()
  return (
    <div>
      {token ? (
        <ul>
          <li>
            <Link to="/cart">
              <BsFillCartFill />
            </Link>
          </li>
          <li>
            <Link to="/Store">Store</Link>
          </li>
          <li>
            <Link to="/parv">Perfume</Link>
          </li>
          <li>
            <Link
              onClick={() => {
                localStorage.clear();  
              }}
              to="/logIn"
            >
              log out
            </Link>
            {/* <button onClick={()=>{setToken("") 
          history.push("/logIn") }}>log out</button> */}
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/logIn">logIn</Link>
          </li>
          <li>
            <Link to="/SinUp">SinUp</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
