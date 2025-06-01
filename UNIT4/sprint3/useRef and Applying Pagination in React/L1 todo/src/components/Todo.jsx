import { useEffect,useRef,useState } from "react"

export default function Todo(){
    const [item,setItem]=useState({data:null,loading:false,error:null})
    const [page,setPage]=useState(10)
    const pageno=useRef(1)
    async function featchdata(){
        try{
            setItem({...item,loading:true})
            let res=await fetch("https://jsonplaceholder.typicode.com/todos")
            let data=await res.json()
            setItem({...item,...{data:data,loading:false}})
        }
        catch(err){
            setItem({...item,error:"failed to featch"})
        }
        
        
    }
    useEffect(()=>{
        featchdata()
    },[])
    return(
        <>
            {item.loading && <h1>loading...</h1>}
            {item.error && <h1>{item.error}</h1>}
            {item.data && <h1>page no {pageno.current}</h1>}
            {item.data &&
                item.data.slice(page-10,page).map((e)=>(
                    
                    <div key={e.id}>
                        <p>{e.id}--{e.title}</p>
                    </div>
                ))
            }
            <button onClick={()=>{setPage(prev=>prev-10)
                pageno.current-=1
            }} disabled={page==10} >prev</button>
            <button onClick={()=>{setPage(prev=>prev+10)
                pageno.current+=1
            }}>Next</button>
            
        </>
    )
}