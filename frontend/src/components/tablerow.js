import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Btn_beige } from "../components/button.js";

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

const TableRow = ({ authorName, titleName }) => {
    return (
        <TableDataWrapper>
            <TableFirstData>{authorName}</TableFirstData>
            <TableFirstData>{titleName}</TableFirstData>
            <td>
            <BtnWrapper>
            <Link to="/editboard">
            <Btn_beige text="Edit" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
            </Link>
            <Btn_beige text="Delete" style={{boxShadow: "none", width:"60px", height:"30px", fontSize: "12px"}} />
            </BtnWrapper>
            </td>
        </TableDataWrapper>
    );
  };
  
  export default TableRow;