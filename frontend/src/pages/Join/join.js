import React, { useState } from 'react';
import styled from "styled-components";
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

const MemberRegistration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const btn_click = (event) => {
        event.preventDefault();
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Title>회원 가입</Title>
            <InputContainer>
                <InputLabel>Email</InputLabel>
                <InputBox
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <InputLabel>Password</InputLabel>
                <InputBox
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <InputLabel>Name</InputLabel>
                <InputBox
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </InputContainer>
            <Btn_black onClick={btn_click} text={'Join'} style={{fontSize:'24px', width:'237px', height:'46px', marginTop:'52px', marginBottom:'228px'}}/>
        </div>
    );
};

export default MemberRegistration;