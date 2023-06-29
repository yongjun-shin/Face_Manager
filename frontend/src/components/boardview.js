import React, { useState } from 'react';
import "../components/boardview.css"
import { Btn_beige } from "../components/button.js";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Noto Serif KR";
    margin-bottom: 160px;
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 143px;
    margin-right: 10px;
`;

const BoardView = () => {
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
                    <th>작성자</th>
                    <th>문의 제목</th> 
                    <th class="th-actions"></th>
                </tr>
                    
                <tr class="table-tbody-tr">
                    <td>강동원</td>
                    <td>가격 정책 문의</td>
                    <td>
                    <BtnWrapper>
                    <Link to="/editboard">
                    <Btn_beige text="Edit" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </Link>
                    <Btn_beige text="Delete" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </BtnWrapper>
                    </td>
                </tr>
                    
                <tr class="table-tbody-tr">
                    <td>김태희</td>
                    <td>얼굴인식 문의</td>
                    <td>
                    <BtnWrapper>
                    <Link to="/editboard">
                    <Btn_beige text="Edit" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </Link>
                    <Btn_beige text="Delete" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </BtnWrapper>
                    </td>
                </tr>

                <tr class="table-tbody-tr">
                    <td>홍길동</td>
                    <td>로그인 문의</td>
                    <td>
                    <BtnWrapper>
                    <Link to="/editboard">
                    <Btn_beige text="Edit" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </Link>
                    <Btn_beige text="Delete" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </BtnWrapper>
                    </td>
                </tr>

                <tr class="table-tbody-tr">
                    <td>전정국</td>
                    <td>회원탈퇴 문의</td>
                    <td>
                    <BtnWrapper>
                    <Link to="/editboard">
                    <Btn_beige text="Edit" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </Link>
                    <Btn_beige text="Delete" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </BtnWrapper>
                    </td>
                </tr>

                <tr class="table-tbody-tr">
                    <td>김석진</td>
                    <td>회원탈퇴 문의</td>
                    <td>
                    <BtnWrapper>
                    <Link to="/editboard">
                    <Btn_beige text="Edit" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </Link>
                    <Btn_beige text="Delete" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
                    </BtnWrapper>
                    </td>
                </tr>
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
