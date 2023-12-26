import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BASE_URL } from '../../config';
import './Ordered.scss';

const Ordered = () => {
  const [productList, setProductList] = useState([]);
  const [orderNumber, setOrderNumber] = useState(0);
  const navigate = useNavigate();
  const locate = useLocation();
  useEffect(() => {
    fetch(`${BASE_URL}/orders/payment`, {
      method: 'POST',
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnYXJiYWdlQ29sbGVjdG9Pd25lciIsInN1YiI6ImdhcmJhZ2VXb3JsZCIsImlhdCI6MTY3NjYwNDE0NCwiZXhwIjoxNjc2NjkwNTQ0LCJ1c2VySWQiOjE1fQ.vsFvb3X8akL_FSQw4gPsLFkBhAslBTAWvoIUpLorHiM',
    })
      .then(res => res.json())
      .then(data => setOrderNumber(data));
  }, []);
  const [firstProduct] = productList;

  const goToMain = () => {
    navigate(`/`);
  };
  return (
    <div className="ordered">
      <main>
        <div className="ordered-title">
          <div>
            <span className="complete-order"> ✔ </span>
          </div>

          <div className="comp-order-msg">
            <h3>주문이 완료되었습니다.</h3>
          </div>

          <div>
            <div className="order-number">
              주문번호 : {firstProduct?.orderNumber}
            </div>
          </div>
          <button className="go-main-btn" onClick={goToMain}>
            홈으로 가기
          </button>
        </div>

        <div className="ordered-center">
          <div className="ordered-main">
            <div className="check-all">주문정보</div>
            <div className="order-info">
              <div className="ordered-product">
                주문상품 :
                <span className="ordered-pr">{firstProduct?.productName}</span>
              </div>

              <div className="ordered-price">
                결제금액 :
                <span className="ordered-pr">
                  {firstProduct?.productTotalPrice} 원
                </span>
              </div>

              <div className="ordered-user">
                배송지 :
                <span className="ordered-name">{firstProduct?.receiver}</span>
                <div className="ordered-address">{firstProduct?.address}</div>
              </div>

              <div className="agree-term">
                <p>﹒주문 취소는 주문내역 상세페이지에서 가능합니다.</p>
                <p>
                  ﹒주문/배송 문의사항이 있을 경우, 1:1 문의 또는 고객센터에
                  남겨주시면 신속히 해결해드리겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ordered;
