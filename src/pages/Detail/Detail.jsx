import React from 'react';
<<<<<<< HEAD

const Detail = () => {
  return <div></div>;
};

export default Detail;
=======
import styled from 'styled-components';

const Detail = () => {
  return (
    <div>
      <AllWrap>
        <LeftWrap>
          <ImgWrap>
            <img src="images/자켓2.webp" alt="img" />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <button>뒤로</button>
              <button>앞으로</button>
            </div>
          </ImgWrap>
        </LeftWrap>
        <RightWrap>
          <p>제품명 : 22Fw Supreme X The North Face Shell Jacket</p>
          <p>발매날짜 : 2022/10/26</p>
          <p>제품설명 : 슈프림과 노스페이스의 22년 콜라보 제품</p>
          <p>수량 :</p>
          <p>사이즈 :</p>
          <div className="BtnWrap">
            <button>장바구니</button>
            <button>구매하기</button>
          </div>
        </RightWrap>
      </AllWrap>
    </div>
  );
};

export default Detail;

const AllWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70vw;
  height: auto;

  margin: 0 auto;
  margin-top: 150px;
`;

const LeftWrap = styled.div`
  width: 45%;
  height: 500px;

  object-fit: contain;
`;

const RightWrap = styled.div`
  display: flex;

  flex-direction: column;
  width: 45%;
  height: 500px;

  padding: 25px;
  p {
    width: 100%;
    height: 100px;
  }
  .BtnWrap {
    display: flex;
    width: 100%;
    height: 50px;
    flex-direction: row-reverse;
    justify-content: space-around;
    button {
      width: 100px;
      height: 100%;
    }
  }
`;

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  object-fit: contain;
  width: 500px;
  height: 500px;

  img {
    max-width: 500px;
    height: auto;
  }
`;
>>>>>>> 843a232 (Detail layout done)
