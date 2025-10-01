import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
        .catch(err=>console.log(err))
    }, [])      

    return (
        <div style={{padding:"20px", textAlign:"center",}}>
            <h1>Product Detail Page</h1>
            {product ? (
                <div>
                    <h2 >{product.title}</h2>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ProductDetail
