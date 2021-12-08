import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs"
import axios from "axios";
import "./store.css";
/////////////////////
export default function Store({ token }) {
  const [store, setstore] = useState([]);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState("");
  const [searchArr, setSearchArr] = useState("");
  const history=useHistory()
  useEffect(async () => {
    const res = await axios.get("https://tuwiq-projecthuda.herokuapp.com/store", {
      headers: { authorization: "Bearer " + token },
    });
    setstore(res.data);
  }, []);
  const searchTarget = (e) => {
    setSearchArr(e.target.value);
  };
  const search = () => {
    const search1 = store.filter((elm) => {
      if (elm.name.toLowerCase().includes(searchArr.toLocaleLowerCase())) {
        return elm;
      }
          });
    setstore(search1)
  };

  //
  const addToCart = async (id) => {
    const res = await axios.post(
      `://tuwiq-projecthuda.herokuapp.com/cart/${id}`,{},
      { headers: { authorization: "Bearer " + token } }
    );

  history.push(`/cart/${id}`)
    }


    //
const gotoparv=async(id)=>{
  history.push(`/product/${id}`)
}
  return (
    <div className="div1">
   <input type="text" onChange={(e)=>{searchTarget(e)}} />
      <button onClick={()=>{search()}}>search</button>
      {store.map((elem, i) => {
        return (
          <div   className="stordiv" key={i}>
            <div onClick={()=>{gotoparv(elem._id)}}>
            <p>{elem.name}</p>
            <p>{elem.price}</p>
            <img src={elem.img} alr="no img" alt=""/>
            </div>
            <BsFillCartFill onClick={()=>{addToCart(elem._id)}}/>
          </div>
        );
      })}
   
    </div>
  );
}
