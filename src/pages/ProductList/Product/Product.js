import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({ product }) => {
  const [productChange, setProductChange] = useState(false);
  const {
    mainImage,
    subImage,
    productName,
    discountPrice,
    description,
    price,
    goToDetail,
    productId,
  } = product;

  const productPrice = Math.floor(Number(price));
  const discountedPrice = Math.floor(Number(discountPrice));

  const discount = Math.floor(Number((price - discountPrice) / price) * 100);

  return (
    <div className="product-wrap" onClick={() => goToDetail(productId)}>
      <ul
        className="product-ul"
        onMouseOver={() => setProductChange(true)}
        onMouseOut={() => setProductChange(false)}
      >
        <li className="product-box">
          <Link key={productId} to={`/products/${productId}`}>
            <img
              className="product-pic"
              src={productChange ? subImage : mainImage}
              alt={description}
            />
            <div className="product-info">
              <span className="product-discount-badge">
                <i>{discount} % SALE</i>
              </span>
              <p className="product-name">{productName}</p>
              <p className="product-price">
                <del>{productPrice}원</del>
                {discountedPrice}원
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
