import { createSelector } from "@reduxjs/toolkit"
import {useDispatch, useSelector} from "react-redux"
import { fetchProducts } from "../features/productSlice"
import { useEffect, useState } from "react"
import { ADD_ITEM } from "../features/cartSlice"
import SeeCart from "./SeeCart"



export default function ProductItem(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    const {cart,item}=useSelector((state)=>state)
    const [isAvail,setAvaile]=useState(false)
    if(item.loading) return <h1>loading...</h1>
    if(item.error) return <h1>{item.error}</h1>
    return(
        <>

            {!isAvail?<button onClick={()=>setAvaile(true)}>View cart:{cart.items.length}</button>:<button onClick={()=>{setAvaile(false)}}>back</button>}
            
            {(!isAvail)?
                <div >
                    {item.data && item.data.map((e,i)=>(
                        <div style={{marginBottom:"40px"}} key={i}>
                            <img src={e.image} alt="" style={{width:"100px"}}/>
                            <p>{e.title}</p>
                            <p>{e.price}</p>
                            <button onClick={()=>{dispatch(ADD_ITEM(e))}}>Add Cart</button>
                        </div>
                    ))}
                </div>:<SeeCart cart={cart}/>
                
            }

        </>
    )
}