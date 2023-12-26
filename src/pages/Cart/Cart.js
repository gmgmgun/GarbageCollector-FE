import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import CartItems from './CartItems';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  const [isAllCheck, setIsAllCheck] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(0);

  const isCheckedBtnAll = productList.length === isAllCheck.length;
  useEffect(() => {
    fetch(`${BASE_URL}/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setProductList(...productList, data.cartData.cartItems);
        setDeliveryFee(...deliveryFee, data.cartData.deliveryFee);
      });
  }, []);
  const navigate = useNavigate();
  const deleteProduct = cartId => {
    const url = `${BASE_URL}/carts?cartId=${cartId}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        alert('상품이 삭제되었습니다');
        setProductList(prevProducts =>
          prevProducts.filter(product => product.cartId !== cartId)
        );
      });
  };

  const onClickBtnOrder = () => {
    navigate('/checkout', { state: [productList, deliveryFee] });
  };

  const handleDeleteSelected = () => {
    const selectedProductIds = isAllCheck;
    const url = `${BASE_URL}/carts?cartId=${selectedProductIds.join(
      '&cartId='
    )}`;

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProductList(prevProducts =>
          prevProducts.filter(
            product => !selectedProductIds.includes(product.cartId)
          )
        );
        setIsAllCheck([]);
        alert('선택한 상품이 삭제되었습니다.');
      });
  };

  const increaseQuantity = productOptionId => {
    const newQuantity =
      productList.find(product => product.productOptionId === productOptionId)
        ?.quantity + 1;
    if (newQuantity === undefined) {
      console.error(
        `Product with productOptionId ${productOptionId} not found`
      );
      return;
    }
    fetch(`${BASE_URL}/carts`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productOptionId: productOptionId,
        quantity: 1,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const updatedProductList = productList.map(product => {
          if (product.productOptionId === productOptionId) {
            return { ...product, quantity: newQuantity };
          }
          return product;
        });
        setProductList(updatedProductList);
      });
  };

  const decreaseQuantity = productOptionId => {
    const productToUpdate = productList.find(
      product => product.productOptionId === productOptionId
    );
    if (!productToUpdate) {
      console.error(
        `Product with productOptionId ${productOptionId} not found`
      );
      return;
    }

    const currentQuantity = productToUpdate.quantity;
    const newQuantity = currentQuantity > 0 ? currentQuantity - 1 : 0;

    fetch(`${BASE_URL}/carts`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productOptionId: productOptionId,
        quantity: -1,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const updatedProductList = productList.map(product => {
          if (product.productOptionId === productOptionId) {
            return { ...product, quantity: newQuantity };
          }
          return product;
        });
        setProductList(updatedProductList);
      })
      .catch(error => {
        console.error(error);
        const updatedProductList = productList.map(product => {
          if (product.productOptionId === productOptionId) {
            return { ...product, quantity: currentQuantity };
          }
          return product;
        });
        setProductList(updatedProductList);
      });
  };
  const totalAmounts = productList.reduce(
    (acc, curr) => acc + curr.quantity * curr.productTotalPrice,
    0
  );

  const isDisabled = productList.length === 0;

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setIsAllCheck(prev => [...prev, id]);
    } else {
      setIsAllCheck(isAllCheck.filter(el => el !== id));
    }
  };

  const handleAllCheck = checked => {
    if (checked) {
      const idArray = [];
      productList.forEach(el => idArray.push(el.cartId));
      setIsAllCheck(idArray);
    } else {
      setIsAllCheck([]);
    }
  };

  const isDisplayNone =
    productList.length === 0 ? 'check-all-display-none' : 'check-all';

  const totalCost =
    productList[0] && typeof deliveryFee === 'number'
      ? (deliveryFee + totalAmounts).toLocaleString()
      : '0';

  return (
    <div className="cart">
      <main>
        <div className="cart-title">
          <h1>장바구니</h1>
        </div>

        <div className="cart-center">
          <div className="cart-left">
            <div className={isDisplayNone}>
              <div>
                <input
                  id="chkbox"
                  type="checkbox"
                  name="select-all"
                  onChange={e => handleAllCheck(e.target.checked)}
                  checked={isCheckedBtnAll}
                />

                <span for="chkbox" className="all-select-list">
                  전체 선택
                </span>
              </div>
              <button className="select-delete" onClick={handleDeleteSelected}>
                선택삭제
              </button>
            </div>

            {productList.length === 0 ? (
              <div className="empty-cart">
                <img
                  className="empty-img"
                  alt="empty"
                  src="images/emptyImg.jpg"
                />
              </div>
            ) : (
              productList.map(product => (
                <CartItems
                  key={product.cartId}
                  product={product}
                  deleteProduct={deleteProduct}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  handleSingleCheck={handleSingleCheck}
                  isAllCheck={isAllCheck}
                />
              ))
            )}
          </div>

          <div className="cart-right">
            <div className="purchase">
              <div className="price-box">
                <div className="total-price">
                  <p>총 상품금액</p>
                  <p> {totalAmounts.toLocaleString()} 원</p>
                </div>
                <div className="delivery-fee">
                  <p>배송비</p>
                  <p>+{deliveryFee} 원</p>
                </div>
              </div>

              <div className="estimated-amount">
                <p>결제예상금액</p>
                <p>{totalCost}원</p>
              </div>
              <button
                type="button"
                className="purchase-btn"
                disabled={isDisabled}
                onClick={onClickBtnOrder}
              >
                주문하기
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
