import React, { useState, useEffect } from 'react';
import "../components/boardview.css"
import { Btn_beige } from "../components/button.js";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import TableRow from './tablerow';

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Noto Serif KR";
    margin-bottom: 160px;
`;

const BoardView = () => {
    const [tableData, setTableData] = useState([]);
    
    const [activeIndex, setActiveIndex] = useState(0);
    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    // useEffect(() => {
    //     // 서버로부터 데이터 가져오기
    //     axios.get("localhost:8000/qna/")
    //         .then(response => {
    //             // 응답 처리
    //             console.log(response.data);
    //             setTableData(response.data);
    //         })
    // }, []);

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
                <TableRow authorName="강동원" titleName="회원가입 문의"/>
                <TableRow authorName="김태희" titleName="회원가입 문의"/>
                <TableRow authorName="홍길동" titleName="회원가입 문의"/>
                <TableRow authorName="전정국" titleName="회원가입 문의"/>
                <TableRow authorName="김석진" titleName="회원가입 문의"/>
                {/* {tableData.map((data) => (
                <TableRow authorName={data.username} titleName={data.title} />
                ))};  */}
            </table>
        </div>
        <div className='input-wrapper'> 
            <input class="input-elevated" type="text" placeholder="Search"></input>
            <Link to="/createboard">
                <Btn_beige text="Create" style={{ boxShadow: "none", width: "80px", height: "40px", fontSize: "15px" }} />
            </Link>
        </div>
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
