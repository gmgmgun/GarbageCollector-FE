import React from 'react';
import { Link } from 'react-router-dom';
import './NavAside.scss';

const NavBeforeLog = () => {
  return (
    <header>
      <h2 className="aside-title">
        앗! <br />
        <Link to="#" className="aside-title">
          로그인이 필요해요
        </Link>
      </h2>
    </header>
  );
};

export default NavBeforeLog;
