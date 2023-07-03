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
    const titles = ['가입 문의', '구독 문의', '로그인 문의', '회원가입 문의', '회원탈퇴 문의']
    const usernames = ['김철수', '홍길동', '김태희', '전정국', '이채현']
    const [title, setTitle] = useState(titles);
    const [username, setUsername] = useState(usernames);

    const [activeIndex, setActiveIndex] = useState(0);
    const handleItemClick = (index) => {
        setActiveIndex(index);
    };
    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/qna/")
    //         .then(response => {
    //             console.log(response.data);
    //         })
    // }, []);
    // console.log(title, username);

    return(
        <TableWrapper>
        <h1 style={{fontSize: "20px", fontWeight: "bold", color: "#3A3A3A", fontFamily: "Noto Serif KR"}}>문의 게시판</h1>
        <div class="table-content-table">
            <table class="w-100">
                <tr class="table-thead-tr">
                    <th>작성자</th>
                    <th>문의 제목</th> 
                    <th class="th-actions"></th>
                </tr>
                {title.map((title, idx) => (
                <TableRow setContent={props.setContent} setTitle={setTitle} setUsername={setUsername} authorName={username[idx]} titleName={title} idx={idx} />
                ))}
            </table>
        </div>
            <Link to="/createboard">
                <Btn_beige text="Create" style={{ marginTop: "20px", boxShadow: "none", width: "80px", height: "40px", fontSize: "15px" }} />
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
