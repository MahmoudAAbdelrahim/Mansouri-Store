import React, {useContext} from 'react';
import { ProductContext } from './ProductContext';
import { FaCartPlus } from "react-icons/fa";
import '../src/App.css';
import Button from 'react-bootstrap/Button';


const ProuductDetils = () => {
    const {SelectProduct, addToCart}=useContext(ProductContext)
    const handleaddtocart =(products)=>{
        addToCart(products);
      }
if(!SelectProduct){
    return <div>Loading...</div>
}

return(
    <div className='product'>
        <h2>{SelectProduct.title}</h2>
        <div className='imgp'>  
              <p>{SelectProduct.description}</p>
        <img src={SelectProduct.image} width={400} height={500} alt={SelectProduct.title} />
    
        </div>
        <div className='btnpr'>
        <p className='i'>Price:{SelectProduct.price}</p>
        <Button variant="outline-dark"  onClick={()=>handleaddtocart(SelectProduct)}>addToCart 
        <FaCartPlus  size="30px" />        </Button>
    </div></div>
);
}

export default ProuductDetils