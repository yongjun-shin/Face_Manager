import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ReactComponent as Foot1 } from "./svgs/foot1.svg";
import { ReactComponent as Foot2 } from "./svgs/foot2.svg";

const Foot = styled.footer`
    width: 940px;
    height: 408px;
    background-color: #E8E5DF;
    color: #3A3A3A;
    font-family: 'PT Serif';
    font-style: normal;

`;
const About = styled.div`
    width: 940px;
    height: 81px;
`;
const Connect = styled.div`
    margin-top: 49px;
    
`;
const Navigations = styled.nav`
    margin-top: 49px;
    width: 639px;
`;
const CustomLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

export function Footer(){
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    return (
        <div style={{display:'flex', justifyContent:'center', marginBottom: '34px'}}>
            <Foot>
                <About>
                    <a style={{fontWeight:700, fontSize:'22px'}}>About</a>
                    <br/>
                    <a style={{fontFamily:'Noto Serif KR', fontWeight:600, fontSize:'15px', textAlign:'justify'}}>얼굴 인식 AI를 활용해 사용자의 얼굴의 특징을 파악하고 그에 맞는 화장법과 화장품을 제안합니다. 제안 받은 화장법은 연출하고 싶은 분위기, 무드에 따라 사용자의 얼굴에 입혀볼 수 있습니다. 부가적 요소로 파악한 얼굴 특징을 기반해 관상을 제공합니다. </a>
                </About>
                <Connect>
                    <a style={{fontWeight:700, fontSize:'22px'}}>Connect with us</a>
                    <br/>
                    <div style={{marginTop:'8px'}}>
                        <Foot1/>
                        <Foot2 style={{marginLeft:'18.46px'}}/>
                    </div>
                </Connect>
                <Navigations>
                    <a style={{fontWeight:700, fontSize:'22px'}}>Navigations</a>
                    <br/>
                    <div style={{display:'flex', justifyContent:'space-between', fontSize:'15px', fontWeight:600, fontFamily:'Noto Serif KR'}}>
                        <CustomLink to={'/'} onClick={scrollToTop}>Face Manager .</CustomLink>
                        <CustomLink to={'/detect'} onClick={scrollToTop}>Face Detect</CustomLink>
                        <CustomLink to={'/pricing'} onClick={scrollToTop}>Pricing</CustomLink>
                        <CustomLink to={'/qna'} onClick={scrollToTop}>Q & A</CustomLink>
                    </div>
                </Navigations>
                <hr style={{marginTop:'33.73px', border:'1px solid #3A3A3A'}} />
                <div style={{marginTop:'34px', display:'flex', justifyContent:'center'}}>
                    <a style={{fontSize:'15px', fontWeight:700}}>Copyright. KT Aivle School Team 07. All right reserved</a>
                </div>
            </Foot>
        </div>
    );
}

export default Footer;