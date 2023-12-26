import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import './Signup.scss';

const Signup = () => {
  const [inputValueList, setInputValueList] = useState({
    userId: '',
    userPw: '',
    pwCheck: '',
    userName: '',
    userPhoneNum: '',
  });

  const { userId, userPw, pwCheck, userName, userPhoneNum, userBirthDate } =
    inputValueList;

  const isValid =
    userId && userPw && pwCheck && userName && userPhoneNum && userBirthDate;

  const navigate = useNavigate();

  const printInfoText = (name, value) => {
    const idRegEx = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    const pwRegEx =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!value) return false;

    switch (name) {
      case 'userId':
        if (!idRegEx.test(value)) {
          return (
            <p className="info-text">아이디는 email 형식으로 작성해주세요.</p>
          );
        } else {
          return <p className="info-text">조건을 충족했습니다!</p>;
        }

      case 'userPw':
        if (!pwRegEx.test(value)) {
          return (
            <p className="info-text">
              문자 및 숫자, 특수문자를 포함하여 8글자 이상이어야 합니다.
            </p>
          );
        } else {
          return <p className="correct-text">조건을 충족했습니다!</p>;
        }
      case 'pwCheck':
        return !(userPw === pwCheck) ? (
          <p className="wrong-text">입력하신 비밀번호와 일치하지 않습니다.</p>
        ) : (
          <p className="correct-text">입력하신 비밀번호와 일치합니다!</p>
        );
      default:
    }
  };

  const onChangeInfo = e => {
    const { name, value } = e.target;
    const numberRegEx = /^\d+$/;
    if (name === 'userBirthDate' || name === 'userPhoneNum') {
      value.replace(numberRegEx, '');
    }
    setInputValueList({ ...inputValueList, [name]: value });
  };

  const onClickSignup = () => {
    fetch(`${BASE_URL}/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
        name: userName,
        phoneNumber: userPhoneNum,
        birth: userBirthDate,
      }),
    })
      .then(response => response.json())
      .then(data => {
        alert(
          '가입 기념 100,000 포인트가 적립되었읍니다..가치있게 써주십시오..'
        );
        navigate('/');
      });
  };

  return (
    <div className="signup">
      <h1 className="signup-title">회원가입</h1>
      <hr />
      <form className="signup-info">
        <h2 className="signup-info-title">회원정보</h2>
        <ul className="form-input-list">
          {SIGNUP_INPUT_DATA.map((input, idx) => {
            const {
              id,
              name,
              type,
              placeholder,
              autoFocus,
              infoText,
              className,
              maxLength,
            } = input;
            return (
              <li key={id}>
                <div className="input-box">
                  <input
                    className={className}
                    onChange={onChangeInfo}
                    placeholder=" "
                    name={name}
                    type={type}
                    autoFocus={autoFocus}
                    value={inputValueList[name] || ''}
                    maxLength={maxLength}
                  />
                  <label className="label">{placeholder}</label>
                  {printInfoText(name, inputValueList[name]) ? (
                    printInfoText(name, inputValueList[name])
                  ) : (
                    <p className="info-text">{infoText}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </form>
      <button onClick={onClickSignup} disabled={!isValid}>
        가입하기
      </button>
    </div>
  );
};

export default Signup;

const SIGNUP_INPUT_DATA = [
  {
    id: 0,
    name: 'userId',
    type: 'email',
    placeholder: '이메일',
    infoText: '아이디로 사용하실 이메일을 입력해주세요.',
    autoFocus: true,
    className: 'input-vacant',
  },
  {
    id: 1,
    name: 'userPw',
    type: 'password',
    placeholder: '비밀번호',
    infoText: '비밀번호를 입력해주세요.',
    autoFocus: false,
    className: 'input-vacant',
  },
  {
    id: 2,
    name: 'pwCheck',
    type: 'password',
    placeholder: '비밀번호 확인',
    infoText: '비밀번호를 한번 더 입력해주세요.',
    autoFocus: false,
    className: 'input-vacant',
  },
  {
    id: 3,
    name: 'userName',
    type: 'text',
    placeholder: '이름',
    infoText: '가입하시는 분의 이름을 입력해주세요.',
    autoFocus: false,
    className: 'input-vacant',
  },
  {
    id: 4,
    name: 'userPhoneNum',
    type: 'text',
    placeholder: '휴대전화 번호',
    infoText: '휴대전화 번호를 입력해주세요.',
    autoFocus: false,
    className: 'input-vacant',
    maxLength: 11,
  },
  {
    id: 5,
    name: 'userBirthDate',
    type: 'text',
    placeholder: 'ex) 19920725',
    infoText: '생년월일 숫자 8자리를 입력해주세요.',
    autoFocus: false,
    className: 'input-vacant',
    maxLength: 8,
  },
];
