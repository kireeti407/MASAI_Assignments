import { useEffect } from "react"

const Products = () => {
    const[products,setProducts] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(json=>setProducts(json))
        .catch(err=>console.log(err))
    }
    ,[])
    return (
        <div>
            <h1>Products Page</h1>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"20px",justifyContent:"center",alignItems:"center"}}>
                {products.map(product => (
                    <div key={product.id} style={{width:"250px",height:"400px",border:"1px solid black",padding:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"  }}>
                        <Link to={`/products/${product.id}`}>View Details</Link>
                        <img src={product.image} alt="" />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}