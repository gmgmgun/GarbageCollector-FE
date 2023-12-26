import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavAside from './NavAside';
import './NavRightWrap.scss';

const NavRightWrap = ({ navrighticon }) => {
  const {
    cartIcon,
    searchIcon,
    searchAlt,
    castAlt,
    moreInfoIcon,
    moreIncoAlt,
  } = navrighticon;

  const [asideOpen, setAsideOpen] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(`/login`);
  };

  const goToSearch = () => {
    navigate(`/search`);
  };

  const goToCart = () => {
    navigate(`/cart`);
  };

  const showMoreInfo = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <li className="nav-right">
      <button onClick={goToSearch} className="nav-search-icon">
        <img className="nav-search-icon" src={searchIcon} alt={searchAlt} />
      </button>
      <img
        onClick={goToCart}
        className="nav-cart-icon"
        src={cartIcon}
        alt={castAlt}
        cursor="pointer"
      />
      <div onClick={goToLogin} className="nav-login">
        <span className="navLogInFont">로그인</span>
      </div>
      <button onClick={showMoreInfo} className="more-info-btn">
        <img className="more-info-icon" src={moreInfoIcon} alt={moreIncoAlt} />
      </button>
      {asideOpen && <NavAside showMoreInfo={showMoreInfo} />}
    </li>
  );
};

export default NavRightWrap;
