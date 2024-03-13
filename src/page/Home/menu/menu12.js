import { useState } from "react";
import "./menu.scss";
import { mains } from "./../face/min";
import { desert } from "./../face/deserts";
import { drink } from "./../face/drincs";

const Menu12 = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div>
      <div className="heder">
        <h5>Our Restaurant Menu</h5>
        <div className="tab-section">
          <div className="tab-heder">
            <ul>
              <li className="tab" onClick={() => updateToggle(1)}>
                mains
              </li>
              <li className="tab" onClick={() => updateToggle(2)}>
                desserts
              </li>
              <li className="tab" onClick={() => updateToggle(3)}>
                drinks
              </li>
            </ul>
          </div>
          <div className="tab-text">
            <div className={toggle === 1 ? "show-content" : "show"}>
              {mains.map((min) => (
                <div>
                  <p>{min.price}</p>
                  <h1>{min.title}</h1>
                  <p1>{min.text}</p1>
                </div>
              ))}
            </div>

            <div className={toggle === 2 ? "show-content" : "show"}>
              {desert.map((deser) => (
                <div>
                  <p>{deser.price}</p>
                  <h1>{deser.title}</h1>
                  <p1>{deser.text}</p1>
                </div>
              ))}
            </div>
            <div className={toggle === 3 ? "show-content" : "show"}>
              {drink.map((drin) => (
                <div>
                  <p>{drin.price}</p>
                  <h1>{drin.title}</h1>
                  <p1>{drin.text}</p1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu12;
