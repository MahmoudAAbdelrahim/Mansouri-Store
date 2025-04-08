import React, { useContext } from 'react';
import { BrowserRouter, Routes, Router, Link} from 'react-router-dom';
import  {ProductContext}  from './ProductContext';
import Button from 'react-bootstrap/Button';
import { FaCartPlus } from "react-icons/fa";
import '../src/App.css';
  const ProductList = () => {
  const { products, setSelectProduct, addToCart } = useContext(ProductContext);
    const handleProductClik = (products)=>{
      setSelectProduct(products)
    }
    const handleaddtocart =(products)=>{
      addToCart(products);
    }
  return (
  <>
  <h1>productlist</h1>
  <div className="productlist">
    {products.map((products) => (
      <div key={products.id} className='producthome'>
        <Link to={`/products/${products.id}`} onClick={() => handleProductClik(products)}>
        <img src={products.image}  width={180}/>
        </Link>
        <div className="productname">
        {products.title}
        <div className='btnpr'>
      <p> price:{ products.price}</p>
      <Button variant="outline-dark"  onClick={()=>handleaddtocart(products)}>Cart 
      <FaCartPlus  size="12px" />        </Button>      </div>
      </div>
      </div>
    )
    )}
  </div>
  </>
  )
  }

export default ProductList
