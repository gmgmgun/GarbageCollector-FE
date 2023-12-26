import React from 'react';
import './ProductInfoTab.scss';

const ProductInfoTab = ({ info }) => {
  const { imageUrl } = info;

  return (
    <li>
      <img className="detail-pic-box" src={imageUrl} alt="상세이미지" />
    </li>
  );
};

export default ProductInfoTab;
