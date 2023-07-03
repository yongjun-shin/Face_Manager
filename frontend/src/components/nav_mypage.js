import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
    background-color: #E8E5DF;
    font-family: 'Noto Serif KR';
    width: 200px;
    height: 274px;
    color: #3A3A3A;
    margin-top: 80px;

`;
const CustomLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    margin-left: 17px;
`;

export function Nav_my() {
    const location = useLocation();

    return (
        <div >
            <div style={{width:'244px'}}>
                <Nav>
                    <a style={{fontWeight: 500, fontSize:'25px', marginLeft:'17px'}}>My Page</a>
                    <hr style={{border:'1px solid #61594B'}}/>
                    <CustomLink style={{fontSize:'15px'}} to={'/member'} isActive={location.pathname === "/member"}>회원정보</CustomLink>
                    <hr />
                    <CustomLink style={{fontSize:'15px'}} to={'/createimage'} isActive={location.pathname === "/createimage" || location.pathname === "/createimage_res"}>AI 이미지 생성</CustomLink>
                    <hr />
                    <CustomLink style={{fontSize:'15px'}} to={'/history'} isActive={location.pathname === "/history"}>히스토리</CustomLink>
                    <hr />
                </Nav>
            </div>
        </div>
    );
}

export default Nav_my;