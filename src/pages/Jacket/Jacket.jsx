import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Jacket = () => {
  return (
    <Box>
      <AllWrap>
        <Link to={`/detail/1`}>
          <ProductWrap>
            <span>자켓</span>
            <img
              className="prducut_img"
              src="/images/자켓1.webp"
              alt="상품 이미지"
            />
            <button className="cart_btn">
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </ProductWrap>
          <h6 className="product_title">제품이름</h6>
          <p className="product_price">40,000원</p>
        </Link>
        <Link to={`/detail/2`}>
          <ProductWrap>
            <span>자켓</span>
            <img
              className="prducut_img"
              src="/images/자켓1.webp"
              alt="상품 이미지"
            />
            <button className="cart_btn">
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </ProductWrap>
          <div>
            <h6 className="product_title">제품이름</h6>
            <p className="product_price">40,000원</p>
          </div>
        </Link>
        <Link to={`/detail/1`}>
          <ProductWrap>
            <span>자켓</span>
            <img
              className="prducut_img"
              src="/images/자켓1.webp"
              alt="상품 이미지"
            />
            <button className="cart_btn">
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </ProductWrap>
          <h6 className="product_title">제품이름</h6>
          <p className="product_price">40,000원</p>
        </Link>
        <Link to={`/detail/2`}>
          <ProductWrap>
            <span>자켓</span>
            <img
              className="prducut_img"
              src="/images/자켓1.webp"
              alt="상품 이미지"
            />
            <button className="cart_btn">
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </ProductWrap>
          <div>
            <h6 className="product_title">제품이름</h6>
            <p className="product_price">40,000원</p>
          </div>
        </Link>
        <Link to={`/detail/2`}>
          <ProductWrap>
            <span>자켓</span>
            <img
              className="prducut_img"
              src="/images/자켓1.webp"
              alt="상품 이미지"
            />
            <button className="cart_btn">
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </ProductWrap>
          <div>
            <h6 className="product_title">제품이름</h6>
            <p className="product_price">40,000원</p>
          </div>
        </Link>
        <Link to={`/detail/2`}>
          <ProductWrap>
            <span>자켓</span>
            <img
              className="prducut_img"
              src="/images/자켓1.webp"
              alt="상품 이미지"
            />
            <button className="cart_btn">
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </ProductWrap>
          <div>
            <h6 className="product_title">제품이름</h6>
            <p className="product_price">40,000원</p>
          </div>
        </Link>
        <Link to={`/detail/2`}>
          <ProductWrap>
            <span>자켓</span>
            <img
              className="prducut_img"
              src="/images/자켓1.webp"
              alt="상품 이미지"
            />
            <button className="cart_btn">
              <i className="fa-solid fa-cart-shopping" />
            </button>
          </ProductWrap>
          <div>
            <h6 className="product_title">제품이름</h6>
            <p className="product_price">40,000원</p>
          </div>
        </Link>
      </AllWrap>
    </Box>
  );
};

export default Jacket;
const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

const AllWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
  gap: 50px;
  margin-top: 30px;

  /* width: 500px; */
  h6 {
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    margin-top: 30px;
  }
  p {
    display: flex;
    justify-content: center;
    font-weight: 400;
    color: #c8c8c8;
    margin-top: 10px;
  }
`;

const ProductWrap = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #f9f7f8;
  border-radius: 15px;
  font-size: 12px;
  margin-top: 100px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: fill;
    &:hover {
      width: 330px;
      height: 330px;
      transition: all 0.5s;
    }
    &:not(:hover) {
      width: 300px;
      height: 300px;
      transition: all 0.5s;
    }
  }
  button {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
    &:hover {
      width: 60px;
      height: 60px;
      transition: all 0.5s;
      overflow: hidden;
    }
  }
`;
