import React, {useState, useEffect,useContext} from 'react';
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import '../src/App.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Navedar from './Navedar';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

import  {ProductContext}  from './ProductContext';


const Home = () => {

    const [prodect , setProducts] = useState([]);


    useEffect(() => {
        axios.get('data.json')
          .then((res) => {
            setProducts(res.data.prodect || []);
            console.log(res.data.prodect);
          })
        
      }, []);
    const handleProductClik = (prodect)=>{
      setProducts(prodect)
    }

  return (
    <>

    
    <section>
    <Container>
    <Row>
    <Col>
        <Swiper slidesPerView={3}spaceBetween={30}pagination={{clickable: true,}}modules={[Pagination]}
        className="mySwiper wow fadeInup" data-wow-duration="2s" data-wow-delay="0.5s">
            {prodect.map((prodect)=>(
                        <SwiperSlide key={prodect.id}>

                                <Link to={`/prodect/${prodect.id}`} onClick={() => handleProductClik(prodect)}>
                                <img src={prodect.image}  width={180}/>
                                </Link>
                        </SwiperSlide>

            ))}
        </Swiper>
    </Col>
    </Row>
    </Container>
    </section>
    </>
  )
}

export default Home

