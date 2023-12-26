import React, { useEffect, useState } from 'react';
import './ProductDetailCarousel.scss';

const ProductDetailCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    fetch('data/productDetail.json')
      .then(response => response.json())
      .then(data => {
        setSlideList(data);
      });
  }, []);

  const onClickBtnIndex = e => {
    setCurrentIndex(Number(e.target.innerText));
  };

  const onClickBtnArrow = e => {
    setCurrentIndex(curIndex => (!curIndex ? 1 : 0));
  };

  return (
    <div className="product-detail-carousel">
      <div className="slide-wrap">
        <button className="previous-button" onClick={onClickBtnArrow}>
          <img className="previous" alt="<" src="images/main_arr_prev.png" />
        </button>
        <div className="slide-window">
          <ul
            className="slide-list"
            style={{
              width: `${500 * slideList.length}px`,
              transform: `translateX(${-500 * currentIndex}px)`,
              transition: `opacity 0.3s`,
            }}
          >
            {slideList.map(slide => (
              <img key={slide.productId} alt={slide.alt} src={slide.src} />
            ))}
          </ul>
        </div>
        <button className="next-button" onClick={onClickBtnArrow}>
          <img className="next" alt=">" src="images/main_arr_next.png" />
        </button>
      </div>
      <button className="index-button" onClick={onClickBtnIndex}>
        {slideList.map((slide, idx) => (
          <span
            key={slide.productId}
            className={currentIndex === idx ? 'active' : ''}
          >
            {idx}
          </span>
        ))}
      </button>
    </div>
  );
};
export default ProductDetailCarousel;
