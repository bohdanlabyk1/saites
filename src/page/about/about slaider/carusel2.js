
import { Carousel } from "./../../Home/slaider/carusel";
import "./carusel.scss";
import slaidimg from "./../image/parallax-img-4.jpg"
import user1 from "./../image/user1.jpg"
import user2 from "./../image/user-2.jpg"
import user3 from "./../image/user-3.jpg"
import user4 from "./../image/user-4.jpg"

export default function Slaid() {
  return (
   <>
    <div className="slaid" style={{
      backgroundImage: `url(${slaidimg})`,}}>
     <div className="slais">
     <div className="item-heder">
        <p>Tesmonial</p>
      </div>
      <Carousel className="car">
      <div className="item">
    <p>However, knowledge means very little unless you have the wisdom to use it!
     With more than 20 years in my career I’ve seen many things and I have been shown good ways and bad ways.
    </p>
       </div>
       <div className="item">
       <p>However, knowledge means very little unless you have the wisdom to use it!
       With more than 2 years in my career I’ve seen many things and I have been shown good ways and bad ways.
      </p>
       </div>
       <div className="item">
       <p>However, knowledge means very little unless you have the wisdom to use it!
        With more than 0 years in my career I’ve seen many things and I have been shown good ways and bad ways.
        </p>
       </div>
      </Carousel>
      <div className="icon" >
       <img src={user1} className="user" alt="gf"/>
       <img src={user2} className="user" alt="gf"/>
       <img src={user3} className="user" alt="gf"/>
       <img src={user4} className="user" alt="gf"/>
      </div>
     </div>
     <div class="overlay"></div>
    </div>
     </>
  );
}
