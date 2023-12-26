import React, { useEffect, useState } from 'react';
import './BannerCarousel.scss';

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideList, setSlideList] = useState([]);
  const [action, setAction] = useState(1);
  const [isTransition, setIsTransition] = useState(false);
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    fetch('data/banner.json')
      .then(response => response.json())
      .then(data => {
        setDataFromServer(data);
        setSlideList(data);
        setSlideList(prev => [data[data.length - 1], ...prev, data[0]]);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex(currentIndex + 1), 4000);
    return () => {
      clearInterval(timer);
    };
  });

  useEffect(() => {
    setTimeout(() => {
      setIsTransition(false);
    }, 1000);

    currentIndex === 0 &&
      setTimeout(() => {
        setAction(0);
        setCurrentIndex(slideList.length - 2);
        setTimeout(() => {
          setAction(1);
        }, 20);
      }, 1000);
    currentIndex === slideList.length - 1 &&
      setTimeout(() => {
        setAction(0);
        setCurrentIndex(1);
        setTimeout(() => {
          setAction(1);
        }, 20);
      }, 1000);
    return () => {};
  }, [currentIndex, slideList.length]);

  const onClickBtnIndex = e => {
    setCurrentIndex(Number(e.target.innerText) + 1);
  };

  const onClickBtnArrow = e => {
    if (isTransition) return;
    setAction(1);
    e.target.className === 'previous'
      ? setCurrentIndex(curIndex => {
          setIsTransition(true);
          return curIndex - 1;
        })
      : setCurrentIndex(curIndex => {
          setIsTransition(true);
          return curIndex + 1;
        });
  };

  return (
    <div className="banner-carousel">
      <ul
        className="slide-list"
        style={{
          width: `${100 * slideList.length - 1}vw`,
          transform: `translateX(${-100 * currentIndex}vw)`,
          transition: `all ${action}s`,
        }}
      >
        {slideList.map((slide, idx) => (
          <img key={idx} alt={slide.alt} src={slide.src} />
        ))}
      </ul>
      <button className="previous-button" onClick={onClickBtnArrow}>
        <img className="previous" alt="<" src="images/main_arr_prev.png" />
      </button>
      <button className="next-button" onClick={onClickBtnArrow}>
        <img className="next" alt=">" src="images/main_arr_next.png" />
      </button>
      {/* <button className="index-button"> */}
      <div className="index-button-cnt">
        {dataFromServer.map((data, idx) => (
          <button
            onClick={onClickBtnIndex}
            key={data.productId}
            className={currentIndex === data.productId ? 'active' : ''}
          >
            {idx}
          </button>
        ))}
      </div>
      {/* </button> */}
    </div>
  );
};
export default BannerCarousel;
