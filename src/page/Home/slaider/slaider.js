import './saidebar.scss';
import { Carousel } from "./carusel";

export default function App() {
  return (
    <>
    <div className='carusel-heder'>
    <div className='carousel-header'>
   <h1>Recent News</h1>
</div>
    <Carousel>
    <div className='slaider-content'>
        <div className='slaider-item'>
          <h2>Jul 02,2019</h2>
          <h3>Genuine italian Pizza:<br/> Authenticity and Choice</h3>
          <p>As an Italian restaurant, we are very proud of our
             delicious authentic pizzas. Our three most popular 
             choices are the Rustica, the Toscana and...</p>
        </div>
        <div className='slaider-item'>
          <h2>Jul 12,2019</h2>
          <h3>Italian American Spaghetti: <br/> Top 5 Difference</h3>
          <p>Commonly, when we hear there is spaghetti for dinner we will be expecting a red tomato sauce with meat and seasonings poured over long...</p>
        </div>
        <div className='slaider-item'>
          <h2>AUG 12,20</h2>
          <h3>The Delicious History <br/> of Lasagna and Its Orgins</h3>
          <p>Lasagna, could there be a more perfect dish? It’s comfort food on steroids. Layers of cheese generously piled on top of decadent amounts...</p>
        </div>
      </div>
      <div className='slaider-content'>
        <div className='slaider-item'>
          <h2>AUG  15,2019</h2>
          <h3>Making Gelato Like a True Italian: Trips From Our Chef </h3>
          <p>Most would agree that gelato is the most delicious frozen dessert; the perfect ending to any meal. With origins in Sicily, gelato has been made famous...</p>
        </div>
        <div className='slaider-item'>
          <h2>sep 15,19</h2>
          <h3>Italian Ingredient Yuo Can Easily Grow at Home</h3>
          <p>Imagine preparing an Italian dinner but having to stop cooking because you forget an ingredient and must run to the store. How nice would it be to go.</p>
        </div>
        <div className='slaider-item'>
          <h2> sep 28,2019</h2>
          <h3>Our Brief Guide to <br/> Pairing Wine and <br/> Pasta the Right Way</h3>
          <p>To Italians, pasta is the food of the gods, and there is nothing better to go with a good pasta than a perfect wine. To the uninitiated, finding the right...</p>
        </div>
      </div>
      <div className='slaider-content'>
        <div className='slaider-item'>
          <h2>oct 05,2019</h2>
          <h3>Top 10 Famous Spring Dishes in <br/>  Italian Resturnts</h3>
          <p>Spring is the time for growth and rebirth. One can see this throughout the countrysides of Italy with blooming flowers and budding trees. Springtime is...</p>
        </div>
        <div className='slaider-item'>
          <h2>oct 17, 2019</h2>
          <h3>What Makes Some Seasoning  <br/>Truly Italian?</h3>
          <p>When thinking of Italian cuisine, dishes like pasta enveloped in hearty sauces come to mind. Certain flavors seem to be found across the different...</p>
        </div>
        <div className='slaider-item'>
          <h2>nov 12,20</h2>
          <h3>Types of Italian Sausage and Why They Are Different</h3>
          <p>As an Italian restaurant, we are very proud of our
             delicious authentic pizzas. Our three most popular 
             choices are the Rustica, the Toscana and...</p>
        </div>
      </div>
     
      </Carousel>
    </div>
    </>
  );
}
