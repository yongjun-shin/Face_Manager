import styled from "styled-components";
import Nav_my from '../../components/nav_mypage.js';
import { useNavigate } from "react-router-dom";
import { ReactComponent as MemberImg } from '../svgs/member_info.svg';
import { Btn_beige } from "../../components/button.js";
import './createimage.css'

const P = styled.p`
    font-size: 26px;
`;
const Member = styled(MemberImg)`
    width:230px;
    height:230px;
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
`;

export function CreateImage() {
    let name = localStorage.getItem('username');
    if (name === null){
        name = '홍길동';
    }
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const handleBtnClick = () => {
        scrollToTop();
        navigate('/createimage_res');
      };
    return (
        <div class='create'>
            <div class='create_con'>
                <Nav_my/>
                <div className="in">
                    <Div>
                        <P>추천 받은 화장법을 반영한 AI 이미지를 생성합니다.</P>
                    </Div>
                    <Div>
                        <p style={{fontFamily:'PT Serif', fontWeight:'bold', fontSize:'53px', color:''}}>Make Image with AI</p>
                    </Div>
                    <div className="title">
                        <p>Example</p>
                    </div>
                    <div className="example">
                        <div>
                            <Member />
                            <Div>
                                <p>Before</p>
                            </Div>
                        </div>
                        <hr style={{height:'300px', width:'.1vw', borderWidth:'0', backgroundColor:'#3A3A3A'}}/>
                        <div>
                            <Member />
                            <Div>
                                <p>After</p>
                            </Div>
                        </div>
                    </div>
                    <Div style={{marginBottom: '30px', color: 'rgba(95, 90, 81, 0.80)'}}>
                        <P><span style={{color:'black'}}>{name}</span>님의 얼굴에 화장법을 적용해보세요</P>
                    </Div>
                    <Div>
                        <Btn_beige style={{width:'210px', height:'83px', fontSize:'20px'}} text={'AI 이미지\n생성하기'} onClick={handleBtnClick}/>
                    </Div>
                </div>
            </div>
        </div>
    );
}


export default CreateImage;
