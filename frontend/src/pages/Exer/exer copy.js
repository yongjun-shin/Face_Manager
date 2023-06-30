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

export function Exer() {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    var getTitle = document.getElementById("name").value;
    var getContent = document.getElementById("age").value;
    console.log(1)
    
    const data = {
      'name': getTitle,
      'age': getContent,
    };
    const config = {"Content-Type": 'application/json'};

    console.log(data)
    
    Axios.post("http://127.0.0.1:8000/api/exer"
      ,data, config)

      .then(function (response) {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
        alert('error!!')
      })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
      <InputContainer>
        <fieldset style = {{width:"150"}}>
          <legend>개인 정보 입력</legend>
          이름 : <input type = "text" name = "name" id="name" /><br></br>
          나이 : <input type = "text" name = "age" id = "age" /><br></br>
        </fieldset>
        <input type = "submit" value = "submit"/>
    </InputContainer>
      </form>
    </div>
  )
};



function RestAPI() {
  const [text, setText] = useState([]);

  return (
    <>
      <h1>REST API 연습</h1>
      <div className="btn-primary">
        <button
          onClick={() => {
            var getTitle = document.getElementById("name").value;
            var getContent = document.getElementById("age").value;
            Axios
              .post("http://127.0.0.1:8000/api/review/", {
                title: getTitle,
                content: getContent,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          POST-review
        </button>
        <button
          onClick={() => {
            var getTitle = document.getElementById("name").value;
            var getContent = document.getElementById("age").value;
            Axios
              .post("http://127.0.0.1:8000/api/exer/", {
                name: getTitle,
                age: getContent,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          POST-exer
        </button>
        <br></br>
          이름 : <input type = "text" name = "name" id="name" /><br></br>
          나이 : <input type = "text" name = "age" id = "age" /><br></br>
        </div>
      
    </>
  );
}

export default RestAPI;