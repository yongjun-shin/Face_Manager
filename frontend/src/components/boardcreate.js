import React from "react";
import styled from "styled-components";
import { Btn_beige } from "../components/button.js";
import "../components/boardcreate.css";
import { Link } from 'react-router-dom';

import Axios from 'axios';

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

const BoardCreate = ({}) => {

    const uploadQna = async (e) => {
        var username_val = document.getElementById("username").value;
        var title_val = document.getElementById("title").value;
        var content_val = document.getElementById("content").value;
        var user_id_val = localStorage.getItem('pk');

        console.log(username_val, title_val, content_val, user_id_val)
        
        Axios.post("http://127.0.0.1:8000/qna/", {
            user_name : username_val,
            title : title_val,
            content : content_val,
            user_id : user_id_val
        })
        .then(function (response) {
            window.location.replace('/qna')
        })
        .catch(function (error) {
            console.log("error!");
            console.log(error);
        });
    }

    return (
        <CreateWrapper>
            <h1 style={{fontSize: "20px", fontWeight: "bold", color: "#3A3A3A"}}>문의글 작성하기</h1>
            <TitleWrapper>
                <InputWrapper>
                    <h1 style={{fontSize: "15px", color: "#3A3A3A", marginRight: "15px"}}>작성자명</h1>
                    <input id="username" class="name-input" type="text" placeholder="작성자명을 입력하세요"></input>
                </InputWrapper>
                <InputWrapper>
                    <h1 style={{fontSize: "15px", color: "#3A3A3A", marginRight: "15px"}}>제목</h1>
                    <input id="title" class="name-input" type="text" placeholder="제목을 입력하세요"></input>
                </InputWrapper>
            </TitleWrapper>
            <ContentWrapper>
                <textarea id="content" class="content-input" type="text" placeholder="내용을 입력하세요"></textarea>
                <Link>
                    <Btn_beige onClick={uploadQna} text="Create" style={{ boxShadow: "none", width: "80px", height: "40px", fontSize: "15px" }} />
                </Link>
            </ContentWrapper>
        </CreateWrapper>
    );
  };
  
  export default BoardCreate;