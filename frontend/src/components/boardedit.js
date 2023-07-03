import React, { useState, useEffect } from "react";
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

const BoardEdit = (props) => {
    const [username, setUserName] = useState('');
    const [title, setTitle] = useState('');

    const handleEdit = () => {
        const updatedData = {
          username: document.querySelector('.name-input').value,
          title: document.querySelectorAll('.name-input')[1].value,
          content: document.querySelector('.content-input').value,
        };

        // axios.put("http://127.0.0.1:8000/qna/", updatedData)
        //   .then(response => {
        //     console.log(response.data);
        //     setTitle(updatedData.title);
        //     setUserName(updatedData.username);
        //     props.setContent(updatedData.content);
        //   })
        };

    return (
        <CreateWrapper>
            <h1 style={{fontSize: "20px", fontWeight: "bold", color: "#3A3A3A"}}>문의글 수정하기</h1>
            <TitleWrapper>
                <InputWrapper>
                    <h1 style={{fontSize: "15px", color: "#3A3A3A", marginRight: "15px"}}>작성자명</h1>
                    <input value={username}  class="name-input" type="text" placeholder="작성자명을 입력하세요"></input>
                </InputWrapper>
                <InputWrapper>
                    <h1 style={{fontSize: "15px", color: "#3A3A3A", marginRight: "15px"}}>제목</h1>
                    <input value={title}  class="name-input" type="text" placeholder="제목을 입력하세요"></input>
                </InputWrapper>
            </TitleWrapper>
            <ContentWrapper>
                <textarea value={props.content}  class="content-input" type="text" placeholder="문의 내용을 입력하세요. 문의 답변은 이메일로 전송됩니다."></textarea>
                <Link to="/qna">
                    <Btn_beige onClick={handleEdit} text="Edit" style={{ boxShadow: "none", width: "80px", height: "40px", fontSize: "15px" }} />
                </Link>
            </ContentWrapper>
        </CreateWrapper>
    );
  };
  
  export default BoardEdit;