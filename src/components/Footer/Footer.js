import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img alt="logo" src="/images/newLogo.png" />
        </div>
        <div className="footer-div">
          <nav className="footer-nav">
            <ul className="footer-menu">
              {menuList.map(menu => {
                return <li key={menu.id}>{menu.text}</li>;
              })}
            </ul>
            <p>&nbsp;@pOOp_store</p>
          </nav>
          <div className="footer-info">
            {infoList.map(info => {
              return <li key={info.id}>{info.text}&nbsp;</li>;
            })}
          </div>
          <p className="copyright">© pOOp Corp. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const menuList = [
  { id: 0, text: 'About' },
  { id: 1, text: '공지사항' },
  { id: 2, text: '이용약관' },
  { id: 3, text: '개인정보처리방침' },
  { id: 4, text: '대량구매/제휴안내' },
];

const infoList = [
  { id: 0, text: '상호 : (주)스토어풉' },
  { id: 1, text: '대표 : 이해인' },
  { id: 2, text: '사업자등록번호 : 123-45-67890' },
  { id: 3, text: '통신판매업신고번호 : 2023-서울' },
  { id: 4, text: '사업자정보확인' },
  { id: 5, text: '대표번호 : 1234-5678' },
  { id: 6, text: '이메일 : poop-infodesk@poop.com' },
  { id: 7, text: '주소 : 서울특별시 강남구 테헤란로 427' },
  { id: 8, text: '호스팅제공 : 호스트' },
];
