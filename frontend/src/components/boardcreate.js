import React from "react";
import styled from "styled-components";
import { Btn_beige } from "../components/button.js";
import "../components/boardcreate.css";
import { Link } from 'react-router-dom';
import axios from "axios";

const CreateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Noto Serif KR;
    margin-bottom: 160px;
    margin-top: 61px;
`;
const TitleWrapper = styled.div`
    display: flex;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const ContentWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardCreate = (props) => {
    const handleCreate = () => {
        const username = document.querySelectorAll('.name-input')[0].value;
        const title = document.querySelectorAll('.name-input')[1].value;
        const content = document.querySelector('.content-input').value;

        const data = {
          user_id: localStorage.getItem('pk'),
          user_name: username,
          title: title,
          content: content,
        };
        
        console.log(data);
    
        axios.post("http://127.0.0.1:8000/qna/", data).then((response) => {
            console.log(response.data);
            props.setId(response.data.id);
            props.setTitle(response.data.title);
            props.setUsername(response.data.username);
            props.setContent(response.data.content);
        });
    };
      
    return (
        <CreateWrapper>
            <h1 style={{fontSize: "20px", fontWeight: "bold", color: "#3A3A3A"}}>문의글 작성하기</h1>
            <TitleWrapper>
                <InputWrapper>
                    <h1 style={{fontSize: "15px", color: "#3A3A3A", marginRight: "15px"}}>작성자명</h1>
                    <input class="name-input" type="text" placeholder="작성자명을 입력하세요"></input>
                </InputWrapper>
                <InputWrapper>
                    <h1 style={{fontSize: "15px", color: "#3A3A3A", marginRight: "15px"}}>제목</h1>
                    <input class="name-input" type="text" placeholder="제목을 입력하세요"></input>
                </InputWrapper>
            </TitleWrapper>
            <ContentWrapper>
                <textarea class="content-input" type="text" placeholder="문의 내용을 입력하세요. 문의 답변은 이메일로 전송됩니다."></textarea>
                <Link to="/qna">
                    <Btn_beige text="Create" style={{ boxShadow: "none", width: "80px", height: "40px", fontSize: "15px" }} 
                    onClick={()=>{handleCreate()}}/>
                </Link>
            </ContentWrapper>
        </CreateWrapper>
    );
  };
  
  export default BoardCreate;