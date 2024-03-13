import React from 'react'
import './about.scss'
import imagefon from "./image/about.jpg";
import img from './image/about.jpg';
import image12 from "./image/parallax-img-4.jpg";
import client1 from "./image/clients-1.png";
import client2 from "./image/clients-2.png"
import client3 from "./image/clients-3.png"
import client4 from "./image/clients-4.png"
import Slaid from './about slaider/carusel2';
import Food from './Food/Food';

const About = () => {
  return (
    <div className="content1">
            <div className="fon" style={{
                backgroundImage: `url(${imagefon})`,
            }} >About us</div>
        
         <div className="section">
        <img src={img} width="40%"/>
        <div>
        <h1>About Our Restaurant</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
         accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
         quae ab illo inventore veritatis et quasi architecto beatae vitae 
         dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
         aspernatur aut odit aut fugit, sed quia consequuntur
        </p>
        </div>
         </div>
         <div className="fon2" 
          style={{
            backgroundImage: `url(${image12})`,  
            backgroundColor: `rgba(0, 0, 0, 4.7)`,
         }} >
      
       
        </div>
       <Food/>
        <Slaid/>
        <div className='our'>
          <h1>Our Awards</h1>
          <div className='content-our'>
           <img src={client1} className='our' alt='d'/>
           <img src={client2} className='our' alt='d'/>
           <img src={client3} className='our' alt='d'/>
           <img src={client4} className='our' alt='d'/>
          </div>
        </div>
        </div>

    )
  
}

export default About