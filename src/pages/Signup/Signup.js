import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const SignUp = () => {
  const [isFade, setIsFade] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/register');
  };
  useEffect(() => {
    setTimeout(() => {
      setIsFade(true);
    }, 500);

    return () => {
      setIsFade(false);
    };
  }, []);

  return (
    <div className={`signUpWrap${isFade ? ' end' : ''}`}>
      {/* // <div className="signUpWrap"> */}
      <div className="signUpWord">회원가입</div>
      <div className="subTextSignUp">이메일로 가입하기</div>
      <button onClick={goToRegister} className="signUpBtn">
        Befine 회원가입 하기
      </button>
      <div className="gotoLogin">
        <span>Befine 회원이신가요?</span>
        <span onClick={goToLogin} className="goToLoginBtn">
          로그인하기
        </span>
      </div>
    </div>
  );
};

export default SignUp;
