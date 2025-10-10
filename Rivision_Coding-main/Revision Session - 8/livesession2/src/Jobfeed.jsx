import { useEffect, useState } from "react";


export default function Jobfeed(){
    let [items,setItems]=useState([])
    useEffect(()=>{
        async function fetchdata(){
            let res=await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            let data= await res.json()
            let d2=data.map(async(e)=>{
                let res=await fetch(`https://hacker-news.firebaseio.com/v0/item/${e}.json`)
                let d=await res.json()
                // setitems((prev)=>[...prev,d])
                return d
            })
            d2= await Promise.all(d2)
            setItems(d2)
        }
        fetchdata()
    })
    return(
        <>
            <div>
                {items.map((e)=>(
                    <div>
                        <p>{e.by}</p>
                        <p>{e.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}