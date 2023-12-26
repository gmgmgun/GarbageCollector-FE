import React from 'react';

const CartItems = props => {
  const {
    product,
    deleteProduct,
    increaseQuantity,
    decreaseQuantity,
    handleSingleCheck,
    isAllCheck,
  } = props;

  return (
    <div className="Cart-items">
      <div className="cart-item-container">
        <input
          type="checkbox"
          onChange={e => handleSingleCheck(e.target.checked, product.cartId)}
          checked={isAllCheck.includes(product.cartId) ? true : false}
          name={product.cartId}
        />
        <label for="chkbox" className="all-select-list" />
        <div className="product-info">
          <span className="item-name">
            <img
              className="product-img "
              src={product.productMainImage}
              alt=""
            />
            <span className="product-name">{product.productName}</span>
          </span>
          <div className="product-btn">
            <button
              className="count-btn"
              onClick={() => decreaseQuantity(product.productOptionId)}
            >
              -
            </button>
            <input className="count-box" value={product.quantity} />
            <button
              className="count-btn"
              onClick={() => increaseQuantity(product.productOptionId)}
            >
              +
            </button>
          </div>
          <span className="price-and-delete">
            {product.productTotalPrice * product.quantity}원
            <button
              className="delete-btn"
              onClick={() => deleteProduct(product.cartId)}
            >
              X
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
