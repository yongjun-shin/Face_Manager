import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #E8E5DF;
  width: 100vw;
  height: 60px;
  text-align: center;
  color: #3A3A3A;
  font-family: 'PT Serif';
  font-style: normal;
  display: flex;
  justify-content: center;
`;
const Div_items = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
const CustomLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;
const CustomLink2 = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

export function Navi() {
    const location = useLocation();

    return (
        <Nav>
            <Div_items>
                <CustomLink style={{ fontWeight:'bold', fontSize:'26px'}} to={'/'} >Face Manager .</CustomLink>
                <CustomLink style={{ fontSize:'18px', marginLeft:'184px'}} to={'/detect'} isActive={location.pathname === "/detect"}>Face Detect</CustomLink>
                <CustomLink style={{ fontSize:'18px', marginLeft:'92px'}} to={'/pricing'} isActive={location.pathname === "/pricing"}>Pricing</CustomLink>
                <CustomLink style={{ fontSize:'18px', marginLeft:'83px'}} to={'/qna'} isActive={location.pathname === "/qna"}>Q&A</CustomLink>
                <Nav_log></Nav_log>
            </Div_items>
        </Nav>
    );
}

let login = false;
function Nav_log() {
    let content = null;
    if(login === false){
        content = (<div style={{ fontWeight:'bold', fontSize:'18px', marginLeft:'80px'}}>
            <CustomLink2 style={{ marginRight:'24px'}} to={'/login'}>Login</CustomLink2>
            <CustomLink2 to={'/join'}>Join</CustomLink2>
        </div>)
    }
    else if(login === true){
        content = (<div style={{ fontWeight:'bold', fontSize:'18px', marginLeft:'80px'}}>
            <CustomLink2 style={{ marginRight:'24px'}}>Logout</CustomLink2>
            <CustomLink2 to={'/mypage'}>MyPage</CustomLink2>
        </div>)
    }
    return (
        <>{content}</>
    );
}

export default Navi;
