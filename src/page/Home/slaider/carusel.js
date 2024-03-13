import { useState, useEffect, Children, cloneElement } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import  "./carusel.scss";


const PAGE_WIDTH = 950;

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offsets, setOffsets] = useState(0);

  const toggleLiftarrovClick = () => {
    setOffsets((currentOffset) => {
      const newOffsets = currentOffset + PAGE_WIDTH;
      return Math.min(newOffsets, 0);
    });
  };

  const toggleRightarrovClick = () => {
    setOffsets((currentOffset) => {
      const newOffsets = currentOffset - PAGE_WIDTH;

      const maxOffsets = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffsets, maxOffsets);
    });
  };
  useEffect(() => {
    setPages(
      Children.map(children, (cild) => {
        return cloneElement(cild, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);
  return (
    <div className="main-content">
      <FaChevronLeft className="arrov" onClick={toggleLiftarrovClick} />
      <div className="window">
        <div
          className="all-item-container"
          style={{
            transform: `translatex(${offsets}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <FaChevronRight className="arrov" onClick={toggleRightarrovClick} />
    </div>
  );
};
