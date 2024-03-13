import React from 'react'
import './home.scss'
import fon from './image/images.jpg'
import image from './image/image1.png'
import image1 from './image/product-1.jpg'
import image2 from './image/product-2.jpg'
import image3 from './image/product-3.jpg'
import Menu12 from './menu/menu12'

import App from './slaider/slaider'


const Home = () => {
  return (
    <div className="Home">
      <div
        className="heder-content"
        style={{
          backgroundImage: `url(${fon})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
      ></div>
      <div className="content"> 
    <img src={image} alt="i" />
       <div>
       <h1>About Us</h1>
        <p>
          Pesto is a family owned and operated Italian Restaurant <b />
          offering a combination of fresh ingredients and authentic Italian
          cooking.
        </p>
        <p>
          We will make sure you are served the most authentic and fresh Italian
          dishes, while offering the best customer service. Our kitchen is
          committed to providing our guests with the best Italian Cuisine.
        </p>
       </div>
      </div>
      <div className="offerc">
        <div className="text">
          <h1>Featured Offers</h1>
          <p>
            We offer a great variety of the best Italian dishes to our visitors
            and guests. Below are some of our most popular main dishes and
            desserts.
          </p>
        </div>
        <div className="gereli">
         <div>
            <img src={image1} className='ger' alt="fon" width="80%" />
          </div>
          <div>
            <img src={image2} className='ger' alt="fon" width="80%" />
          </div>
          <div>
            <img src={image3} className='ger' alt="fon" width="80%" />
          </div>
        </div>
      </div>
   <Menu12/>
<App/>
      </div>
  )
}

export default Home