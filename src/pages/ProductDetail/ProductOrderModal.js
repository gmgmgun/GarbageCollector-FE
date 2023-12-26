import React, { useEffect, useState } from 'react';
import './ProductOrderModal.scss';

const ProductOrderModal = ({
  option,
  removeOrder,
  convertAmount,
  discountPrice,
  addOptionPrice,
  setTotalPrice,
  getOptionContent,
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [computedPrice, setComputedPrice] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const { productOptionName, extraPrice, productOptionId } = option;

  const handlePlus = () => {
    setProductQuantity(productQuantity + 1);
    setIsChange(!isChange);
  };

  const handleMinus = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
      setIsChange(!isChange);
    }
  };

  function quantityChange(e) {
    setProductQuantity(e.target.value);
  }

  //convertAmount
  useEffect(() => {
    setComputedPrice(productQuantity * (Number(discountPrice) + extraPrice));
    addOptionPrice(productOptionId, computedPrice);
    getOptionContent(productOptionId, productQuantity);
  }, [isChange, computedPrice]);

  return (
    <li className="buy-list">
      <h4>{productOptionName}</h4>
      <div className="buy-options">
        <div className="buy-quantity">
          <button onClick={handleMinus} className="btn-minus" />
          <input
            className="quantity-input"
            onChange={e => {
              quantityChange(e);
            }}
            type="number"
            value={productQuantity}
          />
          <button onClick={handlePlus} className="btn-plus" />
        </div>
        <p className="price">
          <span>{computedPrice}원</span>
        </p>
      </div>
      <button
        onClick={() => removeOrder(option.productOptionId)}
        className="btn-delete"
      />
    </li>
  );
};

export default ProductOrderModal;
