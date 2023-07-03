import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';
import { Btn_black, Btn_social } from '../../components/button.js';
import { setLoginStatus } from '../../components/nav.js';
import { ReactComponent as Kakao } from "../svgs/kakao.svg";
import { ReactComponent as Naver } from "../svgs/naver.svg";
import { ReactComponent as Google } from "../svgs/google.svg";

const Title = styled.h1`
    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    text-decoration: underline;
    margin-top: 58px;
    margin-bottom: 53px;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top:24px;
`;

const InputLabel = styled.label`
    width: 60px;
    height: 19px;
    margin-left: 12px; /* 수정된 부분: 왼쪽 마진을 10px로 설정 */
    left: 388px;
    top: 244px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 5px;
`;

const InputBox = styled.input`
    margin: 10px;
    width: 664px;
    height: 46px;
    background: #E8E5DF;
    border: 3px solid #000000;
    border-radius: 10px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
`;

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: email,
      password: password
    }
    Axios.post('http://localhost:8000/signup/auth/login/', user)
      .then(res => {
        console.log(res.data['access'])
        if (res.data['access']) {
          localStorage.clear()
          localStorage.setItem('token', res.data['access'])
          localStorage.setItem('pk', res.data['user']['pk'])
          localStorage.setItem('username', res.data['user']['username'])
          localStorage.setItem('email', res.data['user']['email'])
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace('/')
        } else {
          setEmail('')
          setPassword('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        //console.clear()
        alert('존재하지 않는 아이디거나, 아이디와 비밀번호가 일치하지 않습니다.')
        console.log(err)
        setEmail('')
        setPassword('')
      })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={onSubmit}>
      <div style={{display:'flex', justifyContent:'center'}}>
      <Title>로그인</Title>
      </div>
      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      <InputContainer>
        <InputLabel>Email</InputLabel>
        <InputBox
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Password</InputLabel>
        <InputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />
      </InputContainer> 
      <div style={{display:'flex', justifyContent:'center'}}>
      <Btn_black type='submit' text={'Login'} style={{ fontSize: '24px', width: '237px', height: '46px', marginTop: '52px'}} />
      </div>
      </form>
      <div style={{ marginTop: '60px', marginBottom: '212px', width: '664px', display: 'flex', justifyContent: 'space-between' }}>
        <Btn_social text={'구글로 로그인'} style={{ fontSize: '13px', width: '192px', height: '46px' }} svg={<Google />} />
        <Btn_social text={'네이버로 로그인'} style={{ fontSize: '13px', width: '192px', height: '46px' }} svg={<Naver />} />
        <Btn_social text={'카카오로 로그인'} style={{ fontSize: '13px', width: '192px', height: '46px' }} svg={<Kakao />} />
      </div>

    </div>


  )
};


export default Login;
