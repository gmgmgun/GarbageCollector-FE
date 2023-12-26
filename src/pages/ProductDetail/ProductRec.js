import React from 'react';
import ProductLists from '../ProductList/ProductList';
import './ProductRec.scss';

const ProductRec = () => {
  return (
    <div className="item-recommend">
      <p className="rec-title">이건 어때요?</p>
      <div className="rec-product-wrap">
        <ProductLists />
      </div>
    </div>
  );
};

export default ProductRec;
