import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
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
    padding-left: 1px;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 0 5px 5px 0;
    text-align: end;
    padding: 10px;
`;

const TableRow = ({ fetchQnA, setId, authorName, titleName, setTitle, setUsername, setContent, id }) => {
    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/qna/${id}/`)
          .then(response => {
            setTitle(titleName);
            setUsername(authorName);
            fetchQnA();
          })
        // setTitle(titleName)
        // setUsername(authorName)

        .catch(error => {
            console.log("error!");
            console.log(error);
          });
      };
      const navi = useNavigate();

    return (
        <TableDataWrapper>
            <TableFirstData>no.{id}</TableFirstData>
            <TableFirstData>{authorName}</TableFirstData>
            <TableFirstData>{titleName}</TableFirstData>
            <td>
            <BtnWrapper>
        
            <Btn_beige onClick={() => {
                axios.get(`http://127.0.0.1:8000/qna/${id}/`)
                .then((res) => {
                    console.log(id);
                    console.log("tablerow page res.data",res.data);
                    const post = res.data;
                    setId(post.id);
                    console.log(post.id);
                    setTitle(post.title);
                    console.log(post.title);
                    setUsername(post.user_name);
                    console.log(post.user_name);
                    setContent(post.content);
                    console.log(post.content);
                    navi('/editboard')
                    
                })
            }} text="View" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
     
            <Btn_beige text="Delete" onClick={handleDelete} style={{marginLeft: "10px", boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
            </BtnWrapper>
            </td>
        </TableDataWrapper>
    );
  };
  
  export default TableRow;