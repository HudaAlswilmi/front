import React, { useState, useEffect } from "react";
import axios from "axios";
import "./store.css";
import { useParams } from "react-router-dom";
export default function Parv({token}) {
    const [store, setstore] = useState(null);
    const {id} = useParams()
    const [input, setInput] = useState('');
    useEffect(async () => {
        const res = await axios.get(`https://tuwiq-projecthuda.herokuapp.com/${id}`,{
            headers: { authorization: "Bearer " + token }
        });
      console.log(res.data);
        setstore(res.data);
              }, []);
      const changeComment=(e)=>{
        setInput(e.target.value)
      }
      const addComment=async()=>{
          try {
            const result = await axios.post(
                `https://tuwiq-projecthuda.herokuapp.com/comment/${id}`,
                {
                    comment:input
                },
                { headers: { authorization: "Bearer " + token } }
              );
              setstore({...store , comment: result.data.comment})
          } catch (err) {
              console.log(err);
          }
       
      }
    const deletecomment =async (comment)=>{
        try {
            const result = await axios.put(`https://tuwiq-projecthuda.herokuapp.com/comment/${id}`,
        {comment:comment},
        {headers: { authorization: "Bearer " + token }})
        console.log(result.data);
            setstore({...store , comment: result.data.comment})
        } catch (err) {
            console.log(err.res.data,"error");
        }
    }

    return (
        <div>
              {store? <div>          
                  <p>{store.name}</p>
            <p>{store.price}</p>
            <img src={store.img} alr="no img"  alt=""/>
            <input onChange={(e)=>{changeComment(e)}} type="text" />
            <button onClick={()=>{addComment()}}>add comment</button>
            <div>
            <h1>{store.comment.map((elm,i)=>{
                return <div key={i}>
                    <p> {elm.userName}</p>
                    <p>{elm.comment}</p>
                    <button onClick={()=>{deletecomment(elm.comment)}}>delet </button>
              </div>
                
            })}</h1>
            </div>
            </div>
            :""}

        </div>
    )
}
