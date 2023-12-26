import React from 'react';
import './ProductBasicInfo.scss';

const ProductBasicInfo = () => {
  return (
    <div className="product-basic-info-wrap">
      <div className="delivery-info">
        <h4>배송안내</h4>
        {DELIVERY_INFO.map(delivery => {
          return (
            <dl className="guide-caution" key={delivery.id}>
              <dt>{delivery.topic}</dt>
              <dd>{delivery.text}</dd>
            </dl>
          );
        })}
      </div>

      <div className="exchange-info">
        <h4>교환안내</h4>
        <dl className="exchange-dl">
          {EXCHANGE_INFO.map(exchange => {
            return (
              <dt className="exchange-dt" key={exchange.id}>
                - {exchange.info}
              </dt>
            );
          })}
        </dl>
      </div>

      <div className="refund-info">
        <h4>환불안내</h4>
        {REFUND_INFO.map(refund => {
          return (
            <p className="guide-caution" key={refund.id}>
              {refund.text}
            </p>
          );
        })}
      </div>

      <div className="as-info">
        <h4>AS안내</h4>
        <dl className="guide-caution">
          {AS_INFO.map(asinfo => {
            return <dd key={asinfo.id}>{asinfo.text}</dd>;
          })}
        </dl>
      </div>
    </div>
  );
};

export default ProductBasicInfo;

const DELIVERY_INFO = [
  { id: 1, text: 'WECODE', topic: '배송사' },
  {
    id: 2,
    text: '3,000원 (30,000원 이상 구매 시 무료배송) 도서, 산간 일부지역은 배송비가 추가될 수 있습니다.',
    topic: '배송비',
  },
  {
    id: 3,
    text: '오후 1시 이전 결제완료시 당일 출고(영업일 기준) 단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될 수 있는 점 양해부탁드립니다.',
    topic: '배송기간',
  },
];

const EXCHANGE_INFO = [
  { id: 1, info: '주문 취소 및 배송지 변경은 결제완료 단계에서만 가능합니다.' },
  { id: 2, info: '교환 및 반품은 배송완료 후 7일 이내에 가능합니다.' },
  {
    id: 3,
    info: '상품의 불량/하차 및 표시광고 및 계약 내용이 다른 경우 해당 상품의 회수 비용은 무료입니다.',
  },
  {
    id: 4,
    info: '고객님의 단순변심에 의한 교환/반품 일 경우에는 교환/반품 배송비(왕복 배송비) 6,000원을 고객님께서 부담하셔야 합니다.',
  },
  { id: 5, info: '반송지 : 서울특별시 강남구 태헤란로 427' },
];

const REFUND_INFO = [
  {
    id: 1,
    text: '주문취소 및 반품 시 환불은 주문 시 이용하신 결제수단으로 2~7 영업일 이내 환불됩니다.',
  },
];

const AS_INFO = [
  {
    id: 1,
    text: '제품에 문제가 있으신 경우, 고객센터로 접수해 주시면 안내 도와드리겠습니다 🙏🏻',
  },
  {
    id: 2,
    text: '풉 에서 발생한 문제는 소비자분쟁해결 기준 (공정거래위원회 고시)에 따라 피해를 보상받을 수 있습니다.',
  },
];
