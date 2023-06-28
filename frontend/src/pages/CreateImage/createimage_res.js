import styled from "styled-components";
import Nav_my from '../../components/nav_mypage.js';
import { ReactComponent as MemberImg } from '../svgs/member_info.svg';
import { Btn_black } from '../../components/button.js';
import './createimage.css'

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
function saveAsPdf() {
    const element = document.getElementById('after_img');
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
  
    html2canvas(element, { useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdfWidth * 0.6; // 이미지를 원하는 크기로 조정합니다.
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      pdf.addImage(imgData, 'PNG', (pdfWidth - imgWidth) / 2, (pdfHeight - imgHeight) / 2, imgWidth, imgHeight);
  
      pdf.save('ImageCreate.pdf');
    });
  }

export function CreateImageResult() {
    let before = (<Member />)
    let after = (<Member/>)
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
                    <div className="example" style={{marginTop:'100px'}}>
                        <div>
                            {before}
                            <Div>
                                <p>Before</p>
                            </Div>
                        </div>
                        <hr style={{height:'300px', width:'.1vw', borderWidth:'0', backgroundColor:'#3A3A3A'}}/>
                        <div>
                            <div id='after_img'>
                                {after}
                            </div>
                            <Div>
                                <p>After</p>
                            </Div>
                        </div>
                    </div>
                    <Div>
                        <Btn_black style={{width:'170px', height:'60px', fontSize:'20px'}} text={'Save'} onClick={saveAsPdf}/>
                    </Div>
                </div>
            </div>
        </div>
    );
}


export default CreateImageResult;
