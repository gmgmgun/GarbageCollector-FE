import React, { useEffect, useState } from 'react';
import './MainCarousel.scss';
import Product from '../../pages/ProductList/Product/Product';

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideList, setSlideList] = useState([]);
  useEffect(() => {
    fetch('data/main.json')
      .then(response => response.json())
      .then(data => {
        setSlideList(data);
      });
  }, []);

  const onClickBtnArrow = e => {
    e.target.className === 'previous'
      ? setCurrentIndex(curIndex => (curIndex === 0 ? curIndex : curIndex - 1))
      : setCurrentIndex(curIndex =>
          curIndex === slideList.length - 3 ? curIndex : curIndex + 1
        );
  };

  return (
    <div className="main-carousel">
      <button className="previous-button" onClick={onClickBtnArrow}>
        <img className="previous" alt="<" src="images/main_arr_prev.png" />
      </button>
      <div
        className="slide-window"
        style={{ width: `${230 * slideList.length - 3}px` }}
      >
        <ul
          className="slide-list"
          style={{
            width: `${230 * slideList.length}px`,
            transform: `translateX(${-230 * currentIndex}px)`,
            transition: `all 1s`,
          }}
        >
          {slideList.map((slide, idx) => (
            <Product key={idx} product={slide} />
          ))}
        </ul>
      </div>
      <button className="next-button" onClick={onClickBtnArrow}>
        <img className="next" alt=">" src="images/main_arr_next.png" />
      </button>
    </div>
  );
};
export default MainCarousel;
