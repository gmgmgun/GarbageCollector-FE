import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import './Login.scss';

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ id: '', pw: '' });
  const [errorText, setErrorText] = useState({ id: '', pw: '' });

  const navigate = useNavigate();

  const isIdEmpty = errorText.id ? true : false;
  const isPwEmpty = errorText.pw ? true : false;
  const isValid = !isIdEmpty && !isPwEmpty;

  const onChangeLoginInfo = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
    if (value !== '') {
      setErrorText({ ...errorText, [name]: '' });
    }
  };
  const goToSignup = () => {
    navigate('/signup');
  };
  const onBlurLoginInfo = e => {
    const { name, value, nextSibling } = e.target;
    if (value === '') {
      setErrorText({
        ...errorText,
        [name]: `${nextSibling.innerHTML}을 입력해주세요`,
      });
    } else {
      setErrorText({ ...errorText, [name]: '' });
    }
  };

  const onClickBtnLogin = e => {
    e.preventDefault();

    fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: loginInfo.id,
        password: loginInfo.pw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        if (localStorage.getItem('token') !== 'undefined') {
          return navigate('/');
        } else {
          alert('입력이 틀렸습니다');
        }
      });
  };

  return (
    <div className="login">
      <form className="login-wrap" onSubmit={onClickBtnLogin}>
        <h1 className="login-title">로그인</h1>
        <div className="input-cnt">
          <div className="input-wrap">
            <input
              name="id"
              className={isIdEmpty ? 'input-vacant' : 'input-occupied'}
              type="text"
              placeholder=" "
              onChange={onChangeLoginInfo}
              onBlur={onBlurLoginInfo}
            />
            <label>아이디</label>
            <p className="error-text">{errorText.id}</p>
          </div>
          <div className="input-wrap">
            <input
              name="pw"
              className={isPwEmpty ? 'input-vacant' : 'input-occupied'}
              type="password"
              placeholder=" "
              onChange={onChangeLoginInfo}
              onBlur={onBlurLoginInfo}
            />
            <label>비밀번호</label>
            <p className="error-text">{errorText.pw}</p>
          </div>
        </div>
        <span className="checkbox-wrap">
          <input type="checkbox" className="save-id" />
          <label>아이디 저장</label>
        </span>
        <button className="btn-login" disabled={!isValid}>
          로그인
        </button>
      </form>
      <ul className="link-cnt">
        <li className="link" onClick={goToSignup}>
          회원가입
        </li>
        <li className="link">아이디 찾기</li>
        <li className="link">비밀번호 찾기</li>
      </ul>
      <a
        className="find-non-user-order"
        href="https://brandstore.baemin.com/find/non-user-order"
      >
        비회원 주문조회
      </a>
    </div>
  );
};

export default Login;
