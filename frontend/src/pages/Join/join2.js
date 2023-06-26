import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';
import {Btn_black} from '../../components/button.js';

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
    width: 160px;
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

export function Join() {
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [errors, setErrors] = useState(false)

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePwd1 = (e) => {
    setPassword1(e.target.value)
  }

  const onChangePwd2 = (e) => {
    setPassword2(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const user = {
      username: username,
      email: email,
      password1: password1,
      password2: password2
    }

    // 유효성 검사
    if(password1 !== password2) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
      return false
    }
    

    Axios.post('http://localhost:8000/signup/auth/register/', user)
      .then(res => {
        if (res.data['access']) {
          localStorage.clear()
          localStorage.setItem('token', res.data.key)
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          localStorage.setItem('username', res.data['user']['username'])
          localStorage.setItem('email', res.data['user']['email'])
          window.location.replace('/')
        } else {
          setName('')
          setEmail('')
          setPassword1('')
          setPassword2('')
          localStorage.clear()
          setErrors(true)
        }
      })
      .catch(err => {
        console.log(err)
        alert('error!!')
      })
  }

  return (
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    
    <Title>회원 가입</Title>
    {errors === true && <h2>Cannot signup with provided credentials</h2>}
    <form onSubmit={onSubmit}>
    <InputContainer>
        <InputLabel>Username</InputLabel>
        <InputBox
            type="text"
            placeholder="이름"
            value={username}
            onChange={onChangeName}
            required
        />
    </InputContainer>
    <InputContainer>
        <InputLabel>Email</InputLabel>
        <InputBox
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onChangeEmail}
            required
        />
    </InputContainer>
    <InputContainer>
        <InputLabel>Password</InputLabel>
        <InputBox
            type='password'
            placeholder="비밀번호"
            value={password1}
            onChange={onChangePwd1}
            minLength='8'
            pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
            required
        />
    </InputContainer>
    <InputContainer>
        <InputLabel>Password Confirm</InputLabel>
        <InputBox
            type='password'
            placeholder="비밀번호 확인"
            value={password2}
            onChange={onChangePwd2}
            minLength='8'
            pattern='^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$'
            required
        />
    </InputContainer>
    <div style={{display:'flex', justifyContent:'center'}}>
    <Btn_black type='submit' text={'Join'} style={{fontSize:'24px', width:'237px', height:'46px', marginTop:'52px', marginBottom:'228px'}}/>
    </div>
</form>
</div>
  )
};

export default Join;
