import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBeforeLog from './NavBeforeLog';
import NavAfterLog from './NavAfterLog';
import './NavAside.scss';

const NavAside = ({ showMoreInfo }) => {
  // const [showMypage, setShowMypage] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  const Logined = () => {
    setIsLogIn(!isLogIn);
  };

  const navigate = useNavigate();

  const goToProductList = () => {
    navigate(`/products`);
  };
  return (
    <div className="aside-wrap">
      <NavBeforeLog />
      <NavAfterLog />
      <nav className="aside-nav">
        <h2 className="sort">카테고리</h2>
        <ul className="aside-ul">
          {ASIDE_CATEGORIES.map(category => {
            return (
              <li
                onClick={goToProductList}
                className="aside-li"
                key={category.id}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <footer className="aside-footer">
        <div className="footer-wrap">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAApVBMVEUAAABAQEBCQkJAQEBAQEBFRUVERERDQ0NCQkJFRUVFRUVCQkJERERERERERERERERDQ0NFRUVDQ0NDQ0NDQ0NERERERERERERERERDQ0NFRUVDQ0NERERERERPT09QUFBbW1tmZmZnZ2dycnJzc3N+fn5/f3+KioqWlpahoaGioqKtra25ubnExMTFxcXQ0NDR0dHc3Nzd3d3o6Ojz8/P09PT///8isx6WAAAAHXRSTlMAEB8gMDBAX2Bgb3Bwf4CPkJCfoK+vsL/P39/v74v0xfwAAAKsSURBVFjDvZh/e5owEIBhOgvbREq1UCBIGQUZVOpAvv9HGwGFBC4h0D67/0zOl0vuRy6RJKas1N3BtlEttmXulO/SXJFVw0UDcQ+KPAOx2Y0INzFE7dmYiCPmRgCx5iKwHFZTe7FFArLlMlYWEhKbY8yDiwTF/cVibNEM2X4Bg0GZyQApsxkA5QdaIA8D37pLIC7taRvWCtPLtaquefobnrfkyQ2Ji6qTIgZVNGIx0Lx/qSgpfEirz+o9ZMa1Gkj5BiV1l/vA5Fvzv2sa1d8PoqzFQEu6VwYg+f3GjrPX/W4wpc80ZQ3wmy09kSN/8MiFaYoBbAj+R0KPnRgLemzqEMOQbDh4xi4CIg7HigLEGP7oaP3Hsh4Fok6B/ZtChrTDKXAC1BCHGgmS96LArgGCImpi7pIntJHuwDfeuQutV8Dv3WRGYb5RW+ITyQLFOCMHFEmHGRMQivJIhmsTlXns+zyIH7TJnffDz5JFOza9K7MgXfT2zraJcpR1cT0FQR+Us22pV/nb4SchIR28Eq1yFIMcaQ0JUJmGICakEF9OgIsLAbGpLE3FINgH76B3oq5gTEFiurRYZBI3QYSziw/xkop2jkmGfXiL6IIHKW65EZBhrw6roljuxFQCUgdX1KVgyYUU4eAAo4tS/NGqJRxIfvIGRUl6GtWeWjzEzOLR3HMNUcVbCXivcKGWnU9CmvZCF2WE4IYbzPMcZIBH2r254HTzowYjYPUWHFOKASNhthYcU8opxqG/nrCXQ7ZtWThWIPpHDS0UjbzmWMsYL3Qz7CxhOINrj7IEMrr0aJ/bkKUUDbrwaF/AmEnRWJfAn8I+chTOlfZFjGHx79dCS9KmHh5W+ymEuf4/Dw5NVj+x9lPfzHmEUfYjTzmGKs9+zVkrumm1z0H2Xlc5DvkHGInQgH7LSIgAAAAASUVORK5CYII="
            alt="고객센터"
          />
          <ul className="footer-ul">
            {ASIDE_FOOTER.map(footer => {
              return (
                <li className="footer-li" key={footer.id}>
                  <Link to={footer.link}>{footer.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
      <button onClick={showMoreInfo}>X</button>
    </div>
  );
};

export default NavAside;

const ASIDE_CATEGORIES = [
  {
    id: 1,
    name: '전체',
  },
  {
    id: 2,
    name: '머리',
  },
  {
    id: 3,
    name: '상체',
  },
  {
    id: 4,
    name: '하체',
  },
];

const ASIDE_FOOTER = [
  { id: 1, link: '#', text: '1:1 문의' },
  { id: 2, link: '#', text: '이메일 문의' },
];
