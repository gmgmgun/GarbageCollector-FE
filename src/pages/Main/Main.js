import React from 'react';
import MainCarousel from '../../components/Carousel/MainCarousel';
import BannerCarousel from '../../components/Carousel/BannerCarousel';
import ProductList from '../ProductList/ProductList';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <BannerCarousel />
      <div className="main-container">
        <div className="main-theme">
          <img className="main-banner" src="/images/banner5.png" alt="피카츄" />
          <div className="main-carousel">
            <MainCarousel />
          </div>
          <div className="item-recommend">
            <p className="rec-title">이건 어때요?</p>
            <ProductList />
            <img
              className="main-banner"
              src="/images/banner4.png"
              alt="배너2"
            />
            <MainCarousel />
          </div>
          <div className="item-recommend">
            <p className="rec-title">새로 인사 올립니다!</p>
            <ProductList />
            <div className="rec-product-wrap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
