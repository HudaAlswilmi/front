import axios from "axios";
import React, { useState , useEffect} from "react";
//
export default function cart({token}) {
    const [cart, setCart] = useState([]);
  const {id} = useParams()
  //
  useEffect(async () => {
    const res = await axios.get(`https://tuwiq-projecthuda.herokuapp.com/cart/${id}`,{
        headers: { authorization: "Bearer " + token }
    });
  console.log(res.data);
  setCart(res.data)
          }, [token]);
//
          const removeCart=async(id,i)=>{
              const result = await axios.delete(`https://tuwiq-projecthuda.herokuapp.com/cart${id}`,
              { headers: { authorization: "Bearer " + token }})
              const del = [...cart]
              del.splice(i,1)
              setCart(del)
          }
  return (
    <div>
      {cart.map((elem, i) => {
        return (
          <div className="stordiv" key={i}>
            <p>{elem.name}</p>
            <p>{elem.price}</p>
            <img src={elem.img} alr="no img"  alt=""/>
            <button onClick={()=>{removeCart(elem._id,i)}}>remove</button>
          </div>
        );
      })}
    </div>
  );
}
