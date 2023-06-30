import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import Axios from 'axios';

const Nav = styled.nav`
  background-color: #E8E5DF;
  width: 100vw;
  height: 60px;
  text-align: center;
  color: #3A3A3A;
  font-family: 'PT Serif';
  font-style: normal;
  display: flex;
  justify-content: center;
`;
const Div_items = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
const CustomLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;
const CustomLink2 = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

let login = false;
export function setLoginStatus(status) {
    login = status;
}
export function getLoginStatus() {
    return login;
}

export function Navi() {
    const location = useLocation();
    return (
        <Nav>
            <Div_items>
                <CustomLink style={{ fontWeight:'bold', fontSize:'26px'}} to={'/'} >Face Manager .</CustomLink>
                <CustomLink style={{ fontSize:'18px', marginLeft:'184px'}} to={'/about'} isActive={location.pathname === "/about"}>About</CustomLink>
                <CustomLink style={{ fontSize:'18px', marginLeft:'90px'}} to={'/detect'} isActive={location.pathname === "/detect"}>Face Detect</CustomLink>
                <CustomLink style={{ fontSize:'18px', marginLeft:'92px'}} to={'/pricing'} isActive={location.pathname === "/pricing"}>Pricing</CustomLink>
                <CustomLink style={{ fontSize:'18px', marginLeft:'83px'}} to={'/qna'} isActive={location.pathname === "/qna"}>Q&A</CustomLink>
                <Nav_log></Nav_log>
            </Div_items>
        </Nav>
    );
}

function Nav_log() {
    const location = useLocation();

    const [auth, setAuth] = useState('')

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setAuth(true)
    }
  }, [])

  // fetch to axios 수정 
  const handleLogout = () => {
    let token = localStorage.getItem('token')

    Axios.post('http://localhost:8000/signup/auth/logout/', token)
    //Axios.post('http://localhost:8000/user/logout/', token)
      .then(res => {
        localStorage.clear()
        // 사용하려면 App.js에서 /로 라우팅해야 한다
        window.location.replace('/')
      });
  }
    let content = null;
    // let content2 = null;
    // content2?
    auth?
    content = (<div style={{ fontWeight:'bold', fontSize:'18px', marginLeft:'80px'}} >
    <CustomLink2 onClick={handleLogout} style={{ marginRight:'24px'}}>Logout</CustomLink2>
    <CustomLink2 to={'/member'}>MyPage</CustomLink2>
</div>)

    :
    content = (<div style={{ fontWeight:'bold', fontSize:'18px', marginLeft:'80px'}}>
    <CustomLink2 style={{ marginRight:'24px'}} to={'/login'}>Login</CustomLink2>
    <CustomLink2 to={'/join'}>Join</CustomLink2>
</div>)
    return (
        <>{content}</>
    );
}

export default Navi;
