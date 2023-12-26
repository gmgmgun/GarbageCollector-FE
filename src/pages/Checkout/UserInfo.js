import './Checkout.scss';

export default function UserInfo({
  inputs,
  onChangeInput,
  onClickSubmitInfo,
  onCloseModal,
}) {
  return (
    <div className="modal-content">
      <div>
        <p className="modal-title">배송지</p>
        <div className="name-input">
          <span>이름</span>
          <span className="modal-essential">*</span>
        </div>

        <input
          className="user-id-input"
          placeholder="받으실 분 이름을 입력해주세요."
          name="userName"
          value={inputs.userName}
          onChange={onChangeInput}
        />
      </div>
      <div className="name-input">
        <span>연락처</span>
        <span className="modal-essential">*</span>
      </div>
      <div>
        <input
          className="user-info-input"
          placeholder="예)010-0000-0000"
          name="userPw"
          value={inputs.userPw}
          onChange={onChangeInput}
        />
      </div>
      <div className="name-input">
        <span>주소</span>
        <span className="modal-essential">*</span>
      </div>
      <div>
        <input
          className="user-info-input"
          placeholder="주소를 입력해주세요"
          name="userAddress"
          value={inputs.userAddress}
          onChange={onChangeInput}
        />
      </div>
      <div className="name-input">
        <span>배송 메모 (선택) </span>
      </div>
      <div>
        <input
          className="user-info-input"
          placeholder="예)문 앞에 놔주세요.감사합니다."
          name="userComment"
          value={inputs.userComment}
          onChange={onChangeInput}
        />
      </div>
      <div className="modal-reg-btn">
        <button
          className="modal-btn"
          onClick={() => {
            onClickSubmitInfo();
            onCloseModal();
          }}
        >
          등록하기
        </button>
      </div>
      <button className="modal-x-btn" onClick={onCloseModal}>
        x
      </button>
    </div>
  );
}
