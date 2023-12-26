import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../config';
import Product from './Product/Product';
import './ProductList.scss';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`/products/${id}`);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/products`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => setProductList(data.data));
  }, []);

  return (
    <div className="product-page-container">
      <div className="product-list">
        {productList.map(product => (
          <Product
            key={product.productId}
            product={product}
            goToDetail={goToDetail}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

const CATEGORY_MAP = {
  products: {
    id: 1,
    title: '전체',
    subTitle: '총 오조오억개 좀 안됨',
    text: '여기에 다 있지롱!',
  },
  popular: {
    id: 2,
    title: '인기상품',
    subTitle: '인싸가 되는 발걸음?',
    text: '이게 인기가 있다고..?',
  },
  new: {
    id: 3,
    title: '신상품',
    subTitle: '이 아닐 수도 있음',
    text: '왔어요~ 왔어요~ 내가왔어요~',
  },
  colabo: {
    id: 4,
    title: '콜라보레이션',
    subTitle: '얘랑 했다고..?',
    text: '이런게 나왔다고..?',
  },
};
