import React, { useState } from 'react';
import styled from "styled-components";

const Black = styled.button`
    width: 237px;
    height: 46px;
    background: #000000;
    border-radius: 10px;
    font-family: 'PT Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #FFFFFF;
    cursor: pointer;
    margin-bottom : 228px;
    margin-top : 52px;

    &:active {
        background: #333333;
    }
`;

export function BtnBlack({text, onClick}) {
    return (
        <Black onClick={onClick}>{text}</Black>
    );
}

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

    const handleJoin = () => {
        // 가입 로직 (백엔드 통합 필요)
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Title>로그인</Title>
            <InputContainer>
                <InputLabel>email</InputLabel>
                <InputBox
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <InputLabel>pw</InputLabel>
                <InputBox
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputContainer>
            <BtnBlack
                onClick={handleJoin}
                text="Login"
            />
        </div>
    );
};

export default MemberRegistration;

