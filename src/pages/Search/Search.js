import React, { useState } from 'react';
import '../Search/Search.scss';
import { BASE_URL } from '../../config';
import Product from '../ProductList/Product/Product';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const onChangeInput = e => {
    setUserInput(e.target.value);
  };
  const onClickSearch = e => {
    fetch(`${BASE_URL}/search/?keyword=${userInput}`, {})
      .then(response => response.json())
      .then(({ data }) => {
        if (userInput === '') setFilteredList([]);
        else setFilteredList(data);
      });
    setIsSearch(true);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <div className="search-bar-header">
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            onChange={onChangeInput}
            value={userInput}
          />
          <button onClick={onClickSearch}>
            <img alt="search" src="images/search.png" />
          </button>
        </div>
        {filteredList.length !== 0 ? (
          <div className="search-result-container">
            {filteredList.map(list => (
              <div key={list.productId}>
                <Product product={list} />
              </div>
            ))}
          </div>
        ) : isSearch ? (
          <ul className="result-none">
            <li>띠용!</li>
            <li>일치하는 상품이 없습니다.</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
