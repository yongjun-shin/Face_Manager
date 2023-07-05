import React, { useState, useEffect } from 'react';
import "../components/boardview.css"
import { Btn_beige } from "../components/button.js";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import TableRow from './tablerow';
import axios from "axios";

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Noto Serif KR";
    margin-bottom: 160px;
`;

const BoardView = (props) => { 
    const fetchQnA = () => {
        axios.get(`http://127.0.0.1:8000/qna/`)
          .then(response => {
            setData(response.data);
          })
          .catch(function (error) {
            console.log("error!");
            console.log(error);
          });
      };
      
    useEffect(fetchQnA, []);

    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return(
        <TableWrapper>
        <h1 style={{fontSize: "20px", fontWeight: "bold", color: "#3A3A3A", fontFamily: "Noto Serif KR"}}>문의 게시판</h1>
        <div class="table-content-table">
            <table class="w-100">
                <tr class="table-thead-tr">
                    <th>작성 번호</th>
                    <th>작성자</th>
                    <th>문의 제목</th> 
                </tr>
                {data.map((data) => (
                <TableRow fetchQnA={fetchQnA} setId={props.setId} setTitle={props.setTitle} setUsername={props.setUsername}  setContent={props.setContent} authorName={data.user_name} titleName={data.title} id={data.id}/>
                ))}
            </table>
        </div>
            <Link to="/createboard">
                <Btn_beige text="Create" style={{ marginTop: "20px", boxShadow: "none", width: "80px", height: "40px", fontSize: "15px", marginBottom: "230px" }} />
            </Link>
        <div class="pagi-wrapper">
            <ul class="pagination">
                <li className={activeIndex === 0 ? "active" : ""}><a href="#" onClick={() => handleItemClick(0)}>Previous</a></li>
                <li className={activeIndex === 1 ? "active" : ""}><a href="#" onClick={() => handleItemClick(1)}>1</a></li>
                <li className={activeIndex === 2 ? "active" : ""}><a href="#" onClick={() => handleItemClick(2)}>2</a></li>
                <li className={activeIndex === 3 ? "active" : ""}><a href="#" onClick={() => handleItemClick(3)}>3</a></li>
                <li className={activeIndex === 4 ? "active" : ""}><a href="#" onClick={() => handleItemClick(4)}>4</a></li>
                <li className={activeIndex === 5 ? "active" : ""}><a href="#" onClick={() => handleItemClick(5)}>5</a></li>
                <li className={activeIndex === 6 ? "active" : ""}><a href="#" onClick={() => handleItemClick(6)}>Next</a></li>
            </ul>
        </div>
    </TableWrapper>
    );
};

export default BoardView;
