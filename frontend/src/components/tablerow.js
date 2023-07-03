import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Btn_beige } from "../components/button.js";
import axios from "axios";

const TableDataWrapper = styled.tr`
    background: #FFF; 
    border: 1px solid #FFF;
    color: #3A3A3A;
`;

const TableFirstData = styled.td`
    border-radius: 5px 0 0 5px;
    padding: 10px;
    width: 130px;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 143px;
    margin-right: 10px;
    border-radius: 0 5px 5px 0;
    text-align: end;
    padding: 10px;
`;
const titles = [ '구독 문의', '로그인 문의', '회원가입 문의', '회원탈퇴 문의']
const usernames = [ '홍길동', '김태희', '전정국', '이채현'] 

const TableRow = ({ authorName, titleName, setTitle, setUsername, setContent, idx }) => {
    // const handleDelete = () => {
    //     axios.delete(`http://127.0.0.1:8000/qna/`, data)
    //       .then(response => {
    //         props.setTitle(data.title)
    //         props.setUsername(data.username)
    //       })
    //     setTitle(titles)
    //     setUsername(usernames)
    //   };

    return (
        <TableDataWrapper>
            <TableFirstData>{authorName}</TableFirstData>
            <TableFirstData>{titleName}</TableFirstData>
            <td>
            <BtnWrapper>
            <Link to="/editboard">
            <Btn_beige onClick={() => {
                // axios.get(`http://127.0.0.1:8000/qna?idx=${idx}`)
                // .then((res) => {
                //     setTitle(res.data['title'])
                //     setUsername(res.data['username'])
                //     setContent(res.data['content'])
                // })
            }} text="Edit" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
            </Link>
            <Btn_beige text="Delete" onClick={handleDelete} style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
            </BtnWrapper>
            </td>
        </TableDataWrapper>
    );
  };
  
  export default TableRow;