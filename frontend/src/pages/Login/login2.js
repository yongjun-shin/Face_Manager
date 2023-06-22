import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input } from 'antd';
import styled from 'styled-components';

const LoginDiv = styled.div`
position: relative;
left: 40%;
  padding: 3rem;
    form {
    width: 320px;
    display: inline-block;
    label {
      margin-bottom: 1rem;
    }
    input {
      margin-bottom: 1.5rem;
      &[type=submit] {
        background: black;
        color: white;
        margin-top: 1rem;
      }
    }
  }
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
            console.log(1)
            localStorage.clear()
            localStorage.setItem('token', res.data['access'])
            // 사용하려면 App.js에서 /로 라우팅해야 한다
            window.location.replace('/')
          } else {
            console.log(2)
            setEmail('')
            setPassword('')
            localStorage.clear()
            setErrors(true)
          }
        })
        .catch(err => {
          //console.clear()
          alert('catch error!!')
          console.log(err)
          setEmail('')
          setPassword('')
        })
    }
  
    return (
      <LoginDiv>
        <h1>로그인</h1>
        <br />
        {errors === true && <h2>Cannot log in with provided credentials</h2>}
          <form onSubmit={onSubmit}>
            <label>이메일 주소:</label>
            <Input
              type='email'
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />
            <label>비밀번호:</label>
            <Input
              type='password'
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
            <Input type='submit' size="large" value='로그인' />
          </form>
      </LoginDiv>
    )
};


export default Login;
