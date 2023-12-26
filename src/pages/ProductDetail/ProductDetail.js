import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../config';
import ProductDetailModal from './ProductDetailModal';
import ProductOrderModal from './ProductOrderModal';
import ProductDes from './ProductDes';
import ProductInfoTab from './ProductInfoTab';
import ProductReview from './ProductReview';
import ProductBasicInfo from './ProductBasicInfo';
import ProductRec from './ProductRec';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [optionOpen, setOptionOpen] = useState(false);
  const [optionDetail, setOptionDetail] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [productDetailPic, setProductDetailPic] = useState([]);
  const [optionPriceList, setOptionPriceList] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [mainImage, setMainImage] = useState([]);
  const [productText, setProductText] = useState([]);
  const { price, discountPrice, productName, productOptions } = optionDetail;
  const [optionContentList, setOptionContentList] = useState([]);
  const [optionContent, setOptionContent] = useState({
    productOptionId: 0,
    quantity: 0,
  });
  const [isSend, setIsSend] = useState(false);
  const token = localStorage.getItem('token');

  const discount = Math.floor(Number((price - discountPrice) / price) * 100);
  const params = useParams();
  const userId = params.id;
  const addOptionPrice = (id, amount) => {
    setOptionPriceList({ ...optionPriceList, [id]: amount });
  };
  const getOptionContent = (id, quantity) => {
    setOptionContent({ productOptionId: id, quantity: quantity });
  };
  useEffect(() => {
    sumOptionPrice();
  }, [addOptionPrice]);
  useEffect(() => {
    setOptionContentList(optionContent);
  }, [optionContent]);
  useEffect(() => {
    fetch(`${BASE_URL}/carts`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify([
        {
          productOptionId: optionContent.productOptionId,
          quantity: optionContent.quantity,
        },
      ]),
    })
      .then(response => response.json())
      .then(data => {});
  }, [isSend]);

  const sumOptionPrice = () => {
    setTotalPrice(
      Object.values(optionPriceList).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  };
  const showOption = () => {
    setOptionOpen(!optionOpen);
  };
  const onSelect = option => {
    setSelectedOptions(prevState => {
      const set = new Set([...prevState, option]);
      return [...set];
    });
    setOptionOpen(false);
  };
  const removeOrder = id => {
    const updatedSelectedOptions = selectedOptions.filter(
      option => option.productOptionId !== id
    );
    setSelectedOptions(updatedSelectedOptions);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/products/${userId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(({ data }) => {
        setOptionDetail(data[0]);
        setIsLoading(false);
        setProductDetailPic(data[0].detailImages);
        setMainImage(data[0].mainImage);
        setProductText(data[0].description);
      });
  }, [userId]);
  const sendToCart = () => {
    setIsSend(!isSend);
    setOptionContentList(optionContent);
    alert('상품이 장바구니에 담겼습니다');
  };
  const convertAmount = amount => {
    return Math.floor(amount).toLocaleString();
  };
  if (isLoading) return null;
  return (
    <div className="detail-container">
      <div className="detail-wrap">
        <div className="detail-header">
          <header className="detail-product-info">
            <span className="product-discount-badge">{discount} % SALE</span>
            <h3 className="product-name">{productName}</h3>
            <p className="product-price">
              <del>{convertAmount(price)}원</del>
              {convertAmount(discountPrice)}원
            </p>
          </header>
          <div className="detail-images">
            <img className="detail-product-img" src={mainImage} alt="여름" />
          </div>
          <div className="detail-for-order">
            {SHIPPING_GUIDE.map(shipping => {
              return (
                <dl key={shipping.id} className="shipping-guide">
                  <dt>{shipping.topic}</dt>
                  <dd>
                    {shipping.text}
                    <br />
                    {shipping.text2}
                  </dd>
                </dl>
              );
            })}
            <div className="buy-list-box">
              <div className="buy-list-option">
                <button className="option-btn" onClick={showOption}>
                  옵션
                </button>
                <div className="option-box">
                  {optionOpen &&
                    productOptions.map(option => {
                      return (
                        <ProductDetailModal
                          key={option.productOptionId}
                          option={option}
                          onSelect={onSelect}
                          showOption={showOption}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
            <ul className="buy-list-box">
              {selectedOptions.map(option => {
                return (
                  <ProductOrderModal
                    key={option.productOptionId}
                    option={option}
                    removeOrder={removeOrder}
                    selectedOptions={selectedOptions}
                    price={price}
                    convertAmount={convertAmount}
                    discountPrice={discountPrice}
                    addOptionPrice={addOptionPrice}
                    setOptionPriceList={setOptionPriceList}
                    getOptionContent={getOptionContent}
                  />
                );
              })}
            </ul>
            <div className="total-price-box">
              <dl className="total-price">
                <dt>총 금액</dt>
                <dd>
                  <span>{totalPrice}원</span>
                </dd>
              </dl>
              <footer className="buy-footer">
                <button onClick={sendToCart} className="list-cart-btn" />
                <button className="list-purchase-btn">바로 구매하기</button>
              </footer>
            </div>
          </div>
        </div>
        <div className="detail-des">
          <div className="detail-tab-wrap">
            <ul className="detail-tab">
              <ProductDes />
            </ul>
          </div>
          <section className="detail-body">
            <ul>
              <p className="detail-description">{productText}</p>
              {productDetailPic.map(info => {
                return <ProductInfoTab key={info.id} info={info} />;
              })}
            </ul>
            <ProductBasicInfo />
            <ProductReview />
          </section>
        </div>
      </div>
      <div>
        <ProductRec />
      </div>
    </div>
  );
};
export default ProductDetail;

const SHIPPING_GUIDE = [
  {
    id: 1,
    topic: '배송정보',
    text: '3,000원 (30,000원 이상 구매 시 무료)',
    text2: '오후 1시 당일배송마감',
  },
];
