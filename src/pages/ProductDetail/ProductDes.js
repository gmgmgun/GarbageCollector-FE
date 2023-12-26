import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDes.scss';

const ProductDes = () => {
  return (
    <>
      {PRODUCT_DES_TAB.map(productTab => {
        return (
          <li key={productTab.id} className="des-tab-list">
            <Link to="#">{productTab.tabName}</Link>
          </li>
        );
      })}
    </>
  );
};

export default ProductDes;

const PRODUCT_DES_TAB = [
  { id: 1, tabName: '상품정보' },
  { id: 2, tabName: '기본정보' },
  { id: 3, tabName: '상품후기' },
];
