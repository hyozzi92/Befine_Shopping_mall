import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    autoplay: true, //자동시작 (boolean) -default:false
    autoplaySpeed: 2000,
    nextArrow: (
      <NextArrow>
        <ArrowForwardIosIcon />
      </NextArrow>
    ),
    prevArrow: (
      <PrevArrow>
        <ArrowBackIosIcon />
      </PrevArrow>
    ),
  };
  return (
    <div>
      <StyledSlider {...settings} className="mainCarousel">
        <div className="bannerImg">
          <BannerImg src="images/제리메인캐러셀.jpg" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </StyledSlider>
    </div>
  );
};

export default Carousel;

const StyledSlider = styled(Slider)`
  position: relative;
  .slick-list {
    width: 100vw;
    margin: 0 auto;
    background-color: grey;
    height: 500px;
    text-align: center;
  }
  .slick-slide div {
    width: 100%;
    height: 500px;
    background-color: skyblue;
  }
  .slick-arrow.slick-arrow {
    z-index: 10;
    width: 50px;
    height: 50px;
    background: rgba($bk, 0.2);
    border-radius: 50%;
    transition: background 0.5s;
    &:hover {
      background: rgba($pt, 0.9);

      &::before {
        color: rgba($bk, 0.5);
      }
    }
    &::before {
      font-family: 'Line Awesome Free';
      font-weight: 900;
      font-size: 49px;
      transition: all 0.5s;
    }
  }
  .slick-prev {
    left: 30px;

    &::before {
      content: '';
    }
  }

  .slick-next {
    right: 30px;

    &::before {
      content: '';
    }
  }
  .slick-dots {
    position: absolute;
    bottom: -40px;
  }
`;
const PrevArrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  color: black;
  text-align: center;
  line-height: 30px;

  &:hover {
    color: grey;
    background-color: white;
    opacity: 0.5;
  }
`;
const NextArrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  color: black;
  text-align: center;
  line-height: 30px;

  &:hover {
    color: grey;
    background-color: white;
    opacity: 0.5;
  }
`;
const BannerImg = styled.img`
  width: 100vw;
  height: 500px;
  object-fit: fill;
`;
