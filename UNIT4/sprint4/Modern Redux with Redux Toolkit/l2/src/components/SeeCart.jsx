import { useDispatch } from "react-redux";
import { REMOVE_ITEM } from "../features/cartSlice";

export default function SeeCart({cart}){
    const dispatch=useDispatch()
    return(
        <>
            <h5>Total price:{cart.total}</h5>
            {cart.items.map((e)=>(
                <div style={{marginBottom:"40px"}} key={e.id}> 
                    <img src={e.image} alt="" style={{width:"100px"}}/>
                    <p>{e.title}</p>
                    <p>{e.price}</p>
                    <button onClick={()=>{dispatch(REMOVE_ITEM(e.id))}}>Remove Cart</button>
                </div>
            ))}
        </>
    )

}